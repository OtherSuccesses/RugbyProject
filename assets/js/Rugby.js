,var manager = {
	"firstName": "",
	"lastName": "",
	"name": "",
	"teamManaged": ""
};

var player = {
	"firstName": "",
	"lastName": "",
	"name": "",
	"team": "",
	"position": 0,
	"dropKick": 0,
	"conversionKick":0,
	"kicking": 0,
	"offload": 0,
	"passing": 0,
	"speed": 0,
	"handling": 0,
	"stripping": 0,
	"acceleration": 0,
	"vision": 0,
	"teamwork": 0,
	""
}

$(document).ready(function(){
//Name submission code
	$("#name-submit").on("click", function(event){
		event.preventDefault();
		//capturing inputs
		manager.firstName = $("#first-name-entry").val();
		manager.lastName = $("#last-name-entry").val();
		manager.name = manager.firstName + " " + manager.lastName;
		manager.teamManaged = $("#team-name-entry").val();
		$("#player-setup-modal").toggle();
		//Displaying info in proper location
		$("#team-name-display").html(manager.teamManaged);
		$("#player-name-display").html(manager.name);
	});
});

function generatePlayer(){

}