fetch("data/settings.json").then(
    response =>response.json()
).then(responseJson => {
    console.log(responseJson)
    console.log(responseJson.userName)
})
let userListDOM=document.querySelector("#userList")
fetch("https://jsonplaceholder.typicode.com/posts").then(
    response =>response.json()
).then(responseJson =>{
 responseJson.forEach(item => {
     let liDOM=document.createElement('li')
     liDOM.innerHTML=item.title
     userListDOM.appendChild(liDOM)
 })
})
let payload = {
    title: "Blog Title",
    body: "lorem ipsum",
    userId:1
  }
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err));