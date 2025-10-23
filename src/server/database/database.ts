import { DatabaseSync } from 'node:sqlite'
import path from 'node:path'

class GuestRegistryDatabase extends DatabaseSync {
    constructor() {
        super(path.join(__dirname, process.env.DB_NAME || 'guest-registry.db'), { open: false })
    }

    private createTables(): void {
        if (!this.open) {
            throw new Error('Database is not open.')
        }

        const createGuestTable = this.prepare(`
            CREATE TABLE IF NOT EXISTS guests (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                firstName TEXT NOT NULL,
                lastName TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE,
                phone TEXT,
                company TEXT,
                onSite BOOLEAN NOT NULL,
                checkInTime DATETIME DEFAULT CURRENT_TIMESTAMP,
                checkOutTime DATETIME DEFAULT CURRENT_TIMESTAMP
                )`
            )

        try {
            createGuestTable.run()
            console.log('Database tables created successfully.')
        } catch (error) {
            console.error('Error creating database tables:', error)
            throw error
        }
    }

    public initializeDatabase(): void {
        this.open()
        this.createTables()
    }
}

export = new GuestRegistryDatabase()