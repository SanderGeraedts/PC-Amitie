window.onload = function() {
	var navigation = document.getElementById("head");
	var navButton = document.getElementById("menuToggle");

	if(navButton){
		navButton.addEventListener("click", function(){
			if(navigation.className == "open"){
				navigation.className = "closed";
			} else{
				navigation.className = "open";
			}});
	}
}