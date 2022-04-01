//let Scene = document.querySelector("a-scene");

AFRAME.registerComponent('user-buttons', {
  schema: {
    mobile: {type: 'vec3', default: '0 1.6 3'},
    desktop: {type: 'vec3', default: '0 1.6 2'}
  },
  init: function () {
  
    let _self = this.el
    
    let backToLobby = document.createElement("a-box");
    backToLobby.setAttribute("position", "0.70 0 0");
    backToLobby.setAttribute("height", "0.2");
    backToLobby.setAttribute("width", "0.001");
    backToLobby.setAttribute("depth", "0.6");
    backToLobby.setAttribute("rotation", "0 90 0");
    backToLobby.setAttribute("class", "objectsScene");
    backToLobby.setAttribute("material", "color: #0c96ea");
    backToLobby.setAttribute("ondragstart", "returnToLobby()");
    _self.appendChild(backToLobby);
    
    let backToLobbyText = document.createElement("a-text");
    backToLobbyText.setAttribute("position", "-0.003 0 -0.227");
    backToLobbyText.setAttribute("height", "1.5");
    backToLobbyText.setAttribute("width", "1.5");
    backToLobbyText.setAttribute("rotation", "0 -90 0");
    backToLobbyText.setAttribute("value", "Volver al Lobby");
    backToLobby.appendChild(backToLobbyText);
    
    let reloadScene = document.createElement("a-box");
    reloadScene.setAttribute("position", "0 0 0");
    reloadScene.setAttribute("height", "0.2");
    reloadScene.setAttribute("width", "0.001");
    reloadScene.setAttribute("depth", "0.6");
    reloadScene.setAttribute("rotation", "0 90 0");
    reloadScene.setAttribute("class", "objectsScene");
    reloadScene.setAttribute("material", "color: #0c96ea");
    reloadScene.setAttribute("ondragstart", "reload()");
    _self.appendChild(reloadScene);
    
    let reloadSceneText = document.createElement("a-text");
    reloadSceneText.setAttribute("position", "-0.003 0 -0.227");
    reloadSceneText.setAttribute("rotation", "0 -90 0");
    reloadSceneText.setAttribute("height", "1.5");
    reloadSceneText.setAttribute("width", "1.5");    
    reloadSceneText.setAttribute("value", "Reiniciar Escena");
    reloadScene.appendChild(reloadSceneText);
    
    
    var delayInMilliseconds = 3000; //1 second

    setTimeout(function() {
        reloadScene.setAttribute("static-body", "shape:box;");
        backToLobby.setAttribute("static-body", "shape:box;");
    }, delayInMilliseconds);
  },
});

function returnToLobby(e) {
console.log("lobby")
  window.location = "/super/process/lobby.html"; 
}

function reload(e) {
  window.location.reload();
}




// reloadScene.addEventListener("raycaster-intersected", function () {
//   reloadScene.setAttribute("opacity", 0.5);
// });

// reloadScene.addEventListener("raycaster-intersected-cleared", function () {
//   reloadScene.setAttribute("opacity", 1);
// });

// backToLobby.addEventListener("raycaster-intersected", function () {
//   backToLobby.setAttribute("opacity", 0.5);
// });

// backToLobby.addEventListener("raycaster-intersected-cleared", function () {
//   backToLobby.setAttribute("opacity", 1);
// });

// backToLobby.addEventListener("click", function () {
//   window.location = "/super/process/lobby.html";  
// });

// reloadScene.addEventListener("click", function () {
//   window.location.reload();
// });
