function dividir(A, B){
    if (B == 0) {
        return "No puede dividir por cero" 
    }else{
        return "divicion: " + (A / B)
    }
}

module.exports = dividir;
