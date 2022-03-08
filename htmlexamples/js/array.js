// splice() metot diziye hem eleman eklemek için hem de eleman silmek için kullanılır. Metodun ilk parametresi işlemin yapılacağı index numarasını, ikinci parametre ise kaç elemanın silineceğini belirtir.

// Örneğin

//   var sports = ['basketball', 'football', 'tennis' ];
//   console.log(sports); // basketball, football, tennis
//   sports.splice(1,0,'baseball');
//   console.log(sports); // basketball, baseball, football, tennis
var sports = ['basketball', 'football', 'tennis' ];
console.log(sports); // basketball, football, tennis
sports.pop();
console.log(sports); // basketball, football
var sports = ['basketball', 'football', 'tennis' ];
console.log(sports);  // basketball, football, tennis
sports.shift();
console.log(sports);  // football, tennis
var sports = ['basketball', 'football', 'tennis' ];
console.log(sports); // basketball, football, tennis
sports.splice(1,1);
console.log(sports); // basketball, tennis
var sports = ['basketball', 'football', 'tennis' ];
console.log(sports[2]); // tennis
sports[2] = 'judo';
console.log(sports[2]); // judo
let items=[1,2,3,4,5]
let femaleUsers=["Ayse","Hulya","Merve"]
let maleUsers=["Ahmet","Hasan","Mehmet"]
items.unshift(femaleUsers)
items.push(maleUsers)
console.log(items)
console.log(items.length)
console.log(items[0][0]) //ayse
let newItems=items.splice(1,5)
console.log("new items:",newItems)
console.log("items:",items)
items.unshift("lorem") //first
items.push("lorem")//last
let copyitems=items
copyitems.pop()
console.log("copy items",copyitems)
console.log("items",items)
console.log("kopya sonrakı hali:")
copyitems=items.slice()
copyitems.pop()
console.log("copy items",copyitems)
let allUsers={...femaleUsers,...maleUsers}
console.log(allUsers.toString)
console.log(allUsers.join.toString("----"))