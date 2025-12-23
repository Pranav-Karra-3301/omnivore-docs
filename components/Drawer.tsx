'use client'

import * as React from 'react'

interface DrawerProps {
  children: React.ReactNode
  defaultExpanded?: boolean
}

export default function Drawer({ children, defaultExpanded = true }: DrawerProps) {
  const [isExpanded, setIsExpanded] = React.useState(defaultExpanded)

  return (
    <div className="srcl-drawer">
      {isExpanded && (
        <div className="srcl-drawer-side">
          {children}
        </div>
      )}
      <div className="srcl-drawer-toggle">
        <button
          className="srcl-drawer-action"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          {isExpanded ? '\u2B60' : '\u2B62'}
        </button>
      </div>
    </div>
  )
}
