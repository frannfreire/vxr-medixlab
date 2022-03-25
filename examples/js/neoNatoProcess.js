AFRAME.registerComponent('set-mass-at-collide', {
    schema: {
        entity_id: { type: 'string', default: '0' },
        action_obj: { type: 'string', default: "" },
    },

    init: function () {
        let el = this.el;
        let data = this.data
        let id_Data = this.data.entity_id;

        this.el.addEventListener('collide', function (e) {
            console.log("action-obj: " + data.action_obj)
            let elem = document.getElementById(data.action_obj)
            console.log("collide with something")
            //trigger animation
            if (id_Data == e.detail.body.el.id) {    
                elem.setAttribute("dynamic-body", "")
                document.getElementById("sphere_blanket_close").setAttribute("opacity","1")
            }
        });
    }
})

//trigger for second part
function playObj(id, clip) {
    console.log({ id })
    console.log({ clip })
    let blanket = document.getElementById(id)
    blanket.setAttribute("animation-mixer", `clip:${clip};loop:once;repetitions:0;clampWhenFinished:true`)
    document.getElementById("sphere_clamp").removeAttribute("static-body")

    let delayInMilliseconds = 3000; //1 second

    setTimeout(function () {
        document.getElementById("sphere_blanket_close").setAttribute("opacity","0")
        document.getElementById("sphere_blanket_close").removeAttribute("static-body")
        
        document.getElementById("sphere_CleftGauze").setAttribute("opacity","0")
        document.getElementById("sphere_CleftGauze").removeAttribute("static-body")  
        
        document.getElementById("sphere_cut_clamp").setAttribute("opacity","0")
        document.getElementById("sphere_cut_clamp").removeAttribute("static-body")  
        
        document.getElementById("sphere_clamp").setAttribute("opacity","0")
        document.getElementById("sphere_clamp").removeAttribute("static-body")  
        
        
        blanket.setAttribute("visible", "false")
        document.getElementById("e-Manta_Cerrada").setAttribute("visible", "true")
        document.getElementById("baby").setAttribute("dynamic-body", "")
    }, delayInMilliseconds);
}

AFRAME.registerComponent('weight-baby', {
    schema: {
        entity_id: { type: 'string', default: '0' },
        action_obj: { type: 'string', default: "" },
    },

    init: function () {
        let el = this.el;
        let selff= this
        let data = this.data
        let id_Data = this.data.entity_id;
        this.onceBool= true

        this.el.addEventListener('collide', function (e) {
            let elem = document.getElementById(data.action_obj)
            if (id_Data == e.detail.body.el.id && selff.onceBool) {    
                elem.setAttribute("static-body", "")
                console.log("bool",selff.onceBool)
                selff.onceBool=false
                
            }else{
            console.log("bool",selff.onceBool)
            }
        });
    }
})

AFRAME.registerComponent('tint-baby-feet', {
    schema: {
        entity_id: { type: 'string', default: '0' },
        action_obj: { type: 'string', default: "" },
    },

    init: function () {
        let el = this.el;
        let data = this.data
        let id_Data = this.data.entity_id;

        this.el.addEventListener('collide', function (e) {
            
            if (id_Data == e.detail.body.el.id) {    
                
                let obj = document.getElementById("sphere-foot-print-left")
                obj.setAttribute("static-body","")
                obj.setAttribute("opacity","1")
                
                el.removeAttribute("static-body")
            }
        });
    }
})

//trigger for third part
AFRAME.registerComponent('baby-feet-print', {
    schema: {
        entity_id: { type: 'string', default: '0' },
        action_obj: { type: 'string', default: "" },
    },

    init: function () {
        let el = this.el;
        let data = this.data
        let id_Data = this.data.entity_id;

        this.el.addEventListener('collide', function (e) {
            
            if (id_Data == e.detail.body.el.id) {    
                // document.getElementById("sphere-foot-print-right").setAttribute("static-body","")
                
                //let arr = ["sphere-foot-InkPad","sphere-foot-print-left"]
                let arr = ["sphere-foot-InkPad" ]
                arr.forEach((item,index)=>{
                    document.getElementById(item).setAttribute("opacity","0")
                    document.getElementById(item).removeAttribute("static-body")  
                })
                
                document.getElementById("e-PlantaresRight_Alpha").setAttribute("visible","true")
                document.getElementById("e-PlantaresLeft_Alpha").setAttribute("visible","true")
                
                document.getElementById("sphere-baby-rest").setAttribute("visible","true")
                document.getElementById("sphere-baby-rest").setAttribute("static-body","")
                el.removeAttribute("static-body")
            }
        });
    }
})

let babyRest = false

AFRAME.registerComponent('set-baby-on-thermal-crib', {
    schema: {
        entity_id: { type: 'string', default: '0' },
        action_obj: { type: 'string', default: "" },
    },

    init: function () {
        let el = this.el;
        let data = this.data
        let id_Data = this.data.entity_id;

        this.el.addEventListener('collide', function (e) {
            
            if (id_Data == e.detail.body.el.id) {    
                babyRest= true
                
            }
        });
    }
})

let baby_rest_once=true
function baby_rest(){
    if(babyRest && baby_rest_once){
        let baby = document.getElementById("baby")
        let blanket = document.getElementById("e-Manta_Abierta")
        baby.removeAttribute("dynamic-body")
        baby.setAttribute("position","0.816 0.250 -0.872")
        baby.setAttribute("rotation","0 0 0")        
        baby_rest_once=false
        
        blanket.setAttribute("visible","true")
        blanket.setAttribute("animation-mixer","clip:Cloth_ClosetoIdle")
        document.getElementById("e-Manta_Cerrada").setAttribute("visible","false")
        document.getElementById("sphere-baby-rest").setAttribute("visible","false")
        document.getElementById("sphere-baby-rest").removeAttribute("static-body")
        
        
        let delayInMilliseconds = 3000; //1 second

        setTimeout(function () {
            baby.setAttribute("animation-mixer","clip:Idle_to_Side;loop:once;repetitions:0;clampWhenFinished:true")
            document.getElementById("sphere_syringe").setAttribute("visible","true")
            document.getElementById("sphere_syringe").setAttribute("static-body","")
            
        
            
        },delayInMilliseconds)
    }
}



AFRAME.registerComponent('baby-syringe', {
    schema: {
        entity_id: { type: 'string', default: '0' },
        action_obj: { type: 'string', default: "" },
    },

    init: function () {
        let el = this.el;
        let data = this.data
        let id_Data = this.data.entity_id;

        this.el.addEventListener('collide', function (e) {
            
            if (id_Data == e.detail.body.el.id) {    
                
                document.getElementById("sphere_Thermometer").setAttribute("visible","true")
                document.getElementById("sphere_Thermometer").setAttribute("static-body","")
                
            }
        });
    }
})

AFRAME.registerComponent('baby-thermometer', {
    schema: {
        entity_id: { type: 'string', default: '0' },
        action_obj: { type: 'string', default: "" },
    },

    init: function () {
        let el = this.el;
        let data = this.data
        let id_Data = this.data.entity_id;

        this.el.addEventListener('collide', function (e) {
            
            if (id_Data == e.detail.body.el.id) {    
                document.getElementById("baby_to_Idle_position").setAttribute("visible","true")
                document.getElementById("baby_to_Idle_position").setAttribute("static-body","")
                
            }
        });
    }
})

function baby_idle(){
    
        let baby = document.getElementById("baby")
        let blanket = document.getElementById("e-Manta_Abierta")
       
        baby.setAttribute("animation-mixer","clip:Side_to_Idle;loop:once;repetitions:0;clampWhenFinished:true")
        
        let delayInMilliseconds = 3000; //1 second

        setTimeout(function () {
            
            document.getElementById("baby_to_Idle_position").removeAttribute("visible","false")
            document.getElementById("baby_to_Idle_position").removeAttribute("static-body")
            document.getElementById("baby_to_Idle_position").setAttribute("opacity","0")
            document.getElementById("sphere_Thermometer").setAttribute("visible","false")
            document.getElementById("sphere_Thermometer").setAttribute("opacity","0")
            document.getElementById("sphere_Thermometer").removeAttribute("static-body")
            document.getElementById("sphere_syringe").setAttribute("visible","false")
            document.getElementById("sphere_syringe").setAttribute("opacity","0")
            document.getElementById("sphere_syringe").removeAttribute("static-body")
            document.getElementById("baby").setAttribute("dynamic-body","")
            
            
        },delayInMilliseconds)
    
}


let fourthAct = false
AFRAME.registerComponent('baby-rest-fourth', {
    schema: {
        entity_id: { type: 'string', default: '0' },
        action_obj: { type: 'string', default: "" },
    },

    init: function () {
        let el = this.el;
        let data = this.data
        let id_Data = this.data.entity_id;

        this.el.addEventListener('collide', function (e) {
            
            if (id_Data == e.detail.body.el.id) {    
                fourthAct = true
            }
        });
    }
})

function baby_finalle(){
    if(babyRest && fourthAct){
        let baby = document.getElementById("baby")
        baby.removeAttribute("dynamic-body")
        baby.setAttribute("position","-0.189 0.250 -1.802")
        baby.setAttribute("rotation","0 90 0")        
        
        
        
        

        
    }
}

AFRAME.registerComponent('baby-daiper', {
    schema: {
        entity_id: { type: 'string', default: '0' },
        action_obj: { type: 'string', default: "" },
    },

    init: function () {
        let el = this.el;
        let data = this.data
        let id_Data = this.data.entity_id;

        this.el.addEventListener('collide', function (e) {
            
            if (id_Data == e.detail.body.el.id) {    
                let sphere = document.getElementById("sphere_daiper")
                document.getElementById("pañal").setAttribute("visible","false")
                document.getElementById("e-Pañal_Cerrado").setAttribute("visible","true")
                document.getElementById("e-Pañal_Cerrado").setAttribute("animation-mixer","loop:once;repetitions:0;clampWhenFinished:true")
                sphere.setAttribute("visible","false")
                
            }
        });
    }
})