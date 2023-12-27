"use strict";(self.webpackChunkidvc=self.webpackChunkidvc||[]).push([[423],{3457:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var r=n(4328),o=n(4554),i=n(7286),a=n(8736),u=n(6955),c=n(813),l=n(528),s=n(683),f=n(7672);function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(l){return void n(l)}u.done?t(c):Promise.resolve(c).then(r,o)}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function w(e,t){return!t||"object"!==function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}(t)&&"function"!==typeof t?h(e):t}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w(this,n)}}function S(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(u){i=[6,u],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}var x=[1,320,320,3],k=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(i,e);var t,n,r,o=m(i);function i(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.z.WASM,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return b(this,i),y(h(e=o.call(this,t,n,r)),"canvasSize",{width:1,height:1}),e}return t=i,n=[{key:"setSizes",value:function(e){var t=e.height,n=e.width;this.canvasSize.width=n,this.canvasSize.height=t}},{key:"predict",value:function(e){var t=y({},"serving_default_input_2:0",new a.Tensor("float32",e,x));return this.session.run(t)}},{key:"predictFromImage",value:function(e,t,n,r){var o,i=this;return(o=function(){var o,a,u,c,f;return S(this,(function(h){switch(h.label){case 0:return i.loading?[2,[]]:(o=i.createSrc(e,"angles-input-canvas"),a=t||(0,l.vL)("angles-canvas",{width:320,height:320}),u=(0,l.SI)(o,a,n,r),c=(0,s.Di)(u,s.eQ.WITHOUT),[4,i.predict(c)]);case 1:return f=h.sent(),i.setSizes(o),[2,i.interpret(f["StatefulPartitionedCall:1"].data,f["StatefulPartitionedCall:0"].data)]}}))},function(){var e=this,t=arguments;return new Promise((function(n,r){var i=o.apply(e,t);function a(e){p(i,n,r,a,u,"next",e)}function u(e){p(i,n,r,a,u,"throw",e)}a(void 0)}))})()}},{key:"interpret",value:function(e,t){var n={side:"None",bbox:{topLeft:{x:0,y:0},bottomRight:{x:1,y:1}},perimeterInPercents:{width:0,height:0}},r=[];return e.forEach((function(e,t){return r.push({label:f.mR[t],score:e})})),n.side=r.sort((function(e,t){return t.score-e.score}))[0].label,n.bbox.topLeft.x=~~(t[0]*this.canvasSize.width),n.bbox.topLeft.y=~~(t[1]*this.canvasSize.height),n.bbox.bottomRight.x=~~(t[2]*this.canvasSize.width),n.bbox.bottomRight.y=~~(t[3]*this.canvasSize.height),n.perimeterInPercents.width=~~(100*(t[2]-t[0])),n.perimeterInPercents.height=~~(100*(t[3]-t[1])),n}}],n&&v(t.prototype,n),r&&v(t,r),i}(u.Z);function P(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(l){return void n(l)}u.done?t(c):Promise.resolve(c).then(r,o)}function O(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){P(i,r,o,a,u,"next",e)}function u(e){P(i,r,o,a,u,"throw",e)}a(void 0)}))}}function z(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(u){i=[6,u],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}const _=O((function(){var e;return z(this,(function(t){return e=new k("".concat(o.t.cK),c.z.WASM,r.Z.networkUrl),i.Z.setModule("model","classLocal",e),[2,[e.initialize.bind(e)]]}))}))}}]);