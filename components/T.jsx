'use client'
import { useLanguage } from '@/lib/LanguageContext'
import { translations } from '@/lib/translations'
import { useRef, useState } from 'react'
import { createPortal } from 'react-dom'

// fallback: plain string to render when the key isn't in translations
export default function T({ k, vars, fallback }) {
  const { mode } = useLanguage()
  const entry = translations[k]

  if (!entry) {
    if (fallback !== undefined) return <>{fallback}</>
    return <span className="bg-red-100 text-red-600 text-xs px-1 rounded">[{k}]</span>
  }

  let text = entry[mode] ?? entry.original
  if (vars) {
    Object.entries(vars).forEach(([key, val]) => {
      text = text.replace(`{${key}}`, String(val))
    })
  }

  const isHighlighted = mode === 'proofread' && entry.proofread !== entry.ai

  if (isHighlighted) {
    return <ProofreadHighlight text={text} note={entry.note} />
  }

  return <>{text}</>
}

function ProofreadHighlight({ text, note }) {
  const spanRef = useRef(null)
  const [tooltipStyle, setTooltipStyle] = useState(null)

  const showTooltip = () => {
    if (!note || !spanRef.current) return
    const rect = spanRef.current.getBoundingClientRect()
    setTooltipStyle({
      left: rect.left,
      top: rect.top - 10,
    })
  }

  return (
    <>
      <span
        ref={spanRef}
        className="border-b-2 border-yellow-400 cursor-help"
        onMouseEnter={showTooltip}
        onMouseLeave={() => setTooltipStyle(null)}
      >
        {text}
      </span>

      {tooltipStyle && createPortal(
        <span
          className="fixed z-[9999] bg-slate-800 text-white text-xs rounded-lg px-3 py-2 shadow-xl whitespace-nowrap pointer-events-none leading-relaxed"
          style={{ left: tooltipStyle.left, top: tooltipStyle.top, transform: 'translateY(-100%)' }}
        >
          ✏️ {note}
          <span className="absolute top-full left-4 border-4 border-transparent border-t-slate-800" />
        </span>,
        document.body
      )}
    </>
  )
}
