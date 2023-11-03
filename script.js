
//Example 1:
document.body.style.backgroundColor = 'yellow';

//Example 2:
document.getElementById('example2').style.fontSize = '24px';

//Example 3:
document.querySelector("h2").style.color = "red";

//Example 4:
document.getElementById("example4").style.border = "solid";

//Examply 5:
document.getElementById("example5").style.backgroundImage = "url(https://clipartix.com/wp-content/uploads/2017/07/Thanksgiving-turkey-free-clip-art.png)";

document.getElementById("example5").style.backgroundSize = "200px";

//Example 6:
document.getElementById('example6').style.display = 'none';

//Example 7:
const listItems = document.querySelectorAll("li");
// let listItems = [1,2,3]
// listItems.style.color = "green";


listItems.forEach((item)=>{
  item.style.color = "green";  
})




