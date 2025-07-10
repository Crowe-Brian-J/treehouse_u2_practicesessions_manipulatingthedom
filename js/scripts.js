//set heading so I'm not doing it 20x
const heading = document.querySelector('h1')
//random math for colors
const randomNumber = () => Math.floor(Math.random() * 256)
//random color picker
const randomColorPicker = () => {
  return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
}

// 1: Set the text of the <h1> element
heading.textContent = 'I created this.'

// 2: Set the color of the <h1> to a different color
heading.style.color = randomColorPicker()

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
const descParagraph = document.getElementsByClassName('desc')[0]
descParagraph.innerHTML = `This is <strong>strong</strong>. This is <i>italic</i>.`

// 4: Set the class of the <ul> to 'list'
const ul = document.getElementsByTagName('ul')[0]
ul.className = 'list'

// 5: Create a new list item and add it to the <ul>

// 6: Change all <input> elements from text fields to checkboxes

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>

// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
