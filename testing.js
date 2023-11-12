function checkStock(qty, item){

    if(qty>3){return `${item} is STOCKED`}
    else if(qty>0 && qty<=3){return `${item} stock is running LOW`}
    else if(qty<1){return `${item} is OUT of stock`}
}

console.log(checkStock(0, "tortillas"))