var counter = 1;

function changeImg()
{
	counter = counter + 1;
	var myImg = document.getElementById('myImg');
	myImg.src = "fl"+counter+".jpg";
	if (counter==7) {counter = 0;}


	// myImg.style.width ='600px';
	// myImg.style.height ='500px';
	// myImg.style.border = "5px red solid";

	
	
	
}