function plan(elm) {
	document.all[elm].align = "left";
	eval('document.all[elm].innerHTML = ' + elm +'Text;');
}
