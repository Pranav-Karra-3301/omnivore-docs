'use client'

import React, { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export default function CopyPageButton() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      // Get all text content from the main element
      const mainElement = document.querySelector('main')
      if (!mainElement) return

      // Extract text content, removing extra whitespace
      const textContent = mainElement.innerText
        .replace(/\n{3,}/g, '\n\n') // Replace multiple newlines with double newlines
        .trim()

      await navigator.clipboard.writeText(textContent)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy page content', error)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      aria-label="Copy page content"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" />
          <span>Copy Page</span>
        </>
      )}
    </button>
  )
}