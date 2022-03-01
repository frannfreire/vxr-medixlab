let scene2 = document.querySelector("a-scene");
setTimeout(function () {
  console.log('Token: ', keycloak.token)
  console.log('User ID is:', keycloak.tokenParsed.sub)

  localStorage.setItem("token", keycloak.token);
  localStorage.setItem("userID", keycloak.tokenParsed.sub);

  console.log('The token in localStorage is:', localStorage.getItem("token"));
  console.log('The userID in localStorage is:', localStorage.getItem("userID"));

  let username = document.createElement("a-text");
  username.setAttribute("position", "-1.4 2.8 -3");
  username.setAttribute("value", `Bienvenido, ${keycloak.tokenParsed.name}`);
  scene2.appendChild(username);

  let logoutButton = document.createElement("a-plane");
  logoutButton.setAttribute("position", "1.9 2.8 -2.99");
  logoutButton.setAttribute("height", "0.2");
  logoutButton.setAttribute("width", "0.5");
  logoutButton.setAttribute("material", "color: #072B73");
  scene2.appendChild(logoutButton);

  let logoutText = document.createElement("a-text");
  logoutText.setAttribute("position", "1.657 2.81 -2.99");
  logoutText.setAttribute("width", "1.8");
  logoutText.setAttribute("height", "1.8");
  logoutText.setAttribute("text", "value: Cerrar sesión; font:SourceSansPro-SemiBold-msdf.json; negate:false");
  scene2.appendChild(logoutText);

  let panel1 = document.getElementById("panel1");
  let process1 = document.getElementById("text2");
  let process2 = document.getElementById("text3");
  let process3 = document.getElementById("text4");
  let process4 = document.getElementById("text5");
  let process5 = document.getElementById("text6");
  let process6 = document.getElementById("text7");
  let process7 = document.getElementById("text8");
  let process8 = document.getElementById("text9");
  let panel2 = document.getElementById("panel2");
  let panel3 = document.getElementById("panel3");
  let panel4 = document.getElementById("panel4");
  let panel5 = document.getElementById("panel5");
  let panel6 = document.getElementById("panel6");
  let panel7 = document.getElementById("panel7");
  let panel8 = document.getElementById("panel8");
  let panel9 = document.getElementById("panel9");
  let bloqueo1 = document.getElementById("bloqueo1");
  let bloqueo2 = document.getElementById("bloqueo2");
  let bloqueo3 = document.getElementById("bloqueo3");
  let bloqueo4 = document.getElementById("bloqueo4");
  let bloqueo5 = document.getElementById("bloqueo5");
  let bloqueo6 = document.getElementById("bloqueo6");
  let bloqueo7 = document.getElementById("bloqueo7");

  if (keycloak.tokenParsed.semestre === "1") {
    panel2.parentNode.removeChild(panel2);
    panel3.parentNode.removeChild(panel3);
    panel4.parentNode.removeChild(panel4);
    panel5.parentNode.removeChild(panel5);
    panel6.parentNode.removeChild(panel6);
    panel7.parentNode.removeChild(panel7);
    panel8.parentNode.removeChild(panel8);
    panel9.parentNode.removeChild(panel9);

    process1.parentNode.removeChild(process1);
    process2.parentNode.removeChild(process2);
    process3.parentNode.removeChild(process3);
    process4.parentNode.removeChild(process4);
    process5.parentNode.removeChild(process5);
    process6.parentNode.removeChild(process6);
    process7.parentNode.removeChild(process7);
    process8.parentNode.removeChild(process8);

    bloqueo1.parentNode.removeChild(bloqueo1);
    bloqueo2.parentNode.removeChild(bloqueo2);
    bloqueo3.parentNode.removeChild(bloqueo3);
    bloqueo4.parentNode.removeChild(bloqueo4);
    bloqueo5.parentNode.removeChild(bloqueo5);
    bloqueo6.parentNode.removeChild(bloqueo6);
    bloqueo7.parentNode.removeChild(bloqueo7);

    let noProcesses = document.createElement("a-text");
    noProcesses.setAttribute("position", "-1.7 1.5 -3");
    noProcesses.setAttribute("value", 'Sin procedimientos para mostrar');
    scene2.appendChild(noProcesses);
  }

  if (keycloak.tokenParsed.semestre === "2") {
    panel3.parentNode.removeChild(panel3);
    panel4.parentNode.removeChild(panel4);
    panel5.parentNode.removeChild(panel5);
    panel6.parentNode.removeChild(panel6);
    panel7.parentNode.removeChild(panel7);
    panel8.parentNode.removeChild(panel8);
    panel9.parentNode.removeChild(panel9);

    process2.parentNode.removeChild(process2);
    process3.parentNode.removeChild(process3);
    process4.parentNode.removeChild(process4);
    process5.parentNode.removeChild(process5);
    process6.parentNode.removeChild(process6);
    process7.parentNode.removeChild(process7);
    process8.parentNode.removeChild(process8);
  }

  if (keycloak.tokenParsed.semestre === "3") {
    panel4.parentNode.removeChild(panel4);
    panel5.parentNode.removeChild(panel5);
    panel9.parentNode.removeChild(panel9);

    process3.parentNode.removeChild(process3);
    process4.parentNode.removeChild(process4);
    process8.parentNode.removeChild(process8);

    bloqueo1.parentNode.removeChild(bloqueo1);
    bloqueo4.parentNode.removeChild(bloqueo4);
    bloqueo5.parentNode.removeChild(bloqueo5);
    bloqueo6.parentNode.removeChild(bloqueo6);
  }

  if (keycloak.tokenParsed.semestre === "4") {
    panel4.parentNode.removeChild(panel4);
    panel5.parentNode.removeChild(panel5);
    panel9.parentNode.removeChild(panel9);

    process3.parentNode.removeChild(process3);
    process4.parentNode.removeChild(process4);
    process8.parentNode.removeChild(process8);
    bloqueo1.parentNode.removeChild(bloqueo1);
    bloqueo4.parentNode.removeChild(bloqueo4);
    bloqueo5.parentNode.removeChild(bloqueo5);
    bloqueo6.parentNode.removeChild(bloqueo6);
  }

  if (keycloak.tokenParsed.semestre === "5") {
    panel9.parentNode.removeChild(panel9);

    process8.parentNode.removeChild(process8);
    bloqueo1.parentNode.removeChild(bloqueo1);
    bloqueo2.parentNode.removeChild(bloqueo2);
    bloqueo3.parentNode.removeChild(bloqueo3);
    bloqueo4.parentNode.removeChild(bloqueo4);
    bloqueo5.parentNode.removeChild(bloqueo5);
    bloqueo6.parentNode.removeChild(bloqueo6);
  }

  if (keycloak.tokenParsed.semestre === "6") {
    panel9.parentNode.removeChild(panel9);

    process8.parentNode.removeChild(process8);
    bloqueo1.parentNode.removeChild(bloqueo1);
    bloqueo2.parentNode.removeChild(bloqueo2);
    bloqueo3.parentNode.removeChild(bloqueo3);
    bloqueo4.parentNode.removeChild(bloqueo4);
    bloqueo5.parentNode.removeChild(bloqueo5);
    bloqueo6.parentNode.removeChild(bloqueo6);
  }

  if (keycloak.tokenParsed.semestre >= "7") {
    bloqueo1.parentNode.removeChild(bloqueo1);
    bloqueo2.parentNode.removeChild(bloqueo2);
    bloqueo3.parentNode.removeChild(bloqueo3);
    bloqueo4.parentNode.removeChild(bloqueo4);
    bloqueo5.parentNode.removeChild(bloqueo5);
    bloqueo6.parentNode.removeChild(bloqueo6);
    bloqueo7.parentNode.removeChild(bloqueo7);
  }

  if (keycloak.tokenParsed.semestre == "10") {
    bloqueo1.parentNode.removeChild(bloqueo1);
    bloqueo2.parentNode.removeChild(bloqueo2);
    bloqueo3.parentNode.removeChild(bloqueo3);
    bloqueo4.parentNode.removeChild(bloqueo4);
    bloqueo5.parentNode.removeChild(bloqueo5);
    bloqueo6.parentNode.removeChild(bloqueo6);
    bloqueo7.parentNode.removeChild(bloqueo7);
  }

  logoutButton.addEventListener("mouseenter", function () {
    logoutButton.setAttribute("opacity", 0.5);
  });

  logoutButton.addEventListener("mouseleave", function () {
    logoutButton.setAttribute("opacity", 1);
  });

  logoutButton.addEventListener("click", function () {
    keycloak.logout();
  });

  console.log(
    "El nombre ha sido posicionado en la escena, el nombre es:",
    keycloak.tokenParsed.name
  );
}, 1600);
