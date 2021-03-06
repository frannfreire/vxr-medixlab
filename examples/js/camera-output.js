AFRAME.registerComponent('camrender',{
    'schema': {
       // desired FPS
       fps: {
            type: 'number',
            default: 60.0
       },
       // Id of the canvas element used for rendering the camera
       cid: {
            type: 'string',
            default: 'camRenderer'
       }
    },
    'update': function(oldData) {
        var data = this.data
        if (oldData.cid !== data.cid) {
            // Find canvas element to be used for rendering
            var canvasEl = document.getElementById(this.data.cid);
            // Create renderer
            this.renderer = new THREE.WebGLRenderer({
                antialias: true,
                canvas: canvasEl
            });
            // Set properties for renderer DOM element
            this.renderer.setPixelRatio( window.devicePixelRatio );
            this.renderer.domElement.crossorigin = "anonymous";
        };
        if (oldData.fps !== data.fps) {
            // Set how often to call tick
            this.tick = AFRAME.utils.throttleTick(this.tick, 1000 / data.fps , this);
        };
    },
    'tick': function(time, timeDelta) {
        this.renderer.render( this.el.sceneEl.object3D , this.el.object3DMap.camera );
    }
});

AFRAME.registerComponent('canvas-updater', {
    dependencies: ['geometry', 'material'],

    tick: function () {
      var el = this.el;
      var material;

      material = el.getObject3D('mesh').material;
      if (!material.map) { return; }
        material.map.needsUpdate = true;
    }
});