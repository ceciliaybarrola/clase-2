/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    var vnom;
    var vedad;

    vnom=(document.getElementById("elNombre").value);
    vedad=(document.getElementById("laEdad").value);

    alert("Usted se llama "+vnom+" y tiene "+vedad+" años.")
}

