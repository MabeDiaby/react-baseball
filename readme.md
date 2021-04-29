
## What does React accomplish for us?
 Based on the differences in authoring the app, 
 - Mapping replaces HTML hard-coding or confusing DOM-writing loops. Think of the difference between `document.createElement("li")` style vs. JSX mixed HTML and JS style of building smaller components
 - Event listening / handling get's broken down into . This makes it easy to do multiple re-renders for one event

## How do these two different styles scale?
Let's look at complex web pages and see what would happen if we continued to use each of these front-end styles to develop the page.
 - Look at Binance trading page
 - Look at a Complex Portal page
 - Look at a social media page

## How extenible are each style?
In the baseball example we already know what we're tying to build: we know what the scoreboard needs to look like (because we already know baseball has 9 innings) and we know exactly how the rules. How is that similiar and different from building an app for a growing non profit organization or business? <br>
For example do we know how many crypto currencies in total there are? Unlike with baseball, the exact amount isn't known, and constantly evolving. 
How modularized is the code? Modularized means one section of the code can change without needing to change other un-related parts of the code. How could this be useful to a product team? To a dev team?

#### Example of extendiblity: what is your use case?
 - two pictures: custom sandwich vs a sandwich building station. The former is good for a custom sutwich, the latter is good for building a thousand sandwichs a day, but is clunky for building only one sandwich.

## Exercies 
 - Build a home run button, and put some runs on the board.
 - Show the current inning and at-bat team

