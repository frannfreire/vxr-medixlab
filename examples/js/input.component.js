

let anmBool = true
let available = true
let rightArm = false
let leftArm = false

AFRAME.registerComponent('input-controls', {
  // dependencies: ['tracked-controls'],
  schema: {
    hand: { default: 'left' }
  },

  init: function () {
    var self = this;
    console.log("----------------input---------------")
    this.onButtonChanged = this.onButtonChanged.bind(this);
    this.onButtonDown = function (evt) {
      self.onButtonEvent(evt.detail.id, 'down');
      let position = document.getElementById("player-camera").getAttribute("position");
      console.log("pos: ", position)
      // console.log("path: ", evt.buttondown)
      if (self.data.hand == "left" && available) {
        leftArm=true;
        if(rightArm && leftArm){
          console.log("----------------disable---------------")
          available = false
          return
        }
        position.y -= 0.1
        // document.getElementById("lhand").removeAttribute("mixin")
        // document.getElementById("rhand").removeAttribute("mixin")
        // document.getElementById("lhand").setAttribute("mixin","point")
        // document.getElementById("rhand").setAttribute("mixin","point")
      } else if (self.data.hand == "right" && available) {
        rightArm=true;
        if(rightArm && leftArm){
          console.log("----------------disable---------------")
          available = false
          return
        }
        position.y += 0.1
        // document.getElementById("lhand").removeAttribute("mixin")
        // document.getElementById("rhand").removeAttribute("mixin")
        // document.getElementById("lhand").setAttribute("mixin","touch")
        // document.getElementById("rhand").setAttribute("mixin","touch")
      }
    };
    this.onButtonUp = function (evt) {
      self.onButtonEvent(evt.detail.id, 'up');
      let position = document.getElementById("player-camera").getAttribute("position");
      if (self.data.hand == "left" && available) {
        //position.y -= 0.1
        leftArm=false;
      } else if (self.data.hand == "right" && available) {
        //position.y += 0.1
        rightArm=false;
      }
    };
    
 },

  play: function () {
    var el = this.el;
    el.addEventListener('buttonchanged', this.onButtonChanged);
    el.addEventListener('buttondown', this.onButtonDown);
    el.addEventListener('buttonup', this.onButtonUp);
  },

  pause: function () {
    var el = this.el;
    el.removeEventListener('buttonchanged', this.onButtonChanged);
    el.removeEventListener('buttondown', this.onButtonDown);
    el.removeEventListener('buttonup', this.onButtonUp);
  },

  // buttonId
  // 0 - trackpad
  // 1 - trigger ( intensity value from 0.5 to 1 )
  // 2 - grip
  // 3 - menu ( dispatch but better for menu options )
  // 4 - system ( never dispatched on this layer )
  mapping: {
    axis0: 'trackpad',
    axis1: 'trackpad',
    button0: 'trackpad',
    button1: 'trigger',
    button2: 'grip',
    button3: 'menu',
    button4: 'system'
  },

  onButtonChanged: function (evt) {
    // console.log("on button changed");

    var buttonName = this.mapping['button' + evt.detail.id];
    if (buttonName !== 'trigger') { return; }

    var value = evt.detail.state.value;
     // let vxr_objs = document.getElementsByClassName("vxr-interact");
    // for (let i = 0; i < vxr_objs.length; ++i) {
    //   NAF.utils.takeOwnership(vxr_objs[i])
    // }

  },

  onButtonEvent: function (id, evtName) {
    var buttonName = this.mapping['button' + id];
    

    this.el.emit(buttonName + evtName);



  },

  update: function () {
    var data = this.data;
    var el = this.el;

    el.setAttribute('tracked-controls', { hand: data.hand, model: false });
    el.setAttribute('oculus-touch-controls', { hand: data.hand, model: false });
    el.setAttribute('windows-motion-controls', { hand: data.hand, model: false });
    if (data.hand === 'right') {
      el.setAttribute('daydream-controls', { hand: data.hand, model: false });
      el.setAttribute('gearvr-controls', { hand: data.hand, model: false });
    }
  }
});