'use client'
import { useLanguage } from '@/lib/LanguageContext'
import { translations } from '@/lib/translations'
import { useState } from 'react'

/**
 * Translation component.
 * - k: translation key
 * - vars: optional { key: value } for placeholder substitution e.g. {count}
 *
 * In Proofread mode, highlights text that differs from the AI translation
 * and shows a tooltip with the proofreader's note on hover.
 */
export default function T({ k, vars }) {
  const { mode } = useLanguage()
  const entry = translations[k]

  if (!entry) {
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
  const [open, setOpen] = useState(false)

  return (
    <span className="relative inline">
      <span
        className="border-b-2 border-yellow-400 cursor-help"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {text}
      </span>
      {open && note && (
        <span className="absolute bottom-full left-0 mb-2 z-[9999] bg-slate-800 text-white text-xs rounded-lg px-3 py-2 shadow-xl whitespace-nowrap pointer-events-none leading-relaxed">
          ✏️ {note}
          <span className="absolute top-full left-4 border-4 border-transparent border-t-slate-800" />
        </span>
      )}
    </span>
  )
}
