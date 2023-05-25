
document.getElementById("title") .style.color= "green"
document.getElementById("title") .style.backgroundColor= "silver"




let heading = document.getElementsByTagName('h3');
for (let i = 0; i < heading.length; i++) {
  heading[i].style.textTransform = 'uppercase';
}


const fruList = document.getElementById('fruList');
const newFruit = document.createElement('li');
newFruit.textContent = 'Apple';
fruList.appendChild(newFruit);


const vegList = document.getElementById('vegList');
const newVegetable = document.createElement('li');
newVegetable.textContent = 'Cabbage';
vegList.appendChild(newVegetable);
