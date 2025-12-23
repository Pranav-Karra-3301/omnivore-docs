interface DividerProps {
  type?: 'single' | 'double' | 'gradient'
}

export default function Divider({ type = 'single' }: DividerProps) {
  if (type === 'gradient') {
    return <div className="srcl-divider srcl-divider-gradient" />
  }

  if (type === 'double') {
    return <div className="srcl-divider srcl-divider-double" />
  }

  return <div className="srcl-divider" />
}
