function hello () {
    console.log("hello")
}
hello()
// function printScreen1 (){
//     console.log(“İlk ekran çıktısı”);
// }

//  function printScreen2 (){
//    setTimeout(function(){
// console.log(“İkinci ekran çıktısı”)  
// }, 3000);
// }

// function printScreen3 (){
//     console.log(“Üçüncü ekran çıktısı”);
// }
// printScreen1();
// printScreen2();
// printScreen3();
function mesajVer() {
    alert( 'Herkese Merhabalar!' );
    }
    mesajVer()
    const carpim = (sayi1, sayi2) => sayi1 * sayi2;
    /*
        // Daha uzun hali ise;
        const carpim = function(sayi1,sayi2){
          return sayi1 * sayi2;
        }
      */
    
    console.log(carpim(3, 5));    
    
// 1.ci yol (recursion patterni ile düşünmeden)
// function pow(x, n) {
//     let result = 1;
  
//     for (let i = 0; i < n; i++) {
//       result *= x;
//     }
  
//     return result;
//   }
  
//   alert(pow(2, 3)); // 8
//   // recursion ile
//   function pow(x, n) {
//     if (n == 1) {
//       return x;
//     } else {
//       return x * pow(x, n - 1);
//     }
//   }
  
//   alert(pow(2, 3)); // 8
function greetings(firtname="") {
    console.log(`Merhaba ${firtname}`)//``
}
greetings("Apple")
function greetings2(firstname,lastname) {
    let info =`Merhsba ${firstname} ${lastname}`
    return info
}
greetings2("a","b")
// const helloFuncV4 =(firstname,lastname){
//     let info = `Merhaba ${firstname} ${lastname}`
//     console.log(info)
//     return info
// }
helloFuncV4("hellofıncv4","other info")
// const greet = function(who) {
//     return `Hello, ${who}!`;
//   }
//    greet("John") 
const newArray = (nums) => {

    const newNums = nums.map(e=>{      
        if(e%2==0){
            return e*2
        }else if(e%2==1){
            return e*3
        }
    });

   return newNums 
}

console.log(newArray([1,2,3,4,5]));  // output: [3,4,9,8,15]