let phoneInfo = document.getElementById('phone');
let phoneQuantity = parseInt(phoneInfo.value);
document.getElementById('phone-plus').addEventListener('click',function(){
    phoneQuantity++;
    phoneInfo.value = phoneQuantity;
    console.log(phoneQuantity);
})