let scene = document.querySelector('a-scene');
let objectsResult;
let x = 0;
let score = 0;
let quizz = 0;
let questionID = 0;

fetch("../../../js/panelQuestions.json").then(
  function (u) { return u.json(); }
).then(
  function (json) {
    objectsResult = JSON.parse(JSON.stringify(json));
    //console.log("answer1", objectsResult[1].answers[0]) 
    if (x < objectsResult.length) createQuestionsElements()
  }
)

function createQuestionsElements() {
  console.log('objectsResult:', objectsResult);
  const objQuestionsAnswers = Object.assign({}, objectsResult)
  console.log('objQuestionsAnswers', objQuestionsAnswers)
  let panel1 = document.createElement('a-plane');
  panel1.setAttribute('material', "color: black; opacity: 0.7");
  panel1.setAttribute('position', "1 2.375 1");
  panel1.setAttribute('rotation', "0 180 0");
  let questionPlane = document.createElement('a-plane');
  questionPlane.setAttribute('material', "color: #072B73; opacity: 0.7");
  questionPlane.setAttribute('position', "1 3 1");
  questionPlane.setAttribute('rotation', "0 180 0")
  questionPlane.setAttribute('height', "0.25");
  console.log('question:', objectsResult[x].question);
  questionPlane.setAttribute('text', `${objectsResult[x].question}; font:SourceSansPro-SemiBold-msdf.json; negate:false` );
  scene.appendChild(questionPlane);
  scene.appendChild(panel1);

  var questionText = objectsResult[x].question;
  questionID++;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://api.medixlab.vxr.space/quiz", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  if (this.status == 200) {
    console.log("response", this.response); // JSON response
  }
  xhr.send(
    JSON.stringify({
      quizzid: quizz++,
      process: process,
    })
  );

  objectsResult[x].answers.forEach(item => {
    let answer = document.createElement('a-plane');
    answer.setAttribute('class', 'objectsScene')
    answer.setAttribute('id', item.id)
    answer.setAttribute('material', "color: #072B73")
    answer.setAttribute('height', "0.15")
    answer.setAttribute('width', "0.75")
    answer.setAttribute('position', item.position)
    answer.setAttribute('text', `${item.text}; font:SourceSansPro-SemiBold-msdf.json; negate:false`)

    answer.addEventListener('raycaster-intersected', function () {
      answer.setAttribute('color', '#0D4BC6');
      console.log('Raycaster intersected')
    })

    answer.addEventListener('raycaster-intersected-cleared', function () {
      answer.setAttribute('color', '#072B73');
      console.log('Raycaster intersected cleared')
    })

    panel1.appendChild(answer);
    
  });

  let answersArray = [];
  let firstAnswer = document.getElementById('firstAnswer');
  let secondAnswer = document.getElementById('secondAnswer');
  let thirdAnswer = document.getElementById('thirdAnswer');
  let fourthAnswer = document.getElementById('fourthAnswer');

  answersArray.push(firstAnswer, secondAnswer, thirdAnswer, fourthAnswer);

  x ++;

  firstAnswer.addEventListener('click', function () {
      answersArray = answersArray.filter(answer => answer != firstAnswer);
      console.log('answersArray', answersArray);
      const objAnswers = Object.assign({}, answersArray)
      console.log('objAnswers', objAnswers)

      answersArray.forEach(answer => {
        answer.addEventListener('click', function() {
          answer.setAttribute('color', '#072B73');
        })
      });

      let answerText = firstAnswer.getAttribute('text')
      console.log('Answer clicked:', answerText)

      var xhr = new XMLHttpRequest();
      xhr.open("POST", "https://api.medixlab.vxr.space/question", true);
      xhr.setRequestHeader("Content-Type", "application/json");
      if (this.status == 200) {
        console.log("response", this.response); // JSON response
      }
      xhr.send(
        JSON.stringify({
          questionid: questionID,
          quizzid: quizz,
          question: questionText,
          value: questionText,
        })
      );

      setTimeout(function() {
        questionPlane.removeAttribute('text');
        panel1.remove();
        questionPlane.remove();
        score ++;
        console.log('score:', score);
        if (x < objectsResult.length) {
          createQuestionsElements()
        } else {
          let panel1 = document.createElement('a-plane');
          panel1.setAttribute('material', "color: #072B73; opacity: 0.7");
          panel1.setAttribute('position', "1 2.375 1");
          panel1.setAttribute('rotation', "0 180 0");
          panel1.setAttribute('height', "0.5");
          panel1.setAttribute('text', `value: ¡Fin de la prueba!; align: center`);
          scene.appendChild(panel1);
        }
      }, 1000);
      firstAnswer.setAttribute('color', 'blue');

      answersArray = answersArray.filter(answer => answer != firstAnswer);
      console.log('answersArray', answersArray);

      answersArray.forEach(answer => {
        answer.addEventListener('click', function() {
          answer.setAttribute('color', '#072B73');
        })
      });
      
      setTimeout(function() {
        questionPlane.removeAttribute('text');
        panel1.remove();
        questionPlane.remove();
        if (x < objectsResult.length) {
          createQuestionsElements()
        } else {
          let panel1 = document.createElement('a-plane');
          panel1.setAttribute('material', "color: #072B73; opacity: 0.7");
          panel1.setAttribute('position', "1 2.375 1");
          panel1.setAttribute('rotation', "0 180 0");
          panel1.setAttribute('height', "0.5");
          panel1.setAttribute('text', `value: ¡Fin de la prueba!; align: center`);
          scene.appendChild(panel1);
        }
      }, 1000);
  });

  secondAnswer.addEventListener('click', function () {
      answersArray = answersArray.filter(answer => answer != secondAnswer);
      console.log('answersArray', answersArray);
      const objAnswers = Object.assign({}, answersArray)
      console.log('objAnswers', objAnswers)

      let answerText2 = secondAnswer.getAttribute('text')
      console.log('Answer clicked:', answerText2)

      answersArray.forEach(answer => {
        answer.addEventListener('click', function() {
          answer.setAttribute('color', '#072B73');
        })
      });

      var xhr = new XMLHttpRequest();
      xhr.open("POST", "https://api.medixlab.vxr.space/question", true);
      xhr.setRequestHeader("Content-Type", "application/json");
      if (this.status == 200) {
        console.log("response", this.response); // JSON response
      }
      xhr.send(
        JSON.stringify({
          questionid: questionID,
          quizzid: quizz,
          question: questionText,
          value: questionText,
        })
      );

      setTimeout(function() {
        questionPlane.removeAttribute('text');
        panel1.remove();
        questionPlane.remove();
        score ++;
        console.log('score:', score);
        if (x < objectsResult.length) {
          createQuestionsElements()
        } else {
          let panel1 = document.createElement('a-plane');
          panel1.setAttribute('material', "color: #072B73; opacity: 0.7");
          panel1.setAttribute('position', "1 2.375 1");
          panel1.setAttribute('rotation', "0 180 0");
          panel1.setAttribute('height', "0.5");
          panel1.setAttribute('text', `value: ¡Fin de la prueba!; align: center`);
          scene.appendChild(panel1);
        }
      }, 1000);
      secondAnswer.setAttribute('color', 'blue');

      answersArray = answersArray.filter(answer => answer != secondAnswer);
      console.log('answersArray', answersArray);

      answersArray.forEach(answer => {
        answer.addEventListener('click', function() {
          answer.setAttribute('color', '#072B73');
        })
      });

      setTimeout(function() {
        questionPlane.removeAttribute('text');
        panel1.remove();
        questionPlane.remove();
        if (x < objectsResult.length) {
          createQuestionsElements()
        } else {
          let panel1 = document.createElement('a-plane');
          panel1.setAttribute('material', "color: #072B73; opacity: 0.7");
          panel1.setAttribute('position', "1 2.375 1");
          panel1.setAttribute('rotation', "0 180 0");
          panel1.setAttribute('height', "0.5");
          panel1.setAttribute('text', `value: ¡Fin de la prueba!; align: center`);
          scene.appendChild(panel1);
        }
      }, 1000);
  });

  thirdAnswer.addEventListener('click', function () {
      setTimeout(function() {
        questionPlane.removeAttribute('text');
        panel1.remove();
        questionPlane.remove();
        score ++;
        console.log('score:', score);
        if (x < objectsResult.length) {
          console.log('x inside thirdanswer:', x)
          createQuestionsElements()
        } else {
          let panel1 = document.createElement('a-plane');
          panel1.setAttribute('material', "color: #072B73; opacity: 0.7");
          panel1.setAttribute('position', "1 2.375 1");
          panel1.setAttribute('rotation', "0 180 0");
          panel1.setAttribute('height', "0.5");
          panel1.setAttribute('text', `value: ¡Fin de la prueba!; align: center`);
          scene.appendChild(panel1);
        }
      }, 1000);
      thirdAnswer.setAttribute('color', 'blue');

      answersArray = answersArray.filter(answer => answer != thirdAnswer);
      console.log('answersArray', answersArray);
      const objAnswers = Object.assign({}, answersArray)
      console.log('objAnswers', objAnswers)

      let answerText3 = thirdAnswer.getAttribute('text')
      console.log('Answer clicked:', answerText3)

      var xhr = new XMLHttpRequest();
      xhr.open("POST", "https://api.medixlab.vxr.space/question", true);
      xhr.setRequestHeader("Content-Type", "application/json");
      if (this.status == 200) {
        console.log("response", this.response); // JSON response
      }
      xhr.send(
        JSON.stringify({
          questionid: questionID,
          quizzid: quizz,
          question: questionText,
          value: questionText,
        })
      );

      answersArray.forEach(answer => {
        answer.addEventListener('click', function() {
          answer.setAttribute('color', '#072B73');
        })
      });
      setTimeout(function() {
        questionPlane.removeAttribute('text');
        panel1.remove();
        questionPlane.remove();
        if (x < objectsResult.length) {
          createQuestionsElements()
        } else {
          let panel1 = document.createElement('a-plane');
          panel1.setAttribute('material', "color: #072B73; opacity: 0.7");
          panel1.setAttribute('position', "1 2.375 1");
          panel1.setAttribute('rotation', "0 180 0");
          panel1.setAttribute('height', "0.5");
          panel1.setAttribute('text', `value: ¡Fin de la prueba!; align: center`);
          scene.appendChild(panel1);
        }
      }, 1000);
    });

  fourthAnswer.addEventListener('click', function () {
      answersArray = answersArray.filter(answer => answer != fourthAnswer);
      console.log('answersArray', answersArray);
      const objAnswers = Object.assign({}, answersArray)
      console.log('objAnswers', objAnswers)

      let answerText4 = fourthAnswer.getAttribute('text')
      console.log('Answer clicked:', answerText4)

      answersArray.forEach(answer => {
        answer.addEventListener('click', function() {
          answer.setAttribute('color', '#072B73');
        })
      });

      var xhr = new XMLHttpRequest();
      xhr.open("POST", "https://api.medixlab.vxr.space/question", true);
      xhr.setRequestHeader("Content-Type", "application/json");
      if (this.status == 200) {
        console.log("response", this.response); // JSON response
      }
      xhr.send(
        JSON.stringify({
          questionid: questionID,
          quizzid: quizz,
          question: questionText,
          value: questionText,
        })
      );

      setTimeout(function() {
        questionPlane.removeAttribute('text');
        panel1.remove();
        questionPlane.remove();
        score ++;
        console.log('score:', score);
        if (x < objectsResult.length) {
          createQuestionsElements()
        } else {
          let panel1 = document.createElement('a-plane');
          panel1.setAttribute('material', "color: #072B73; opacity: 0.7");
          panel1.setAttribute('position', "1 2.375 1");
          panel1.setAttribute('rotation', "0 180 0");
          panel1.setAttribute('height', "0.5");
          panel1.setAttribute('text', `value: ¡Fin de la prueba!; align: center`);
          scene.appendChild(panel1);
        }
      }, 1000);
      fourthAnswer.setAttribute('color', 'blue');

      answersArray = answersArray.filter(answer => answer != fourthAnswer);
      console.log('answersArray', answersArray);

      answersArray.forEach(answer => {
        answer.addEventListener('click', function() {
          answer.setAttribute('color', '#072B73');
        })
      });
      setTimeout(function() {
        questionPlane.removeAttribute('text');
        panel1.remove();
        questionPlane.remove();
        if (x < objectsResult.length) {
          createQuestionsElements()
        } else {
          let panel1 = document.createElement('a-plane');
          panel1.setAttribute('material', "color: #072B73; opacity: 0.7");
          panel1.setAttribute('position', "1 2.375 1");
          panel1.setAttribute('rotation', "0 180 0");
          panel1.setAttribute('height', "0.5");
          panel1.setAttribute('text', `value: ¡Fin de la prueba!; align: center`);
          scene.appendChild(panel1);
        }
      }, 1000);
  });
}