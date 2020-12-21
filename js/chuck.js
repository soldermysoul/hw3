$(document).ready(function(){

			$("button").on("click",getjoke);

ChuckCategories();


function ChuckCategories(){
		let Category = $("#Display").val();
	
		let chuckcats = ["Animal","Career","Celebrity","Dev","Fashion","Food","History","Money","Movie","Music","Political","Religion","Science","Sport","Travel"];

		
		for (let i = 0; i < chuckcats.length; i++) {
	 		$("#Display").append(`<option value="${chuckcats[i]}">${chuckcats[i]} </option>`);
			
		}
	
	
	
 }
 
 
async function getjoke(){

 
let Category = $("#Display").val();
let url = `https://api.chucknorris.io/jokes/random?category=` + Category.toLowerCase();
let response = await fetch(url);
let data = await response.text();
var arr = jQuery.parseJSON(data);
console.log(arr['value']);

			
//return Category;
$("#What").html(arr['value']);
			
}


});