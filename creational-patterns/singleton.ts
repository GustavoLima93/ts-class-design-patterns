import sql from 'mssql';

class DatabaseSingleton {
    private static instance: DatabaseSingleton;
    private connection: sql.ConnectionPool | null = null;

    private constructor() {
        // Configuration for the database connection
        const config = {
            user: 'username',
            password: 'password',
            server: 'localhost',
            database: 'mydatabase',
            options: {
                encrypt: true, // If using Azure SQL, set to true
                enableArithAbort: true
            }
        };

        this.connection = new sql.ConnectionPool(config, err => {
            if (err) console.error('Database connection failed: ', err);
            else console.log('Connected to MSSQL database');
        });
    }

    public static getInstance(): DatabaseSingleton {
        if (!DatabaseSingleton.instance) {
            DatabaseSingleton.instance = new DatabaseSingleton();
        }
        return DatabaseSingleton.instance;
    }

    public getConnection(): sql.ConnectionPool | null {
        return this.connection;
    }
}

// Usage example
async function main() {
    const database = DatabaseSingleton.getInstance();
    const connection = database.getConnection();

    try {
        await connection?.connect();
        console.log('Connected to database:', connection?.config.database);
        // Perform database operations here
    } catch (error) {
        console.error('Error connecting to the database:', error);
    } finally {
        await connection?.close();
    }
}

main();