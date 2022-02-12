let phoneInfo = document.getElementById('phone');
let phoneQuantity = parseInt(phoneInfo.value);
document.getElementById('phone-plus').addEventListener('click',function(){
    phoneQuantity++;
    phoneInfo.value = phoneQuantity;
})
//Negative button
document.getElementById('phone-minus').addEventListener('click',function(){
    if(phoneQuantity > 0){
        phoneQuantity--;
        phoneInfo.value = phoneQuantity;
    }
})
