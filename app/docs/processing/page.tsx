import { FileText, Filter, Cpu, Database, Search, Code, Layers, Zap } from 'lucide-react'
import CodeBlock from '@/components/CodeBlock'

export default function ProcessingPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Data Processing Pipeline</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        Omnivore&apos;s data processing pipeline transforms raw web content into structured, analyzable data. 
        From HTML parsing to entity extraction, each stage is optimized for performance and accuracy.
      </p>

      <div className="not-prose grid md:grid-cols-3 gap-6 my-12">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">HTML Parsing</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Fast, accurate HTML parsing with content extraction</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-xl p-6 border border-green-200 dark:border-green-800">
          <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
            <Filter className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Content Cleaning</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Remove noise, ads, and extract main content</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
          <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
            <Cpu className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Enrichment</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Add metadata, classify content, extract entities</p>
        </div>
      </div>

      <h2>Processing Pipeline Overview</h2>

      <h3>Pipeline Stages</h3>
      <p>
        The processing pipeline consists of sequential stages, each optimized for specific tasks:
      </p>

      <div className="not-prose my-8">
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">1</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Raw Content Ingestion</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Receive HTML, PDF, or text content from crawler</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">2</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Content Parsing</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Parse HTML structure, extract text and metadata</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">3</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Content Cleaning</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Remove boilerplate, ads, navigation elements</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">4</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Text Processing</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Normalize text, language detection, encoding fixes</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">5</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Metadata Extraction</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Extract title, author, dates, tags, categories</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">6</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Content Enrichment</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Entity extraction, classification, sentiment analysis</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">7</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Storage & Indexing</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Store processed data, create search indexes</p>
            </div>
          </div>
        </div>
      </div>

      <h2>HTML Parsing</h2>

      <h3>Parser Configuration</h3>
      <CodeBlock language="toml">{`[processing.parser]
# Parser engine
engine = "html5ever"  # Fast HTML5 parser

# Parsing options
fix_errors = true
remove_scripts = true
remove_styles = true
decode_entities = true

# Content extraction
extract_text = true
extract_links = true
extract_images = true
extract_metadata = true

# Performance
max_parse_size = 10485760  # 10MB
timeout = 5000  # 5 seconds`}</CodeBlock>

      <h3>Structured Data Extraction</h3>
      <p>
        Extract structured data from HTML using various methods:
      </p>
      <CodeBlock language="rust">{`// Extract structured data
let extractor = DataExtractor::new()
    .extract_json_ld()      // JSON-LD structured data
    .extract_microdata()    // Schema.org microdata
    .extract_rdfa()         // RDFa annotations
    .extract_opengraph()    // Open Graph metadata
    .extract_twitter_card() // Twitter Card data
    .build();

let structured_data = extractor.extract(&html)?;`}</CodeBlock>

      <h2>Content Cleaning</h2>

      <h3>Boilerplate Removal</h3>
      <p>
        Omnivore uses advanced algorithms to identify and remove non-content elements:
      </p>
      <ul>
        <li><strong>Navigation menus:</strong> Header and footer navigation</li>
        <li><strong>Advertisements:</strong> Ad blocks and promotional content</li>
        <li><strong>Sidebars:</strong> Related articles, widgets, social media</li>
        <li><strong>Comments:</strong> User comments and discussion threads</li>
      </ul>

      <CodeBlock language="toml">{`[processing.cleaning]
# Cleaning algorithms
algorithm = "readability"  # or "boilerpipe", "custom"

# Content detection
min_text_length = 100
min_word_count = 50
max_link_density = 0.3

# Element removal
remove_elements = ["script", "style", "iframe", "embed"]
remove_classes = ["advertisement", "sidebar", "footer", "header"]
remove_ids = ["comments", "related-posts", "social-share"]

# Text cleaning
normalize_whitespace = true
remove_empty_lines = true
fix_encoding = true`}</CodeBlock>

      <h3>Main Content Extraction</h3>
      <CodeBlock language="bash">{`# Extract main content from HTML
omnivore process extract-content page.html --output content.txt

# With custom rules
omnivore process extract-content page.html \\
  --algorithm readability \\
  --min-words 100 \\
  --output content.txt

# Batch processing
omnivore process extract-content ./html-files/ \\
  --output-dir ./clean-content/ \\
  --workers 10`}</CodeBlock>

      <h2>Text Processing</h2>

      <h3>Text Normalization</h3>
      <CodeBlock language="toml">{`[processing.text]
# Language detection
detect_language = true
supported_languages = ["en", "es", "fr", "de", "zh"]

# Text normalization
lowercase = false  # Preserve case for NER
remove_accents = false
expand_contractions = true
fix_unicode = true

# Tokenization
tokenizer = "spacy"  # or "nltk", "custom"
preserve_entities = true
preserve_urls = true
preserve_emails = true`}</CodeBlock>

      <h3>Language Processing</h3>
      <CodeBlock language="rust">{`use omnivore::processing::{LanguageDetector, TextProcessor};

// Detect language
let detector = LanguageDetector::new();
let language = detector.detect(&text)?;

// Process text based on language
let processor = TextProcessor::for_language(language);
let processed = processor
    .tokenize()
    .lemmatize()
    .remove_stopwords()
    .process(&text)?;`}</CodeBlock>

      <h2>Metadata Extraction</h2>

      <h3>Automatic Metadata Detection</h3>
      <p>
        Omnivore automatically extracts various types of metadata:
      </p>

      <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Document Metadata</h4>
          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
            <li>• Title and headings</li>
            <li>• Author and publication date</li>
            <li>• Description and keywords</li>
            <li>• Language and encoding</li>
            <li>• Document type and format</li>
          </ul>
        </div>
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technical Metadata</h4>
          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
            <li>• URL and domain</li>
            <li>• Content-Type and size</li>
            <li>• Last modified date</li>
            <li>• HTTP headers</li>
            <li>• Response codes</li>
          </ul>
        </div>
      </div>

      <h3>Metadata Extraction Rules</h3>
      <CodeBlock language="json">{`{
  "metadata_rules": {
    "title": [
      {"selector": "title"},
      {"selector": "meta[property='og:title']", "attribute": "content"},
      {"selector": "h1", "first": true}
    ],
    "author": [
      {"selector": "meta[name='author']", "attribute": "content"},
      {"selector": ".author-name"},
      {"pattern": "By ([A-Z][a-z]+ [A-Z][a-z]+)"}
    ],
    "date": [
      {"selector": "meta[property='article:published_time']", "attribute": "content"},
      {"selector": "time", "attribute": "datetime"},
      {"pattern": "\\d{4}-\\d{2}-\\d{2}"}
    ],
    "category": [
      {"selector": "meta[property='article:section']", "attribute": "content"},
      {"selector": ".category"},
      {"xpath": "//nav[@class='breadcrumb']/a[last()]"}
    ]
  }
}`}</CodeBlock>

      <h2>Content Enrichment</h2>

      <h3>Entity Recognition</h3>
      <CodeBlock language="bash">{`# Extract entities from text
omnivore process extract-entities content.txt \\
  --types person,org,location \\
  --output entities.json

# With confidence threshold
omnivore process extract-entities content.txt \\
  --min-confidence 0.8 \\
  --output entities.json

# Custom NER model
omnivore process extract-entities content.txt \\
  --model custom-ner-model.bin \\
  --output entities.json`}</CodeBlock>

      <h3>Content Classification</h3>
      <CodeBlock language="toml">{`[processing.classification]
# Classification model
model = "fasttext"  # or "bert", "custom"
model_path = "./models/classifier.bin"

# Categories
categories = [
  "technology",
  "business",
  "science",
  "health",
  "sports",
  "entertainment"
]

# Classification settings
min_confidence = 0.7
multi_label = true
max_categories = 3`}</CodeBlock>

      <h3>Sentiment Analysis</h3>
      <CodeBlock language="bash">{`# Analyze sentiment
omnivore process analyze-sentiment content.txt

# Output:
# Overall: Positive (0.78)
# Polarity: 0.65
# Subjectivity: 0.42
# Emotions: joy (0.45), trust (0.32)`}</CodeBlock>

      <h2>Processing Pipelines</h2>

      <h3>Custom Pipeline Configuration</h3>
      <CodeBlock language="yaml">{`# pipeline.yaml
name: news-processing
description: Pipeline for news article processing

stages:
  - name: parse
    type: html_parser
    config:
      engine: html5ever
      extract_metadata: true
  
  - name: clean
    type: content_cleaner
    config:
      algorithm: readability
      min_words: 100
  
  - name: extract_entities
    type: ner
    config:
      model: en_core_web_lg
      types: [person, org, location]
  
  - name: classify
    type: classifier
    config:
      model: news-classifier
      categories: [politics, tech, business]
  
  - name: summarize
    type: summarizer
    config:
      algorithm: extractive
      sentences: 3
  
  - name: store
    type: storage
    config:
      backend: elasticsearch
      index: news-articles`}</CodeBlock>

      <h3>Pipeline Execution</h3>
      <CodeBlock language="bash">{`# Run custom pipeline
omnivore process run-pipeline pipeline.yaml \\
  --input crawled-data.json \\
  --output processed-data.json

# Run with monitoring
omnivore process run-pipeline pipeline.yaml \\
  --input crawled-data.json \\
  --output processed-data.json \\
  --monitor \\
  --metrics-port 9090`}</CodeBlock>

      <h2>Storage & Indexing</h2>

      <h3>Storage Backends</h3>
      <CodeBlock language="toml">{`[processing.storage]
# Primary storage
backend = "postgresql"  # or "mongodb", "elasticsearch", "rocksdb"
connection_string = "postgres://user:pass@localhost/omnivore"

# Batch settings
batch_size = 1000
flush_interval = 5000  # ms

# Compression
compress = true
compression_algorithm = "zstd"

# Indexing
create_indexes = true
index_fields = ["title", "content", "url", "domain"]

# Full-text search
enable_fts = true
fts_language = "english"`}</CodeBlock>

      <h3>Search Index Creation</h3>
      <CodeBlock language="bash">{`# Create search index
omnivore index create processed-data.json \\
  --backend elasticsearch \\
  --index omnivore-content

# With custom mapping
omnivore index create processed-data.json \\
  --backend elasticsearch \\
  --index omnivore-content \\
  --mapping custom-mapping.json

# Update existing index
omnivore index update omnivore-content \\
  --add-documents new-data.json`}</CodeBlock>

      <h2>Batch Processing</h2>

      <h3>Large-Scale Processing</h3>
      <CodeBlock language="bash">{`# Process large dataset in batches
omnivore process batch \\
  --input s3://bucket/crawled-data/ \\
  --output s3://bucket/processed-data/ \\
  --batch-size 10000 \\
  --workers 20 \\
  --checkpoint ./checkpoints/

# Resume from checkpoint
omnivore process batch \\
  --resume ./checkpoints/batch-12345.json \\
  --output s3://bucket/processed-data/`}</CodeBlock>

      <h3>Stream Processing</h3>
      <CodeBlock language="bash">{`# Process streaming data
omnivore process stream \\
  --input kafka://localhost:9092/crawled-pages \\
  --output kafka://localhost:9092/processed-pages \\
  --pipeline news-pipeline.yaml \\
  --workers 10`}</CodeBlock>

      <h2>Quality Control</h2>

      <h3>Data Validation</h3>
      <CodeBlock language="toml">{`[processing.validation]
# Validation rules
validate_required_fields = ["title", "content", "url"]
min_content_length = 100
max_content_length = 1000000

# Quality checks
check_language = true
expected_language = "en"
check_encoding = true
check_duplicates = true

# Rejection criteria
reject_on_error = false
log_rejected = true
rejected_output = "./rejected.json"`}</CodeBlock>

      <h3>Processing Metrics</h3>
      <CodeBlock language="bash">{`# View processing statistics
omnivore process stats

# Output:
# Documents processed: 45,231
# Success rate: 98.5%
# Average processing time: 125ms
# Entities extracted: 234,521
# Categories assigned: 89.3%
# Errors: 679 (1.5%)`}</CodeBlock>

      <h2>Performance Optimization</h2>

      <h3>Optimization Strategies</h3>
      <ul>
        <li><strong>Parallel Processing:</strong> Use multiple workers for CPU-bound tasks</li>
        <li><strong>Caching:</strong> Cache parsed HTML and extracted entities</li>
        <li><strong>Batch Operations:</strong> Process documents in batches</li>
        <li><strong>Lazy Loading:</strong> Load models on-demand</li>
        <li><strong>GPU Acceleration:</strong> Use GPU for NLP models when available</li>
      </ul>

      <CodeBlock language="toml">{`[processing.performance]
# Parallel processing
workers = 16
thread_pool_size = 32

# Caching
enable_cache = true
cache_backend = "redis"
cache_ttl = 3600

# Memory management
max_memory = "8GB"
gc_interval = 1000

# GPU settings
use_gpu = true
gpu_device = 0
gpu_batch_size = 32`}</CodeBlock>

      <h2>Error Handling</h2>

      <h3>Error Recovery</h3>
      <CodeBlock language="bash">{`# Process with error handling
omnivore process run \\
  --input data.json \\
  --output processed.json \\
  --on-error continue \\
  --error-log errors.log \\
  --max-errors 100

# Retry failed documents
omnivore process retry \\
  --failed errors.log \\
  --output retry-processed.json \\
  --max-retries 3`}</CodeBlock>

      <h2>Best Practices</h2>

      <div className="not-prose bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Processing Guidelines</h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>✓ Validate input data before processing</li>
          <li>✓ Use appropriate algorithms for content type</li>
          <li>✓ Set reasonable timeouts for each stage</li>
          <li>✓ Monitor memory usage with large documents</li>
          <li>✓ Implement checkpointing for long-running jobs</li>
          <li>✓ Log processing metrics for optimization</li>
          <li>✓ Test pipelines with sample data first</li>
        </ul>
      </div>
    </div>
  )
}