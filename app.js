function updateQuantity(isAdd){
    let phoneInfo = document.getElementById('phone');
    let phoneQuantity = parseInt(phoneInfo.value);

    let phoneOutput = document.getElementById('phone-total');
    let phonePrice = parseFloat(phoneOutput.innerText);
    if(isAdd){
        phoneQuantity++
        phonePrice = 1219 * phoneQuantity;
    }
    else{
        if(phoneQuantity > 0){
            phoneQuantity--;
            phonePrice = 1219 * phoneQuantity;
        }
        else{
            alert('sorry');
        }
    }
    phoneInfo.value = phoneQuantity;
    phoneOutput.innerText = phonePrice;
}
document.getElementById('phone-plus').addEventListener('click',function(){
    updateQuantity(true)
})
document.getElementById('phone-minus').addEventListener('click',function(){
    updateQuantity(false)
})

