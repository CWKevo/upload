module.exports=function(t){var o={};function e(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=o,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,o){if(1&o&&(t=e(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var i in t)e.d(n,i,function(o){return t[o]}.bind(null,i));return n},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},e.p="",e(e.s=17)}([function(t,o){t.exports=flarum.core.compat.app},function(t,o){t.exports=flarum.core.compat.extend},,function(t,o,e){"use strict";function n(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o}e.d(o,"a",(function(){return n}))},function(t,o){t.exports=flarum.core.compat.Component},,,function(t,o){t.exports=flarum.core.compat["components/TextEditor"]},,function(t,o){t.exports=flarum.core.compat["helpers/icon"]},function(t,o){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,o){t.exports=flarum.core.compat["components/Post"]},,,,,,function(t,o,e){"use strict";e.r(o);var n=e(1),i=e(7),r=e.n(i),a=e(3),u=e(0),s=e.n(u),p=e(4),l=e.n(p),f=e(9),c=e.n(f),d=e(10),h=e.n(d),g=function(t){function o(){return t.apply(this,arguments)||this}Object(a.a)(o,t);var e=o.prototype;return e.init=function(){this.textAreaObj=null,this.uploading=m.prop(!1)},e.view=function(){var t=m("span",{className:"Button-label"},s.a.translator.trans("fof-upload.forum.buttons.attach"));return this.uploading()&&(t=m("span",{className:"Button-label uploading"},s.a.translator.trans("fof-upload.forum.states.loading"))),m("div",{className:"Button hasIcon fof-upload-button Button--icon "+(this.uploading()?"uploading":"")},[this.uploading()?h.a.component({className:"Button-icon"}):c()("fas fa-file-upload",{className:"Button-icon"}),t,m("form#fof-upload-form",[m("input",{type:"file",multiple:!0,onchange:this.process.bind(this)})])])},e.process=function(t){var o=$("form#fof-upload-form input").prop("files");this.uploading(!0),this.uploadFiles(o)},e.uploadFiles=function(t){for(var o=new FormData,e=0;e<t.length;e++)o.append("files[]",t[e]);return s.a.request({method:"POST",url:s.a.forum.attribute("apiUrl")+"/fof/upload",serialize:function(t){return t},data:o}).then(this.success.bind(this),this.failure.bind(this))},e.failure=function(t){},e.success=function(t){var o=this;t.forEach((function(t){o.textAreaObj.insertAtCursor(t+"\n")})),void 0!==this.textAreaObj.props.preview&&this.textAreaObj.props.preview(),setTimeout((function(){document.getElementById("fof-upload-form").reset(),o.uploading(!1)}),1e3)},o}(l.a),b=function(){function t(t){this.initialized||(this.uploadButton=t,this.textarea=$("#composer .Composer"),this.textarea.on("dragover",this.in.bind(this)),this.textarea.on("dragleave",this.out.bind(this)),this.textarea.on("dragend",this.out.bind(this)),this.textarea.on("drop",this.dropping.bind(this)),this.isDropping=this.over=!1,this.initialized=!0)}var o=t.prototype;return o.in=function(t){t.preventDefault(),this.over||(this.textarea.toggleClass("fof-upload-dragging",!0),this.over=!0)},o.out=function(t){t.preventDefault(),this.over&&(this.textarea.toggleClass("fof-upload-dragging",!1),this.over=!1)},o.dropping=function(t){var o=this;t.preventDefault(),this.isDropping||(this.isDropping=!0,this.textarea.addClass("fof-upload-dropping"),m.redraw(),this.uploadButton.uploadFiles(t.originalEvent.dataTransfer.files).then((function(){o.textarea.removeClass("fof-upload-dropping"),o.isDropping=!1})))},t}(),v=function(){function t(t){this.initialized||(this.uploadButton=t,document.addEventListener("paste",this.paste.bind(this)))}return t.prototype.paste=function(t){if(t.clipboardData&&t.clipboardData.items){for(var o=t.clipboardData.items,e=[],n=0;n<o.length;n++)-1!==o[n].type.indexOf("image")&&e.push(o[n].getAsFile());e.length>0&&(m.redraw(),this.uploadButton.uploadFiles(e))}},t}(),x=e(11),y=e.n(x);app.initializers.add("fof-upload",(function(t){var o,e,i;Object(n.extend)(r.a.prototype,"controlItems",(function(e){t.forum.attribute("canUpload")&&((o=new g).textAreaObj=this,e.add("fof-upload",o,0),$(".Button-label",".item-fof-upload > div:not(.uploading)").hide(),$(".item-fof-upload > div:not(.uploading)").hover((function(){$(".Button-label",this).show(),$(this).removeClass("Button--icon")}),(function(){$(".Button-label",this).hide(),$(this).addClass("Button--icon")})))})),Object(n.extend)(r.a.prototype,"configTextarea",(function(){t.forum.attribute("canUpload")&&(e||(e=new b(o)),i||(i=new v(o)))})),Object(n.extend)(y.a.prototype,"config",(function(t){var o=this;t||this.$(".fof-download-button[data-uuid]").unbind("click").on("click",(function(t){t.preventDefault(),t.stopPropagation();var e=s.a.forum.attribute("apiUrl")+"/fof/download";e+="/"+$(t.currentTarget).attr("data-uuid"),e+="/"+o.props.post.id(),e+="/"+s.a.session.csrfToken,window.open(e)}))}))}))}]);
//# sourceMappingURL=forum.js.map