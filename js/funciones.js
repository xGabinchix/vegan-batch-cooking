var tuppers=["https://1.bp.blogspot.com/-YgxofXu2Wm8/WJmxWb1YsOI/AAAAAAABBmI/XDHtDqWTKgkENQucpeGqFi99QrBQVS6ygCLcB/s800/tupperware_empty.png",
	"https://1.bp.blogspot.com/-wv_C_lOT9Z8/WJmxbEw_D5I/AAAAAAABBmY/TR8xpAQ4RtcI7PbW2Fi4X60dZiGviMqVACLcB/s800/tupperware_red.png",
	"https://2.bp.blogspot.com/-MrKoBUUiLMk/WJmxbNY6_iI/AAAAAAABBmU/vV4DqFzgExgbx5LjRb8jTMlE_2bC9V2pwCLcB/s800/tupperware_green.png",
	"https://2.bp.blogspot.com/-3gv8QGvr0AQ/WJmxa81xIqI/AAAAAAABBmQ/4AfRJHlQ5EsbjgHUseJwELSPOovrrsQTACLcB/s800/tupperware_food.png",
	"https://1.bp.blogspot.com/-NiA6new6r9s/VTRUih88CDI/AAAAAAAAtGI/QQ4WVtfEVPs/s400/vegetable_jar_salad.png",
	"https://2.bp.blogspot.com/-Im1V2I6h-ZM/W5H_zG9IHYI/AAAAAAABOvs/NBNcZ2ZJRiQ7YsZW3yX0C7Z4Vog0M0WBQCLcBGAs/s800/food_ra-men_tanmen.png",
	"https://1.bp.blogspot.com/-h8_NTT-QsUI/V8VE-w5wYkI/AAAAAAAA9Wk/LtiP_XDfKh8b3KBBVR5Cj_t6-bQmN64YwCLcB/s800/food_tortilla.png",
	"https://3.bp.blogspot.com/-Fa6AIKVnh1c/VVGVbTWRGkI/AAAAAAAAtlY/MlG36yqDSxw/s800/food_vegetable_sald.png",
	"https://3.bp.blogspot.com/-5aUmUnScPpg/XAY6O31eoWI/AAAAAAABQiQ/lXxCuTv1HDguDRe91Ti6yn6qOUTAvdeYgCLcBGAs/s800/soup_vegetable.png",
	"https://1.bp.blogspot.com/-FejQga4B0f0/UWyk7R0FcoI/AAAAAAAAQow/odm0BjTPbQM/s1600/vegetable_curry.png"]; /*diferentes imágenes png que se reemplazarán entre sí acorde a la priemra función*/

var randomLunches1=document.querySelectorAll(".plan .lunchrandom1"); /*grid vacíos por llenar*/
var randomLunches2=document.querySelectorAll(".plan .lunchrandom2"); /*grid vacíos por llenar*/
var randomDinners1=document.querySelectorAll(".plan .dinnerrandom1"); /*grid vacíos por llenar*/
var randomDinners2=document.querySelectorAll(".plan .dinnerrandom2"); /*grid vacíos por llenar*/
var lunches=document.querySelectorAll(".plan .lunch"); /*elementos para meter en el grid*/
var dinners=document.querySelectorAll(".plan .dinner"); /*elementos para meter en el grid*/
const boton=document.querySelector(".plan .botonRandom"); /*botón debajo del grid*/
const imgtupper=document.querySelector(".tupper"); /*tupper o platillo que se mueve en el index*/
const navegacion=document.querySelector("nav");/*navegación en el header con la lista de links a diferentes partes de proyecto*/
const abrir=document.querySelector(".abrirmenu");/*botón para abrir el menú desplegable*/
const cerrar=document.querySelector(".cerrarmenu");/*botón para cerrar el menú desplegable*/
const cabeza=document.querySelector("header");
const logo=document.querySelector(".logovolador");

/*Evento click que despliega el menú*/
abrir.addEventListener("click",function(){
	navegacion.classList.add("desplegado");
	logo.style.display="none";/*se quita el logo, debido a que su z-index hace que aparezca sobre la navegación*/
});
cerrar.addEventListener("click",function(){
	navegacion.classList.remove("desplegado");
	logo.style.display="block";/*se vuelve a colocar el logo al cerrar la navegación*/
});

/*Función randomTupper: hace que cada vez que se actualice el index, cambie aleatoriamente el src del elemento volador detrás del logo, de entre las opciones del array de la variable tuppers
*/
function randomTupper(){
	let tupperIndex= Math.floor(Math.random()*tuppers.length);
	imgtupper.src= tuppers[tupperIndex];
};
if(imgtupper){
	randomTupper();
}

/*Evento click para la función que genera almuerzos y cenas random en el .randomgrid*/
boton.addEventListener("click", function() {
	var randomIndex= Math.floor(Math.random()*lunches.length);
	randomLunches1.forEach(function(randomL){
		randomL.className=lunches[randomIndex].className;
		randomL.innerHTML=lunches[randomIndex].innerHTML;
	});
	var randomIndex2= Math.floor(Math.random()*lunches.length);
	while (randomIndex==randomIndex2){
		randomIndex2= Math.floor(Math.random()*lunches.length);/*este bucle evita que los almuerzos se repitan*/
	};
	randomLunches2.forEach(function(randomL){
		randomL.className=lunches[randomIndex2].className;
		randomL.innerHTML=lunches[randomIndex2].innerHTML; 
	});
	var randomIndex3= Math.floor(Math.random()*dinners.length);
	randomDinners1.forEach(function(randomL){
		randomL.className=dinners[randomIndex3].className;
		randomL.innerHTML=dinners[randomIndex3].innerHTML;
	});
	var randomIndex4= Math.floor(Math.random()*dinners.length);
	while (randomIndex3==randomIndex4){
		randomIndex4=Math.floor(Math.random()*dinners.length);/*este bucle evita que las cenas se repitan*/
	};
	randomDinners2.forEach(function(randomL){
		randomL.className=dinners[randomIndex4].className;
		randomL.innerHTML=dinners[randomIndex4].innerHTML;
	});
});



