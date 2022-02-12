function updateQuantity(isAdd){
    let phoneInfo = document.getElementById('phone');
    let phoneQuantity = parseInt(phoneInfo.value);
    if(isAdd){
        phoneQuantity++
    }
    else{
        if(phoneQuantity > 0){
            phoneQuantity--;
        }
        else{
            alert('sorry');
        }
    }
    phoneInfo.value = phoneQuantity;
}
document.getElementById('phone-plus').addEventListener('click',function(){
    updateQuantity(true)
})
document.getElementById('phone-minus').addEventListener('click',function(){
    updateQuantity(false)
})

