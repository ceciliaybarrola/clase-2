function mostrar()
{
//tomo la edad  
var edad

edad=document.getElementById("edad").value;

if (edad >= 18)
{
    alert("Sos mayor de edad");
}
if (edad < 18)
{
    alert("Sos menor de edad");
}
}//FIN DE LA FUNCIÓN