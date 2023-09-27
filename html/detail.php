<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Annexbios Maarssen</title>
  <link rel="stylesheet" href="../style/style.css">
</head>

<body>
  <script src="/scripts/script.js"></script>

  <?php
  $filmid = $_GET["id"];
  echo $filmid;

  $filmVideo = $_GET["trailer"];
  ?>

  <div id="container">

    <div id="grid-item1"></div>
    <div id="grid-item2">

      <div id="">

      </div>

    </div>
    
    <div id="grid-item3"><img id="myImgId" src=""></div>
    <div id="grid-item4">KOOP JE TICKETS</div>
    <div id="grid-item5">
      
    <a id="myVideoId" href="<?php echo $filmVideo ?>">
  
  </a></div>

  </div>


  <footer>
    <p>footer</p>
  </footer>

  <script type="module">
    const response = await fetch("https://annexbios.gluwebsite.nl/api/main.php?id=<?php echo $filmid ?>")
    const movieDetail = await response.json();
    console.log(movieDetail);
    console.log(movieDetail[0].name);

    document.getElementById("grid-item1").innerHTML = movieDetail[0].name;
    document.getElementById("grid-item2").innerHTML = movieDetail[0].description;
    document.getElementById("myImgId").src = movieDetail[0].poster;
    document.getElementById("myVideoId").src = movieDetail[0].trailer;
    // // movieNumber is gewoon de index van de lijst met films, dus als het 0 is pak je de eerste film
  </script>

</body>

</html>