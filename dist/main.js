(()=>{"use strict";var e={174:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(601),r=n.n(o),i=n(609),c=n.n(i)()(r());c.push([e.id,"body{\n    width: 100vw;\n    margin: 0;\n    padding: 0;\n    font-family:Verdana, Geneva, Tahoma, sans-serif\n}\n\n#menu{\n    width: 100%;\n    height: 100px;\n    background-color: rgb(45, 93, 196); \n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: xx-large;\n    font-weight: 900;\n}\n#menuLeft, #menuRight{\n    margin: 0px 20px;\n    display: flex;\n    width: 120px;\n}\n.menu{\n    width: 60px;\n    height: 60px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.iconMenu:hover{\n    width: 50px;\n    height: 50px;\n}\n#content{\n    display: flex;\n    width: 100%;\n    min-height: calc(100vh - 100px);\n}\n\n#contentLeft{ \n    width: 240px;\n    background-color: blueviolet;\n    padding: 50px 10px 0px 50px;\n    display: flex;\n    flex-direction: column;\n    align-items:flex-start;\n    justify-content: flex-start;\n    gap: 10px;\n    font-size: 20px;\n}\n.ProjectsTittle{\n    display: flex;\n    width: 200px;\n    height: 40px;\n    justify-content: space-between;\n    align-items: center;\n\n}\n.iconProject{\n    width: 30px;\n    height: 30px;  \n}\n.iconProject:hover{\n    width: 35px;\n    height: 35px;  \n}\n#addProjectForm{\n    width: 100%;\n    display:none;\n    flex-direction: column;\n    padding: 5px;\n    border-radius: 5px;\n    background-color: aquamarine;\n    justify-content: center;\n    \n    \n}\n.forminput{\n    width: 90%;\n    height: 20px;\n    border-radius: 5px;\n    border: 0px;\n    \n}\n.formbtn{\n    width: 45%;\n    height: 20px;\n    border-radius: 5px;\n    border: 0px;\n    padding: 0;\n}\n#contentRight{\n    flex: 1;\n    background-color: brown;\n    padding: 50px 10px 0px 50px;\n    display: flex;\n    flex-direction: column;\n    align-items:flex-start;\n    justify-content: flex-start;\n    gap: 0px;\n    font-size: 20px;\n}\n.titleContainer{\n    display: flex;\n    gap: 10px;\n    margin-bottom: 10px;\n}\n#deleteProjectIcon{\n    display: none;\n}\n.contentTitle{\n    font-size: xx-large;\n}\n#addTaskForm{\n    display: none;\n    flex-direction: column;\n    gap: 5px;\n    background-color: aquamarine;\n    width: 600px;\n    padding: 10px;\n    border-radius: 5px;\n}\n#editTaskForm{\n    display: none;\n    flex-direction: column;\n    gap: 5px;\n    background-color: aquamarine;\n    width: 600px;\n    padding: 10px;\n    border-radius: 5px;\n}\n.forminput2{\n    width: calc(100% - 4px);\n    height: 20px;\n    border-radius: 5px;\n    border: 0px;\n    padding: 2px;\n}\n.formTaskbtn{\n    width: 25%;\n    height: 50px;\n    border-radius: 5px;\n    border: 0px;\n    padding: 0;\n}\n.btnformtask{\n    display: flex;\n    justify-content: space-around;\n    margin-top: 50px;\n}\n.taskShort{\n    display: flex;\n    justify-content: space-between;\n    border: solid 1px black;\n    border-radius: 5px;\n    width: 100%;\n    padding: 2px;\n    margin-top: 10px;\n}\n.displayTaskLong:hover{\n    border: solid 2px green;\n    font-size: 22px;\n}\n.TSRight{\n    display: flex;\n    gap: 5px;\n}\n.taskLong{\n    display: none;\n    border: solid 1px black;\n    border-radius: 5px;\n    width: 100%;\n    padding: 2px;\n}",""]);const a=c},609:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(c[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&c[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},601:e=>{e.exports=function(e){return e[1]}},62:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},c=[],a=0;a<e.length;a++){var d=e[a],l=o.base?d[0]+o.base:d[0],s=i[l]||0,u="".concat(l," ").concat(s);i[l]=s+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=a,t.splice(a,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var a=n(i[c]);t[a].references--}for(var d=o(e,r),l=0;l<i.length;l++){var s=n(i[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=d}}},793:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},173:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},892:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},36:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},464:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{const e=(e,t,n,o,r)=>({id:"id"+Date.now(),title:e,description:t,duedate:n,priority:o,project:r,done:!1,updateTask(e,t,n,o,r){this.title=e,this.description=t,this.duedate=n,this.priority=o,this.project=r},setTaskDone(){this.done=!0}}),t=e=>{let t="id"+Date.now();return"Inbox"==e&&(t="id001"),{id:t,projectName:e}};function o(e){localStorage.removeItem("tasklist");const t=JSON.stringify(e);localStorage.setItem("tasklist",t)}function r(e){localStorage.removeItem("projectList");const t=JSON.stringify(e);localStorage.setItem("projectList",t)}var i=n(62),c=n.n(i),a=n(36),d=n.n(a),l=n(793),s=n.n(l),u=n(892),p=n.n(u),m=n(173),f=n.n(m),y=n(464),h=n.n(y),x=n(174),g={};g.styleTagTransform=h(),g.setAttributes=p(),g.insert=s().bind(null,"head"),g.domAPI=d(),g.insertStyleElement=f(),c()(x.Z,g),x.Z&&x.Z.locals&&x.Z.locals;let v=[],k=[];function S(){document.querySelector("#addTaskForm").style.display="none",document.querySelector("#newTaskName").value="",document.querySelector("#newTaskDescription").value="",document.querySelector("#newTaskDuedate").value=""}function T(){document.querySelector("#editTaskForm").style.display="none"}function b(){document.querySelector("#addProjectForm").style.display="none"}function q(e,t,n,o,r){let i=document.createElement("div");i.classList.add("taskShort",`${r}`,"cleanDOM");let c=document.createElement("div"),a=document.createTextNode(`${e}`);c.appendChild(a);let d=document.createElement("div");d.classList.add("displayTaskLong");let l=document.createTextNode("Display/Hide Description");d.appendChild(l);let s=document.createElement("div");s.classList.add("TSRight");let u=document.createElement("div"),p=document.createTextNode(`${t}`);u.appendChild(p);let m=document.createElement("div"),f=document.createTextNode(`${n}`);m.appendChild(f);let y=document.createElement("div"),h=document.createElement("img");h.classList.add("editTask","iconTask"),h.setAttribute("src","./Assets/edit.svg"),y.appendChild(h);let x=document.createElement("div"),g=document.createElement("img");return g.classList.add("deleteTask","iconTask"),g.setAttribute("src","./Assets/delete.svg"),x.appendChild(g),s.appendChild(u),s.appendChild(m),s.appendChild(y),s.appendChild(x),i.appendChild(c),i.appendChild(d),i.appendChild(s),i}function L(e,t,n,o){let r=document.createElement("div");r.classList.add("taskLong",`${o}`,"cleanDOM");let i=document.createElement("div"),c=document.createTextNode(`${t}`);return i.appendChild(c),r.appendChild(i),r}function j(e,t){let n=document.createElement("li");n.classList.add("leftclickable",`${t}`,"cleanDOM");let o=document.createTextNode(e);return n.appendChild(o),n}function C(e,t){document.querySelectorAll(e).forEach((e=>{for(;e.firstChild;)e.removeChild(e.lastChild);const n=v.length;for(let o=0;o<n;o++){let n=document.createElement("option");n.setAttribute("value",`${v[o].projectName}`),v[o].projectName==t&&n.setAttribute("selected","selected");let r=document.createTextNode(`${v[o].projectName}`);n.appendChild(r),e.appendChild(n)}}))}function E(e,t){document.querySelectorAll(".cleanDOM").forEach((e=>{e.remove()}));const n=document.querySelector(".contentHeader"),o=function(e,t){let n=document.createElement("div");n.classList.add("cleanDOM","titleContainer");let o=document.createElement("div");o.classList.add("contentTitle",`${t}`);let r=document.createTextNode(`${e}`);o.appendChild(r),n.appendChild(o);let i=document.createElement("img");return i.setAttribute("src","./Assets/delete.svg"),i.classList.add("iconProject",`${t}`,`${e}`),"Inbox"!=e&&n.appendChild(i),n}(e,t);n.appendChild(o);let r=k.filter((t=>t.project==e));const i=document.querySelector("#contentRight");if(r.length>0)for(let e=0;e<r.length;e++){const t=q(r[e].title,r[e].duedate,r[e].priority,r[e].project,r[e].id),n=L(r[e].title,r[e].description,r[e].project,r[e].id);i.appendChild(t),i.appendChild(n)}const c=document.querySelector("#ProjectsList");for(let e=0;e<v.length;e++)if("Inbox"!=v[e].projectName){let t=j(v[e].projectName,v[e].id);c.appendChild(t)}C(".newTaskProject",document.querySelector(".contentTitle").textContent)}!function(){if(k=function(){const t=localStorage.getItem("tasklist"),n=JSON.parse(t);let o=[];if(null==n)return[];for(let r=0;r<n.length;r++)o.push(e(n[r].title,n[r].description,n[r].duedate,n[r].priority,n[r].project)),console.log("task n "+r),console.log("savedStringTasks "+t),console.log("savedTasksList "+n),console.log("savedTasksList[i] "+n[r][0]),console.log("savedTasks[i].title "+o[r].title);return o}(),v=function(){const e=localStorage.getItem("projectList"),t=JSON.parse(e);return null==t?[]:t}(),0==v.length){const e=t("Inbox");v.push(e)}}(),E(v[0].projectName,v[0].id),document.querySelector("#menuIcon").addEventListener("click",(()=>{const e=document.querySelector("#contentLeft");"none"==e.style.display?e.style.display="flex":e.style.display="none"})),document.querySelector("#homeIcon").addEventListener("click",(()=>{E(v[0].projectName,v[0].id)})),document.querySelector("#addIcon").addEventListener("click",(()=>{document.querySelector("#addTaskForm").style.display="flex"})),document.querySelector("#addProjectIcon").addEventListener("click",(()=>{document.querySelector("#addProjectForm").style.display="flex"})),document.querySelector(".contentHeader").addEventListener("click",(e=>{var t,n;"iconProject"==e.target.classList[0]&&(t=e.target.classList[2],n=e.target.classList[1],v=v.filter((e=>e.id!=n)),r(v),k=k.filter((e=>e.project!=t)),o(k),E(v[0].projectName,v[0].id))})),document.querySelector("#contentLeft").addEventListener("click",(e=>{"leftclickable"==e.target.classList[0]&&E(e.target.textContent,e.target.classList[1])})),document.querySelector("#contentRight").addEventListener("click",(e=>{var t;"displayTaskLong"==e.target.classList[0]?"flex"==e.target.parentElement.nextElementSibling.style.display?e.target.parentElement.nextElementSibling.style.display="none":e.target.parentElement.nextElementSibling.style.display="flex":"deleteTask"==e.target.classList[0]?(t=e.target.closest(".taskShort").classList[1],document.querySelectorAll("."+t).forEach((e=>e.remove())),k=k.filter((e=>e.id!=t)),o(k)):"editTask"==e.target.classList[0]&&function(e){let t=k.filter((t=>t.id==e))[0];document.querySelector("#idTask").classList.value=e,document.querySelector("#editTaskForm").style.display="flex",document.querySelector("#editTaskName").value=t.title,document.querySelector("#editTaskDescription").textContent=t.description,document.querySelector("#editTaskDuedate").value=t.duedate,document.querySelector("#editTaskPriority").value=t.priority,document.querySelector("#editTaskProject").value=t.project}(e.target.closest(".taskShort").classList[1])})),document.querySelector("#taskOK").addEventListener("click",(function(){const t=document.querySelector("#newTaskName").value,n=document.querySelector("#newTaskDescription").value,r=document.querySelector("#newTaskDuedate").value,i=document.querySelector("#newTaskPriority").value,c=document.querySelector("#newTaskProject").value,a=e(t,n,r,i,c);k.push(a),o(k),S(),E(document.querySelector(".contentTitle").textContent,document.querySelector(".contentTitle").classList[1])})),document.querySelector("#taskCancel").addEventListener("click",S),document.querySelector("#taskEdit").addEventListener("click",(function(){let e=k.filter((e=>e.id==document.querySelector("#idTask").classList.value))[0];const t=document.querySelector("#editTaskName").value,n=document.querySelector("#editTaskDescription").value,r=document.querySelector("#editTaskDuedate").value,i=document.querySelector("#editTaskPriority").value,c=document.querySelector("#editTaskProject").value;e.updateTask(t,n,r,i,c),o(k),T(),E(document.querySelector(".contentTitle").textContent,document.querySelector(".contentTitle").classList[1])})),document.querySelector("#taskEditCancel").addEventListener("click",T),document.querySelector("#projectOK").addEventListener("click",(function(){const e=document.querySelector("#newProjectName").value,n=t(e);v.push(n),r(v),b(),C(".newTaskProject",document.querySelector(".contentTitle").textContent),E(document.querySelector(".contentTitle").textContent,document.querySelector(".contentTitle").classList[1])})),document.querySelector("#projectCancel").addEventListener("click",b)})()})();