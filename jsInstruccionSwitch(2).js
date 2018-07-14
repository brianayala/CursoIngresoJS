function mostrar()
{
//tomo la edad  
var mes;
mes = document.getElementById('mes').value;

switch(mes){
	case "enero":
	case "febrero":
	case "marzo":
	case "abril":
	case "mayo":
	case "junio":
	alert("falta para el invierno");
	break;
	case "julio":
	case "agosto":
	alert ("estamos en invierno");
	break;
	case "septiembre":
	case "octubre":
	case "noviembre":
	case "diciembre":
	alert ("ya pasamos invierno");
	break;
}



}//FIN DE LA FUNCIÓN