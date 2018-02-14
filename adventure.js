

var toPlay = prompt("Would you like to play a game?")

// yes or no, if no

if(toPlay == "no"){
  alert("OK. Goodbye!!")
}else {
  alert("Let's begin!");
}

//Define the size of game play area
var maxX = 2
var maxY = 2


//User starts at x0, y0(bottom left of board)

var userX = 0
var userY = 0
// Hide treasure, also with x y values
var treasureX = 2
var treasureY = 1

// Flag that controls loop
var treasureFound = false

// Collect user's name
var name = prompt("Welcome brave new adventurer! What are you called?")

// Ask if user wants to play game

while(!treasureFound){
  var direction = prompt("Which direction would you like to go in? (north,south, east, or west")
  console.log(direction)

  // temp vars, only used for checking validity new user location after move
  
  var newX
  var newY
  
  // see what new user location should be
  // check if new user location is valid
  // check if new user location is treasure
  
  if(direction == "north"){
    newX = userX
    newY = userY + 1
    //neither value < 0, neither is > max
    if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
      userX = newX
      userY = newY
    }else {
      console.log("There is a giant wall you can not climb, you can not go!")
      alert("YOU CAN NOT GO THAT WAY!!!")
    }
  }else if(direction == "east"){
    newX = userX + 1
    newY = userY
    if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
      userX = newX
      userY = newY
    }else {
      console.log("There is a giant wall you can not climb, you can not go!")
      alert("YOU CAN NOT GO THAT WAY!!! Giant squid attack!")
    }
  }else if(direction == "south"){
    newX = userX
    newY = userY - 1
    if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
      userX = newX
      userY = newY
    }else {
      console.log("There is a giant wall you can not climb, you can not go!")
      alert("YOU CAN NOT GO THAT WAY!!! Medusa will turn you to stone!")
    }
  }else if(direction == "west"){
    newX = userX - 1
    newY = userY
    if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
      userX = newX
      userY = newY
    }else {
      console.log("There is a giant wall you can not climb, you can not go!")
      alert("YOU CAN NOT GO THAT WAY!!! The borg will steal your mind")
    }
  }else {
    console.log("please enter a real direction")
    }
  console.log("The user's x is: " + userX)
  console.log("The user's y is: " + userY)
  if(userX == treasureX && userY == treasureY){
    console.log("Hooray! You found the treasure!")
    treasureFound = true
    
  }

}

