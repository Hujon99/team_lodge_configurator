export const getNodeByName = (nodemap, nodename) => {
    return Object.values(nodemap).find((node) => {
      if (node.type === "MatrixTransform" && node.name === nodename) {
        return node;
      }
    });
  };
  
  export const loadSketchfab = (sceneuid, elementId, successCallback) => {
    const iframe = document.getElementById(elementId);
    const client = new Sketchfab("1.12.1", iframe);
  
    client.init(sceneuid, {
      success: successCallback,
      error: () => console.error("Sketchfab API error"),
      ui_stop: 0,
      preload: 1,
      camera: 0,
      autoplay: 1,
      transparent: 1
    });
  };
  