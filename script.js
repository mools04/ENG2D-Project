function yes(){
	document.getElementById('intro').className = 'dissapear';
	document.getElementById('section1').className = 'appear';
}
function marryThem(){
	document.getElementById('section1').className = 'dissapear';
	document.getElementById('marryBranch').className = 'appear2';
}
function refuse(){
	document.getElementById('section1').className = 'dissapear';
  	document.getElementById('refuseBranch').className = 'appear2';
}
function Continue(){
 	document.getElementById('marryBranch').className = 'dissapear';
 	document.getElementById('afterMarriage').className = 'appear3';
}
function advice(){
  	document.getElementById('afterMarriage').className = 'dissapear';
  	document.getElementById('yourAdvice').className = 'appear4';
}
function lunch(){
  	document.getElementById('afterMarriage').className = 'dissapear';
  	document.getElementById('lunch').className = 'appear4';
}
function Continue2(){
	document.getElementById('yourAdvice').className = 'dissapear';
	document.getElementById('juliet').className = 'appear5';
}
