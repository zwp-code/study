(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fceeea4"],{"0b42":function(t,e,n){var r=n("da84"),i=n("e8b5"),o=n("68ee"),a=n("861d"),c=n("b622"),s=c("species"),u=r.Array;t.exports=function(t){var e;return i(t)&&(e=t.constructor,o(e)&&(e===u||i(e.prototype))?e=void 0:a(e)&&(e=e[s],null===e&&(e=void 0))),void 0===e?u:e}},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),o=n("785a"),a=n("17c2"),c=n("9112"),s=function(t){if(t&&t.forEach!==a)try{c(t,"forEach",a)}catch(e){t.forEach=a}};for(var u in i)i[u]&&s(r[u]&&r[u].prototype);s(o)},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("a640"),o=i("forEach");t.exports=o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("d3b7");function r(t,e,n,r,i,o,a){try{var c=t[o](a),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function c(t){r(a,i,o,c,s,"next",t)}function s(t){r(a,i,o,c,s,"throw",t)}c(void 0)}))}}},"4f7d":function(t,e,n){"use strict";n("562b")},"562b":function(t,e,n){},"65f0":function(t,e,n){var r=n("0b42");t.exports=function(t,e){return new(r(t))(0===e?0:e)}},"7abe":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home scrollbar",staticStyle:{"background-color":"#f4f4f4"}},[t.loading||t.error?t._e():n("div",{staticStyle:{height:"100%"}},[n("div",{staticClass:"header"},[n("div",{staticClass:"flex-1"},[n("div",{staticClass:"flex-1"},[n("van-image",{attrs:{round:"",width:"35px",height:"35px",fit:"cover",src:t.userData.avatar?t.userData.avatar:t.sex(t.userData.sex)},on:{click:function(e){t.show=!0}}}),n("span",{staticStyle:{"margin-left":"10px",color:"#606266","font-weight":"600"}},[t._v(t._s(t.userData.name))]),n("van-tag",{staticStyle:{"margin-left":"6px","margin-top":"2px"},attrs:{type:"0"===t.userData.identity?"primary":"success"}},[t._v(t._s(t.checkIdentity(t.userData.identity)))])],1)])]),n("div",{staticClass:"notice-box"},[null!==t.noticeValue?n("van-notice-bar",{ref:"noticeBar",attrs:{"left-icon":"volume-o",text:t.noticeValue}}):t._e(),n("div",{staticClass:"search-box"},[n("van-icon",{attrs:{name:"search",color:"#f38aa7"}}),n("van-field",{staticStyle:{flex:"1"},attrs:{placeholder:"请输入搜索内容",border:!1},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search.apply(null,arguments)}},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}}),n("van-button",{attrs:{color:"linear-gradient(to right,#e7b8b8, #f38aa7)",round:""},on:{click:t.search}},[t._v("搜索")])],1)],1),t.isError||t.isloading?t._e():n("div",{staticClass:"content scrollbar"},[n("van-pull-refresh",{staticStyle:{"padding-bottom":"70px"},on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[t.listData.length?n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了","error-text":"加载失败",offset:"100"},on:{load:t.onLoad},model:{value:t.moreloading,callback:function(e){t.moreloading=e},expression:"moreloading"}},[n("h3",{staticClass:"flex-2"},[t._v(" "+t._s("学习资源")+" "),n("van-tag",{staticStyle:{"margin-left":"6px"},attrs:{mark:"",type:"primary",color:"#e30b0b"}},[t._v("NEW")])],1),n("ul",{staticClass:"module-items"},t._l(t.searchList.length?t.searchList:t.listData,(function(e,r){return n("li",{key:e.objectId,staticClass:"module-poster-item item",on:{click:function(n){return t.open(e.objectId,e.videoTitle)}}},[n("div",{staticClass:"module-item-cover"},[n("div",{staticClass:"module-item-pic"},[n("img",{attrs:{referrerpolicy:"no-referrer",src:e.videoPoster}})])]),n("div",{staticClass:"oneline module-poster-item-title"},[t._v(t._s(e.videoTitle))])])})),0)]):n("div",{staticStyle:{height:"calc(100vh - 160px)"}},[n("van-empty",{attrs:{description:"暂无内容"}})],1)],1),"3"!==t.userData.identity?n("div",{staticClass:"SubmitBar"},[n("van-button",{attrs:{color:"linear-gradient(to right,#e7b8b8, #f38aa7)",round:"",block:""},on:{click:function(e){return t.open(null)}}},[t._v(" 发布资源 ")])],1):t._e()],1),t.isloading||t.isError?n("div",{staticClass:"center-layout"},[t.isloading?n("van-loading",{attrs:{color:"#cccccc"}}):t._e(),t.isError?n("van-empty",{attrs:{image:"network",description:"加载失败"}},[n("van-button",{staticClass:"bottom-button",attrs:{round:"",color:"#f38aa7"},on:{click:t.getResData}},[t._v("重新刷新")])],1):t._e()],1):t._e()]),t.loading?n("van-loading",{staticClass:"center-layout text-center",attrs:{color:"#cccccc",vertical:""}},[t._v("数据正在加载中")]):t._e(),t.error?n("van-empty",{staticStyle:{height:"100%"},attrs:{image:"network",description:"加载失败"}},[n("van-button",{staticClass:"bottom-button",attrs:{round:"",color:"#f38aa7"},on:{click:t.getData}},[t._v("重新刷新")])],1):t._e(),n("van-popup",{style:{width:"70%",height:"100%"},attrs:{position:"left"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("div",{staticStyle:{height:"100%"}},[n("div",{staticClass:"header-avater"},[n("van-image",{attrs:{round:"",width:"75px",height:"75px",fit:"cover",src:t.userData.avatar?t.userData.avatar:t.sex(t.userData.sex)}})],1),n("div",{staticClass:"header-avater",staticStyle:{padding:"0"}},[t._v(t._s(t.userData.nickname)+" "),n("van-tag",{staticStyle:{"margin-left":"6px","margin-top":"2px"},attrs:{type:"0"===t.userData.identity?"primary":"success"}},[t._v(t._s(t.checkIdentity(t.userData.identity)))])],1),n("div",{staticStyle:{"margin-top":"20px"}},[n("van-cell",{attrs:{title:"个人资料",icon:"contact","is-link":""},on:{click:function(e){return t.openMenu("personInfo")}}}),n("van-cell",{attrs:{title:"我的发布",icon:"guide-o","is-link":""},on:{click:function(e){return t.openMenu("minePublish")}}}),n("van-cell",{attrs:{title:"我的收藏",icon:"label-o","is-link":""},on:{click:function(e){return t.openMenu("mineCollect")}}}),"0"===t.userData.identity?n("van-cell",{attrs:{title:"公告管理",icon:"notes-o","is-link":""},on:{click:function(e){return t.openMenu("notice")}}}):t._e(),"0"===t.userData.identity?n("van-cell",{attrs:{title:"人员管理",icon:"friends-o","is-link":""},on:{click:function(e){return t.openMenu("question")}}}):t._e(),"0"===t.userData.identity?n("van-cell",{attrs:{title:"资源管理",icon:"points","is-link":""},on:{click:function(e){return t.openMenu("question")}}}):t._e(),n("van-cell",{attrs:{title:"退出登录",icon:"revoke","is-link":""},on:{click:t.loginOut}})],1)])]),n("van-dialog",{attrs:{title:t.noticeObj.title,"cancel-button-text":"不再提示","show-cancel-button":""},on:{cancel:t.cancelNotice},model:{value:t.noticeShow,callback:function(e){t.noticeShow=e},expression:"noticeShow"}},[n("div",{staticClass:"content-box",domProps:{innerHTML:t._s(t.noticeObj.contentRender)}})])],1)},i=[],o=n("1da1"),a=(n("7db0"),n("d3b7"),n("e9c4"),n("159b"),n("96cf"),n("2241")),c={name:"home",props:{},components:{},data:function(){return{noticeValue:"我爱学习，学习爱我，努力学习，天天向上",loading:!0,isloading:!0,isError:!1,error:!1,userData:{},refreshing:!1,moreloading:!1,finished:!1,listData:[],pagesize:20,show:!1,noticeObj:{},noticeShow:!1,searchValue:"",searchList:[]}},computed:{checkIdentity:function(){return function(t){return"0"===t?"班主任":"1"===t?"班长":"2"===t?"学习委员":"3"===t?"学生":void 0}}},watch:{searchValue:function(t,e){console.log(t,e),""!==e&&""!==t||(this.searchList=[])}},created:function(){},mounted:function(){this.getData(),this.getNotice()},activated:function(){this.$route.params.reload&&(this.listData=[],console.log(this.listData),this.getResData(),console.log(this.$route))},methods:{getData:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getUserData();case 2:return e.next=4,t.getResData();case 4:t.firstOpenNotice();case 5:case"end":return e.stop()}}),e)})))()},open:function(t,e){e?this.$router.push({name:"detail",query:{oid:t,title:e}}):this.$router.push("publish")},openMenu:function(t){this.$Bmob.User.current()?this.$router.push(t):this.$utils.loginOut(this)},onRefresh:function(){this.finished=!1,this.isloading=!0,this.moreloading=!0,this.onLoad()},onLoad:function(){var t=this;this.refreshing&&(this.listData.length=0,this.refreshing=!1),setTimeout((function(){t.getResData()}),500)},firstOpenNotice:function(){var t=this,e=this.$utils.storage.getLocal("agreeflag");e||a["a"].alert({title:"友情提示",message:"此网页仅供内部学习和使用，资源均来自互联网，本站只做转载使用，未经允许不得随意分享，谢谢合作！",theme:"round-button"}).then((function(){a["a"].confirm({title:"提示",message:"是否确认继续浏览本站，如浏览请自觉遵守规则，如不浏览请点击取消自觉退出！"}).then((function(){a["a"].alert({title:"提示",message:"喲！就知道你会继续浏览，哈哈哈"}).then((function(){t.$toast("芜湖，起飞，开始学习"),t.$utils.storage.setLocal("agreeflag",!0)}))})).catch((function(){window.opener=null,window.open("","_self"),window.close()}))}))},cancelNotice:function(){this.$utils.storage.setLocal("noticeObjectId",this.noticeObj.objectId)},getNotice:function(){var t=this,e=this.$Bmob.Query("Notice");e.limit(1),e.order("-createdAt"),e.find().then((function(e){e.length&&(t.noticeObj=e[0],t.noticeValue=e[0].noticeBar,t.$utils.storage.getLocal("noticeObjectId")&&t.$utils.storage.getLocal("noticeObjectId")===e[0].objectId?t.noticeShow=!1:t.noticeShow=!0,setTimeout((function(){t.$refs.noticeBar.reset()}),800))})).catch((function(t){console.log(t)}))},getUserData:function(){var t=this;this.loading=!0;var e=this.$Bmob.Query("_User");return e.get(this.UserId).then((function(e){if(!e.isEnable)throw"状态异常，请重新登录";t.userData=e,t.loading=!1,t.$utils.storage.setLocal("bmob",JSON.stringify(e))})).catch((function(e){console.log(e),t.$toast("状态异常，请重新登录"),setTimeout((function(){t.$utils.loginOut(t)}),500)}))},getResData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.isloading=!0;var n=this.$Bmob.Query("Resources");n.limit(this.pagesize);var r=e?0:this.listData.length;return n.skip(r),e&&n.equalTo("videoTitle","==",this.searchValue),n.include("author"),n.equalTo("show","==",!0),n.order("-ishot","-createdAt"),n.find().then((function(n){console.log(n),n.forEach((function(n){e?t.searchList.push(n):t.listData.push(n)})),t.isloading=!1,t.isError=!1,setTimeout((function(){t.$refs.noticeBar.reset()}),500),n.length===t.pagesize?(t.moreloading=!1,t.finished=!1,t.refreshing=!1):(t.finished=!0,t.moreloading=!1,t.refreshing=!1)})).catch((function(e){t.isloading=!1,t.isError=!0}))},loginOut:function(){var t=this;a["a"].confirm({title:"提示",message:"是否退出登录"}).then((function(){t.$toast({message:"已退出登录",position:"bottom"}),t.$utils.loginOut(t)})).catch((function(){}))},search:function(){if(""===this.searchValue)return this.$toast("请输入搜索内容");this.getResData(!0)}}},s=c,u=s,l=(n("4f7d"),n("2877")),h=Object(l["a"])(u,r,i,!1,null,"885e1276",null);e["default"]=h.exports},"7db0":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").find,o=n("44d2"),a="find",c=!0;a in[]&&Array(1)[a]((function(){c=!1})),r({target:"Array",proto:!0,forced:c},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o(a)},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(N){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof g?e:g,o=Object.create(i.prototype),a=new j(r||[]);return o._invoke=L(t,n,a),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(N){return{type:"throw",arg:N}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",d="executing",v="completed",p={};function g(){}function y(){}function m(){}var b={};s(b,o,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w($([])));x&&x!==n&&r.call(x,o)&&(b=x);var k=m.prototype=g.prototype=Object.create(b);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function D(t,e){function n(i,o,a,c){var s=l(t[i],t,o);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"===typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var i;function o(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function L(t,e,n){var r=h;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===v){if("throw"===i)throw o;return C()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var c=E(a,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var s=l(t,e,n);if("normal"===s.type){if(r=n.done?v:f,s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=v,n.method="throw",n.arg=s.arg)}}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,p;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function $(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:C}}function C(){return{value:e,done:!0}}return y.prototype=m,s(k,"constructor",m),s(m,"constructor",y),y.displayName=s(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,c,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},_(D.prototype),s(D.prototype,a,(function(){return this})),t.AsyncIterator=D,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new D(u(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(k),s(k,c,"Generator"),s(k,o,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=$,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return c.type="throw",c.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;S(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:$(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},b727:function(t,e,n){var r=n("0366"),i=n("e330"),o=n("44ad"),a=n("7b0b"),c=n("07fa"),s=n("65f0"),u=i([].push),l=function(t){var e=1==t,n=2==t,i=3==t,l=4==t,h=6==t,f=7==t,d=5==t||h;return function(v,p,g,y){for(var m,b,w=a(v),x=o(w),k=r(p,g),_=c(x),D=0,L=y||s,E=e?L(v,_):n||f?L(v,0):void 0;_>D;D++)if((d||D in x)&&(m=x[D],b=k(m,D,w),t))if(e)E[D]=b;else if(b)switch(t){case 3:return!0;case 5:return m;case 6:return D;case 2:u(E,m)}else switch(t){case 4:return!1;case 7:u(E,m)}return h?-1:i||l?l:E}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},e9c4:function(t,e,n){var r=n("23e7"),i=n("da84"),o=n("d066"),a=n("2ba4"),c=n("e330"),s=n("d039"),u=i.Array,l=o("JSON","stringify"),h=c(/./.exec),f=c("".charAt),d=c("".charCodeAt),v=c("".replace),p=c(1..toString),g=/[\uD800-\uDFFF]/g,y=/^[\uD800-\uDBFF]$/,m=/^[\uDC00-\uDFFF]$/,b=function(t,e,n){var r=f(n,e-1),i=f(n,e+1);return h(y,t)&&!h(m,i)||h(m,t)&&!h(y,r)?"\\u"+p(d(t,0),16):t},w=s((function(){return'"\\udf06\\ud834"'!==l("\udf06\ud834")||'"\\udead"'!==l("\udead")}));l&&r({target:"JSON",stat:!0,forced:w},{stringify:function(t,e,n){for(var r=0,i=arguments.length,o=u(i);r<i;r++)o[r]=arguments[r];var c=a(l,null,o);return"string"==typeof c?v(c,g,b):c}})}}]);