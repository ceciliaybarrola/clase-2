/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var sueldo
    var rta

    sueldo=document.getElementById("importe").value;
    rta=parseInt(sueldo) % (parseInt(sueldo)*25/100);

    document.getElementById("resultado").value=rta;
}
