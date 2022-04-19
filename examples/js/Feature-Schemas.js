let result3
let objSchemas

fetch(url).then(
  function (u) { return u.json(); }
).then(
  function (json) {
    objSchemas = json
    result3 = JSON.parse(JSON.stringify(json));

    SetSchemas(result3)
  }
)

function SetSchemas(structure) {
  structure.forEach(item => {

    let schema1;
     schema1 = {
      template: `#${item.template}`,
      components: [
        'position',
        'rotation',
        {
          selector: item.selector,
          component: 'rotation'
        },
        {
          selector: item.selector,
          component: 'position'
        },
        {
          selector: item.selector,
          component: 'visible'
        },
        {
          selector: item.selector,
          component: 'animation-trigger'
        }        
      ]
    }

    if(item.selector==".vxr-obj-Baby_Vacuna"){
      console.log("baby vacuna got it.")

      schema1 = {
        template: item.template,
        components: [
          'position',
          'rotation',
          {
            selector: item.selector,
            component: 'rotation'
          },
          {
            selector: item.selector,
            component: 'position'
          },
          {
            selector: item.selector,
            component: 'visible'
          },
          {
            selector: "#e-Manta_Cerrada",
            component: 'visible'
          }

        ]
      }

    }
    NAF.schemas.add(schema1);

 
  });
}