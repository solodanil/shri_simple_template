(self.webpackChunkunit_demo_cra=self.webpackChunkunit_demo_cra||[]).push([[497],{729:(t,e,r)=>{"use strict";r.d(e,{P:()=>d});var n={};r.r(n),r.d(n,{default:()=>a});var o=r(294),i=r(704),c=r(895);const a={randomUUID:r(721).Z};var u=r(577),s=r.n(u),l=r(893);function d(t){var e=t.index,r=(0,i.I0)(),a=(0,i.v9)((function(t){return t.items[e]})),u=(0,i.v9)((function(t){return t.done[e]})),d=(0,o.useCallback)((function(){return r((0,c.j0)(e,!u))}),[e,u,r]);return(0,l.jsx)("div",{"data-testid":n,className:s().item,children:(0,l.jsxs)("div",{"data-testid":"list-item",className:u?"done":"",children:[(0,l.jsx)("input",{type:"checkbox",checked:u,onChange:d}),a]})})}},895:(t,e,r)=>{"use strict";r.d(e,{Hd:()=>d,N2:()=>y,j0:()=>f,jX:()=>l});var n=r(890);function o(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var s={items:["Позавтракать","Сходить в магазин","Покормить кота"],done:{},text:""},l=function(t){return{type:"ADD_ITEM",text:t}},d=function(t){return{type:"SET_TEXT",text:t}},f=function(t,e){return{type:"SET_DONE",index:t,done:e}},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_ITEM":return a(a({},t),{},{text:"",items:[].concat(o(t.items),[e.text])});case"SET_TEXT":return a(a({},t),{},{text:e.text});case"SET_DONE":return a(a({},t),{},{done:a(a({},t.done),{},u({},e.index,e.done))});default:return t}};function y(){return(0,n.MT)(p)}},17:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>a});var n=r(81),o=r.n(n),i=r(645),c=r.n(i)()(o());c.push([t.id,".EPk3EXERT5xyM_B8zf0P {\r\n  padding: 0;\r\n}\r\n",""]),c.locals={item:"EPk3EXERT5xyM_B8zf0P"};const a=c},577:(t,e,r)=>{var n=r(17);"string"==typeof n&&(n=[[t.id,n,""]]);r(723)(n,{hmr:!0,transform:void 0,insertInto:void 0}),n.locals&&(t.exports=n.locals)}},t=>{t.O(0,[795],(()=>(729,t(t.s=729)))),t.O()}]);