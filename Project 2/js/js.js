function open_more() {
	document.getElementById('for-open').style.display = 'flex';
	document.getElementById('button-for-hidden-2').style.display = 'flex';
	document.getElementById('button-for-hidden').style.display = 'none';

}	
function close_block() {
	document.getElementById('for-open').style.display = 'none';
	document.getElementById('button-for-hidden').style.display = 'flex';
	document.getElementById('button-for-hidden-2').style.display = 'none';
}