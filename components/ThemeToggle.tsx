'use client'

import * as React from 'react'

export default function ThemeToggle() {
  const [isLight, setIsLight] = React.useState(false)

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem('theme')
      const shouldBeLight = stored === 'light'
      setIsLight(shouldBeLight)
      document.documentElement.classList.toggle('light', shouldBeLight)
    } catch {
      // ignore
    }
  }, [])

  const toggleTheme = () => {
    const newValue = !isLight
    setIsLight(newValue)
    document.documentElement.classList.toggle('light', newValue)
    try {
      localStorage.setItem('theme', newValue ? 'light' : 'dark')
    } catch {
      // ignore
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="srcl-nav-link"
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {isLight ? 'DARK' : 'LIGHT'}
    </button>
  )
}
