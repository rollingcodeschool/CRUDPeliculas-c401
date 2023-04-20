function validarCantidadCaracteres(texto, min, max){
    if(texto.length >= min && texto.length <= max){
        console.log('aqui el texto tiene la cant. de caracteres correcto');
        return true;
    }else{
        console.log('aqui el texto no cumple la validacion');
        return false;
    }
}

export function sumarioValidaciones(titulo){
    let resumen = '';
    //quiero preguntar si no cumple con la validacion
    if(!validarCantidadCaracteres(titulo,3,100)){
        resumen = 'El titulo debe tener entre 3 y 100 caracteres'
    }
    return resumen;
}