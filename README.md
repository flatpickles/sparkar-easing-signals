# Spark AR - Easing Signals

## Description

This is a collection of polynomial easing functions. Though similar tools already exist for animations, the EasingSignals functions can be used to derive eased values from other types of interactive input (e.g. object size bound to mouth openness, or speaker volume bound to a slider). All functions take a ScalarSignal input (0-1 expected) and return a ScalarSignal with the eased value.

For more info, see [these comparisions](https://easings.net/en) of various easing functions, and [gre](https://github.com/gre)'s [gist](https://gist.github.com/gre/1650294).

## Usage

```javascript
const FaceTracking = require("FaceTracking");
const Scene = require("Scene");

const EasingSignals = require("sparkar-easing-signals");

const rectangle = Scene.root.find("rectangle0");
const mouthOpenness = FaceTracking.face(0).mouth.openness;
const easedOpenness = EasingSignals.easeOutQuad(mouthOpenness);

rectangle.transform.scaleX = easedOpenness;
rectangle.transform.scaleY = easedOpenness;
```