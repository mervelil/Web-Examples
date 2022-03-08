let users=["LOREM","İMPUS","DOLOR","sdkplşf","dfvopld"]
const userListDOM=document.querySelector('#userList')
for(index =0;index<users.length;index++) {
    const liDOM=document.createElement('li')
   // console.log(users[index])
   liDOM.innerHTML=users[index]
   userListDOM.appendChild(liDOM)
//    for(var i = 1; i < 5; i++) {
//     console.log(i);
// };
}
let counter=0
let index=0
for(; counter<10;counter++){
    if (counter===5) {continue}// {break}
        console.log(counter)
    }

for(;index<users.length;index++){
    if(users[index]=="DOLOR"){continue}
    let li_DOM=document.createElement('li')
    li_DOM.innerHTML=users[index]
    users.append(li_DOM)
}