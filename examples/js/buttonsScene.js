let Scene = document.querySelector("a-scene");

let backToLobby = document.createElement("a-plane");
backToLobby.setAttribute("position", "2.50 2.5 1");
backToLobby.setAttribute("height", "0.2");
backToLobby.setAttribute("width", "0.5");
backToLobby.setAttribute("rotation", "0 180 0");
backToLobby.setAttribute("class", "objectsScene");
backToLobby.setAttribute("material", "color: #0c96ea");
Scene.appendChild(backToLobby);

let backToLobbyText = document.createElement("a-text");
backToLobbyText.setAttribute("position", "2.73 2.5 1");
backToLobbyText.setAttribute("height", "1.5");
backToLobbyText.setAttribute("width", "1.5");
backToLobbyText.setAttribute("rotation", "0 180 0");
backToLobbyText.setAttribute("value", "Volver al Lobby");
Scene.appendChild(backToLobbyText);

let reloadScene = document.createElement("a-plane");
reloadScene.setAttribute("position", "1.8 2.5 1");
reloadScene.setAttribute("height", "0.2");
reloadScene.setAttribute("width", "0.5");
reloadScene.setAttribute("class", "objectsScene");
reloadScene.setAttribute("rotation", "0 180 0");
reloadScene.setAttribute("material", "color: #0c96ea");
Scene.appendChild(reloadScene);

let reloadSceneText = document.createElement("a-text");
reloadSceneText.setAttribute("position", "2.05 2.5 1");
reloadSceneText.setAttribute("height", "1.5");
reloadSceneText.setAttribute("width", "1.5");
reloadSceneText.setAttribute("rotation", "0 180 0");
reloadSceneText.setAttribute("value", "Reiniciar Escena");
Scene.appendChild(reloadSceneText);

reloadScene.addEventListener("raycaster-intersected", function () {
  reloadScene.setAttribute("opacity", 0.5);
});

reloadScene.addEventListener("raycaster-intersected-cleared", function () {
  reloadScene.setAttribute("opacity", 1);
});

backToLobby.addEventListener("raycaster-intersected", function () {
  backToLobby.setAttribute("opacity", 0.5);
});

backToLobby.addEventListener("raycaster-intersected-cleared", function () {
  backToLobby.setAttribute("opacity", 1);
});

backToLobby.addEventListener("click", function () {
  window.location = "/super/process/lobby.html";  
});

reloadScene.addEventListener("click", function () {
  window.location.reload();
});
