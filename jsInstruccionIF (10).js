function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var num;

	num=Math.floor(Math.random(1)*10 + 1);

	if (num >= 9)
	{
		alert("Exelente");
	}
	else
	{
		 if (num <= 4)
		 {
			 alert("Aprobó")
		 }
		 else
		 {
			 alert("Desaprobó")
		 }
	}

}//FIN DE LA FUNCIÓN
