/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo
    var rta

    sueldo=document.getElementById("sueldo").value;
    rta=parseInt(sueldo) + (parseInt(sueldo)*10/100);

    document.getElementById("resultado").value=rta;

	
}
