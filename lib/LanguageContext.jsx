'use client'
import { createContext, useContext, useState } from 'react'
import { translations } from './translations'

const LanguageContext = createContext({ mode: 'original', setMode: () => {} })

export const correctionCount = Object.values(translations).filter(
  e => e.ai && e.proofread && e.proofread !== e.ai
).length

export function LanguageProvider({ children }) {
  const [mode, setMode] = useState('original')
  return (
    <LanguageContext.Provider value={{ mode, setMode }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}

// For string contexts (placeholder, aria-label, etc.)
// t('key') → translated string; t('key', fallback) → fallback if key not found
export function useT() {
  const { mode } = useLanguage()
  return (key, fallback) => {
    const entry = translations[key]
    if (!entry) return fallback !== undefined ? fallback : `[${key}]`
    return entry[mode] ?? entry.original
  }
}
