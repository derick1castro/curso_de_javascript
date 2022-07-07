let age = 26;
let cnh = true;

if (age > 18 && cnh === true) {
    console.log('Você pode dirigir!')
}else if (age > 18 && cnh === false) {
    console.log('Você não tem cnh, não pode dirigir')
}else if (age < 18 ) {
    console.log('Você não tem idade para dirigir')
}