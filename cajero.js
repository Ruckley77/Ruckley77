function entregarDinero () {
	var t = document.getElementById("dinero");
	dinero = parseInt(t.value);
	for (var bi of caja){
		if (dinero > 0 ) {
			div = Math.floor(dinero / bi.valor);
			if (div > bi.cantidad) {
				papeles = bi.cantidad;
			}
			else {
				papeles = div;
			}
			entregado.push( new Billete(bi.valor, papeles) );
			dinero = dinero - (bi.valor * papeles);
		}
	}

	if (dinero > 0) {

		resultado.innerHTML = "Soy un cajero malo y no puedo darte esa cantidad :( ";
	}

	else {
		for(var e of entregado) {
			if (e.cantidad > 0) {
				resultado.innerHTML = resultado.innerHTML + e.cantidad + " Billetes de $ " + e.valor + "<br/>";
			}
		}
	}
}

var caja = [];
var entregado = [];
var dinero;
var div = 0;
var papeles = 0;

caja.push( new Billete(100, 50) );
caja.push( new Billete(50, 50) );
caja.push( new Billete(20, 50) );

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer")

b.addEventListener("click", entregarDinero)

/* en vez de mostrar texto, mostrar imagenes para los billetes,
como agregar objetos a un elemento de document object model.

la caja se empiece a quedar vacia, sin tener que recargar la pagina, que le reste a la caja los billetes que colocaste
en entregado

y que siempre sepa cuanto valor tiene el atm y cuanto valor ha entregado por cada una de las sesiones. */