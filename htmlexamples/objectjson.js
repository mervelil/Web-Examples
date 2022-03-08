// const veri = require("./dosyanizin/dizini/veri.json") 
// let person = {
//     name: “Jack”,
//     age: 20
//   };
  
//   Object.keys(person) = ["name", "age"]
//   Object.values(person) = ["Jack", 20]
//   Object.entries(person) = [ ["name","Jack"], ["age",20] ]
let user1={
    firstName: "Bilgin",
    lastName: "Uzman",
score: [1,2,3,4],
isActive:true,
shortName:function(){return `${this.firstName[0].toUpperCase} ${this.lastName}`} //key value
};//iri arrow functionlar this erişimine sahip değildir.
//person.myCity = function () {
// 	console.log(`I live in ${this.city}`);
// };
// person.myCity();
// Yukardaki örnekte de görüldüğü gibi nesneye yeni bir metot eklemek istendiğinde nesneİsmi.eklenecekMetotİsmi = function() şeklinde yapılabilir
//object constructor
function Insan(isim,yas) {
    this.isim = isim;
    this.yas = yas;
  }
 
console.log(user1)
Insan.prototype.yeniFonksiyon = () => {console.log("Merhaba Kodluyoruz")}
const ayse = new Insan("ayşe",22);
ayse.yeniFonksiyon();

const bolme = ( { sayi1, sayi2} ) => {
    return sayi1 / sayi2;
   }
   const sayilar = {
    sayi1: 8 // dikkat sayi1 gonderdik ama sayi2 unuttuk
   }
   bolme(sayilar); // NaN yani 'Not a Number' donecektir. 
const cikarma = ( { sayi1, sayi2 } ) => { // Bu satira dikkat
    return sayi1 - sayi2;
   }
   const sayilar = {
    sayi2: 3,
    sayi1: 5
   }
   cikarma(sayilar); // sonuc 2
// Output : "Merhaba Kodluyoruz"


//   let person = {
//     name: “Jack”,
//     age: 20
//   };
  
//   document.getElementById("demo").innerHTML = JSON.stringify(person); // Bu objenizi bir stringe çevirip demo idsine basacaktır.
  
//   let stringObject = JSON.stringify(person);
  
//   let newPerson = JSON.parse(stringObject); 
//   // parse methodu da stringtify methodunun tersi olarak çalışır ve stringi objeye çevirir 