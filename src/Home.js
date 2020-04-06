import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Instructions for How to Play the Games</h1>
      <h2>Table</h2>
      <ul>
        <li>The table tab is a table with no games, so you can get used to it.</li>
        <li>It is a hundreds chart that defaults to 10 rows and 10 columns.</li>
        <li>There are input boxes at the bottom of the screen if you wish to change the size of the table.</li>
        <li>All of the games have this initial table setup.</li>
        <li>Make sure you set Rotor to rows to traverse the table easier.</li>
        <li>Listen for the earcon that signifies the end of a row.</li>
        
      </ul>

      <h2>Missing Number Game</h2>
      <ul>
        <li>Missing Number Game is a game where one of the numbers is missing and you must figure out what it is.</li>
       <li>Make sure you set Rotor to rows to traverse the table easier.</li>
       <li>Use the magic tap gesture (two finger double tap) in order to jump to the missing number square.</li>
       <li>When you figure out what the missing number is, double tap to bring up the number pad and select the number.</li>
      <li>Listen to see if you got it right.</li>
      </ul>
     
      <h2>Complete the Table Game</h2>
      <ul>
        <li>Complete the Table Game is a game where up to four numbers are missing and you must figure out what they are.</li>
        <li>The missing numbers all surround one number, so when you find the middle number, add one, subtract one, add ten, and subtract ten to find the surrounding missing numbers.</li>
       <li>Use the magic tap gesture (two finger double tap) in order to jump to the middle number (the one inside the missing numbers.)</li>
       <li>When you figure out what the missing number is, double tap to bring up the number pad and select the number.</li>
      <li>Listen to see if you got it right.</li>
      </ul>
    </div>
  );
};

export default Home;
