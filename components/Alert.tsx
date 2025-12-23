'use client'

import * as React from 'react'

interface AlertProps {
  title?: string
  variant?: 'info' | 'success' | 'warning' | 'error'
  children: React.ReactNode
}

export default function Alert({
  title,
  variant = 'info',
  children
}: AlertProps) {
  const variantClass = {
    info: 'srcl-alert-info',
    success: 'srcl-alert-success',
    warning: 'srcl-alert-warning',
    error: 'srcl-alert-error',
  }[variant]

  return (
    <div className={`srcl-alert ${variantClass}`}>
      {title && <div className="srcl-alert-title">{title}</div>}
      <div>{children}</div>
    </div>
  )
}
