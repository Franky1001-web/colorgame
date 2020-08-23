var num=6;
var colors=generateRandomColor(6);
var colorsPicked= document.querySelectorAll(".square");
var correctColorPicked=pickColor();
var messageDisplay=document.querySelector("#correct");
var reset=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");
for(var i=0;i<modeButtons.length;i++)
{
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent==="Easy" ? num=3:num=6;
		change();
	});
}
function change(){
	reset.textContent="NEW COLORS";
	colors=generateRandomColor(num);
	correctColorPicked=pickColor();
	document.querySelector("h1").textContent=correctColorPicked;
	document.querySelector("#head").style.backgroundColor="steelblue";
	for(var i=0;i<colorsPicked.length;i++)
		{ 	colorsPicked[i].style.display="block";
			if(colors[i])
				colorsPicked[i].style.backgroundColor=colors[i];
			else
				colorsPicked[i].style.display="none";
		}
		messageDisplay.textContent="";
}
reset.addEventListener("click",function(){
	change();
});
document.querySelector("h1").textContent=correctColorPicked;
for(var i=0;i<colors.length;i++)
{
	colorsPicked[i].style.backgroundColor=colors[i];

	colorsPicked[i].addEventListener("click", function(){
		if(this.style.backgroundColor===correctColorPicked)
			{	
				messageDisplay.textContent="Correct";
				changeAll();
				reset.textContent="PLAY AGAIN?";

			}
		else
			{this.style.backgroundColor="#232323";
			 messageDisplay.textContent="Try Again";
	}
	});
}
function changeAll(){
	for(var i=0;i<colorsPicked.length;i++)
	{
		colorsPicked[i].style.backgroundColor=correctColorPicked;
	}
	document.querySelector("#head").style.backgroundColor=correctColorPicked;
}
function pickColor(){
	var random=Math.floor(Math.random()*num);
	return colors[random];
}
function generateRandomColor(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(generateColors());
	}
	return arr;
}
function generateColors()
{
	var red=Math.floor(Math.random()*256);
	var blue=Math.floor(Math.random()*256);
	var green= Math.floor(Math.random()*256);

	return "rgb("+red+", "+green +", " + blue+")";
}
