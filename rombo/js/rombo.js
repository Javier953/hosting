function Area(){
    var area;
    var diag_mayor =Number(document.getElementById('diagonalmayor').value);
    var diag_menor = Number(document.getElementById('diagonalmenor').value);
    area = (diag_mayor * diag_menor)/2;
    document.getElementById('res_area').value=area;
}

function Perimetro(){
    var res_perim;
    var perimetro=Number(document.getElementById('perimetro').value);
    res_perim = (4 * perimetro);
    document.getElementById('res_perim').value=res_perim;
}

function Radio(){
    var radio;
    var diag_mayor =Number(document.getElementById('diagmayor').value);
    var diag_menor = Number(document.getElementById('diagmenor').value);
    var perimetro=Number(document.getElementById('perim').value);
    var sup =(diag_mayor*diag_menor);
    var sub=(4*perimetro)
    radio = sup/sub;
    document.getElementById('res_radio').value=radio;
}