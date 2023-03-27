const obj = {
    name:'htetko',
    age: 27, 
    position: 'web developer',
    work() {
        console.log('I work as a web developer')
    },
}

obj.hobby = "reading";
obj.work();
delete obj.hobby;

for (const key in obj) {
    console.log(key,'=>',obj[key]);
}

/*   
---> Object Big-O time Complexity  <---

-Insert - O(1)
-Remove - O(1)
-Access - O(1)
-Search- O(n)
-Object.keys()- O(n)
-Object.values()- O(n)
-Object.entries()- O(n)

*/