import path from 'node:path'
import { DatabaseSync } from 'node:sqlite'

if (!require.main) {
  throw new Error('require.main is undefined. This module must be run in a CommonJS environment.')
}

const database: DatabaseSync = new DatabaseSync(`${path.dirname(require.main.filename)}/database/${process.env.DB_NAME}`)

export default database