import React from "react";

const Home = () => {
  return (
    <div class="instructions">
      <h1>Instructions for How to Play the Games</h1>
      <h2>Table</h2>
      <ul>
        <li>The table is a hundreds chart that defaults to 10 rows and 10 columns.</li>
        <li>There are input boxes at the bottom of the screen if you wish to change the size of the table.</li>
        <li>The purpose of the table is to get used to how to use the chart.</li>
        <li>Make sure you set Rotor to rows.</li>
        <li>Listen for the earcon that signifies the end of a row.</li>
        <li>You may then drag your finger over the chart or use swipe gestures.</li>
        
      </ul>

      <h2>Missing Number Game</h2>
      <ul>
        <li>This game is a hundreds chart that has a missing number and you must figure out what it is.</li>
       <li>Make sure you set Rotor to rows.</li>
       <li>Move around the table until you find the cell that says question mark, which is the missing number.</li>
       <li>The missing number is a button, so click on it to bring up a prompt box to enter your guess.</li>
       <li>Input your guess and click OK to see if you are correct.</li>
       <li>There is a New Game button at the bottom of the page if you wish to play again or start over.</li>
      </ul>
     
      <h2>Complete the Table Game</h2>
      <ul>
        <li>This game has 2, 3, or 4 missing numbers and you must figure out what they are.</li>
        <li>The missing numbers appear around a central number.</li>
       <li> If you get stuck, try to add 1, subtract 1, add 10, and subtract 10 from the middle number to get the missing numbers.</li>
       <li>Move your finger around the grid until you find question mark, which is the missing number.</li>
      <li>Double click the button to pull up the prompt box to input your guess.</li>
      <li>Input your guess and click OK to see if you are correct.</li>
      <li>If your guess is correct, the button will become inactive and if you go to it, it will say "dimmed button". This means you have already found this missing number. </li>
      <li>Keep going until you find all the missing numbers.</li>
      <li>There is a New Game button at the bottom of the page if you wish to play again or start over.</li>
      </ul>
    </div>
  );
};

export default Home;
