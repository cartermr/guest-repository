import { DatabaseSync } from 'node:sqlite'
import path from 'node:path'

class GuestRegistryDatabase extends DatabaseSync {
    private static instance: GuestRegistryDatabase

    private constructor() {
        super(path.join(__dirname, process.env.DB_NAME || 'guest-registry.db'), { open: false })
    }

    public static getInstance(): GuestRegistryDatabase {
        if (!GuestRegistryDatabase.instance) {
            GuestRegistryDatabase.instance = new GuestRegistryDatabase()
        }
        return GuestRegistryDatabase.instance
    }

    private createTables(): void {
        if (!this.open) {
            throw new Error('Database is not open.')
        }

        const createGuestTable = this.prepare(`
            CREATE TABLE IF NOT EXISTS guests (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                visitorid INTEGER NOT NULL,
                firstname TEXT NOT NULL,
                lastname TEXT NOT NULL,
                company TEXT,
                phone TEXT,
                email TEXT NOT NULL UNIQUE,
                onsite INTEGER NOT NULL,
                checkInTime TEXT DEFAULT CURRENT_TIMESTAMP,
                checkOutTime TEXT
                )`
            )

        const createUserTable = this.prepare(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                passwordHash TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE
            )`
        )

        try {
            createGuestTable.run()
            createUserTable.run()
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

export = GuestRegistryDatabase.getInstance();