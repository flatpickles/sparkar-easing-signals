const FaceTracking = require("FaceTracking");
const Scene = require("Scene");

const EasingSignals = require("./sparkar-easing-signals.js");

const rectangle = Scene.root.find("rectangle0");
const mouthOpenness = FaceTracking.face(0).mouth.openness;
const easedOpenness = EasingSignals.easeOutQuad(mouthOpenness);

rectangle.transform.scaleX = easedOpenness;
rectangle.transform.scaleY = easedOpenness;
