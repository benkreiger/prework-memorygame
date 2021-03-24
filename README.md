# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Ben Kreiger**

Time spent: **~3.5** hours spent in total

Link to project: https://glitch.com/edit/#!/abrasive-rightful-pin

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:  
  
  * Game randomly generates a new sequence each time
  <img src="http://g.recordit.co/TjdSO3zoW4.gif"/>
  
  * User will lose game upon an incorrect guess
  <img src="http://g.recordit.co/rFFB98nEvk.gif"/>
  
  * User will win game upon a sequence of all correct guesses
  <img src="http://g.recordit.co/refjh86mef.gif"/>


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.  
  
Button images: http://bulbapedia.bulbagarden.net/  
All additional HTML/CSS/JavaScript referencing: https://www.w3schools.com/  


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)  
  
Since I have barely used HTML/CSS before, I encountered the biggest challenge when figuring out how to center all objects on the page.
While reading the documentation, it seemed like there were a lot of different methods to accomplish the same task for every kind of object. 
After a lot of reading and experimenting with a variety of different methods, I ended up settling on alinging the text objects to the center 
with text-align and creating a class attribute for the buttons. I'm sure there is probably a more efficient way to accomplish this, but 
this was the best method I found to accomplish what I wanted to while researching on my own. This taught me a lot more about how HTML 
and CSS work together in general which was a great bonus. 


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)  
  
After completing this project, I'm most interested in how bigger websites are managed. I would really like to learn about and experiment 
with a project that involves multiple pages and redirects between them. Plus, in a more broad aspect, I'd like to learn more about backend and see 
more complicated examples with JavaScript and its integration with HTML. One last question that came to me while working is what portion of popular, robust websites 
are built with purely HTML/CSS. Is it posssible to create really advanced projects with the standard libraries, or are there popular 
libraries that are commonly paired with them?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)  
  
If I had a few more hours to work on this project, I would like to work on aspects that improve on the functions of the game. One idea 
I had that related to the optional functions was to have an on screen timer that counts down the amount of time the user has to guess 
during each turn. Another thing I would like to add is the ability for the game to go on until the user guesses incorrectly. I thought 
about adding this for my submission but was not sure if it would interfere with the required functionalities. Apart from these, I would like
to experiment more with cosmetic aspects. Retackling my organization error would be my starting point. 



## License

    Copyright Benjamin Kreiger

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.