function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño){
	case "enero":
	case "marzo":
	case "abril":
	case "mayo":
	case "junio":
	case "julio":
	case "agosto":
	case "septiembre":
	case "octubre":
	case "noviembre":
	case "diciembre":
	alert ("este mes tiene 30 o mas dias");
	break;
		case "febrero":
		alert("este mes no tiene mas de 29 dias");
		break;
			default;


}

	
	


}//FIN DE LA FUNCIÓN