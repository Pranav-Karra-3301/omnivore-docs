'use client'

import * as React from 'react'

interface CardProps {
  title?: string
  children: React.ReactNode
  className?: string
}

export default function Card({ title, children, className = '' }: CardProps) {
  return (
    <article className={`srcl-card ${className}`}>
      {title && (
        <header className="srcl-card-header">
          <span className="srcl-card-title">{title}</span>
        </header>
      )}
      <section className="srcl-card-content">
        {children}
      </section>
    </article>
  )
}
