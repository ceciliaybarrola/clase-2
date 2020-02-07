/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var aporte;
    var descuento;

    aporte=document.getElementById("importe").value;
    descuento=parseInt(aporte) - (parseInt(aporte) /100* 25);
    document.getElementById("resultado").value=descuento;

}

