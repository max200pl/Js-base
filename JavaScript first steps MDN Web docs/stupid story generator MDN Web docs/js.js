const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';



const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk",
                 "turned into a slug and crawled away"];

//const newStory = storyText;  // для создания новой случайной истории

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    // Math.floor() округление до целого;
    //
    return array[random];
}

const xItem = randomValueFromArray(insertX);
const yItem = randomValueFromArray(insertY);
const zItem = randomValueFromArray(insertZ);


randomize.addEventListener('click', result);  //при нажатии на кнопку randomize функция result запустится

function result() {

    newStory = storyText.replace(":insertx:", xItem);
    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);


    if (customName.value !== '') {
       let name = customName.value;
        newStory = newStory.replace('Bob',name);
    }

   if  (document.getElementById("uk").checked) {

      let weight = Math.round(300/14)+'stone';   //Math.round(округление к блежайшему целому)

      let temperature =  Math.round((94-32)*5/9)+'centigrade';

      newStory = newStory.replace("94 fahrenheit",weight);
      newStory = newStory.replace("300 pounds",temperature);
   }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}


