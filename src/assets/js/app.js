/* eslint-disable */
import $ from "jquery";
import whatInput from "what-input";

import Vue from "vue";
import vueCustomElement from "vue-custom-element";
// import LogoElement from 'logo-element';

import MyCustomElement from "./MyCustomElement";
import MyLogoElement from "./LogoElement";
import VueSlider from "./VueMethodSlider";
import WindowSizeElement from "./WindowSizeElement";

Vue.use(vueCustomElement);

Vue.customElement("my-custom-element", MyCustomElement);
Vue.customElement("logo-element", MyLogoElement);
Vue.customElement("vue-method-slider", VueSlider);
Vue.customElement("window-size-element", WindowSizeElement);

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
// window.jQuery = $;
// require('foundation-sites');
window.$ = $;
import Foundation from "foundation-sites";

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';
import "./lib/external.js";
import "./lib/pageTop.js";
import animation from "./lib/animation";

$(document).foundation();

animation();
