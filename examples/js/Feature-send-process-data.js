AFRAME.registerComponent('send-process', {
  schema: {
    keyCode: { default: 32 }
  },
  

  init: function () {
    let boolean = true;
    let mySelf = this.el;
    let initProcess = new Date()
    this.el.addEventListener('collide', function (e) {
    // console.log({mySelf})
    // console.log("e.detail: ",e.detail.body.el.id)
      if (e.detail.body.el.id=="e-Medixlab_Pen") {
      
        if(boolean){
          boolean=false
       document.getElementById("lhand").removeAttribute("mixin")
        document.getElementById("rhand").removeAttribute("mixin")
        document.getElementById("lhand").setAttribute("mixin","point")
        document.getElementById("rhand").setAttribute("mixin","point")
        let endProcess = new Date()
        let duration = Math.abs(endProcess.getTime()-initProcess.getTime())/1000
        let initProcessTime = initProcess.toISOString().replace('Z', '')
        let endProcessTime = endProcess.toISOString().replace('Z', '')
        var xhr = new XMLHttpRequest();
        // xhr.open("POST", "https://api.medixlab.vxr.space/process", true);
        xhr.open("POST", "http://localhost:8000/process", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function (e) {
          if (this.status == 200) {
            console.log("response", this.response); // JSON response
            localStorage.setItem("sessionID", this.response.id);
          }
        };        
        xhr.send(JSON.stringify({
          "process_number": process,
          "duration": duration,
          "process_state": 1,
          "init_process": initProcessTime,
          "end_process": endProcessTime,
          "session_id": "c158915c-e604-4c46-b1b1-cbf6f03e8410"
        }));
        //localStorage.getItem("sessionID")
        console.log("status: ",xhr.status)
      }
      }
      
  })
  
}
});