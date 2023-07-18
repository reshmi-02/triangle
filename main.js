var n=prompt("enter the number");
for(let i=1;i<=n;i++){
	for(let j=n;j>i;j--){
		document.write("&nbsp ");
	}
	for(let k=1;k<=i;k++){  
		document.write("*");
	}
	for(let l=1;l<=i;l++){  
		document.write("*");
	}
	document.write("<br>");
}