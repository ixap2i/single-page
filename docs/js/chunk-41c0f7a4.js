(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41c0f7a4"],{c1a5:function(t,o,e){"use strict";e.r(o),e.d(o,"ion_toast",(function(){return m}));var r=e("9ab4"),n=e("6d28"),i=e("7d8d"),a=e("32c0"),s=e("2196"),d=e("feca"),l=e("ef7a"),c=(e("5ea3"),e("61cf"),function(t,o){var e=Object(l["a"])(),r=Object(l["a"])(),n=t.host||t,i=t.querySelector(".toast-wrapper"),a="calc(-10px - var(--ion-safe-area-bottom, 0px))",s="calc(10px + var(--ion-safe-area-top, 0px))";switch(r.addElement(i),o){case"top":r.fromTo("transform","translateY(-100%)","translateY("+s+")");break;case"middle":var d=Math.floor(n.clientHeight/2-i.clientHeight/2);i.style.top=d+"px",r.fromTo("opacity",.01,1);break;default:r.fromTo("transform","translateY(100%)","translateY("+a+")");break}return e.addElement(n).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(r)}),p=function(t,o){var e=Object(l["a"])(),r=Object(l["a"])(),n=t.host||t,i=t.querySelector(".toast-wrapper"),a="calc(-10px - var(--ion-safe-area-bottom, 0px))",s="calc(10px + var(--ion-safe-area-top, 0px))";switch(r.addElement(i),o){case"top":r.fromTo("transform","translateY("+s+")","translateY(-100%)");break;case"middle":r.fromTo("opacity",.99,0);break;default:r.fromTo("transform","translateY("+a+")","translateY(100%)");break}return e.addElement(n).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(r)},u=function(t,o){var e=Object(l["a"])(),r=Object(l["a"])(),n=t.host||t,i=t.querySelector(".toast-wrapper"),a="calc(8px + var(--ion-safe-area-bottom, 0px))",s="calc(8px + var(--ion-safe-area-top, 0px))";switch(r.addElement(i),o){case"top":i.style.top=s,r.fromTo("opacity",.01,1);break;case"middle":var d=Math.floor(n.clientHeight/2-i.clientHeight/2);i.style.top=d+"px",r.fromTo("opacity",.01,1);break;default:i.style.bottom=a,r.fromTo("opacity",.01,1);break}return e.addElement(n).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(r)},b=function(t){var o=Object(l["a"])(),e=Object(l["a"])(),r=t.host||t,n=t.querySelector(".toast-wrapper");return e.addElement(n).fromTo("opacity",.99,0),o.addElement(r).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(e)},h=":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:pre-wrap;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, #f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-850, #262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-middle{opacity:0.01}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color, opacity 100ms linear;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}",g=":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:pre-wrap;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800, #333333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-50, #f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-content{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-header{margin-bottom:2px;font-weight:500;line-height:20px}.toast-message{line-height:20px}.toast-button-group-start{margin-left:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-group-start{margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}.toast-button-group-end{margin-right:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-group-end{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button-cancel{color:var(--ion-color-step-100, #e6e6e6)}.toast-button-icon-only{border-radius:50%;padding-left:9px;padding-right:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-icon-only{padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}@media (any-hover: hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}",m=function(){function t(t){var o=this;Object(n["o"])(this,t),this.didPresent=Object(n["g"])(this,"ionToastDidPresent",7),this.willPresent=Object(n["g"])(this,"ionToastWillPresent",7),this.willDismiss=Object(n["g"])(this,"ionToastWillDismiss",7),this.didDismiss=Object(n["g"])(this,"ionToastDidDismiss",7),this.presented=!1,this.duration=0,this.keyboardClose=!1,this.position="bottom",this.translucent=!1,this.animated=!0,this.dispatchCancelHandler=function(t){var e=t.detail.role;if(Object(a["j"])(e)){var r=o.getButtons().find((function(t){return"cancel"===t.role}));o.callButtonHandler(r)}}}return t.prototype.connectedCallback=function(){Object(a["f"])(this.el)},t.prototype.present=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t=this;return Object(r["c"])(this,(function(o){switch(o.label){case 0:return[4,Object(a["e"])(this,"toastEnter",c,u,this.position)];case 1:return o.sent(),this.duration>0&&(this.durationTimeout=setTimeout((function(){return t.dismiss(void 0,"timeout")}),this.duration)),[2]}}))}))},t.prototype.dismiss=function(t,o){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(a["g"])(this,t,o,"toastLeave",p,b,this.position)},t.prototype.onDidDismiss=function(){return Object(a["h"])(this.el,"ionToastDidDismiss")},t.prototype.onWillDismiss=function(){return Object(a["h"])(this.el,"ionToastWillDismiss")},t.prototype.getButtons=function(){var t=this.buttons?this.buttons.map((function(t){return"string"===typeof t?{text:t}:t})):[];return t},t.prototype.buttonClick=function(t){return Object(r["a"])(this,void 0,void 0,(function(){var o,e;return Object(r["c"])(this,(function(r){switch(r.label){case 0:return o=t.role,Object(a["j"])(o)?[2,this.dismiss(void 0,o)]:[4,this.callButtonHandler(t)];case 1:return e=r.sent(),e?[2,this.dismiss(void 0,o)]:[2,Promise.resolve()]}}))}))},t.prototype.callButtonHandler=function(t){return Object(r["a"])(this,void 0,void 0,(function(){var o,e;return Object(r["c"])(this,(function(r){switch(r.label){case 0:if(!t||!t.handler)return[3,4];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,Object(a["n"])(t.handler)];case 2:return o=r.sent(),!1===o?[2,!1]:[3,4];case 3:return e=r.sent(),console.error(e),[3,4];case 4:return[2,!0]}}))}))},t.prototype.renderButtons=function(t,o){var e,r=this;if(0!==t.length){var a=Object(i["b"])(this),s=(e={"toast-button-group":!0},e["toast-button-group-"+o]=!0,e);return Object(n["j"])("div",{class:s},t.map((function(t){return Object(n["j"])("button",{type:"button",class:f(t),tabIndex:0,onClick:function(){return r.buttonClick(t)},part:"button"},Object(n["j"])("div",{class:"toast-button-inner"},t.icon&&Object(n["j"])("ion-icon",{icon:t.icon,slot:void 0===t.text?"icon-only":void 0,class:"toast-icon"}),t.text),"md"===a&&Object(n["j"])("ion-ripple-effect",{type:void 0!==t.icon&&void 0===t.text?"unbounded":"bounded"}))})))}},t.prototype.render=function(){var t,o,e=this.getButtons(),r=e.filter((function(t){return"start"===t.side})),a=e.filter((function(t){return"start"!==t.side})),l=Object(i["b"])(this),c=(t={"toast-wrapper":!0},t["toast-"+this.position]=!0,t),p=e.length>0?"dialog":"status";return Object(n["j"])(n["c"],Object.assign({role:p,tabindex:"-1"},this.htmlAttributes,{style:{zIndex:""+(6e4+this.overlayIndex)},class:Object(d["a"])(this.color,Object.assign(Object.assign((o={},o[l]=!0,o),Object(d["b"])(this.cssClass)),{"toast-translucent":this.translucent})),onIonToastWillDismiss:this.dispatchCancelHandler}),Object(n["j"])("div",{class:c},Object(n["j"])("div",{class:"toast-container",part:"container"},this.renderButtons(r,"start"),Object(n["j"])("div",{class:"toast-content"},void 0!==this.header&&Object(n["j"])("div",{class:"toast-header",part:"header"},this.header),void 0!==this.message&&Object(n["j"])("div",{class:"toast-message",part:"message",innerHTML:Object(s["a"])(this.message)})),this.renderButtons(a,"end"))))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n["k"])(this)},enumerable:!1,configurable:!0}),t}(),f=function(t){var o;return Object.assign((o={"toast-button":!0,"toast-button-icon-only":void 0!==t.icon&&void 0===t.text},o["toast-button-"+t.role]=void 0!==t.role,o["ion-focusable"]=!0,o["ion-activatable"]=!0,o),Object(d["b"])(t.cssClass))};m.style={ios:h,md:g}},feca:function(t,o,e){"use strict";e.d(o,"a",(function(){return i})),e.d(o,"b",(function(){return s})),e.d(o,"c",(function(){return n})),e.d(o,"d",(function(){return l}));var r=e("9ab4"),n=function(t,o){return null!==o.closest(t)},i=function(t,o){var e;return"string"===typeof t&&t.length>0?Object.assign((e={"ion-color":!0},e["ion-color-"+t]=!0,e),o):o},a=function(t){if(void 0!==t){var o=Array.isArray(t)?t:t.split(" ");return o.filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t}))}return[]},s=function(t){var o={};return a(t).forEach((function(t){return o[t]=!0})),o},d=/^[a-z][a-z0-9+\-.]*:/,l=function(t,o,e,n){return Object(r["a"])(void 0,void 0,void 0,(function(){var i;return Object(r["c"])(this,(function(r){return null!=t&&"#"!==t[0]&&!d.test(t)&&(i=document.querySelector("ion-router"),i)?(null!=o&&o.preventDefault(),[2,i.push(t,e,n)]):[2,!1]}))}))}}}]);