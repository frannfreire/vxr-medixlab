setTimeout(function () {
  let scene2 = document.querySelector("a-scene");
  console.log('Token: ', keycloak.token)
  console.log('User ID is:', keycloak.tokenParsed.sub)

  localStorage.setItem("token", keycloak.token);
  localStorage.setItem("userID", keycloak.tokenParsed.sub);

  let initSessionOnReloadPage = new Date()
  let initSessionOnReloadPageDate = initSessionOnReloadPage.toISOString().replace('Z', '')
  localStorage.setItem("initSessionOnReloadPageDate", initSessionOnReloadPageDate);

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://api.medixlab.vxr.space/session", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function(e) {
    if (this.status == 200) {
      console.log('response', this.response); // JSON response  
    }
  };
  xhr.send(
    JSON.stringify({
      user_id: localStorage.getItem("userID"),
      duration: 10.5,
      init_session: localStorage.getItem("initSessionOnReloadPageDate"),
      finish_session: localStorage.getItem("finishSessionDate"),
    })
  );

  console.log('The token in localStorage is:', localStorage.getItem("token"));
  console.log('The userID in localStorage is:', localStorage.getItem("userID"));

  let username = document.createElement("a-text");
  username.setAttribute("position", "-0.823 2.422 -3");
  username.setAttribute("text", `value:${keycloak.tokenParsed.name};`);
  scene2.appendChild(username);

  console.log(
    "El nombre ha sido posicionado en la escena, el nombre es:",
    keycloak.tokenParsed.name
  );
}, 1600);
