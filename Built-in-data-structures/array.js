const arr = [1,2,3,'jack'];
arr.push(4);
arr.unshift(0);
arr.pop();
arr.shift();

for (const item of arr) {
    console.log(item);
}


const arr2 = [1,2,3,4];

const mapArr = arr2.map(n=> n + 2);
console.log({mapArr});

const filterArr = arr2.filter(n => n%2);
console.log({filterArr});

const reduceArr = arr2.reduce((a,n)=> a + n);
console.log({reduceArr});

/*   
---> Array Big-O time Complexity  <---

-Insert / Remove from end - O(1)
-Insert / Remove from beginning - O(n)
-Access - O(1)
-Search- O(n)
-Push / pop - O(1)
-Ship / Unship / Concat / Slice / Splice - O(n)
-ForEach / map / filter / reduce - O(n)

*/