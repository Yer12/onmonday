function check(n){
	var p = document.getElementsByClassName("container");
	if (p[n-1].style.color === "yellow") {
	    p[n-1].style.color = "gray";
	} else {
	    p[n-1].style.color = "yellow";
	}
}