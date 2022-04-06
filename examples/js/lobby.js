let ojectsResult
let spawnedObj
let scene = document.querySelector('a-scene');

fetch(url).then(
    function (u) {
        return u.json();
    }
).then(
    function (json) {
        spawnedObj = json
        ojectsResult = JSON.parse(JSON.stringify(json));
        spawnEntities(ojectsResult)
    }
)

function spawnEntities(structure) {
    structure.forEach(item => {
        let entityEl = document.createElement(item.element);
        entityEl.setAttribute("position", item.position)
        entityEl.setAttribute("width", item.width)
        entityEl.setAttribute("height", item.height)
        entityEl.setAttribute("opacity", item.opacity)
        entityEl.setAttribute("id", item.id)
        entityEl.setAttribute("value", item.value)
        entityEl.setAttribute("text", item.text)
        entityEl.setAttribute("src", item.src)
        entityEl.setAttribute("color", item.color)
        entityEl.setAttribute("material", item.material)
        entityEl.setAttribute("panel-rounded", item.panelrounded)
        scene.appendChild(entityEl);

        let panelID = entityEl.getAttribute("id")

        entityEl.addEventListener("mouseenter", function () {
            entityEl.setAttribute("opacity", item.opacity - 0.5)
            if (panelID == 'panel1') {
                entityEl.setAttribute("opacity", "1.0")
            }
        });

        entityEl.addEventListener("click", function () {
            if (panelID == 'panel2') {
                window.location = "/IEPROES/Process1/vxr-teacher-template.html"
            }
            if (panelID == 'panel3') {
                window.location = "/IEPROES/Process2/vxr-teacher-template.html"
            }
            if (panelID == 'panel4') {
                window.location = "/IEPROES/Process3/vxr-teacher-template.html"
            }
            if (panelID == 'panel5') {
                window.location = "/IEPROES/Process-Assist-NeoNato/vxr-teacher-template.html"
            }
            if (panelID == 'panel6') {
                window.location = "/IEPROES/Process5/vxr-teacher-template.html"
            }
            if (panelID == 'panel7') {
                window.location = "/IEPROES/Process6/vxr-teacher-template.html"
            }
            if (panelID == 'panel8') {
                window.location = "/IEPROES/Process7/vxr-teacher-template.html"
            }
            if (panelID == 'panel9') {
                window.location = "/IEPROES/Process8/vxr-teacher-template.html"
            }
        });

        entityEl.addEventListener("mouseleave", function () {
            entityEl.setAttribute("opacity", item.opacity)
        });
    });
}