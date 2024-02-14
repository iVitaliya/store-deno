export class HashTable<T> {
    private table: T[];
    public size: number;
    
    constructor(initialCapacity: number, entries?: HashTable<T>) {
        if (entries) {

        }

        this.size = initialCapacity;
        this.table = [];    
    }

    private hash(key: string): number {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }

        return total % this.size;
    }

    public all(): [number, T][] {
        const arr = new Array<[number, T]>();
        const entries = this.table.entries();

        for (const [int, item] of entries) {
            arr.push([int, item]);
        }

        return arr;
    }

    public allIndexes(): number[] {
        const keys = [] as number[];
        for (const [int, _] of this.table.entries()) {
            keys.push(int);
        }

        return keys;
    }

    public allValues(): T[] {
        const values = [] as T[];
        for (const [_, value] of this.table.entries()) {
            values.push(value);
        }

        return values;
    }

    public set(key: string, value: T): void {
        const length = this.table.length;
        if (length === this.size) {
            
        }

        const index = this.hash(key);

        this.table[index] = value;
    }

    public get(key: string): T | undefined {
        const index = this.hash(key);
        const value = this.table[index];

        return (value ? value : undefined);
    }
}