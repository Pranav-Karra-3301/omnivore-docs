interface SectionHeaderProps {
  children: string
}

export default function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <div className="srcl-section-header">
      <span>{children}</span>
    </div>
  )
}
