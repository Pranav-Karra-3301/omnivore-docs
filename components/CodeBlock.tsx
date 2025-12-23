'use client'

import * as React from 'react'

// Left pad function matching SRCL's Utilities.leftPad
function leftPad(input: string, length: number): string {
  const zerosNeeded = length - input.length
  if (zerosNeeded <= 0) {
    return input
  }
  return '0'.repeat(zerosNeeded) + input
}

interface CodeBlockProps {
  children: string
  language?: string
}

export default function CodeBlock({ children, language }: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false)
  const lines = String(children).split('\n')

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // ignore
    }
  }

  return (
    <pre className="srcl-code-block">
      <div className="srcl-code-header">
        <span className="srcl-code-header-label">{language ? language.toUpperCase() : 'CODE'}</span>
        <div className="srcl-code-actions">
          <button className="srcl-copy-button" onClick={handleCopy} aria-label="Copy code">
            {copied ? 'COPIED' : 'COPY'}
          </button>
        </div>
      </div>
      <div className="srcl-code-content">
        {lines.map((line, index) => (
          <div key={index} className="srcl-code-line">
            <span className="srcl-code-number">{leftPad(String(index + 1), 3)}</span>
            <span className="srcl-code-text">{line}</span>
          </div>
        ))}
      </div>
    </pre>
  )
}
