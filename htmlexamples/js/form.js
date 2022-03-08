let userFormDOM =document.querySelector("#userForm")

userFormDOM.addEventListener('submit',formHandler)
const alertDOM =document.querySelector('#alert')
const alertFunction = (title,message,className="warning") => `<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong>${message}
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>`

function formHandler(event){
    event.preventDefault()
    const USER_NAME=document.querySelector("#username")
    const SCORE=document.querySelector("#score")
    if (USER_NAME.value&&SCORE.value) {
        addItem(USER_NAME.value,SCORE.value)
        USER_NAME.value=""
        SCORE.value=""
    }else{
        alertDOM.innerHTML=alertFunction("Balık bilgisi","Eksik Bilgi Girdiniz","success")
    }
}
let userListDOM=document.querySelector('#userList')
const addItem=(userName,score) =>{
    let liDOM=document.createElement('li')
    liDOM.innerHTML=`${userName} <span class="badge"
    bg-primary rounded-pill>${score}</span>`
    liDOM.classList.add('list-group-item','d-flex','justify-content-between','align-items-center')

userListDOM.append(liDOM)
}


// formDOM.addEventListener('submit',formSubmit)
// function formSubmit(event){
//     event.preventDefault()
//     console.log("islem gerceklesti")
//     let scoreInputDOM = document.querySelector('#score')
//     console.log(scoreInputDOM.value)
//     localStorage.setItem('score',scoreInputDOM.value)
// }
/*{ <input type="text">
İnput(giriş) elementi text tipinde belirlenir. Yani klasik textbox kullanımı olarak ifade etsek yanlış olmaz. Örn; kullanıcı adı girişi için idealdir.

<input type="password">
Şifre tipinde veri girişi için kullanılır. Textbox’a girilen ifadeler “*” şeklinde gizlenerek gösterilir.

<input type=”radio”> :

Radio button tipinde, istenilen verileri seçmek için geliştirilen giriş yöntemidir.

<input type="checkbox">
Checkbox tipinde, onay gerektiren durumlarda kullanılması için geliştirilen giriş yöntemidir.

<input type=”button”> :

Klasik buton oluşturur. Varsayılan olarak herhangi bir işlem yapmaz. Javascript vb. programlama dilleri ile birlikte işlevsel hale gelir.

<input type="submit">
Form içerisindeki elementlere girilen verileri, gönderme işlemini yapar. action ile açılacak yeni sayfaya veya mevcut sayfanın kendisine, get veya post metoduna göre değişecek şekilde veri gönderme işlevini gerçekleştirir. methot=”get” kullanılmışsa action durumunda göre sayfanın adres çubuğundaki url’nin sonunda, methot=”post” kullanılmışsa sayfanın arka planında veriler saklanır.

<input type="reset">
Buton tipinde bir nesne oluşturur. Form içerisindeki elementlere veriler girilmiş halde iken reset’e tıklandığında görünen tüm verileri temizler ve elementleri ilk haline getirir.

<input type="color">
Renk çeşitlerini tasarımcıya sunan ve seçimini sağlayan giriş tipidir.

<input type=”date”> :

Tarayıcıda tarih gösterimini sağlayan tipdir. gg.aa.yyyy varsayılan formatında görünür.

<input type="email">
Sadece e-mail girişi yapabilmek için kullanılır. Email formatı dışındaki girişlerde, düzgün veri girişi yapılması gerektiği yönünde uyarı vermektedir. Safari dışındaki tüm tarayıcılar desteklemektedir.

<input type="number">
Sadece sayı girişi yapabilmek için kullanılır. Sayı dışındaki girişlerde, düzgün veri girişi yapılması gerektiği yönünde uyarı vermektedir. Safari dışındaki tüm tarayıcılar desteklemektedir.

<input type="range">
Bir aralık belirtmemiz gerektiğinde, bu giriş tipini kullanmamız gerekmektedir. Dizi şeklinde veri gösterimi yapar. min=”başlangıç değer” ve max=”son değer” ile aralık belirlemesi yapılır. Tüm tarayıcılar tarafından desteklenmektedir.

<input type="search">
Arama yapmamızı sağlayan giriş tipidir. Aktif olacak form içerisinde, girilecek olan veri aranır. Sadece Google Chrome ve Safari tarafından desteklenmektedir.

<input type="time">
Tarayıcıda saat gösterimini sağlayan tipdir. hh.mm varsayılan formatında görünür. Element üzerinde saat belirlemesi yapılması mümkündür. İnternet Explorer ve Mozilla Firefox dışındaki tarayıcılar tarafından desteklenmetedir. *///}