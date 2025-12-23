'use client'

import * as React from 'react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = React.useState(false)

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem('theme')
      const shouldBeDark = stored === 'dark'
      setIsDark(shouldBeDark)
      document.documentElement.classList.toggle('dark', shouldBeDark)
    } catch {
      // ignore
    }
  }, [])

  const toggleTheme = () => {
    const newValue = !isDark
    setIsDark(newValue)
    document.documentElement.classList.toggle('dark', newValue)
    try {
      localStorage.setItem('theme', newValue ? 'dark' : 'light')
    } catch {
      // ignore
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="srcl-button-secondary"
      style={{ padding: '4px 12px', fontSize: '11px' }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? '[ LIGHT ]' : '[ DARK ]'}
    </button>
  )
}
