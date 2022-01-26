// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    const procentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * procentajePrecioConDescuento) / 100;

    return precioConDescuento;
}


function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = Number(inputDiscount.value);

    const combo = document.getElementById("InputCupon");
    const cupon = Number(combo.value);
    let descuentoFinal = discountValue + cupon;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuentoFinal);

    const resultp = document.getElementById("ResultP");
    resultp.innerText = "El precio con descuento son: $" + precioConDescuento;

    
}