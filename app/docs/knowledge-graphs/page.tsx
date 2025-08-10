export default function KnowledgeGraphsPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Knowledge Graphs</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Turn crawled data into an entity-relationship graph for deeper insights.</p>

      <h2>Concepts</h2>
      <ul>
        <li>Entities (nodes) and Relationships (edges)</li>
        <li>Extraction via parsing rules</li>
        <li>Export to a graph DB or file</li>
      </ul>
    </div>
  )
}
