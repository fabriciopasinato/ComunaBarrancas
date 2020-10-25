function mostrar(){
	document.getElementById('tbt1').style.display='block';
}
function mostrar2(){
	document.getElementById('tbt2').style.display='block';
}
function ocultar(){
	document.getElementById('tbt1').style.display='none';
}
function ocultar2(){
	document.getElementById('tbt2').style.display='none';
}

function color(x){
	console.log(x.value);
	var bodi = document.getElementById('bodi');
	bodi.style.backgroundImage = x.value;
}
