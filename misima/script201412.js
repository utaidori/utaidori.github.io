function plan(elm) {
//	document.all[elm].align = "left";
	document.all[elm].style.marginTop = "0px";
	eval('document.all[elm].innerHTML = ' + elm +'Text;');
}
