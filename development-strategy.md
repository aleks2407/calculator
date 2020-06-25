# Development Strategy

> `calculator`

A basic web page aim to learn js, debugging and developed collaboratively using branches. It's not very interesting to look at.

## Wireframe

![wireframe](img/cal-wirefame.png)

## 0. Set-Up

### Repository

- Created a new repository [generated](https://github.com/HackYourFutureBelgium/prompt-alert-calculate)
- Clone the repository
- Copy-paste the markdown from this file to the empty `development-strategy.md` file in the new repo
- Add [this wireframe](./jswireframe-1-1.png)
- Add README file
- Starter html and css
- Push the changes
- Turn on GitHub Pages

---

## 1. Section-1

**As a site visitor, I want to make my inputs reset ,see the last result and get instruction information**

> assigned to `Mame`  
> reviewers `Oguz` and `Aleksandra`

## Repo

This user story was developed on a branch called `section -1`

### HTML

- Add div tags
- give class to div tags

### CSS

- style section-1
- Add background to buttons
- Align items to center used flexbox

## JS

- wrote logic for main functions to repeat and reverse strings
- check result of the prompt function then convert to number
- Show result of input to developers via console log

---

## 2. Upper section of the website

**As a site visitor, I want to see three logos in the left upper corner of the main page. The logos are the photos of the creators of the website. The logos are located in the left upper corner of the page. In the right upper corner is located button INFO, press the button and get the instructions.**

> assigned to `Aleksandra`  
> reviewers `Mamé` and `Oguz`

## Repo

This user story was developed on a branch called `nav-bar`

### HTML

- Add three images inside of the nav

### CSS

- Align the images in the left upper corner of the page
- Align the button INFO to the right upper corner
- Add background for the body
- Style images
- Style button INFO

---

## 3. Section-2

**As a site visitor, I would like to do some math operations and enter values ​​as numbers**

> assigned to `Oguz`  
> reviewers `Mame` and `Aleksandra`

## Repo

This user story was developed on a branch called `section-2`

### HTML

- Added `div` tags
- Added `form` tag
- Added `input` tag
- Added `button` tag
- Gave `class` attribute some tags

### CSS

- Styled section-2
- Used `flex` features for aligning
- Used `width: ..%;` features for responsive view
- Added background to buttons and inputs

## JS

- There is nothing to change

## Readme

- complete readme file
- add event listener to buttons

---

## 4. Multiply

**As a site visitor, I would like to enter a number and see the result of multiplying between my number and last result**

> assigned to `Oguz`  
> reviewers `Mame` and `Aleksandra`

## Repo

This user story was developed on a branch called `multiply`

### HTML

- I have added `form`, `input` and `button` tag in `section-2` branch
- Used `button` tag with `onclick` atribute for running the multiply function

### CSS

- Changed some style features in `style.css`

## JS

- Used `document.getElementById('').value` feature for taking user input
- Used `Number()` converting method 
- Wrote a function to multiply between user input and last result
- Used `document.getElementById('').innerHTML =  ;` feature for displaying the result

---

## 5. Add function

**As a site visitor, I would like to enter a number and see the result of adding my number to the last result**

> assigned to `Aleksandra`  
> reviewers `Mame` and `Oguz`

## Repo

This user story was developed on a branch called `add-function`

### HTML

- Add __onclick="addHandler()"__ to the button `+` to make it active

### CSS

- There is nothing new

## JS

- Use method `document.getElementById('').value` feature to read the input of the user
- Use function `Number()` in order to convert the user's input into a number type of the value
- Function `add` to add two numbers
- Use method `document.getElementById('').innerHTML =  ;` to display the result on the assigned place in HTML
- Reassign `lastResult`

## 6. Subtract

**As a site visitor, I would like to enter a number and see the result of subtracting the last result by my number**

> assigned to `Oguz`  
> reviewers `Mame` and `Aleksandra`

## Repo

This user story was developed on a branch called `subtract`

### HTML

- I have added `form`, `input` and `button` tag in `section-2` branch
- Used `button` tag with `onclick` attribute for running the subtracting function

### CSS

- There is nothing to change

## JS

- Used `document.getElementById('').value` feature for taking user input
- Used `Number()` converting method 
- Wrote a function to subtract the last result by user's input
- Used `document.getElementById('').innerHTML =  ;` feature for displaying the result

## 7. Divide function

**As a site visitor, I would like to enter a number and see the result of dividing the last result by the entered number**

> assigned to `Aleksandra`  
> reviewers `Mame` and `Oguz`

## Repo

This user story was developed on a branch called `divide-function`

### HTML

- Add __onclick="divideHandler()"__ to the button `/` to make it active

### CSS

- Media Queries to make the navigation bar responsive

## JS

- Use method `document.getElementById('').value` feature to read the input of the user
- Use function `Number()` in order to convert the user's input into a number type of the value
- Function `divide` to divide two numbers
- Use method `document.getElementById('').innerHTML =  ;` to display the result on the assigned place in HTML
- Reassign `lastResult`

