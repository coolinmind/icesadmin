/** layui-v2.3.0 MIT License By https://www.layui.com */
 ;!function(e,t){var i,n={},r=function(e,t){var i,n,r;if("string"==typeof e)return u(e);for(i=[],n=e.length,r=0;r<n;r++)i.push(u(e[r]));return t.apply(null,i)},o=function(e,t,i){2===arguments.length&&(i=t,t=null),r(t||[],function(){s(e,i,arguments)})},s=function(e,t,i){var o,s={exports:t};"function"==typeof t&&(i.length||(i=[r,s.exports,s]),o=t.apply(null,i),void 0!==o&&(s.exports=o)),n[e]=s.exports},u=function(t){var i=n[t]||e[t];if(!i)throw new Error("`"+t+"` is undefined");return i},a=function(e){var t,i,r,o,s,u;u=function(e){return e&&e.charAt(0).toUpperCase()+e.substr(1)};for(t in n)if(i=e,n.hasOwnProperty(t)){for(r=t.split("/"),s=u(r.pop());o=u(r.shift());)i[o]=i[o]||{},i=i[o];i[s]=n[t]}},c=t(e,o,r);a(c),"object"==typeof module&&"object"==typeof module.exports?module.exports=c:"function"==typeof define&&define.amd?define([],c):(i=e.WebUploader,e.WebUploader=c,e.WebUploader.noConflict=function(){e.WebUploader=i})}(this,function(e,t,i){return t("dollar-third",[],function(){return e.jQuery||e.Zepto}),t("dollar",["dollar-third"],function(e){return e}),t("promise-third",["dollar"],function(e){return{Deferred:e.Deferred,when:e.when,isPromise:function(e){return e&&"function"==typeof e.then}}}),t("promise",["promise-third"],function(e){return e}),t("base",["dollar","promise"],function(t,i){function n(e){return function(){return u.apply(e,arguments)}}function r(e,t){return function(){return e.apply(t,arguments)}}function o(e){var t;return Object.create?Object.create(e):(t=function(){},t.prototype=e,new t)}var s=function(){},u=Function.call;return{version:"0.1.2",$:t,Deferred:i.Deferred,isPromise:i.isPromise,when:i.when,browser:function(e){var t={},i=e.match(/WebKit\/([\d.]+)/),n=e.match(/Chrome\/([\d.]+)/)||e.match(/CriOS\/([\d.]+)/),r=e.match(/MSIE\s([\d\.]+)/)||e.match(/(?:trident)(?:.*rv:([\w.]+))?/i),o=e.match(/Firefox\/([\d.]+)/),s=e.match(/Safari\/([\d.]+)/),u=e.match(/OPR\/([\d.]+)/);return i&&(t.webkit=parseFloat(i[1])),n&&(t.chrome=parseFloat(n[1])),r&&(t.ie=parseFloat(r[1])),o&&(t.firefox=parseFloat(o[1])),s&&(t.safari=parseFloat(s[1])),u&&(t.opera=parseFloat(u[1])),t}(navigator.userAgent),os:function(e){var t={},i=e.match(/(?:Android);?[\s\/]+([\d.]+)?/),n=e.match(/(?:iPad|iPod|iPhone).*OS\s([\d_]+)/);return i&&(t.android=parseFloat(i[1])),n&&(t.ios=parseFloat(n[1].replace(/_/g,"."))),t}(navigator.userAgent),inherits:function(e,i,n){var r;return"function"==typeof i?(r=i,i=null):r=i&&i.hasOwnProperty("constructor")?i.constructor:function(){return e.apply(this,arguments)},t.extend(!0,r,e,n||{}),r.__super__=e.prototype,r.prototype=o(e.prototype),i&&t.extend(!0,r.prototype,i),r},noop:s,bindFn:r,log:function(){return e.console?r(console.log,console):s}(),nextTick:function(){return function(e){setTimeout(e,1)}}(),slice:n([].slice),guid:function(){var e=0;return function(t){for(var i=(+new Date).toString(32),n=0;n<5;n++)i+=Math.floor(65535*Math.random()).toString(32);return(t||"wu_")+i+(e++).toString(32)}}(),formatSize:function(e,t,i){var n;for(i=i||["B","K","M","G","TB"];(n=i.shift())&&e>1024;)e/=1024;return("B"===n?e:e.toFixed(t||2))+n}}}),t("mediator",["base"],function(e){function t(e,t,i,n){return o.grep(e,function(e){return e&&(!t||e.e===t)&&(!i||e.cb===i||e.cb._cb===i)&&(!n||e.ctx===n)})}function i(e,t,i){o.each((e||"").split(u),function(e,n){i(n,t)})}function n(e,t){for(var i,n=!1,r=-1,o=e.length;++r<o;)if(i=e[r],i.cb.apply(i.ctx2,t)===!1){n=!0;break}return!n}var r,o=e.$,s=[].slice,u=/\s+/;return r={on:function(e,t,n){var r,o=this;return t?(r=this._events||(this._events=[]),i(e,t,function(e,t){var i={e:e};i.cb=t,i.ctx=n,i.ctx2=n||o,i.id=r.length,r.push(i)}),this):this},once:function(e,t,n){var r=this;return t?(i(e,t,function(e,t){var i=function(){return r.off(e,i),t.apply(n||r,arguments)};i._cb=t,r.on(e,i,n)}),r):r},off:function(e,n,r){var s=this._events;return s?e||n||r?(i(e,n,function(e,i){o.each(t(s,e,i,r),function(){delete s[this.id]})}),this):(this._events=[],this):this},trigger:function(e){var i,r,o;return this._events&&e?(i=s.call(arguments,1),r=t(this._events,e),o=t(this._events,"all"),n(r,i)&&n(o,arguments)):this}},o.extend({installTo:function(e){return o.extend(e,r)}},r)}),t("uploader",["base","mediator"],function(e,t){function i(e){this.options=n.extend(!0,{},i.options,e),this._init(this.options)}var n=e.$;return i.options={},t.installTo(i.prototype),n.each({upload:"start-upload",stop:"stop-upload",getFile:"get-file",getFiles:"get-files",addFile:"add-file",addFiles:"add-file",sort:"sort-files",removeFile:"remove-file",skipFile:"skip-file",retry:"retry",isInProgress:"is-in-progress",makeThumb:"make-thumb",getDimension:"get-dimension",addButton:"add-btn",getRuntimeType:"get-runtime-type",refresh:"refresh",disable:"disable",enable:"enable",reset:"reset"},function(e,t){i.prototype[e]=function(){return this.request(t,arguments)}}),n.extend(i.prototype,{state:"pending",_init:function(e){var t=this;t.request("init",e,function(){t.state="ready",t.trigger("ready")})},option:function(e,t){var i=this.options;return arguments.length>1?void(n.isPlainObject(t)&&n.isPlainObject(i[e])?n.extend(i[e],t):i[e]=t):e?i[e]:i},getStats:function(){var e=this.request("get-stats");return{successNum:e.numOfSuccess,cancelNum:e.numOfCancel,invalidNum:e.numOfInvalid,uploadFailNum:e.numOfUploadFailed,queueNum:e.numOfQueue}},trigger:function(e){var i=[].slice.call(arguments,1),r=this.options,o="on"+e.substring(0,1).toUpperCase()+e.substring(1);return!(t.trigger.apply(this,arguments)===!1||n.isFunction(r[o])&&r[o].apply(this,i)===!1||n.isFunction(this[o])&&this[o].apply(this,i)===!1||t.trigger.apply(t,[this,e].concat(i))===!1)},request:e.noop}),e.create=i.create=function(e){return new i(e)},e.Uploader=i,i}),t("runtime/runtime",["base","mediator"],function(e,t){function i(t){this.options=n.extend({container:document.body},t),this.uid=e.guid("rt_")}var n=e.$,r={},o=function(e){for(var t in e)if(e.hasOwnProperty(t))return t;return null};return n.extend(i.prototype,{getContainer:function(){var e,t,i=this.options;return this._container?this._container:(e=n(i.container||document.body),t=n(document.createElement("div")),t.attr("id","rt_"+this.uid),t.css({position:"absolute",top:"0px",left:"0px",width:"1px",height:"1px",overflow:"hidden"}),e.append(t),e.addClass("webuploader-container"),this._container=t,t)},init:e.noop,exec:e.noop,destroy:function(){this._container&&this._container.parentNode.removeChild(this.__container),this.off()}}),i.orders="html5,flash",i.addRuntime=function(e,t){r[e]=t},i.hasRuntime=function(e){return!!(e?r[e]:o(r))},i.create=function(e,t){var s,u;if(t=t||i.orders,n.each(t.split(/\s*,\s*/g),function(){if(r[this])return s=this,!1}),s=s||o(r),!s)throw new Error("Runtime Error");return u=new r[s](e)},t.installTo(i.prototype),i}),t("runtime/client",["base","mediator","runtime/runtime"],function(e,t,i){function n(t,n){var o,s=e.Deferred();this.uid=e.guid("client_"),this.runtimeReady=function(e){return s.done(e)},this.connectRuntime=function(t,u){if(o)throw new Error("already connected!");return s.done(u),"string"==typeof t&&r.get(t)&&(o=r.get(t)),o=o||r.get(null,n),o?(e.$.extend(o.options,t),o.__promise.then(s.resolve),o.__client++):(o=i.create(t,t.runtimeOrder),o.__promise=s.promise(),o.once("ready",s.resolve),o.init(),r.add(o),o.__client=1),n&&(o.__standalone=n),o},this.getRuntime=function(){return o},this.disconnectRuntime=function(){o&&(o.__client--,o.__client<=0&&(r.remove(o),delete o.__promise,o.destroy()),o=null)},this.exec=function(){if(o){var i=e.slice(arguments);return t&&i.unshift(t),o.exec.apply(this,i)}},this.getRuid=function(){return o&&o.uid},this.destroy=function(e){return function(){e&&e.apply(this,arguments),this.trigger("destroy"),this.off(),this.exec("destroy"),this.disconnectRuntime()}}(this.destroy)}var r;return r=function(){var e={};return{add:function(t){e[t.uid]=t},get:function(t,i){var n;if(t)return e[t];for(n in e)if(!i||!e[n].__standalone)return e[n];return null},remove:function(t){delete e[t.uid]}}}(),t.installTo(n.prototype),n}),t("lib/blob",["base","runtime/client"],function(e,t){function i(e,i){var n=this;n.source=i,n.ruid=e,t.call(n,"Blob"),this.uid=i.uid||this.uid,this.type=i.type||"",this.size=i.size||0,e&&n.connectRuntime(e)}return e.inherits(t,{constructor:i,slice:function(e,t){return this.exec("slice",e,t)},getSource:function(){return this.source}}),i}),t("lib/file",["base","lib/blob"],function(e,t){function i(e,i){var o;t.apply(this,arguments),this.name=i.name||"untitled"+n++,o=r.exec(i.name)?RegExp.$1.toLowerCase():"",!o&&this.type&&(o=/\/(jpg|jpeg|png|gif|bmp)$/i.exec(this.type)?RegExp.$1.toLowerCase():"",this.name+="."+o),!this.type&&~"jpg,jpeg,png,gif,bmp".indexOf(o)&&(this.type="image/"+("jpg"===o?"jpeg":o)),this.ext=o,this.lastModifiedDate=i.lastModifiedDate||(new Date).toLocaleString()}var n=1,r=/\.([^.]+)$/;return e.inherits(t,i)}),t("lib/filepicker",["base","runtime/client","lib/file"],function(t,i,n){function r(e){if(e=this.options=o.extend({},r.options,e),e.container=o(e.id),!e.container.length)throw new Error("按钮指定错误");e.innerHTML=e.innerHTML||e.label||e.container.html()||"",e.button=o(e.button||document.createElement("div")),e.button.html(e.innerHTML),e.container.html(e.button),i.call(this,"FilePicker",!0)}var o=t.$;return r.options={button:null,container:null,label:null,innerHTML:null,multiple:!0,accept:null,name:"file"},t.inherits(i,{constructor:r,init:function(){var t=this,i=t.options,r=i.button;r.addClass("webuploader-pick"),t.on("all",function(e){var s;switch(e){case"mouseenter":r.addClass("webuploader-pick-hover");break;case"mouseleave":r.removeClass("webuploader-pick-hover");break;case"change":s=t.exec("getFiles"),t.trigger("select",o.map(s,function(e){return e=new n(t.getRuid(),e),e._refer=i.container,e}),i.container)}}),t.connectRuntime(i,function(){t.refresh(),t.exec("init",i),t.trigger("ready")}),o(e).on("resize",function(){t.refresh()})},refresh:function(){var e=this.getRuntime().getContainer(),t=this.options.button,i=t.outerWidth?t.outerWidth():t.width(),n=t.outerHeight?t.outerHeight():t.height(),r=t.offset();i&&n&&e.css({bottom:"auto",right:"auto",width:i+"px",height:n+"px"}).offset(r)},enable:function(){var e=this.options.button;e.removeClass("webuploader-pick-disable"),this.refresh()},disable:function(){var e=this.options.button;this.getRuntime().getContainer().css({top:"-99999px"}),e.addClass("webuploader-pick-disable")},destroy:function(){this.runtime&&(this.exec("destroy"),this.disconnectRuntime())}}),r}),t("widgets/widget",["base","uploader"],function(e,t){function i(e){if(!e)return!1;var t=e.length,i=r.type(e);return!(1!==e.nodeType||!t)||("array"===i||"function"!==i&&"string"!==i&&(0===t||"number"==typeof t&&t>0&&t-1 in e))}function n(e){this.owner=e,this.options=e.options}var r=e.$,o=t.prototype._init,s={},u=[];return r.extend(n.prototype,{init:e.noop,invoke:function(e,t){var i=this.responseMap;return i&&e in i&&i[e]in this&&r.isFunction(this[i[e]])?this[i[e]].apply(this,t):s},request:function(){return this.owner.request.apply(this.owner,arguments)}}),r.extend(t.prototype,{_init:function(){var e=this,t=e._widgets=[];return r.each(u,function(i,n){t.push(new n(e))}),o.apply(e,arguments)},request:function(t,n,r){var o,u,a,c,l=0,f=this._widgets,h=f.length,p=[],d=[];for(n=i(n)?n:[n];l<h;l++)o=f[l],u=o.invoke(t,n),u!==s&&(e.isPromise(u)?d.push(u):p.push(u));return r||d.length?(a=e.when.apply(e,d),c=a.pipe?"pipe":"then",a[c](function(){var t=e.Deferred(),i=arguments;return setTimeout(function(){t.resolve.apply(t,i)},1),t.promise()})[c](r||e.noop)):p[0]}}),t.register=n.register=function(t,i){var o,s={init:"init"};return 1===arguments.length?(i=t,i.responseMap=s):i.responseMap=r.extend(s,t),o=e.inherits(n,i),u.push(o),o},n}),t("widgets/filepicker",["base","uploader","lib/filepicker","widgets/widget"],function(e,t,i){var n=e.$;return n.extend(t.options,{pick:null,accept:null}),t.register({"add-btn":"addButton",refresh:"refresh",disable:"disable",enable:"enable"},{init:function(e){return this.pickers=[],e.pick&&this.addButton(e.pick)},refresh:function(){n.each(this.pickers,function(){this.refresh()})},addButton:function(t){var r,o,s,u=this,a=u.options,c=a.accept;if(t)return s=e.Deferred(),n.isPlainObject(t)||(t={id:t}),r=n.extend({},t,{accept:n.isPlainObject(c)?[c]:c,swf:a.swf,runtimeOrder:a.runtimeOrder}),o=new i(r),o.once("ready",s.resolve),o.on("select",function(e){u.owner.request("add-file",[e])}),o.init(),this.pickers.push(o),s.promise()},disable:function(){n.each(this.pickers,function(){this.disable()})},enable:function(){n.each(this.pickers,function(){this.enable()})}})}),t("lib/image",["base","runtime/client","lib/blob"],function(e,t,i){function n(e){this.options=r.extend({},n.options,e),t.call(this,"Image"),this.on("load",function(){this._info=this.exec("info"),this._meta=this.exec("meta")})}var r=e.$;return n.options={quality:90,crop:!1,preserveHeaders:!0,allowMagnify:!0},e.inherits(t,{constructor:n,info:function(e){return e?(this._info=e,this):this._info},meta:function(e){return e?(this._meta=e,this):this._meta},loadFromBlob:function(e){var t=this,i=e.getRuid();this.connectRuntime(i,function(){t.exec("init",t.options),t.exec("loadFromBlob",e)})},resize:function(){var t=e.slice(arguments);return this.exec.apply(this,["resize"].concat(t))},getAsDataUrl:function(e){return this.exec("getAsDataUrl",e)},getAsBlob:function(e){var t=this.exec("getAsBlob",e);return new i(this.getRuid(),t)}}),n}),t("widgets/image",["base","uploader","lib/image","widgets/widget"],function(e,t,i){var n,r=e.$;return n=function(e){var t=0,i=[],n=function(){for(var n;i.length&&t<e;)n=i.shift(),t+=n[0],n[1]()};return function(e,r,o){i.push([r,o]),e.once("destroy",function(){t-=r,setTimeout(n,1)}),setTimeout(n,1)}}(5242880),r.extend(t.options,{thumb:{width:110,height:110,quality:70,allowMagnify:!0,crop:!0,preserveHeaders:!1,type:"image/jpeg"},compress:{width:1600,height:1600,quality:90,allowMagnify:!1,crop:!1,preserveHeaders:!0}}),t.register({"make-thumb":"makeThumb","before-send-file":"compressImage"},{makeThumb:function(e,t,o,s){var u,a;return e=this.request("get-file",e),e.type.match(/^image/)?(u=r.extend({},this.options.thumb),r.isPlainObject(o)&&(u=r.extend(u,o),o=null),o=o||u.width,s=s||u.height,a=new i(u),a.once("load",function(){e._info=e._info||a.info(),e._meta=e._meta||a.meta(),a.resize(o,s)}),a.once("complete",function(){t(!1,a.getAsDataUrl(u.type)),a.destroy()}),a.once("error",function(){t(!0),a.destroy()}),void n(a,e.source.size,function(){e._info&&a.info(e._info),e._meta&&a.meta(e._meta),a.loadFromBlob(e.source)})):void t(!0)},compressImage:function(t){var n,o,s=this.options.compress||this.options.resize,u=s&&s.compressSize||307200;if(t=this.request("get-file",t),s&&~"image/jpeg,image/jpg".indexOf(t.type)&&!(t.size<u)&&!t._compressed)return s=r.extend({},s),o=e.Deferred(),n=new i(s),o.always(function(){n.destroy(),n=null}),n.once("error",o.reject),n.once("load",function(){t._info=t._info||n.info(),t._meta=t._meta||n.meta(),n.resize(s.width,s.height)}),n.once("complete",function(){var e,i;try{e=n.getAsBlob(s.type),i=t.size,e.size<i&&(t.source=e,t.size=e.size,t.trigger("resize",e.size,i)),t._compressed=!0,o.resolve()}catch(r){o.resolve()}}),t._info&&n.info(t._info),t._meta&&n.meta(t._meta),n.loadFromBlob(t.source),o.promise()}})}),t("file",["base","mediator"],function(e,t){function i(){return o+s++}function n(e){this.name=e.name||"Untitled",this.size=e.size||0,this.type=e.type||"application",this.lastModifiedDate=e.lastModifiedDate||1*new Date,this.id=i(),this.ext=u.exec(this.name)?RegExp.$1:"",this.statusText="",a[this.id]=n.Status.INITED,this.source=e,this.loaded=0,this.on("error",function(e){this.setStatus(n.Status.ERROR,e)})}var r=e.$,o="WU_FILE_",s=0,u=/\.([^.]+)$/,a={};return r.extend(n.prototype,{setStatus:function(e,t){var i=a[this.id];"undefined"!=typeof t&&(this.statusText=t),e!==i&&(a[this.id]=e,this.trigger("statuschange",e,i))},getStatus:function(){return a[this.id]},getSource:function(){return this.source},destory:function(){delete a[this.id]}}),t.installTo(n.prototype),n.Status={INITED:"inited",QUEUED:"queued",PROGRESS:"progress",ERROR:"error",COMPLETE:"complete",CANCELLED:"cancelled",INTERRUPT:"interrupt",INVALID:"invalid"},n}),t("queue",["base","mediator","file"],function(e,t,i){function n(){this.stats={numOfQueue:0,numOfSuccess:0,numOfCancel:0,numOfProgress:0,numOfUploadFailed:0,numOfInvalid:0},this._queue=[],this._map={}}var r=e.$,o=i.Status;return r.extend(n.prototype,{append:function(e){return this._queue.push(e),this._fileAdded(e),this},prepend:function(e){return this._queue.unshift(e),this._fileAdded(e),this},getFile:function(e){return"string"!=typeof e?e:this._map[e]},fetch:function(e){var t,i,n=this._queue.length;for(e=e||o.QUEUED,t=0;t<n;t++)if(i=this._queue[t],e===i.getStatus())return i;return null},sort:function(e){"function"==typeof e&&this._queue.sort(e)},getFiles:function(){for(var e,t=[].slice.call(arguments,0),i=[],n=0,o=this._queue.length;n<o;n++)e=this._queue[n],t.length&&!~r.inArray(e.getStatus(),t)||i.push(e);return i},_fileAdded:function(e){var t=this,i=this._map[e.id];i||(this._map[e.id]=e,e.on("statuschange",function(e,i){t._onFileStatusChange(e,i)})),e.setStatus(o.QUEUED)},_onFileStatusChange:function(e,t){var i=this.stats;switch(t){case o.PROGRESS:i.numOfProgress--;break;case o.QUEUED:i.numOfQueue--;break;case o.ERROR:i.numOfUploadFailed--;break;case o.INVALID:i.numOfInvalid--}switch(e){case o.QUEUED:i.numOfQueue++;break;case o.PROGRESS:i.numOfProgress++;break;case o.ERROR:i.numOfUploadFailed++;break;case o.COMPLETE:i.numOfSuccess++;break;case o.CANCELLED:i.numOfCancel++;break;case o.INVALID:i.numOfInvalid++}}}),t.installTo(n.prototype),n}),t("widgets/queue",["base","uploader","queue","file","lib/file","runtime/client","widgets/widget"],function(e,t,i,n,r,o){var s=e.$,u=/\.\w+$/,a=n.Status;return t.register({"sort-files":"sortFiles","add-file":"addFiles","get-file":"getFile","fetch-file":"fetchFile","get-stats":"getStats","get-files":"getFiles","remove-file":"removeFile",retry:"retry",reset:"reset","accept-file":"acceptFile"},{init:function(t){var n,r,u,a,c,l,f,h=this;if(s.isPlainObject(t.accept)&&(t.accept=[t.accept]),t.accept){for(c=[],u=0,r=t.accept.length;u<r;u++)a=t.accept[u].extensions,a&&c.push(a);c.length&&(l="\\."+c.join(",").replace(/,/g,"$|\\.").replace(/\*/g,".*")+"$"),h.accept=new RegExp(l,"i")}if(h.queue=new i,h.stats=h.queue.stats,"html5"===this.request("predict-runtime-type"))return n=e.Deferred(),f=new o("Placeholder"),f.connectRuntime({runtimeOrder:"html5"},function(){h._ruid=f.getRuid(),n.resolve()}),n.promise()},_wrapFile:function(e){if(!(e instanceof n)){if(!(e instanceof r)){if(!this._ruid)throw new Error("Can't add external files.");e=new r(this._ruid,e)}e=new n(e)}return e},acceptFile:function(e){var t=!e||e.size<6||this.accept&&u.exec(e.name)&&!this.accept.test(e.name);return!t},_addFile:function(e){var t=this;if(e=t._wrapFile(e),t.owner.trigger("beforeFileQueued",e))return t.acceptFile(e)?(t.queue.append(e),t.owner.trigger("fileQueued",e),e):void t.owner.trigger("error","Q_TYPE_DENIED",e)},getFile:function(e){return this.queue.getFile(e)},addFiles:function(e){var t=this;e.length||(e=[e]),e=s.map(e,function(e){return t._addFile(e)}),t.owner.trigger("filesQueued",e),t.options.auto&&t.request("start-upload")},getStats:function(){return this.stats},removeFile:function(e){var t=this;e=e.id?e:t.queue.getFile(e),e.setStatus(a.CANCELLED),t.owner.trigger("fileDequeued",e)},getFiles:function(){return this.queue.getFiles.apply(this.queue,arguments)},fetchFile:function(){return this.queue.fetch.apply(this.queue,arguments)},retry:function(e,t){var i,n,r,o=this;if(e)return e=e.id?e:o.queue.getFile(e),e.setStatus(a.QUEUED),void(t||o.request("start-upload"));for(i=o.queue.getFiles(a.ERROR),n=0,r=i.length;n<r;n++)e=i[n],e.setStatus(a.QUEUED);o.request("start-upload")},sortFiles:function(){return this.queue.sort.apply(this.queue,arguments)},reset:function(){this.queue=new i,this.stats=this.queue.stats}})}),t("widgets/runtime",["uploader","runtime/runtime","widgets/widget"],function(e,t){return e.support=function(){return t.hasRuntime.apply(t,arguments)},e.register({"predict-runtime-type":"predictRuntmeType"},{init:function(){if(!this.predictRuntmeType())throw Error("Runtime Error")},predictRuntmeType:function(){var e,i,n=this.options.runtimeOrder||t.orders,r=this.type;if(!r)for(n=n.split(/\s*,\s*/g),e=0,i=n.length;e<i;e++)if(t.hasRuntime(n[e])){this.type=r=n[e];break}return r}})}),t("lib/transport",["base","runtime/client","mediator"],function(e,t,i){function n(e){var i=this;e=i.options=r.extend(!0,{},n.options,e||{}),t.call(this,"Transport"),this._blob=null,this._formData=e.formData||{},this._headers=e.headers||{},this.on("progress",this._timeout),this.on("load error",function(){i.trigger("progress",1),clearTimeout(i._timer)})}var r=e.$;return n.options={server:"",method:"POST",withCredentials:!1,fileVal:"file",timeout:12e4,formData:{},headers:{},sendAsBinary:!1},r.extend(n.prototype,{appendBlob:function(e,t,i){var n=this,r=n.options;n.getRuid()&&n.disconnectRuntime(),n.connectRuntime(t.ruid,function(){n.exec("init")}),n._blob=t,r.fileVal=e||r.fileVal,r.filename=i||r.filename},append:function(e,t){"object"==typeof e?r.extend(this._formData,e):this._formData[e]=t},setRequestHeader:function(e,t){"object"==typeof e?r.extend(this._headers,e):this._headers[e]=t},send:function(e){this.exec("send",e),this._timeout()},abort:function(){return clearTimeout(this._timer),this.exec("abort")},destroy:function(){this.trigger("destroy"),this.off(),this.exec("destroy"),this.disconnectRuntime()},getResponse:function(){return this.exec("getResponse")},getResponseAsJson:function(){return this.exec("getResponseAsJson")},getStatus:function(){return this.exec("getStatus")},_timeout:function(){var e=this,t=e.options.timeout;t&&(clearTimeout(e._timer),e._timer=setTimeout(function(){e.abort(),e.trigger("error","timeout")},t))}}),i.installTo(n.prototype),n}),t("widgets/upload",["base","uploader","file","lib/transport","widgets/widget"],function(e,t,i,n){function r(e,t){for(var i,n=[],r=e.source,o=r.size,s=t?Math.ceil(o/t):1,u=0,a=0;a<s;)i=Math.min(t,o-u),n.push({file:e,start:u,end:t?u+i:o,total:o,chunks:s,chunk:a++}),u+=i;return e.blocks=n.concat(),e.remaning=n.length,{file:e,has:function(){return!!n.length},fetch:function(){return n.shift()}}}var o=e.$,s=e.isPromise,u=i.Status;o.extend(t.options,{prepareNextFile:!1,chunked:!1,chunkSize:5242880,chunkRetry:2,threads:3,formData:null}),t.register({"start-upload":"start","stop-upload":"stop","skip-file":"skipFile","is-in-progress":"isInProgress"},{init:function(){var t=this.owner;this.runing=!1,this.pool=[],this.pending=[],this.remaning=0,this.__tick=e.bindFn(this._tick,this),t.on("uploadComplete",function(e){e.blocks&&o.each(e.blocks,function(e,t){t.transport&&(t.transport.abort(),t.transport.destroy()),delete t.transport}),delete e.blocks,delete e.remaning})},start:function(){var t=this;o.each(t.request("get-files",u.INVALID),function(){t.request("remove-file",this)}),t.runing||(t.runing=!0,o.each(t.pool,function(e,i){var n=i.file;n.getStatus()===u.INTERRUPT&&(n.setStatus(u.PROGRESS),t._trigged=!1,i.transport&&i.transport.send())}),t._trigged=!1,t.owner.trigger("startUpload"),e.nextTick(t.__tick))},stop:function(e){var t=this;t.runing!==!1&&(t.runing=!1,e&&o.each(t.pool,function(e,t){t.transport&&t.transport.abort(),t.file.setStatus(u.INTERRUPT)}),t.owner.trigger("stopUpload"))},isInProgress:function(){return!!this.runing},getStats:function(){return this.request("get-stats")},skipFile:function(e,t){e=this.request("get-file",e),e.setStatus(t||u.COMPLETE),e.skipped=!0,e.blocks&&o.each(e.blocks,function(e,t){var i=t.transport;i&&(i.abort(),i.destroy(),delete t.transport)}),this.owner.trigger("uploadSkip",e)},_tick:function(){var t,i,n=this,r=n.options;return n._promise?n._promise.always(n.__tick):void(n.pool.length<r.threads&&(i=n._nextBlock())?(n._trigged=!1,t=function(t){n._promise=null,t&&t.file&&n._startSend(t),e.nextTick(n.__tick)},n._promise=s(i)?i.always(t):t(i)):n.remaning||n.getStats().numOfQueue||(n.runing=!1,n._trigged||e.nextTick(function(){n.owner.trigger("uploadFinished")}),n._trigged=!0))},_nextBlock:function(){var e,t,i=this,n=i._act,o=i.options;return n&&n.has()&&n.file.getStatus()===u.PROGRESS?(o.prepareNextFile&&!i.pending.length&&i._prepareNextFile(),n.fetch()):i.runing?(!i.pending.length&&i.getStats().numOfQueue&&i._prepareNextFile(),e=i.pending.shift(),t=function(e){return e?(n=r(e,o.chunked?o.chunkSize:0),i._act=n,n.fetch()):null},s(e)?e[e.pipe?"pipe":"then"](t):t(e)):void 0},_prepareNextFile:function(){var e,t=this,i=t.request("fetch-file"),n=t.pending;i&&(e=t.request("before-send-file",i,function(){return i.getStatus()===u.QUEUED?(t.owner.trigger("uploadStart",i),i.setStatus(u.PROGRESS),i):t._finishFile(i)}),e.done(function(){var t=o.inArray(e,n);~t&&n.splice(t,1,i)}),e.fail(function(e){i.setStatus(u.ERROR,e),t.owner.trigger("uploadError",i,e),t.owner.trigger("uploadComplete",i)}),n.push(e))},_popBlock:function(e){var t=o.inArray(e,this.pool);this.pool.splice(t,1),e.file.remaning--,this.remaning--},_startSend:function(t){var i,n=this,r=t.file;n.pool.push(t),n.remaning++,t.blob=1===t.chunks?r.source:r.source.slice(t.start,t.end),i=n.request("before-send",t,function(){r.getStatus()===u.PROGRESS?n._doSend(t):(n._popBlock(t),e.nextTick(n.__tick))}),i.fail(function(){1===r.remaning?n._finishFile(r).always(function(){t.percentage=1,n._popBlock(t),n.owner.trigger("uploadComplete",r),e.nextTick(n.__tick)}):(t.percentage=1,n._popBlock(t),e.nextTick(n.__tick))})},_doSend:function(t){var i,r,s=this,a=s.owner,c=s.options,l=t.file,f=new n(c),h=o.extend({},c.formData),p=o.extend({},c.headers);t.transport=f,f.on("destroy",function(){delete t.transport,s._popBlock(t),e.nextTick(s.__tick)}),f.on("progress",function(e){var i=0,n=0;i=t.percentage=e,t.chunks>1&&(o.each(l.blocks,function(e,t){n+=(t.percentage||0)*(t.end-t.start)}),i=n/l.size),a.trigger("uploadProgress",l,i||0)}),i=function(e){var i;return r=f.getResponseAsJson()||{},r._raw=f.getResponse(),i=function(t){e=t},a.trigger("uploadAccept",t,r,i)||(e=e||"server"),e},f.on("error",function(e,n){t.retried=t.retried||0,t.chunks>1&&~"http,abort".indexOf(e)&&t.retried<c.chunkRetry?(t.retried++,f.send()):(n||"server"!==e||(e=i(e)),l.setStatus(u.ERROR,e),a.trigger("uploadError",l,e),a.trigger("uploadComplete",l))}),f.on("load",function(){var e;return(e=i())?void f.trigger("error",e,!0):void(1===l.remaning?s._finishFile(l,r):f.destroy())}),h=o.extend(h,{id:l.id,name:l.name,type:l.type,lastModifiedDate:l.lastModifiedDate,size:l.size}),t.chunks>1&&o.extend(h,{chunks:t.chunks,chunk:t.chunk}),a.trigger("uploadBeforeSend",t,h,p),f.appendBlob(c.fileVal,t.blob,l.name),f.append(h),f.setRequestHeader(p),f.send()},_finishFile:function(e,t,i){var n=this.owner;return n.request("after-send-file",arguments,function(){e.setStatus(u.COMPLETE),n.trigger("uploadSuccess",e,t,i)}).fail(function(t){e.getStatus()===u.PROGRESS&&e.setStatus(u.ERROR,t),n.trigger("uploadError",e,t)}).always(function(){n.trigger("uploadComplete",e)})}})}),t("widgets/validator",["base","uploader","file","widgets/widget"],function(e,t,i){var n,r=e.$,o={};return n={addValidator:function(e,t){o[e]=t},removeValidator:function(e){delete o[e]}},t.register({init:function(){var e=this;r.each(o,function(){this.call(e.owner)})}}),n.addValidator("fileNumLimit",function(){var e=this,t=e.options,i=0,n=t.fileNumLimit>>0,r=!0;n&&(e.on("beforeFileQueued",function(e){return i>=n&&r&&(r=!1,this.trigger("error","Q_EXCEED_NUM_LIMIT",n,e),setTimeout(function(){r=!0},1)),!(i>=n)}),e.on("fileQueued",function(){i++}),e.on("fileDequeued",function(){i--}),e.on("uploadFinished",function(){i=0}))}),n.addValidator("fileSizeLimit",function(){var e=this,t=e.options,i=0,n=t.fileSizeLimit>>0,r=!0;n&&(e.on("beforeFileQueued",function(e){var t=i+e.size>n;return t&&r&&(r=!1,this.trigger("error","Q_EXCEED_SIZE_LIMIT",n,e),setTimeout(function(){r=!0},1)),!t}),e.on("fileQueued",function(e){i+=e.size}),e.on("fileDequeued",function(e){i-=e.size}),e.on("uploadFinished",function(){i=0}))}),n.addValidator("fileSingleSizeLimit",function(){var e=this,t=e.options,n=t.fileSingleSizeLimit;n&&e.on("beforeFileQueued",function(e){if(e.size>n)return e.setStatus(i.Status.INVALID,"exceed_size"),this.trigger("error","F_EXCEED_SIZE",e),!1})}),n.addValidator("duplicate",function(){function e(e){for(var t,i=0,n=0,r=e.length;n<r;n++)t=e.charCodeAt(n),i=t+(i<<6)+(i<<16)-i;return i}var t=this,i=t.options,n={};i.duplicate||(t.on("beforeFileQueued",function(t){var i=t.__hash||(t.__hash=e(t.name+t.size+t.lastModifiedDate));if(n[i])return this.trigger("error","F_DUPLICATE",t),!1}),t.on("fileQueued",function(e){var t=e.__hash;t&&(n[t]=!0)}),t.on("fileDequeued",function(e){var t=e.__hash;t&&delete n[t]}))}),n}),t("runtime/compbase",[],function(){function e(e,t){this.owner=e,this.options=e.options,this.getRuntime=function(){return t},this.getRuid=function(){return t.uid},this.trigger=function(){return e.trigger.apply(e,arguments)}}return e}),t("runtime/flash/runtime",["base","runtime/runtime","runtime/compbase"],function(t,i,n){function r(){var e;try{e=navigator.plugins["Shockwave Flash"],e=e.description}catch(t){try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")}catch(i){e="0.0"}}return e=e.match(/\d+/g),parseFloat(e[0]+"."+e[1],10)}function o(){function n(e,t){var i,n,r=e.type||e;i=r.split("::"),n=i[0],r=i[1],"Ready"===r&&n===c.uid?c.trigger("ready"):o[n]&&o[n].trigger(r.toLowerCase(),e,t)}var r={},o={},s=this.destory,c=this,l=t.guid("webuploader_");i.apply(c,arguments),c.type=u,c.exec=function(e,i){var n,s=this,u=s.uid,l=t.slice(arguments,2);return o[u]=s,a[e]&&(r[u]||(r[u]=new a[e](s,c)),n=r[u],n[i])?n[i].apply(n,l):c.flashExec.apply(s,arguments)},e[l]=function(){var e=arguments;setTimeout(function(){n.apply(null,e)},1)},this.jsreciver=l,this.destory=function(){return s&&s.apply(this,arguments)},this.flashExec=function(e,i){var n=c.getFlash(),r=t.slice(arguments,2);return n.exec(this.uid,e,i,r)}}var s=t.$,u="flash",a={};return t.inherits(i,{constructor:o,init:function(){var e,i=this.getContainer(),n=this.options;i.css({position:"absolute",top:"-8px",left:"-8px",width:"9px",height:"9px",overflow:"hidden"}),e='<object id="'+this.uid+'" type="application/x-shockwave-flash" data="'+n.swf+'" ',t.browser.ie&&(e+='classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '),e+='width="100%" height="100%" style="outline:0"><param name="movie" value="'+n.swf+'" /><param name="flashvars" value="uid='+this.uid+"&jsreciver="+this.jsreciver+'" /><param name="wmode" value="transparent" /><param name="allowscriptaccess" value="always" /></object>',i.html(e)},getFlash:function(){return this._flash?this._flash:(this._flash=s("#"+this.uid).get(0),this._flash)}}),o.register=function(e,i){return i=a[e]=t.inherits(n,s.extend({flashExec:function(){var e=this.owner,t=this.getRuntime();return t.flashExec.apply(e,arguments)}},i))},r()>=11.4&&i.addRuntime(u,o),o}),t("runtime/flash/filepicker",["base","runtime/flash/runtime"],function(e,t){var i=e.$;return t.register("FilePicker",{init:function(e){var t,n,r=i.extend({},e);for(t=r.accept&&r.accept.length,n=0;n<t;n++)r.accept[n].title||(r.accept[n].title="Files");delete r.button,delete r.container,this.flashExec("FilePicker","init",r)},destroy:function(){}})}),t("runtime/flash/image",["runtime/flash/runtime"],function(e){return e.register("Image",{loadFromBlob:function(e){var t=this.owner;t.info()&&this.flashExec("Image","info",t.info()),t.meta()&&this.flashExec("Image","meta",t.meta()),this.flashExec("Image","loadFromBlob",e.uid)}})}),t("runtime/flash/transport",["base","runtime/flash/runtime","runtime/client"],function(e,t,i){var n=e.$;return t.register("Transport",{init:function(){this._status=0,this._response=null,this._responseJson=null},send:function(){var e,t=this.owner,i=this.options,r=this._initAjax(),o=t._blob,s=i.server;r.connectRuntime(o.ruid),i.sendAsBinary?(s+=(/\?/.test(s)?"&":"?")+n.param(t._formData),
e=o.uid):(n.each(t._formData,function(e,t){r.exec("append",e,t)}),r.exec("appendBlob",i.fileVal,o.uid,i.filename||t._formData.name||"")),this._setRequestHeader(r,i.headers),r.exec("send",{method:i.method,url:s},e)},getStatus:function(){return this._status},getResponse:function(){return this._response},getResponseAsJson:function(){return this._responseJson},abort:function(){var e=this._xhr;e&&(e.exec("abort"),e.destroy(),this._xhr=e=null)},destroy:function(){this.abort()},_initAjax:function(){var e=this,t=new i("XMLHttpRequest");return t.on("uploadprogress progress",function(t){return e.trigger("progress",t.loaded/t.total)}),t.on("load",function(){var i=t.exec("getStatus"),n="";return t.off(),e._xhr=null,i>=200&&i<300?(e._response=t.exec("getResponse"),e._responseJson=t.exec("getResponseAsJson")):i>=500&&i<600?(e._response=t.exec("getResponse"),e._responseJson=t.exec("getResponseAsJson"),n="server"):n="http",t.destroy(),t=null,n?e.trigger("error",n):e.trigger("load")}),t.on("error",function(){t.off(),e._xhr=null,e.trigger("error","http")}),e._xhr=t,t},_setRequestHeader:function(e,t){n.each(t,function(t,i){e.exec("setRequestHeader",t,i)})}})}),t("preset/flashonly",["base","widgets/filepicker","widgets/image","widgets/queue","widgets/runtime","widgets/upload","widgets/validator","runtime/flash/filepicker","runtime/flash/image","runtime/flash/transport"],function(e){return e}),t("webuploader",["preset/flashonly"],function(e){return e}),i("webuploader")});