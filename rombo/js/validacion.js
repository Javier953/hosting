mio = document.querySelector('#mio');
mio.text.addEventListener('keypress', function (e){
	if (!soloNumeros(event)){
  	e.preventDefault();
  }
})

//Solo permite introducir numeros.
function soloNumeros(e){
    var key = e.charCode;
    console.log(key);
    
    return key >= 48 && key <= 57 && key!=13 && key!=46;
    return false;
}
