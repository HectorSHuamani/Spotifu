function showPlaylistPage() {
    var playlistPage = document.getElementById("playlist-page");
    var mainPage = document.getElementsByClassName("page-block")[0];
  
    // Oculta la página principal
    mainPage.style.display = "none";
  
    // Muestra la página de la playlist
    playlistPage.style.display = "block";
  }

  function goBack() {
    var playlistPage = document.getElementById("playlist-page");
    var mainPage = document.getElementsByClassName("page-block")[0];
  
    // Muestra la página principal
    mainPage.style.display = "block";
  
    // Oculta la página de la playlist
    playlistPage.style.display = "none";
  }
  
  