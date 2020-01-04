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
  	document.getElementById('refuseBranch').className = 'appear2_2';
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
  	document.getElementById('lunch').className = 'appear4_2';
}
function Continue2(){
	document.getElementById('yourAdvice').className = 'dissapear';
	document.getElementById('juliet').className = 'appear5';
}
function solution(){
	document.getElementById('juliet').className = 'dissapear';
	document.getElementById('solutions').className = 'appear5_2';
}
function option1(){
	document.getElementById('solutions').className = 'dissapear';
	document.getElementById('option1').className = 'appear6';
}
function option2(){
	document.getElementById('solutions').className = 'dissapear';
	document.getElementById('option2').className = 'appear6_2';
}
function Continue3(){
	document.getElementById('option1').className = 'dissapear';
	document.getElementById('final').className = 'appear7';
}
function back(){
	document.getElementById('refuseBranch').className = 'dissapear';
	document.getElementById('section1').className = 'appear';
}
function back2(){
	document.getElementById('lunch').className = 'dissapear';
	document.getElementById('afterMarriage').className = 'appear3';
}
function back3(){
	document.getElementById('option2').className = 'dissapear';
	document.getElementById('solutions').className = 'appear5_2';
}