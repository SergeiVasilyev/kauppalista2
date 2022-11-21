#!/usr/bin/env -S npx ts-node --project node.tsconfig.json

//ja chmod +x utils/db.ts

import { exec } from 'child_process';
import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

export type ShopList = {
    id: number;
    name: string;
    createdAt: Date;
}

export async function getDatabase() {
    const db: sqlite.Database = await sqlite.open({
        filename: 'database.db',
        driver: sqlite3.Database,
    });

    await db.exec(`
    CREATE TABLE IF NOT EXISTS shoplist (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(100) NOT NULL,
        created_at DATETIME 
    )`);
    await db.exec(`
    CREATE TABLE IF NOT EXISTS shoplist_item (
        list_id INTEGER NOT NULL,
        sequence INTEGER NOT NULL,
        done BOOLEAN NOT NULL DEFAULT 0,
        item VARCHAR(200) NOT NULL,
        PRIMARY KEY (list_id, sequence)
    )`);

    return new Database(db);
}


export class Database {
    db: sqlite.Database;

    constructor(db: sqlite.Database) {
        this.db = db;
    }

    async createShopList(name: string): Promise<number> {
        const result = await this.db.run(`INSERT INTO shoplist (name, created_at) VALUES (?, datetime('now'))`, name);
        return result.lastID! // ! Почитать, что значит 
        //const result = await db.all('SELECT * FROM testi');
    }
    async addItemToList(listId: number, item: string) {
        const result = await this.db.get(`SELECT MAX(sequence) AS maxSeq FROM shoplist_item 
        WHERE list_id = ?`, listId)
        console.log(result)
        const maxSeq = result.maxSeq ?? 0

        this.db.run(`INSERT INTO shoplist_item (list_id, sequence, item) 
        VALUES (?, ?, ?)`, listId, maxSeq + 1, item)
    }
    async getShopLists(): Promise<ShopList[]>{
        const rows = await this.db.all(`SELECT * FROM shoplist`)
        return rows.map((row) => ({
            id: row.id, 
            name: row.name, 
            createdAt: new Date(row.created_at + 'Z')}))
    }
}



async function main() {
    const db = await getDatabase()
    const listId = await db.createShopList("Testilista")
    console.log(listId)
    await db.addItemToList(listId, 'eka rivi')
    await db.addItemToList(listId, 'toka rivi')
    await db.addItemToList(listId, 'kolmas rivi')
    console.log(await db.getShopLists())
    const listat = await db.getShopLists()
    console.log(`${listat[0].createdAt}`)
}

main()