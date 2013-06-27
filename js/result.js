;(function () {

	function getRandomInt (min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	}	

	var isEven = function(someNumber){
    	return (someNumber%2 === 0) ? true : false;
	};

	var lb = document.getElementById("lb");
	var oz = document.getElementById("oz");

	lb.innerHTML = "";

	oz.innerHTML = "";


    var numlb = getRandomInt ( 1, 30);
    var numoz = getRandomInt (0, 15);
	lb.innerHTML = numlb + "LB";
	oz.innerHTML = numoz + "OZ";

    if (isEven(numlb))
    {
    	console.log("even");
    	document.getElementById("face").setAttribute("class", "smile");
    	
    } else
    {
    	console.log("od");
    	document.getElementById("face").setAttribute("class", "cry");
    }
	

	if (navigator.vibrate) {
		navigator.vibrate([1000]);
	}



})();