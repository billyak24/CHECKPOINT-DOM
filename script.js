const button= document.getElementsByClassName("remove");

total()
for (let i = 0; i < button.length; i++) {
    var btn = button[i]
    btn.addEventListener('click', removebtn)
    
}


var quants = document.getElementsByClassName('input')
for (let i = 0; i < quants.length; i++) {
      var quant = quants[i]
      quant.addEventListener('change',change)
   }
function change(event){
   var input= event.target

   total()

}


function removebtn(event){
    var buttonc = event.target
        buttonc.closest('.prod').remove()
        total()
}


function total(){
    var prices =  document.getElementsByClassName('prix')
    var quantities = document.getElementsByClassName('input')
    var sum =0
 for (let i = 0; i < button.length; i++){
    var price = prices[i].innerHTML.replace('$','')
    var quantity = quantities[i].value
    sum +=Number(price) * quantity  
 }
 document.getElementById('tot').innerHTML = String(sum) + "$"
}


const hearts= document.querySelectorAll("i")
for (let i = 0; i < hearts.length; i++) {
   var heart = hearts[i]
   heart.addEventListener('click',function(event){
      var icon = event.target
      icon.classList.toggle('red')
      
   })

}