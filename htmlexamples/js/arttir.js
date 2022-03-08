//let counter=0
let counter=localStorage.getItem('counter') ? Number(localStorage.getItem('counter')): 0
let  counterDOM=document.querySelector('#counter')
let increaseDOM=document.querySelector('#increase')
let decreaseDOM=document.querySelector('#decrease')
counterDOM.innerHTML=counter
increaseDOM.addEventListener("click",clickevent)
decreaseDOM.addEventListener("click",clickevent)
function clickevent() {
    console.log(this.id)

// if (this.id=="increase"){
  this.id=="increase" ?   counter+=1 :  counter-=1  
    localStorage.setItem('counter',counter)
    counterDOM.innerHTML =counter
   // counterDOM.innerHTML = counter+=1

// }else{
//     counterDOM.innerHTML = counter-=1  
// }
}