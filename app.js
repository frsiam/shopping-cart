function updateQuantity(item,price,isAdd){
    let productInfo = document.getElementById(item);
    let productQuantity = parseInt(productInfo.value);

    let productOutput = document.getElementById(item +'-total');
    let productPrice = parseFloat(productOutput.innerText);
    if(isAdd){
        productQuantity++
        productPrice = price * productQuantity;
    }
    else{
        if(productQuantity > 0){
            productQuantity--;
            productPrice = price * productQuantity;
        }
        else{
            alert('sorry');
        }
    }
    productInfo.value = productQuantity;
    productOutput.innerText = productPrice;
}
// handle phone increase decrease events
document.getElementById('phone-plus').addEventListener('click',function(){
    updateQuantity('phone',1219,true)
})
document.getElementById('phone-minus').addEventListener('click',function(){
    updateQuantity('phone',1219,false)
})
// handle case increase decrease events
document.getElementById('case-plus').addEventListener('click',function(){
    updateQuantity('case',59,true)
})
document.getElementById('case-minus').addEventListener('click',function(){
    updateQuantity('case',59,false)
})