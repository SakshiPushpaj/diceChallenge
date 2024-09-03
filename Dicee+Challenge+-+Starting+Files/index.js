///function getRandomImage() {
    //const images = [
   //   "images/dice1.png",
    //  "image/dice2.jpg",
    //  "image/dice3.jpg",
    //  "image/dice4.png",
    //  "image/dice5.png",
    //  "image/dice6.png"
      // Add more image paths here
    //];
  
    //const randomIndex =console.log(Math.floor(Math.random() * 6) + 1);
    //const randomImage = images[randomIndex];
  
    //const imageElement = document.getElementById("randomImage");
    //imageElement.src = randomImage;
  //}
  
  // Call the function on page load
  //window.onload = getRandomImage();


  var randomNumber1=Math.floor(Math.random()*6)+1;
  var randomDiceImage= "dice" + randomNumber1+".png";
  var randomImageSource="images/"+randomDiceImage;
  var image1=document.querySelector('.img1');//to tag 1st image of dice
  image1.setAttribute('src',randomImageSource);

  var randomNumber2=Math.floor(Math.random()*6)+1;
  var randomDiceImage2="dice" + randomNumber2 + ".png";
  var randomImageSource2="images/"+randomDiceImage2
  document.querySelector('.img2').setAttribute('src',randomImageSource2);