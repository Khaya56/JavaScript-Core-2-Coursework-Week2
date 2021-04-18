function shoppingList(arrayOfPeople) {
  // Write your code here...
  let content = document.querySelector("#content");

  let unorderedList = document.createElement('ul');
  unorderedList.innerText = 'Shopping List';

  shopping.forEach(listItem =>{
    let item = document.createElement('li');
    item.innerText = listItem;

    unorderedList.appendChild(item);
    content.appendChild(unorderedList);

  });

}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
