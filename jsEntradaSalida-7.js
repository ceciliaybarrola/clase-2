/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var n1;
    var n2;
    var rta;

    n1=document.getElementById("numeroUno").value;
    n2=document.getElementById("numeroDos").value;

    rta=parseInt(n1) + parseInt(n2);
    
    alert("La suma es "+rta)
}

function restar()
{
	var n1;
    var n2;
    var rta;

    n1=document.getElementById("numeroUno").value;
    n2=document.getElementById("numeroDos").value;
    rta=parseInt(n1) % parseInt(n2);

    alert("La resta es "+rta)

}

function multiplicar()
{ var n1;
    var n2;
    var rta;

    n1=document.getElementById("numeroUno").value;
    n2=document.getElementById("numeroDos").value;
    rta=parseInt(n1) * parseInt(n2);

    alert("La multiplicación es "+rta);
	
}

function dividir()
{
    var n1;
    var n2;
    var rta;

    n1=document.getElementById("numeroUno").value;
    n2=document.getElementById("numeroDos").value;
    rta=parseInt(n1)/parseInt(n2);

    alert("La división es "+rta);
	
}

