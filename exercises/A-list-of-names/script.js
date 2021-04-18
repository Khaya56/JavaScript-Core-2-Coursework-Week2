function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");

  arrayOfPeople.forEach(arrayObject => {
    let h1 = document.createElement('h1');
    h1.innerText = arrayObject.name;

    let text = document.createElement('h2');
    text.innerText = arrayObject.job;

    content.appendChild(h1);
    content.appendChild(text);
  });

}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
