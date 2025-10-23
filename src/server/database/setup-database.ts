#!/usr/bin/env ts-node

/**
 * Database Setup Script
 * 
 * This script initializes the guest registry database with tables and seed data.
 * Run with: npm run setup-db or ts-node setup-database.ts
 */

import { GuestRegistryDatabase } from './db';

async function setupDatabase() {
    console.log('🚀 Setting up Guest Registry Database...\n');
    
    const db = new GuestRegistryDatabase();
    
    try {
        // Check if database already exists
        if (db.databaseExists()) {
            console.log('⚠️  Database already exists. Do you want to reset it? (This will delete all data)');
            console.log('   To reset: npm run reset-db');
            console.log('   To continue with existing database: npm run seed-db\n');
            process.exit(0);
        }

        // Initialize database
        await db.initialize();
        
        console.log('\n✅ Database setup completed successfully!');
        console.log('📁 Database location: src/server/database/guest-registry.db');
        console.log('\n📊 Created tables:');
        console.log('   - guests (main guest information)');
        console.log('   - hosts (company hosts/employees)');
        console.log('   - visit_log (visit history tracking)');
        console.log('   - badges (visitor badge management)');
        console.log('\n🌱 Seeded with sample data:');
        console.log('   - 5 sample hosts');
        console.log('   - 50 visitor badges (BADGE-001 to BADGE-050)');
        
        await db.close();
        
    } catch (error) {
        console.error('❌ Error setting up database:', error);
        process.exit(1);
    }
}

// Run the setup
setupDatabase();