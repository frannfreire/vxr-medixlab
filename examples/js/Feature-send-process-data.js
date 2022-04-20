AFRAME.registerComponent('send-process', {
  schema: {
    keyCode: { default: 32 }
  },


  init: function () {
    let firstExperience;
    let req = new XMLHttpRequest();
    let aux_times_used=0
    
    //-----------------------------------------------------------------------------------
    //-------------------------------check experience exist------------------------------
    //-----------------------------------------------------------------------------------
    
    // req.open("POST", "https://api.medixlab.vxr.space/process", true);
    req.open("POST", "http://localhost:8000/get_experience", true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.onload = function (e) {

      if (this.status == 200) {
        console.log("response", this.response); // JSON response
      }
    }
    req.send(JSON.stringify({
      //"user_id": "59c57f8f-b1a4-43d3-acaa-957deee29fed"
      "user_id": localStorage.getItem("userID")
    }));
    if (this.response === undefined) {
      //experience didn't exist

    } else {
      aux_times_used= this.response.times_used
    }

    

    let boolean = true;
    let mySelf = this.el;
    let initProcess = new Date()
    
    //-----------------------------------------------------------------------------------
    //-------------------------------process ended---------------------------------------
    //-----------------------------------------------------------------------------------
    this.el.addEventListener('collide', function (e) {
      
    
      if (e.detail.body.el.id == "e-Medixlab_Pen") {

        if (boolean && firstExperience) {
          boolean = false
          document.getElementById("lhand").removeAttribute("mixin")
          document.getElementById("rhand").removeAttribute("mixin")
          document.getElementById("lhand").setAttribute("mixin", "point")
          document.getElementById("rhand").setAttribute("mixin", "point")
          let endProcess = new Date()
          let duration = Math.abs(endProcess.getTime() - initProcess.getTime()) / 1000
          let initProcessTime = initProcess.toISOString().replace('Z', '')
          let endProcessTime = endProcess.toISOString().replace('Z', '')
          var xhr = new XMLHttpRequest();
          xhr.open("POST", "https://api.medixlab.vxr.space/process", true);
          // xhr.open("POST", "http://localhost:8000/process", true);
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.onload = function (e) {

            if (this.status == 200) {
              console.log("response", this.response); // JSON response
              var processID = this.response.process;
            }
          }
          xhr.send(JSON.stringify({
            "process_number": process,
            "duration": duration,
            "process_state": 1,
            "init_process": initProcessTime,
            "end_process": endProcessTime,
            "session_id": "a343295a-d591-4cb9-b14c-df3b66c7c17f"
          }));
          //localStorage.getItem("sessionID")
          
          console.log("status: ", xhr.status)
          //-----------------------------------------------------------------------
          //-------------------------------experience------------------------------
          //-----------------------------------------------------------------------
          
          if (firstExperience) {
            let createExperience = new XMLHttpRequest();
            createExperience.open("POST", "https://api.medixlab.vxr.space/experience", true);
            // createExperience.open("POST", "http://localhost:8000/experience", true);
            createExperience.setRequestHeader('Content-Type', 'application/json');
            createExperience.onload = function (e) {
              if (this.status == 200) {
                console.log("response", this.response); // JSON response
              }
            }
            createExperience.send(JSON.stringify(
              {
                //"user_id": "59c57f8f-b1a4-43d3-acaa-957deee29fed",
                "user_id": localStorage.getItem("userID"),
                "times_used": 1
              }));
          }else{
            aux_times_used+=1;
            let updateExperience = new XMLHttpRequest();
            updateExperience.open("PATCH", "https://api.medixlab.vxr.space/experience", true);
            // updateExperience.open("PATCH", "http://localhost:8000/experience", true);
            updateExperience.setRequestHeader('Content-Type', 'application/json');
            updateExperience.onload = function (e) {
              if (this.status == 200) {
                console.log("response", this.response); // JSON response
              }
            }
            updateExperience.send(JSON.stringify(
              {
                //"user_id": "59c57f8f-b1a4-43d3-acaa-957deee29fed",
                "user_id": localStorage.getItem("userID"),
                "times_used": aux_times_used
              }));
          
          }
        }
      }
    })
  }
});