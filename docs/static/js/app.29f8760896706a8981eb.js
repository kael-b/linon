webpackJsonp([1],{JUTP:function(e,t){},W7hC:function(e,t){},fATe:function(e,t){},mUtA:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("/5sW"),a=n("/ocq"),l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{on:{click:e.addAlert}},[e._v("\n        add\n    ")]),e._v(" "),n("nwd-alert"),e._v(" "),n("nwd-alert",{attrs:{type:"success",des:"xxxxxxxx",textAlign:"1"}}),e._v(" "),n("nwd-alert",{attrs:{type:"error",textAlign:"2"}}),e._v(" "),n("nwd-alert",{attrs:{type:"warn",textAlign:"center",closeText:"知道了"}},[n("p",[e._v("\n        在向具名插槽提供内容的时候，我们可以在一个父组件的 元素上使用 slot 特性：\n    ")])]),e._v(" "),n("div",e._l(e.alertData,function(e,t){return n("nwd-alert",{key:t,attrs:{type:e.type}})}))],1)},staticRenderFns:[]};var s=n("VU/8")({data:function(){return{alertData:[]}},methods:{addAlert:function(){this.alertData.push({type:"success"})}}},l,!1,function(e){n("W7hC")},"data-v-1eec66e6",null).exports;r.a.use(a.a);var o=new a.a({routes:[{path:"/",name:"alert",component:s}]}),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var c=n("VU/8")({name:"App",data:function(){return{}}},i,!1,function(e){n("fATe")},null,null).exports,u={NS:"nwd"},d={success:"-alert-success",warn:"-alert-warn",error:"-alert-error",default:"-alert-default"},f={left:"left",center:"center",right:"right",0:"left",1:"center",2:"right"},p={name:u.NS+"Alert",data:function(){return{isShow:!0}},props:{title:{type:String,default:"一条消息"},type:{type:String,default:"default"},des:{type:String,default:""},textAlign:{type:String|Number,default:0},closeAble:{type:Boolean,default:!0},closeText:{type:String,default:"X"},showIcon:{type:Boolean,default:!1}},computed:{alertContent:function(){var e=f[this.textAlign],t="";(!e||"left"!=e&&0!=e)&&(t=u.NS+"-text-"+e+" ");var n=d[this.type];return t+u.NS+n},alertTitle:function(){var e="";return(this.des||this.$slots.default)&&(e=u.NS+"-font-bold"),u.NS+"-alert-title "+e},alertDes:function(){return u.NS+"-alert-des"},closeContent:function(){return u.NS+"-alert-close"}},methods:{close:function(){this.isShow=!1,this.$emit("close")}}},v={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"slide-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],class:[e.alertContent]},[n("p",{class:[e.alertTitle]},[e._v("\n            "+e._s(e.title)+"\n        ")]),e._v(" "),n("div",{class:[e.alertDes]},[e._t("default",[n("p",[e._v("\n                    "+e._s(e.des)+"\n                ")])])],2),e._v(" "),e.closeAble?n("div",{class:[e.closeContent],on:{click:e.close}},[e._v("\n           "+e._s(e.closeText)+"\n       ")]):e._e()])])},staticRenderFns:[]},h=n("VU/8")(p,v,!1,null,null,null).exports;h.install=function(e){e.component(h.name,h)};var w=h,_=[w],m=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];_.map(function(t){e.component(t.name,t)})};"undefined"!=typeof window&&window.Vue&&m(window.Vue);var x={install:m,Alert:w};n("JUTP");r.a.use(x),new r.a({router:o,render:e=>e(c)}).$mount("#app")}},["mUtA"]);
//# sourceMappingURL=app.29f8760896706a8981eb.js.map