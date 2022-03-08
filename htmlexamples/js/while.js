// let username=""
// while(!username){
//     username=prompt("kullanıcı adını giriniz")
//     console.log(username)
// }
const PRODUCTS=["lAptop","telefom","kulaklık","lorem","impıls"]
// PRODUCTS.forEach((product,index) => console.log(product,index))
// PRODUCTS.forEach((product,index,array) => console.log(array[index]=`${product.toUpperCase()}`))
const userListDOM=document.querySelector('#userList')
PRODUCTS.forEach(item =>{
    const liDOM=document.createElement('li')
    liDOM.innerHTML=item
    userListDOM.append(liDOM)
})
console.log(PRODUCTS)
const USERS1=[
    {fulName: "Ayse Sumer",isActive: false},
    {fulName: "Asya Sumer",isActive: true},
    {fulName: "Aksel Sumer",isActive: false},
]
const ACTIVE_USERS=USERS1.filter(user=>user.isActive)

console.log(ACTIVE_USERS)
const person = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
  },
  {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
    }
  ];
  const o=person.filter(user =>user.age>29)
  console.log(o)
  const j=person.filter(user=>user.languages>"JavaScript")
  console.log(j)
  const USERS=["AYSE","MehmET","TugCE","AKsel"]
  const newUsers=USERS.map(user =>user.toLowerCase())
  console.log(newUsers)
  const users_obj=USERS.map(item =>
    {
        return {userName:item,shortName: `${item[0]}.`,newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase}`
    }
    })
    console.log(users_obj)