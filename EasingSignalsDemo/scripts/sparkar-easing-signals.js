const R = require("Reactive");

module.exports = {
  /**
   * No easing, no acceleration
   * @param  {ScalarSignal} t Input to easing function
   * @return {ScalarSignal}   Output from easing function  
   */
  linear: (t) => {
    return t;
  },

  /**
   * Accelerating from zero velocity
   * @param  {ScalarSignal} t Input to easing function
   * @return {ScalarSignal}   Output from easing function  
   */
  easeInQuad: (t) => {
    return t.mul(t);
  },

  /**
   * Decelerating to zero velocity
   * @param  {ScalarSignal} t Input to easing function
   * @return {ScalarSignal}   Output from easing function  
   */ 
  easeOutQuad: (t) => {
    return t.mul(R.val(2).sub(t));
  },

  /**
   * Acceleration until halfway, then deceleration
   * @param  {ScalarSignal} t Input to easing function
   * @return {ScalarSignal}   Output from easing function  
   */
  easeInOutQuad: (t) => {
    const acc = t.mul(t).mul(2);
    const dec = R.val(4).sub(t.mul(2)).mul(t).sub(1);
    return t.lt(0.5).ifThenElse(acc, dec);
  },

  /**
   * Accelerating from zero velocity
   * @param  {ScalarSignal} t Input to easing function
   * @return {ScalarSignal}   Output from easing function  
   */
  easeInCubic: (t) => {
    return t.mul(t).mul(t)
  },

  /**
   * Decelerating to zero velocity
   * @param  {ScalarSignal} t Input to easing function
   * @return {ScalarSignal}   Output from easing function  
   */
  easeOutCubic: (t)  => { 
    const td = t.sub(1);
    return td.mul(td).mul(td).add(1)
  },

  /**
   * Acceleration until halfway, then deceleration
   * @param  {ScalarSignal} t Input to easing function
   * @return {ScalarSignal}   Output from easing function  
   */
  easeInOutCubic: (t) => {
    const acc = t.mul(t).mul(t).mul(4);
    const dec = t.sub(1).mul(t.mul(2).sub(2)).mul(t.mul(2).sub(2)).add(1);
    return t.lt(0.5).ifThenElse(acc, dec);
  },

  /**
   * Accelerating from zero velocity
   * @param  {ScalarSignal} t Input to easing function
   * @return {ScalarSignal}   Output from easing function  
   */
  easeInQuart: (t) => {
    return t.mul(t).mul(t).mul(t);
  },

  /**
   * Decelerating to zero velocity
   * @param  {ScalarSignal} t Input to easing function
   * @return {ScalarSignal}   Output from easing function  
   */
  easeOutQuart: (t) => {
    const td = t.sub(1);
    return R.val(1).sub(td.mul(td).mul(td).mul(td))
  },

  /**
   * Acceleration until halfway, then deceleration
   * @param  {ScalarSignal} t Input to easing function
   * @return {ScalarSignal}   Output from easing function  
   */
  easeInOutQuart: (t) => {
    const td = t.sub(1);
    const acc = t.mul(t).mul(t).mul(t).mul(8);
    const dec = R.val(1).sub(td.mul(td).mul(td).mul(td).mul(8));
    return t.lt(0.5).ifThenElse(acc, dec);
  },

  /**
   * Accelerating from zero velocity
   * @param  {ScalarSignal} t Input to easing function
   * @return {ScalarSignal}   Output from easing function  
   */
  easeInQuint: (t) => {
    return t.mul(t).mul(t).mul(t).mul(t);
  },

  /**
   * Decelerating to zero velocity
   * @param  {ScalarSignal} t Input to easing function
   * @return {ScalarSignal}   Output from easing function  
   */
  easeOutQuint: (t) => {
    const td = t.sub(1);
    return td.mul(td).mul(td).mul(td).mul(td).add(1);
  },

  /**
   * Acceleration until halfway, then deceleration
   * @param  {ScalarSignal} t Input to easing function
   * @return {ScalarSignal}   Output from easing function  
   */
  easeInOutQuint: (t) => {
    const td = t.sub(1);
    const acc = t.mul(t).mul(t).mul(t).mul(t).mul(16);
    const dec = td.mul(td).mul(td).mul(td).mul(td).mul(16).add(1);
    return t.lt(0.5).ifThenElse(acc, dec);
  },
};
