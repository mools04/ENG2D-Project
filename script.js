function yes(){
	document.getElementById('intro').className = 'dissapear';
	document.getElementById('section1').className = 'appear';
}
function no(){
	alert('Are you sure?');
}
function marryThem(){
	document.getElementById('section1').className = 'dissapear';
	document.getElementById('marryBranch').className = 'appear2';
}
function refuse(){
	document.getElementById('section1').className = 'dissapear';
  	document.getElementById('refuseBranch').className = 'appear2';
}
