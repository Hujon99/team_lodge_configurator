// This function is run when the sketchfab client has been
// initialized
const getNodeByName = (nodemap, nodename) => {
  return Object.values(nodemap).find((node) => {
    if (node.type === "MatrixTransform" && node.name === nodename) {
      return node;
    }
  });
};

let button1State = 1;

const success = (api) => {
  api.start(function () {
    api.addEventListener("viewerready", function () {
      api.getNodeMap(function (err, nodes) {
        console.log(nodes);
        const cube = getNodeByName(nodes, "Cube_0");
      });
    });

    api.addEventListener('nodeMouseEnter', function (info) {
      var y = info.material;
      y.channels.EmitColor.factor = 0.2;
      y.channels.EmitColor.enable = true;
      y.channels.EmitColor.color = [1.0, 1.0, 1.0];
      api.setMaterial(y, function () {
        console.log('highlighted ' + y.name);
      });
      console.log('nodeMouseEnter', info);
    }, {
      pick: 'fast'
    });
    api.addEventListener('nodeMouseLeave', function (info) {
      var y = info.material;
      y.channels.EmitColor.enable = false;
      api.setMaterial(y, function () {
        console.log('left ' + y.name);
      });
    }, {
      pick: 'fast'
    });
    api.addEventListener('click', function (info) {
      selectObject(info);
      }, {
      pick: 'fast'
    });

    button1.addEventListener('click', () => {
      console.log('Button 1 clicked!');
      if (button1State === 1) {
        api.hide(3);
      }
      else{
        api.show(3);
      }
      
      // Toggle the state between 1 and 0
      button1State = button1State === 1 ? 0 : 1;

      // Update the button text based on the state
       button1.textContent = button1State === 1 ? 'Button 1 (On)' : 'Button 1 (Off)';
      // Add your code to respond to Button 1 click here
    });
    button2.addEventListener('click', () => {
      console.log('Button 2 clicked!');
      // Add your code to respond to Button 2 click here
    });
      api.getMaterialList(function(err, materials) {
        if (!err) {
            window.console.log(materials);
        }
    });
  });
};

const loadSketchfab = (sceneuid, elementId) => {
  // To get started with Sketchfab, we need to create a client
  // object for a certain iframe in the DOM
  const iframe = document.getElementById(elementId);
  const client = new Sketchfab("1.12.1", iframe);

  // Then we can initialize the client with a specific model
  // and some player parameters
  client.init(sceneuid, {
    success: success,
    error: () => console.error("Sketchfab API error"),
    ui_stop: 0,
    preload: 1,
    camera: 0,
    autoplay: 1,
    transparent: 1
  });
};

//Graphical Interface
// Get references to the buttons
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

var menuToggle1 = false;
var menuToggle2 = false;

// Function to toggle the menu overlay
function toggleMenu() {
  const menuOverlay = document.querySelector('.menu-overlay');
  menuOverlay.classList.toggle('show');
  menuToggle1 = !menuToggle1;
  console.log('Toggle1:' + menuToggle1)
  detoggleMenus(1);
  
}

// Function to toggle the menu overlay
function toggleMenu2() {
  const menuOverlay2 = document.querySelector('.menu-overlay2');
  menuOverlay2.classList.toggle('show');
  menuToggle2 = !menuToggle2;
  console.log('Toggle2:' + menuToggle2)
  detoggleMenus(2);
  
}



function detoggleMenus(menu){
  
}

function selectObject(info){
  var selectedObject = info.material.name;
  if (selectedObject == 'ambientCG/Fabric007/2K-JPG'){
  console.log(selectedObject);
  toggleMenu();
  }
  else if (selectedObject == 'ambientCG/Tiles045/2K-JPG'){
    toggleMenu2();
  }
}

// Event listener for the toggle button
document.getElementById('toggleButton').addEventListener('click', toggleMenu);


const grand_lodge_id = 'fb9cd50be0224968ae444094469cf3f3'
loadSketchfab(grand_lodge_id, "api-frame");
