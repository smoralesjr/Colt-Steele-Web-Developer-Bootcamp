/*
Create an array of movie objects. Each movie should have a title,
rating, and hasWatched properties. Iterate through the array and
print out something that looks like:

You have watched "In Bruges" - 5 stars
You have no seen "Frozen" - 4 stars
You have seen "Mad Max Fury Road" - 5 stars
You have not seen "Les Miserables" - 3.5 stars
*/

var movieObject = [{
    title: "The Matrix",
    rating: 5,
    hasWatched: true
  },

  {
    title: "They Live",
    rating: 5,
    hasWatched: true
  },

  {
    title: "Spider-Man Homecoming",
    rating: 4,
    hasWatched: false
  }

];

for (let count = 0; count < movieObject.length; count++) {
  let message = "\"" + movieObject[count].title + "\"" + " - " + movieObject[count].rating + " stars";

  if (movieObject[count].hasWatched === true) {
    console.log("You have watched " + message);
  } else {
    console.log("You have not watched " + message);
  }

}