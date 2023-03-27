// Set is a built-in object that allows you to store unique

const set = new Set([1,2,3])
set.add(4);
console.log(set.has(4));
set.delete(3)
set.add('Hello');
set.add({name: 'John', age: 30});
console.log(set.size,'<= set size');
set.clear();
for (const item of set) {
    console.log(item);
}