'use client'

import * as React from 'react'

interface CodeBlockProps {
  children: string
  language?: string
  showLineNumbers?: boolean
}

function leftPad(str: string, length: number): string {
  return str.padStart(length, ' ')
}

export default function CodeBlock({
  children,
  language = 'text',
  showLineNumbers = true
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false)
  const lines = String(children).split('\n')

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="srcl-code-block">
      <div className="srcl-code-header">
        <span>{language.toUpperCase()}</span>
        <button
          onClick={handleCopy}
          className="srcl-copy-button"
          aria-label="Copy code"
        >
          {copied ? 'COPIED!' : 'COPY'}
        </button>
      </div>
      <div className="srcl-code-content">
        {lines.map((line, index) => (
          <div key={index} className="srcl-code-line">
            {showLineNumbers && (
              <span className="srcl-code-number">
                {leftPad(String(index + 1), 3)}
              </span>
            )}
            <span className="srcl-code-text">{line}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
