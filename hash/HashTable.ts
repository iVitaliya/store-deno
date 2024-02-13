export function HashTable<T>(size: number) {
    const table = new Array<T>(size);
    const _size = size;

    const hash = (key: string) => {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }

        return total % _size;
    };
    
    this.set = function(key: string, value: T) {
        const index = hash(key);

        table[index] = value;
    }

    

    this.get = function(key: string): T | undefined {
        const index = hash(key);
        const value = table[index];

        return (
            !value
        )
    }
}