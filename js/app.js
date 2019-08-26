
// ENCAPSULO TODAS LAS FUNCIONALIDADES DE LA CALCULADORA EN UN OBJETO JSON | Calculadora

var Calculadora = {
	/*
		PROPIEDADES - VARIABLES Y ATRIBUTOS:
		Se crean todas las teclas que hacen parte de la calculadora como propiedades o atributos.
	*/

	cero: 		'0',
	uno: 			'1',
	dos: 			'2',
	tres: 		'3',
	cuatro: 	'4',
	cinco: 		'5',
	seis: 		'6',
	siete: 		'7',
	ocho: 		'8',
	nueve: 		'9',
	on: 			'on',
	sign: 		'-',
	raiz: 		'raiz',
	dividido:	'/',
	por: 			'*',
	menos: 		'menos',
	mas: 			'+',
	igual: 		'=',
	punto: 		'.',
	display: 	'0',

	
	/*
		METODO QUE INICIA LA CALCULADORA PERMITIENDO:
		- Iniciar el Evento click de cada imagen
		- Efecto de Movimiento de tecla | al bajar y subir con mousedown y mouseup, usando la clase 'Tecla'
	*/
	iniciar: function() {
	
		document.getElementById('0').addEventListener("click", function() { Calculadora.metodoTeclaPresionada(Calculadora.cero); });	
		document.getElementById('1').addEventListener("click", function() { Calculadora.metodoTeclaPresionada(Calculadora.uno); });
		document.getElementById('2').addEventListener("click", function() { Calculadora.metodoTeclaPresionada(Calculadora.dos); });
		document.getElementById('3').addEventListener("click", function() { Calculadora.metodoTeclaPresionada(Calculadora.tres); });
		document.getElementById('4').addEventListener("click", function() { Calculadora.metodoTeclaPresionada(Calculadora.cuatro); });
		document.getElementById('5').addEventListener("click", function() { Calculadora.metodoTeclaPresionada(Calculadora.cinco); });
		document.getElementById('6').addEventListener("click", function() { Calculadora.metodoTeclaPresionada(Calculadora.seis); });
		document.getElementById('7').addEventListener("click", function() { Calculadora.metodoTeclaPresionada(Calculadora.siete); });
		document.getElementById('8').addEventListener("click", function() { Calculadora.metodoTeclaPresionada(Calculadora.ocho); });
		document.getElementById('9').addEventListener("click", function() { Calculadora.metodoTeclaPresionada(Calculadora.nueve); });
		document.getElementById('on').addEventListener("click", function() { Calculadora.metodoTeclaPresionada(Calculadora.on); });		
		document.getElementById('sign').addEventListener("click", function() { Calculadora.metodoTeclaPresionada(Calculadora.sign); });
		document.getElementById('punto').addEventListener("click", function() { Calculadora.metodoTeclaPresionada(Calculadora.punto); });			

		// TECLAS DE LAS 4 OPERACIONES
		document.getElementById('dividido').addEventListener("click", function() { Calculadora.metodoTeclaPresionada(Calculadora.dividido); });			
		document.getElementById('por').addEventListener("click", function() { Calculadora.metodoTeclaPresionada(Calculadora.por); });			
		document.getElementById('menos').addEventListener("click", function() { Calculadora.metodoTeclaPresionada(Calculadora.menos); });			
		document.getElementById('mas').addEventListener("click", function() { Calculadora.metodoTeclaPresionada(Calculadora.mas); });			
		document.getElementById('igual').addEventListener("click", function() { Calculadora.metodoTeclaPresionada(Calculadora.igual); });			

		var num1, num2, operacion = 0; // 2 Variables que capturan los 2 numeros para realizar cualquier operación.

		var tecla = document.getElementsByClassName('tecla');
		for (let i = 0; i < tecla.length; i++) {

			tecla[i].addEventListener("mousedown",function(){
		  	tecla[i].setAttribute("style","transform:scale(0.90,0.90)")
			});

			tecla[i].addEventListener("mouseup",function(){
		  	tecla[i].setAttribute("style","transform:scale(1,1)")
		  });
		}
	},

	metodoTeclaPresionada: function(valorTecla) {
		var pantalla = document.getElementById('display').innerHTML;

		var teclaPresionada = valorTecla;
		switch(teclaPresionada) {
			
			case '0':
				if(pantalla != 0) {
					if(pantalla.length < 8) {
						document.getElementById('display').innerHTML = pantalla + Calculadora.cero;
					}
				}
				break;


			case '1':
				if(pantalla == 0) {
					document.getElementById('display').innerHTML = Calculadora.uno;
				} 
				else {
					if(pantalla.length < 8) {
							document.getElementById('display').innerHTML = pantalla + Calculadora.uno;
					}
				}
				break;
			

			case '2':
				if(pantalla == 0) {
					document.getElementById('display').innerHTML = Calculadora.dos;
				}
				else {
					if(pantalla.length < 8) {
						document.getElementById('display').innerHTML = pantalla + Calculadora.dos;
					}
				}
				break;


			case '3':
				if(pantalla == 0) {
					document.getElementById('display').innerHTML = Calculadora.tres;
				}
				else {
					if(pantalla.length < 8) {
						document.getElementById('display').innerHTML = pantalla + Calculadora.tres;
					}
				}
				break;


			case '4':
				if(pantalla == 0) {
					document.getElementById('display').innerHTML = Calculadora.cuatro;
				}
				else {
					if(pantalla.length < 8) {
						document.getElementById('display').innerHTML = pantalla + Calculadora.cuatro;
					}
				}
				break;


			case '5':
				if(pantalla == 0) {
					document.getElementById('display').innerHTML = Calculadora.cinco;
				}
				else {
					if(pantalla.length < 8) {
						document.getElementById('display').innerHTML = pantalla + Calculadora.cinco;
					}
				}
				break;				


			case '6':
				if(pantalla == 0) {
					document.getElementById('display').innerHTML = Calculadora.seis;
				}
				else {
					if(pantalla.length < 8) {
						document.getElementById('display').innerHTML = pantalla + Calculadora.seis;
					}
				}
				break;


			case '7':
				if(pantalla == 0) {
					document.getElementById('display').innerHTML = Calculadora.siete;
				}
				else {
					if(pantalla.length < 8) {
						document.getElementById('display').innerHTML = pantalla + Calculadora.siete;
					}
				}
				break;		


			case '8':
				if(pantalla == 0) {
					document.getElementById('display').innerHTML = Calculadora.ocho;
				}
				else {
					if(pantalla.length < 8) {
						document.getElementById('display').innerHTML = pantalla + Calculadora.ocho;
					}
				}
				break;		


			case '9':
				if(pantalla == 0) {
					document.getElementById('display').innerHTML = Calculadora.nueve;
				}
				else {
					if(pantalla.length < 8) {
						document.getElementById('display').innerHTML = pantalla + Calculadora.nueve;
					}
				}
				break;


			case 'on':
				document.getElementById('display').innerHTML = 0;
				break;


			case '-':
				if(pantalla != 0) {
					if(pantalla.indexOf("-") == -1){
						if(pantalla.length < 8) {
							document.getElementById('display').innerHTML = Calculadora.sign + pantalla;
						}
					}
					else
					{
						if(pantalla.length < 8) {
							document.getElementById('display').innerHTML = pantalla * -1;
						}
					}
				}
				break;


			case '.':
				if (pantalla.indexOf(".") == -1){
					if(pantalla.length < 8) {
						document.getElementById('display').innerHTML = pantalla + Calculadora.punto;		
					}
				}						
				break;				


			case '/':
				num1 = document.getElementById('display').innerHTML;
				operacion = 'division';
				document.getElementById('display').innerHTML = '';						
				break;	


			case '*':
				num1 = document.getElementById('display').innerHTML;
				operacion = 'multiplica';
				document.getElementById('display').innerHTML = '';						
				break;


			case 'menos':
				num1 = document.getElementById('display').innerHTML;
				operacion = 'resta';
				document.getElementById('display').innerHTML = '';	
				break;


			case '+':
				num1 = document.getElementById('display').innerHTML;
				operacion = 'suma';
				document.getElementById('display').innerHTML = '';							
				break;				


			case '=':

				num2 = document.getElementById('display').innerHTML;

				var op = operacion;
				switch(op) {

					case 'suma':
							var resultOperacion = parseFloat(num1) + parseFloat(num2);
							if(resultOperacion.length < 8) {
								document.getElementById('display').innerHTML = resultOperacion;
							}
							else {
								resultOperacion = resultOperacion.toString().substring(0,8);
								document.getElementById('display').innerHTML = resultOperacion;
							}
							break;


					case 'resta':
							var resultOperacion = parseFloat(num1) - parseFloat(num2);
							if(resultOperacion.length < 8) {
								document.getElementById('display').innerHTML = resultOperacion;
							}
							else {
								resultOperacion = resultOperacion.toString().substring(0,8);
								document.getElementById('display').innerHTML = resultOperacion;
							}
							break;


					case 'multiplica':
							var resultOperacion = parseFloat(num1) * parseFloat(num2);
							if(resultOperacion.length < 8) {
								document.getElementById('display').innerHTML = resultOperacion;
							}
							else {
								resultOperacion = resultOperacion.toString().substring(0,8);
								document.getElementById('display').innerHTML = resultOperacion;
							}
							break;


					case 'division':
							var resultOperacion = parseFloat(num1) / parseFloat(num2);
							if(resultOperacion.length < 8) {
								document.getElementById('display').innerHTML = resultOperacion;
							}
							else {
								resultOperacion = resultOperacion.toString().substring(0,8);
								document.getElementById('display').innerHTML = resultOperacion;
							}		
							break;


					default:
				}
		} 	
	}

}

Calculadora.iniciar();