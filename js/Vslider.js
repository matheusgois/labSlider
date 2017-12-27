init();
var itens = ["Perfil", "Historico", "Fornecedor", "Propostas", "Propostas", "Propostas", "Propostas", "Propostas", "Propostas"];

function init(){
	document.getElementById("0").classList.add("leftWizard");
	document.getElementById("1").classList.add("leftWizard");
	document.getElementById("2").classList.add("leftWizard");
	document.getElementById("3").classList.add("leftWizard");
	document.getElementById("4").classList.add("center");
	document.getElementById("5").classList.add("rightWizard");
	document.getElementById("6").classList.add("rightWizard");
	document.getElementById("7").classList.add("rightWizard");
	document.getElementById("8").classList.add("rightWizard");

	document.getElementById("5").style.zIndex = 5;
	document.getElementById("6").style.zIndex = 4;
	document.getElementById("7").style.zIndex = 3;
	document.getElementById("8").style.zIndex = 2;
};

	function updateValue(meuValor){

		for(var i=0;i<=8;i++){
			document.getElementById(""+i+"").classList.remove("center");
			document.getElementById(""+i+"").classList.remove("rightWizard");
			document.getElementById(""+i+"").classList.remove("leftWizard");
			document.getElementById(""+i+"").style.zIndex = "0";
		}

		for(var i=0; i < itens.length; i++){
			var currentNumber = document.getElementById(""+ i +"");
			if(i < meuValor){
				currentNumber.classList.add('leftWizard');
			}else if(i > meuValor){
				var z = 10 - i;
				currentNumber.classList.add('rightWizard');
				currentNumber.style.zIndex = z;
			}else{
				currentNumber.classList.add('center');
				currentNumber.style.zIndex = "10";
			}
		}
	}
