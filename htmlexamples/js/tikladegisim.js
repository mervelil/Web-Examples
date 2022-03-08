let greeting=document.querySelector("#greeting")
// greeting.addEventListener("click",domclick)
greeting.addEventListener("mouseover",domclick)
function domclick(){
    console.log("tiklandı")
    console.log(this.innerHTML ="bilgi degisti")
    this.style.color=="red" ? this.style.color="black" : this.style.color="red"
}