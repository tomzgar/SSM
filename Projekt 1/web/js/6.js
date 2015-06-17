window.onload = initAll;

/*fucntion zmienKolorOdp(kolor){
	document.getElementById("buttonOdp1").style.color = kolor;
	document.getElementById("buttonOdp2").style.color = kolor;
	document.getElementById("buttonOdp3").style.color = kolor;
	document.getElementById("buttonOdp4").style.color = kolor;
	document.getElementById("buttonOdp5").style.color = kolor;
}

fucntion zmienKolor(kolor){
	document.getElementById("button1").style.color = kolor;
	document.getElementById("button2").style.color = kolor;
	document.getElementById("button3").style.color = kolor;
	document.getElementById("button4").style.color = kolor;
	document.getElementById("button5").style.color = kolor;
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

	document.getElementById(this.id).style.color = "blue";
	
	document.getElementById("buttonOdp1").disabled = false;
	document.getElementById("buttonOdp2").disabled = false;
	document.getElementById("buttonOdp3").disabled = false;
	document.getElementById("buttonOdp4").disabled = false;
	document.getElementById("buttonOdp5").disabled = false;
	
	switch(this.id){
		case "button1" :
			break;
		case "button2" :
			break;
		case "button3" :
			break;
		case "button4" :
			break;
		case "button5" :
			break;
		case "buttonOdp1" :
			if(document.getElementById("button4").style.color == "blue"){
				document.getElementById("button4").style.display = "hidden";
				document.getElementById(this.id).style.display = "hidden";
				//zmienKolorOdp("black");
				//zmienKolor("black");
				
				alert("dobra odpowiedü")
				document.getElementById("button4").style.color = "green";
				
				document.getElementById(this.id).style.color = "green";
			}
			else{
				//zmienKolorOdp("black");
				//zmienKolor("black");
				alert("zla odpowiedü");
				if(document.getElementById("button1").style.display == "blue") document.getElementById("button4").style.display = "black";
				if(document.getElementById("button2").style.display == "blue") document.getElementById("button4").style.display = "black";
				if(document.getElementById("button3").style.display == "blue") document.getElementById("button4").style.display = "black";
				if(document.getElementById("button4").style.display == "blue") document.getElementById("button4").style.display = "black";
				if(document.getElementById("button5").style.display == "blue") document.getElementById("button4").style.display = "black";
				
				document.getElementById(this.id).style.color = "black";
			}
			document.getElementById("buttonOdp1").disabled = true;
			document.getElementById("buttonOdp2").disabled = true;
			document.getElementById("buttonOdp3").disabled = true;
			document.getElementById("buttonOdp4").disabled = true;
			document.getElementById("buttonOdp5").disabled = true;
			this.color = "red";
			break;
		case "buttonOdp2" : 
			if(document.getElementById("button3").style.color == "blue"){
				document.getElementById("button3").style.display = "hidden";
				document.getElementById(this.id).style.display = "hidden";
				//zmienKolorOdp("black");
				//zmienKolor("black");

				alert("dobra odpowiedü")
				document.getElementById("button3").style.color = "green";
				
				document.getElementById(this.id).style.color = "green";
			}
			else{
				alert("zla odpowiedü");
				if(document.getElementById("button1").style.display == "blue") document.getElementById("button4").style.display = "black";
				if(document.getElementById("button2").style.display == "blue") document.getElementById("button4").style.display = "black";
				if(document.getElementById("button3").style.display == "blue") document.getElementById("button4").style.display = "black";
				if(document.getElementById("button4").style.display == "blue") document.getElementById("button4").style.display = "black";
				if(document.getElementById("button5").style.display == "blue") document.getElementById("button4").style.display = "black";
				
				document.getElementById(this.id).style.color = "black";
			}
			document.getElementById("buttonOdp1").disabled = true;
			document.getElementById("buttonOdp2").disabled = true;
			document.getElementById("buttonOdp3").disabled = true;
			document.getElementById("buttonOdp4").disabled = true;
			document.getElementById("buttonOdp5").disabled = true;
			break;
		case "buttonOdp3" :
			if(document.getElementById("button2").style.color == "blue"){
				document.getElementById("button2").style.display = "hidden";
				document.getElementById(this.id).style.display = "hidden";
				//zmienKolorOdp("black");
				//zmienKolor("black");

				alert("dobra odpowiedü")
				document.getElementById("button2").style.color = "green";
				
				document.getElementById(this.id).style.color = "green";
			}
			else{
				alert("zla odpowiedü");
				if(document.getElementById("button1").style.display == "blue") document.getElementById("button4").style.display = "black";
				if(document.getElementById("button2").style.display == "blue") document.getElementById("button4").style.display = "black";
				if(document.getElementById("button3").style.display == "blue") document.getElementById("button4").style.display = "black";
				if(document.getElementById("button4").style.display == "blue") document.getElementById("button4").style.display = "black";
				if(document.getElementById("button5").style.display == "blue") document.getElementById("button4").style.display = "black";
				
				document.getElementById(this.id).style.color = "black";
			}
			document.getElementById("buttonOdp1").disabled = true;
			document.getElementById("buttonOdp2").disabled = true;
			document.getElementById("buttonOdp3").disabled = true;
			document.getElementById("buttonOdp4").disabled = true;
			document.getElementById("buttonOdp5").disabled = true;
			break;
		case "buttonOdp4" :
			if(document.getElementById("button5").style.color == "blue"){
				document.getElementById("button5").style.display = "hidden";
				document.getElementById(this.id).style.display = "hidden";
				//zmienKolorOdp("black");
				//zmienKolor("black");

				alert("dobra odpowiedü")
				document.getElementById("button5").style.color = "green";
				
				document.getElementById(this.id).style.color = "green";
			}
			else{
				alert("zla odpowiedü");
				if(document.getElementById("button1").style.display == "blue") document.getElementById("button4").style.display = "black";
				if(document.getElementById("button2").style.display == "blue") document.getElementById("button4").style.display = "black";
				if(document.getElementById("button3").style.display == "blue") document.getElementById("button4").style.display = "black";
				if(document.getElementById("button4").style.display == "blue") document.getElementById("button4").style.display = "black";
				if(document.getElementById("button5").style.display == "blue") document.getElementById("button4").style.display = "black";
				
				document.getElementById(this.id).style.color = "black";
			}
			document.getElementById("buttonOdp1").disabled = true;
			document.getElementById("buttonOdp2").disabled = true;
			document.getElementById("buttonOdp3").disabled = true;
			document.getElementById("buttonOdp4").disabled = true;
			document.getElementById("buttonOdp5").disabled = true;
			break;
		case "buttonOdp5" : 
			if(document.getElementById("button1").style.color == "blue"){
				document.getElementById("button1").style.display = "hidden";
				document.getElementById(this.id).style.display = "hidden";
				//zmienKolorOdp("black");
				//zmienKolor("black");

				alert("dobra odpowiedü")
				document.getElementById("button1").style.color = "green";
				
				document.getElementById(this.id).style.color = "green";
			}
			else{
				alert("zla odpowiedü");
				if(document.getElementById("button1").style.display == "blue") document.getElementById("button4").style.display = "black";
				if(document.getElementById("button2").style.display == "blue") document.getElementById("button4").style.display = "black";
				if(document.getElementById("button3").style.display == "blue") document.getElementById("button4").style.display = "black";
				if(document.getElementById("button4").style.display == "blue") document.getElementById("button4").style.display = "black";
				if(document.getElementById("button5").style.display == "blue") document.getElementById("button4").style.display = "black";
				
				document.getElementById(this.id).style.color = "black";
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