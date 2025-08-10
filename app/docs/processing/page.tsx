export default function ProcessingPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Data Processing</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">High-level overview of parsing, enrichment, and classification stages.</p>

      <h2>Pipeline</h2>
      <ul>
        <li>HTML parsing and text cleaning</li>
        <li>Metadata extraction</li>
        <li>Entity recognition and relations (beta)</li>
      </ul>
    </div>
  )
}
