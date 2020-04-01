
function clickHandler(i){ 

	let note = (i.srcElement.id);
	console.log(note);

	if (document.getElementById(note).style.backgroundColor == "white"){
		document.getElementById(note).style.backgroundColor = "black";		
	}

	else if (document.getElementById(note).style.backgroundColor == "black"){
		document.getElementById(note).style.backgroundColor = "white";		
	}

}

function box() {

	console.log('hi');

	let num = Number((document.getElementById("numInput").value));

	let divArray = [];

	for (let i = 0; i < num; i++){

		let div = document.createElement('div');
		div.id = i;
		divArray.push(i);
		document.body.appendChild(div);

	}

	console.log(divArray);

	for (let i = 0; i < num; i++){

		document.getElementById(divArray[i]).style.backgroundColor = "white";

		document.getElementById(divArray[i]).style.float = "left";

		document.getElementById(divArray[i]).style.height = 98/divArray.length + "vw";
		document.getElementById(divArray[i]).style.width = 98/divArray.length + "vw";
		
	}

	for (let i = 0; i < num; i++){

		let element = document.getElementById(divArray[i]); 
		element.addEventListener('click', clickHandler);
		
	}


} 