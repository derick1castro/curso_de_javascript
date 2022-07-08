let maisElementos = [1, 2, 3, 4, 5, 6];
let menosElementos = [1, 2, 3];

function vendoElementos(arr) {
    if(arr.length < 5) {
        console.log('Poucos elementos');
    } else {
        console.log('Muitos elementos');
    }
}

vendoElementos(maisElementos);
vendoElementos(menosElementos);