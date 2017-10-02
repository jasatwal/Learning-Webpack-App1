const button = document.createElement("button");
button.innerText = "Click me";
button.onclick = () => {
    // Part of ES2015 spec.
    System.import("./image_viewer").then(module => {
        module.default();
    });
};

document.body.appendChild(button);