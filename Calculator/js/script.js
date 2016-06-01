function press(button){
			document.getElementById("result").value += button.innerHTML;
		}
function sum(){
	var sum = eval(document.getElementById("result").value);
	document.getElementById("result").value = sum ;
}
function reset(){
	document.getElementById("result").value = "" ;
}
function binhPhuong(){
	var x = document.getElementById("result").value;
	document.getElementById("result").value = x*x ;
}
function giaiThua(){
	var n = document.getElementById("result").value ;
	if(n == 0 || n == 1){
		document.getElementById("result").value = 1 ;
	}
	else if ( n < 0 ){
		document.getElementById("result").value = "Khong co giai thua so am" ;
	}
	else {
		var giaiThua = 1 ;
		for (var i = 1; i <= n; i++) {
			giaiThua = giaiThua*i ;
		}
		document.getElementById("result").value = giaiThua ;
	}
}
function khaiCan(){
	var x = document.getElementById("result").value ;
	var kq = Math.sqrt(x) ;
	document.getElementById("result").value = kq ;
}
function phanTram(){
	var x = document.getElementById("result").value;
	document.getElementById("result").value = x/100 ;
}
function sin(){
	var x = document.getElementById("result").value ;
	var kq = Math.sin(x) ;
	document.getElementById("result").value = kq ;
}
function cos(){
	var x = document.getElementById("result").value ;
	var kq = Math.cos(x) ;
	document.getElementById("result").value = kq ;
}
function tan(){
	var x = document.getElementById("result").value ;
	var kq = Math.tan(x) ;
	document.getElementById("result").value = kq ;
}