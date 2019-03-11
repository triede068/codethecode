function allonger(signe){
	window.document.calculette.affiche.value = window.document.calculette.affiche.value + signe ;

}
function evaluer(){
	var x = 0;
	x = eval(window.document.calculette.affiche.value);
	window.document.calculette.affiche.value = x;
}

function supp(){
	var x = 0;
	x = window.document.calculette.affiche.value.length - 1;
   	window.document.calculette.affiche.value = X;
}
function signe(){
   window.document.calculette.affiche.value = "-"
}
