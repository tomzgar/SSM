window.onload = initAll;

var b1 = 0;
var b2 = 0;
var b3 = 0;
var b4 = 0;
var b5 = 0;

/*fucntion zmienKolorOdp(kolor){
	document.getElementById("buttonOdp1").style.background = kolor;
	document.getElementById("buttonOdp2").style.background = kolor;
	document.getElementById("buttonOdp3").style.background = kolor;
	document.getElementById("buttonOdp4").style.background = kolor;
	document.getElementById("buttonOdp5").style.background = kolor;
}

fucntion zmienKolor(kolor){
	document.getElementById("button1").style.background = kolor;
	document.getElementById("button2").style.background = kolor;
	document.getElementById("button3").style.background = kolor;
	document.getElementById("button4").style.background = kolor;
	document.getElementById("button5").style.background = kolor;
}*/


function initAll(){
	document.getElementById("buttonOdp1").disabled = true;
	document.getElementById("buttonOdp2").disabled = true;
	document.getElementById("buttonOdp3").disabled = true;
	document.getElementById("buttonOdp4").disabled = true;
	document.getElementById("buttonOdp5").disabled = true;
	
	//zmienKolorOdp("grey");
	
	document.getElementById("button1").onclick = funkcja;
	document.getElementById("button2").onclick = funkcja;
	document.getElementById("button3").onclick = funkcja;
	document.getElementById("button4").onclick = funkcja;
	document.getElementById("button5").onclick = funkcja;
	
	document.getElementById("buttonOdp1").onclick = funkcja;
	document.getElementById("buttonOdp2").onclick = funkcja;
	document.getElementById("buttonOdp3").onclick = funkcja;
	document.getElementById("buttonOdp4").onclick = funkcja;
	document.getElementById("buttonOdp5").onclick = funkcja;
}

function funkcja(){
	document.getElementById(this.id).style.background = "#81F7F3";
	
	document.getElementById("buttonOdp1").disabled = false;
	document.getElementById("buttonOdp2").disabled = false;
	document.getElementById("buttonOdp3").disabled = false;
	document.getElementById("buttonOdp4").disabled = false;
	document.getElementById("buttonOdp5").disabled = false;
	
	switch(this.id){
		case "button1" :
		b1 = 1;
			break;
		case "button2" :
		b2 = 1;
			break;
		case "button3" :
		b3 = 1;
			break;
		case "button4" :
		b4 = 1;
			break;
		case "button5" :
		b5 = 1;
			break;
		case "buttonOdp1" :
			if(b4 == 1){
				document.getElementById("button4").style.background = "hidden";
				document.getElementById(this.id).style.background = "hidden";
				//zmienKolorOdp("black");
				//zmienKolor("black");
				
				alert("dobra odpowiedz")
				document.getElementById("button4").style.background = "green";
				
				document.getElementById(this.id).style.background = "green";
			}
			else{
				//zmienKolorOdp("black");
				//zmienKolor("black");
				alert("zla odpowiedz");
				if(document.getElementById("button1").style.background == "#81F7F3") document.getElementById("button4").style.background = "black";
				if(document.getElementById("button2").style.background == "#81F7F3") document.getElementById("button4").style.background = "black";
				if(document.getElementById("button3").style.background == "#81F7F3") document.getElementById("button4").style.background = "black";
				if(document.getElementById("button4").style.background == "#81F7F3") document.getElementById("button4").style.background = "black";
				if(document.getElementById("button5").style.background == "#81F7F3") document.getElementById("button4").style.background = "black";
				
				document.getElementById(this.id).style.background = "black";
				b1 = 0;
				b2 = 0;
				b3 = 0;
				b4 = 0;
				b5 = 0;
			}
			document.getElementById("buttonOdp1").disabled = true;
			document.getElementById("buttonOdp2").disabled = true;
			document.getElementById("buttonOdp3").disabled = true;
			document.getElementById("buttonOdp4").disabled = true;
			document.getElementById("buttonOdp5").disabled = true;
			this.background = "red";
			break;
		case "buttonOdp2" : 
			if(b3 == 1){
				document.getElementById("button3").style.background = "hidden";
				document.getElementById(this.id).style.background = "hidden";
				//zmienKolorOdp("black");
				//zmienKolor("black");

				alert("dobra odpowiedz")
				document.getElementById("button3").style.background = "green";
				
				document.getElementById(this.id).style.background = "green";
			}
			else{
				alert("zla odpowiedz");
				if(document.getElementById("button1").style.background == "#81F7F3") document.getElementById("button4").style.background = "black";
				if(document.getElementById("button2").style.background == "#81F7F3") document.getElementById("button4").style.background = "black";
				if(document.getElementById("button3").style.background == "#81F7F3") document.getElementById("button4").style.background = "black";
				if(document.getElementById("button4").style.background == "#81F7F3") document.getElementById("button4").style.background = "black";
				if(document.getElementById("button5").style.background == "#81F7F3") document.getElementById("button4").style.background = "black";
				
				document.getElementById(this.id).style.background = "black";
				b1 = 0;
				b2 = 0;
				b3 = 0;
				b4 = 0;
				b5 = 0;
			}
			document.getElementById("buttonOdp1").disabled = true;
			document.getElementById("buttonOdp2").disabled = true;
			document.getElementById("buttonOdp3").disabled = true;
			document.getElementById("buttonOdp4").disabled = true;
			document.getElementById("buttonOdp5").disabled = true;
			break;
		case "buttonOdp3" :
			if(b2 == 1){
				document.getElementById("button2").style.background = "hidden";
				document.getElementById(this.id).style.background = "hidden";
				//zmienKolorOdp("black");
				//zmienKolor("black");

				alert("dobra odpowiedz")
				document.getElementById("button2").style.background = "green";
				
				document.getElementById(this.id).style.background = "green";
			}
			else{
				alert("zla odpowiedz");
				if(document.getElementById("button1").style.background == "#81F7F3") document.getElementById("button4").style.background = "black";
				if(document.getElementById("button2").style.background == "#81F7F3") document.getElementById("button4").style.background = "black";
				if(document.getElementById("button3").style.background == "#81F7F3") document.getElementById("button4").style.background = "black";
				if(document.getElementById("button4").style.background == "#81F7F3") document.getElementById("button4").style.background = "black";
				if(document.getElementById("button5").style.background == "#81F7F3") document.getElementById("button4").style.background = "black";
				
				document.getElementById(this.id).style.background = "black";
								b1 = 0;
				b2 = 0;
				b3 = 0;
				b4 = 0;
				b5 = 0;
			}
			document.getElementById("buttonOdp1").disabled = true;
			document.getElementById("buttonOdp2").disabled = true;
			document.getElementById("buttonOdp3").disabled = true;
			document.getElementById("buttonOdp4").disabled = true;
			document.getElementById("buttonOdp5").disabled = true;
			break;
		case "buttonOdp4" :
			if(b4 == 1){
				document.getElementById("button5").style.background = "hidden";
				document.getElementById(this.id).style.background = "hidden";
				//zmienKolorOdp("black");
				//zmienKolor("black");

				alert("dobra odpowiedz")
				document.getElementById("button5").style.background = "green";
				
				document.getElementById(this.id).style.background = "green";
			}
			else{
				alert("zla odpowiedz");
				if(document.getElementById("button1").style.background == "#81F7F3") document.getElementById("button4").style.background = "black";
				if(document.getElementById("button2").style.background == "#81F7F3") document.getElementById("button4").style.background = "black";
				if(document.getElementById("button3").style.background == "#81F7F3") document.getElementById("button4").style.background = "black";
				if(document.getElementById("button4").style.background == "#81F7F3") document.getElementById("button4").style.background = "black";
				if(document.getElementById("button5").style.background == "#81F7F3") document.getElementById("button4").style.background = "black";
				
				document.getElementById(this.id).style.background = "black";
								b1 = 0;
				b2 = 0;
				b3 = 0;
				b4 = 0;
				b5 = 0;
			}
			document.getElementById("buttonOdp1").disabled = true;
			document.getElementById("buttonOdp2").disabled = true;
			document.getElementById("buttonOdp3").disabled = true;
			document.getElementById("buttonOdp4").disabled = true;
			document.getElementById("buttonOdp5").disabled = true;
			break;
		case "buttonOdp5" : 
			if(b1 == 1){
				document.getElementById("button1").style.background = "hidden";
				document.getElementById(this.id).style.background = "hidden";
				//zmienKolorOdp("black");
				//zmienKolor("black");

				alert("dobra odpowiedz")
				document.getElementById("button1").style.background = "green";
				
				document.getElementById(this.id).style.background = "green";
			}
			else{
				alert("zla odpowiedz");
				if(document.getElementById("button1").style.background == "#81F7F3") document.getElementById("button4").style.background = "black";
				if(document.getElementById("button2").style.background == "#81F7F3") document.getElementById("button4").style.background = "black";
				if(document.getElementById("button3").style.background == "#81F7F3") document.getElementById("button4").style.background = "black";
				if(document.getElementById("button4").style.background == "#81F7F3") document.getElementById("button4").style.background = "black";
				if(document.getElementById("button5").style.background == "#81F7F3") document.getElementById("button4").style.background = "black";
				
				document.getElementById(this.id).style.background = "black";
								b1 = 0;
				b2 = 0;
				b3 = 0;
				b4 = 0;
				b5 = 0;
			}
			document.getElementById("buttonOdp1").disabled = true;
			document.getElementById("buttonOdp2").disabled = true;
			document.getElementById("buttonOdp3").disabled = true;
			document.getElementById("buttonOdp4").disabled = true;
			document.getElementById("buttonOdp5").disabled = true;
			break;
		default:
	
	}
}