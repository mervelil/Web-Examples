let products;
try{
   products.forEach(element =>console.log(element));
}catch(error){
console.log(error)
    }
     console.log("hata yonetimi duzgun calısıyor")  
     let info="kodluyoruz"
     console.log(info
        )
  
        function valid(){
            try {
                if (document.querySelector("#dogumTarihi").value == "") {
                    throw 'Doğum tarihini boş geçemezsiniz';
                };
            }catch(err) {
                alert(err);
            }
        }