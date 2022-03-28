let Scene = document.querySelector("a-scene");

let logoutButton = document.createElement("a-plane");
logoutButton.setAttribute("position", "2.20 2.8 1");
logoutButton.setAttribute("height", "0.2");
logoutButton.setAttribute("width", "0.5");
logoutButton.setAttribute("rotation", "0 180 0");
logoutButton.setAttribute("class", "objectsScene");
logoutButton.setAttribute("material", "color: #0c96ea");
Scene.appendChild(logoutButton);

let logoutButtonText = document.createElement("a-text");
logoutButtonText.setAttribute("position", "2.4 2.81 1");
logoutButtonText.setAttribute("height", "1.5");
logoutButtonText.setAttribute("width", "1.5");
logoutButtonText.setAttribute("rotation", "0 180 0");
logoutButtonText.setAttribute("text", "value: Cerrar sesión; font:SourceSansPro-SemiBold-msdf.json; negate:false");
Scene.appendChild(logoutButtonText);

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

logoutButton.addEventListener("raycaster-intersected", function () {
  logoutButton.setAttribute("opacity", 0.5);
});

logoutButton.addEventListener("raycaster-intersected-cleared", function () {
  logoutButton.setAttribute("opacity", 1);
});

backToLobby.addEventListener("raycaster-intersected", function () {
  backToLobby.setAttribute("opacity", 0.5);
});

backToLobby.addEventListener("raycaster-intersected-cleared", function () {
  backToLobby.setAttribute("opacity", 1);
});

logoutButton.addEventListener("click", function () {
  keycloak.logout();
  let finishSession = new Date()
  let finishSessionDate = finishSession.toISOString().replace('Z', '')
  localStorage.setItem("finishSessionDate", finishSessionDate);
});

backToLobby.addEventListener("click", function () {
  window.location = "/super/process/lobby.html";
});

reloadScene.addEventListener("click", function () {
  window.location.reload();
});
