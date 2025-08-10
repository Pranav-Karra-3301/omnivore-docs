import { Network, Database, GitBranch, Cpu, Search, BarChart, Layers, Link2 } from 'lucide-react'
import CodeBlock from '@/components/CodeBlock'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Knowledge Graphs - Omnivore',
  description: 'Transform crawled web data into structured knowledge graphs.',
  openGraph: {
    title: 'Knowledge Graphs - Omnivore',
    description: 'Transform crawled web data into structured knowledge graphs.',
    images: [
      {
        url: `/api/og?title=Knowledge Graphs`,
        width: 1200,
        height: 630,
        alt: 'Knowledge Graphs - Omnivore',
      },
    ],
  },
};

export default function KnowledgeGraphsPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Knowledge Graphs</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        Transform crawled web data into structured knowledge graphs. Extract entities, discover relationships, 
        and build queryable graph databases for advanced insights and analysis.
      </p>

      <div className="not-prose grid md:grid-cols-3 gap-6 my-12">
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
          <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
            <Network className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Entity Extraction</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Automatic detection of people, places, organizations, and concepts</p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
            <Link2 className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Relationship Mapping</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Discover connections between entities across documents</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-xl p-6 border border-green-200 dark:border-green-800">
          <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
            <Database className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Graph Database</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Export to Neo4j, ArangoDB, or custom graph formats</p>
        </div>
      </div>

      <h2>Core Concepts</h2>

      <h3>What is a Knowledge Graph?</h3>
      <p>
        A knowledge graph is a structured representation of information where:
      </p>
      <ul>
        <li><strong>Nodes (Entities):</strong> Represent distinct objects, concepts, or data points</li>
        <li><strong>Edges (Relationships):</strong> Define connections and associations between entities</li>
        <li><strong>Properties:</strong> Attributes that describe entities and relationships</li>
      </ul>

      <h3>Graph Structure</h3>
      <CodeBlock language="json">{`{
  "nodes": [
    {
      "id": "person_1",
      "type": "Person",
      "properties": {
        "name": "John Doe",
        "title": "CEO",
        "email": "john@example.com"
      }
    },
    {
      "id": "company_1",
      "type": "Company",
      "properties": {
        "name": "Example Corp",
        "industry": "Technology",
        "founded": "2010"
      }
    }
  ],
  "edges": [
    {
      "source": "person_1",
      "target": "company_1",
      "type": "WORKS_FOR",
      "properties": {
        "since": "2015",
        "role": "Chief Executive Officer"
      }
    }
  ]
}`}</CodeBlock>

      <h2>Entity Extraction</h2>

      <h3>Supported Entity Types</h3>
      <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Named Entities</h4>
          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
            <li>• People (names, titles)</li>
            <li>• Organizations (companies, institutions)</li>
            <li>• Locations (cities, countries, addresses)</li>
            <li>• Dates and times</li>
            <li>• Monetary values</li>
            <li>• Products and services</li>
          </ul>
        </div>
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Custom Entities</h4>
          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
            <li>• Email addresses</li>
            <li>• Phone numbers</li>
            <li>• URLs and domains</li>
            <li>• Social media handles</li>
            <li>• Technical terms</li>
            <li>• Industry-specific entities</li>
          </ul>
        </div>
      </div>

      <h3>Extraction Configuration</h3>
      <CodeBlock language="toml">{`[knowledge_graph.extraction]
# Entity extraction settings
extract_entities = true
entity_types = ["person", "organization", "location", "product"]

# Confidence threshold (0-1)
min_confidence = 0.7

# Custom patterns
[knowledge_graph.extraction.patterns]
email = "\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b"
phone = "\\+?[1-9]\\d{1,14}"
social_handle = "@[A-Za-z0-9_]+"

# NER model settings
[knowledge_graph.extraction.ner]
model = "en_core_web_lg"  # spaCy model
batch_size = 100
max_length = 10000`}</CodeBlock>

      <h2>Relationship Discovery</h2>

      <h3>Automatic Relationship Detection</h3>
      <p>
        Omnivore automatically discovers relationships based on:
      </p>
      <ul>
        <li><strong>Co-occurrence:</strong> Entities appearing in the same context</li>
        <li><strong>Syntactic patterns:</strong> Grammar-based relationship extraction</li>
        <li><strong>Semantic analysis:</strong> Understanding meaning and context</li>
        <li><strong>Link analysis:</strong> Hyperlink and reference relationships</li>
      </ul>

      <h3>Relationship Types</h3>
      <CodeBlock language="rust">{`// Common relationship types
enum RelationType {
    // Organizational
    WorksFor,
    ManagesEmployeeOf,
    ParentCompany,
    Subsidiary,
    
    // Personal
    Knows,
    RelatedTo,
    ContactOf,
    
    // Locational
    LocatedIn,
    HeadquarteredIn,
    OperatesIn,
    
    // Transactional
    Customer,
    Supplier,
    Partner,
    Competitor,
    
    // Content
    Mentions,
    References,
    LinksTo,
    CitedBy,
}`}</CodeBlock>

      <h2>Building Knowledge Graphs</h2>

      <h3>Basic Graph Construction</h3>
      <CodeBlock language="bash">{`# Build graph from crawled data
omnivore graph build crawl-results.json --output knowledge-graph.json

# Specify entity types to extract
omnivore graph build crawl-results.json \\
  --entities person,organization,location \\
  --output knowledge-graph.json

# Set confidence threshold
omnivore graph build crawl-results.json \\
  --min-confidence 0.8 \\
  --output knowledge-graph.json`}</CodeBlock>

      <h3>Advanced Configuration</h3>
      <CodeBlock language="bash">{`# Use custom extraction config
omnivore graph build crawl-results.json \\
  --config graph-config.toml \\
  --output knowledge-graph.json

# Parallel processing
omnivore graph build crawl-results.json \\
  --workers 10 \\
  --batch-size 1000 \\
  --output knowledge-graph.json

# Include metadata
omnivore graph build crawl-results.json \\
  --include-metadata \\
  --include-timestamps \\
  --output knowledge-graph.json`}</CodeBlock>

      <h3>Programmatic API</h3>
      <CodeBlock language="rust">{`use omnivore::{KnowledgeGraph, GraphBuilder, EntityExtractor};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Load crawled data
    let crawl_data = load_crawl_results("results.json")?;
    
    // Configure entity extractor
    let extractor = EntityExtractor::builder()
        .add_entity_type(EntityType::Person)
        .add_entity_type(EntityType::Organization)
        .min_confidence(0.75)
        .build();
    
    // Build knowledge graph
    let graph_builder = GraphBuilder::new(extractor);
    let knowledge_graph = graph_builder
        .process(crawl_data)
        .extract_entities()
        .discover_relationships()
        .build()
        .await?;
    
    // Query the graph
    let ceo_nodes = knowledge_graph
        .query()
        .nodes()
        .filter_type(EntityType::Person)
        .filter_property("title", "CEO")
        .execute()?;
    
    println!("Found {} CEOs", ceo_nodes.len());
    
    // Export to different formats
    knowledge_graph.export_json("graph.json")?;
    knowledge_graph.export_graphml("graph.graphml")?;
    knowledge_graph.export_neo4j("bolt://localhost:7687")?;
    
    Ok(())
}`}</CodeBlock>

      <h2>Graph Storage & Export</h2>

      <h3>Storage Backends</h3>
      
      <h4>1. Neo4j Export</h4>
      <CodeBlock language="bash">{`# Export to Neo4j database
omnivore graph export knowledge-graph.json \\
  --format neo4j \\
  --uri bolt://localhost:7687 \\
  --username neo4j \\
  --password password

# Batch import for large graphs
omnivore graph export knowledge-graph.json \\
  --format neo4j-import \\
  --output-dir ./neo4j-import/`}</CodeBlock>

      <h4>2. ArangoDB Export</h4>
      <CodeBlock language="bash">{`# Export to ArangoDB
omnivore graph export knowledge-graph.json \\
  --format arangodb \\
  --url http://localhost:8529 \\
  --database knowledge \\
  --collection entities`}</CodeBlock>

      <h4>3. GraphML Format</h4>
      <CodeBlock language="bash">{`# Export to GraphML (compatible with most graph tools)
omnivore graph export knowledge-graph.json \\
  --format graphml \\
  --output knowledge-graph.graphml`}</CodeBlock>

      <h4>4. JSON-LD Format</h4>
      <CodeBlock language="bash">{`# Export as JSON-LD for semantic web
omnivore graph export knowledge-graph.json \\
  --format jsonld \\
  --context schema.org \\
  --output knowledge-graph.jsonld`}</CodeBlock>

      <h2>Querying Knowledge Graphs</h2>

      <h3>Built-in Query Language</h3>
      <CodeBlock language="bash">{`# Find all entities of a specific type
omnivore graph query knowledge-graph.json \\
  --type Person \\
  --limit 10

# Search by property
omnivore graph query knowledge-graph.json \\
  --property "title=CEO" \\
  --type Person

# Find relationships
omnivore graph query knowledge-graph.json \\
  --relationship "WORKS_FOR" \\
  --source-type Person \\
  --target-type Company`}</CodeBlock>

      <h3>Graph Traversal</h3>
      <CodeBlock language="bash">{`# Find connected entities (1 hop)
omnivore graph traverse knowledge-graph.json \\
  --start "person_123" \\
  --depth 1

# Find paths between entities
omnivore graph path knowledge-graph.json \\
  --from "person_123" \\
  --to "company_456" \\
  --max-depth 5

# Find clusters/communities
omnivore graph analyze knowledge-graph.json \\
  --algorithm community-detection \\
  --output communities.json`}</CodeBlock>

      <h2>Analysis & Insights</h2>

      <h3>Graph Metrics</h3>
      <CodeBlock language="bash">{`# Calculate graph statistics
omnivore graph stats knowledge-graph.json

# Output:
# Nodes: 10,543
# Edges: 45,231
# Average degree: 8.58
# Clustering coefficient: 0.234
# Connected components: 12`}</CodeBlock>

      <h3>Centrality Analysis</h3>
      <CodeBlock language="bash">{`# Find most important nodes
omnivore graph analyze knowledge-graph.json \\
  --algorithm pagerank \\
  --output pagerank-scores.json

# Betweenness centrality
omnivore graph analyze knowledge-graph.json \\
  --algorithm betweenness \\
  --output betweenness-scores.json

# Degree centrality
omnivore graph analyze knowledge-graph.json \\
  --algorithm degree \\
  --output degree-scores.json`}</CodeBlock>

      <h3>Pattern Detection</h3>
      <CodeBlock language="bash">{`# Find patterns and motifs
omnivore graph patterns knowledge-graph.json \\
  --min-support 0.1 \\
  --max-size 5 \\
  --output patterns.json

# Detect anomalies
omnivore graph anomalies knowledge-graph.json \\
  --algorithm isolation-forest \\
  --threshold 0.9 \\
  --output anomalies.json`}</CodeBlock>

      <h2>Visualization</h2>

      <h3>Export for Visualization Tools</h3>
      <CodeBlock language="bash">{`# Gephi format
omnivore graph export knowledge-graph.json \\
  --format gexf \\
  --output graph.gexf

# Cytoscape format
omnivore graph export knowledge-graph.json \\
  --format cyjs \\
  --output graph.cyjs

# D3.js format
omnivore graph export knowledge-graph.json \\
  --format d3 \\
  --output graph-d3.json`}</CodeBlock>

      <h3>Built-in Visualization Server</h3>
      <CodeBlock language="bash">{`# Start visualization server
omnivore graph serve knowledge-graph.json \\
  --port 8080 \\
  --host 0.0.0.0

# With custom layout
omnivore graph serve knowledge-graph.json \\
  --layout force-directed \\
  --port 8080`}</CodeBlock>

      <h2>Use Cases</h2>

      <div className="not-prose grid gap-4 my-8">
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Search className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
            <h4 className="font-semibold text-gray-900 dark:text-white">Competitive Intelligence</h4>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Map competitor relationships, track personnel movements, and identify partnership networks
          </p>
        </div>
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <BarChart className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
            <h4 className="font-semibold text-gray-900 dark:text-white">Market Analysis</h4>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Discover industry trends, identify key players, and analyze market relationships
          </p>
        </div>
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" />
            <h4 className="font-semibold text-gray-900 dark:text-white">Research & Discovery</h4>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Build knowledge bases, track citations, and discover hidden connections in research data
          </p>
        </div>
      </div>

      <h2>Performance Considerations</h2>

      <h3>Scaling Large Graphs</h3>
      <ul>
        <li><strong>Streaming Processing:</strong> Process large datasets in chunks</li>
        <li><strong>Distributed Computing:</strong> Use multiple workers for parallel processing</li>
        <li><strong>Index Optimization:</strong> Create indexes on frequently queried properties</li>
        <li><strong>Graph Partitioning:</strong> Split large graphs into manageable subgraphs</li>
      </ul>

      <CodeBlock language="toml">{`[knowledge_graph.performance]
# Streaming settings
stream_processing = true
chunk_size = 10000
max_memory = "4GB"

# Parallel processing
workers = 8
batch_size = 1000

# Caching
enable_cache = true
cache_size = "1GB"

# Optimization
create_indexes = true
optimize_queries = true`}</CodeBlock>

      <h2>Best Practices</h2>

      <div className="not-prose bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recommendations</h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>✓ Start with high-confidence thresholds and adjust based on results</li>
          <li>✓ Use domain-specific entity extractors for better accuracy</li>
          <li>✓ Regularly validate and clean extracted entities</li>
          <li>✓ Create indexes on frequently queried properties</li>
          <li>✓ Use graph partitioning for very large datasets</li>
          <li>✓ Export to specialized graph databases for production use</li>
          <li>✓ Implement incremental updates rather than full rebuilds</li>
        </ul>
      </div>
    </div>
  )
}