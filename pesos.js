var p=0,d=0,res,txt="";
function cantidad() {
    p=document.getElementById('p').value
    p=Number.parseFloat(p)
    res=document.getElementById('rst')

}

function dolar() {
    d=document.getElementById('d').value
    d=Number.parseFloat(d)
    res=document.getElementById('rst')
}


function dolares() {

    txt="El resultado de la conversion dolares a pesos es: " +(p*d)
    res.textContent=txt
}
function pesos(){
    txt="El resultado de la conversion de pesos a dolares" +(p/d)
    res.textContent=txt
}
function borrar() {
    txt=""
    res.textContent=txt
}