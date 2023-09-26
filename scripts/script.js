let movieList;
let movieListInfo;
let truncated;
let movielistDom = document.getElementById("grid-container");

fetch("http://annexbios.gluwebsite.nl/api/main.php") //load json data from file
  .then((x) => x.text())
  .then((y) => {
    movieList = JSON.parse(y);
    showList();
  });


function truncateText(text, length) {
    if (text.length <= length) {
      return text;
    }
  
    return text.substr(0, length) + '\u2026'
  }

function showList() {
  console.log(movieList);
  console.log(movieList.length);
  for (i = 0; i < movieList.length; i++) {
    console.log(movieList[i].name);
    movielistDom.innerHTML +=
      "<div class='grid-item'> <img src='" + movieList[i].poster +
      "' alt=''> <p class='title'>" + truncateText(movieList[i].name, 18) +
      "</p> <br> <svg class='rating' xmlns='http://www.w3.org/2000/svg' width='136.511' height='23.264' viewBox='0 0 136.511 23.264'><path id='Path_195' data-name='Path 195' d='M15.628,8.025l7.823,1.364-5.837,5.383,1.124,7.847L11.8,18.742,4.671,22.235l1.579-7.8L.7,8.743,8.595,7.81,12.327.8Z' transform='translate(0.049 -0.007)' fill='#9e2629' stroke='#9e2629' stroke-width='0.703'/><path id='Path_196' data-name='Path 196' d='M15.628,8.025l7.823,1.364-5.837,5.383,1.124,7.847L11.8,18.742,4.671,22.235l1.579-7.8L.7,8.743,8.595,7.81,12.327.8Z' transform='translate(28.112 -0.007)' fill='#9e2629' stroke='#9e2629' stroke-width='0.703'/><path id='Path_197' data-name='Path 197' d='M15.628,8.025l7.823,1.364-5.837,5.383,1.124,7.847L11.8,18.742,4.671,22.235l1.579-7.8L.7,8.743,8.595,7.81,12.327.8Z' transform='translate(56.174 -0.007)' fill='#9e2629' stroke='#9e2629' stroke-width='0.703'/><path id='Path_198' data-name='Path 198' d='M15.628,8.025l7.823,1.364-5.837,5.383,1.124,7.847L11.8,18.742,4.671,22.235l1.579-7.8L.7,8.743,8.595,7.81,12.327.8Z' transform='translate(84.236 -0.007)' fill='#9e2629' stroke='#9e2629' stroke-width='0.703'/><path id='Path_199' data-name='Path 199' d='M15.628,8.025l7.823,1.364-5.837,5.383,1.124,7.847L11.8,18.742,4.671,22.235l1.579-7.8L.7,8.743,8.595,7.81,12.327.8Z' transform='translate(112.298 -0.007)' fill='none' stroke='#9e2629' stroke-width='0.703'/></svg>" +
      "<p class='release'>Release:" + movieList[i].release_date +
      "</p> <p class='movieInfo'>" + movieList[i].description +
      "</p> <button class='ticketInfo'>MEER INFO & TICKETS</button> </div>";
  }
}