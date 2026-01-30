const fs = typeof window === 'undefined' ? require('fs') : null
const { resolve } = typeof window === 'undefined' ? require('path') : { resolve: () => {} }

let config = {}

if (typeof window === 'undefined') {
  const raw = fs.readFileSync(resolve(process.cwd(), 'blog.config.js'), 'utf-8')
  config = eval(`((module = { exports }) => { ${raw}; return module.exports })()`)
}

// If we need to stripe out some private fields
const clientConfig = config

module.exports = {
  config,
  clientConfig
}
