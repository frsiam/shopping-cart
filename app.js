function updateQuantity(item,isAdd){
    let phoneInfo = document.getElementById(item);
    let phoneQuantity = parseInt(phoneInfo.value);

    let phoneOutput = document.getElementById(item +'-total');
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
// handle phone increase decrease events
document.getElementById('phone-plus').addEventListener('click',function(){
    updateQuantity('phone',true)
})
document.getElementById('phone-minus').addEventListener('click',function(){
    updateQuantity('phone',false)
})
// handle case increase decrease events
document.getElementById('case-plus').addEventListener('click',function(){
    updateQuantity('case',true)
})
document.getElementById('case-minus').addEventListener('click',function(){
    updateQuantity('case',false)
})