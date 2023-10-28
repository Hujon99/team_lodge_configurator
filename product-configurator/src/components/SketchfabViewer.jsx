import React, { useEffect } from 'react';
import { loadSketchfab, getNodeByName } from '../utils/sketchfabUtils';
import './components.css'

function SketchfabViewer() {
  useEffect(() => {
    const success = (api) => {       // All the success callback logic here...
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

              api.getMaterialList(function(err, materials) {
                if (!err) {
                    window.console.log(materials);
                }
            });
          });

    };

    const grand_lodge_id = 'fb9cd50be0224968ae444094469cf3f3';
    loadSketchfab(grand_lodge_id, "api-frame", success);
  }, []);

  return (
    <div className='sketchfabViewer'>
      <iframe id="api-frame" width="640" height="480"></iframe>
    </div>
  );
}

export default SketchfabViewer;
