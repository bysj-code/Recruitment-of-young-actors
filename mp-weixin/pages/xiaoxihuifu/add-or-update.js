(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/xiaoxihuifu/add-or-update"],{"13ed":function(e,t,n){"use strict";(function(e){n("6cdc"),n("921b");i(n("66fd"));var t=i(n("87b2"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"15c1":function(e,t,n){},"2a0d":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n,i,a,r,u){try{var o=e[r](u),s=o.value}catch(c){return void n(c)}o.done?t(s):Promise.resolve(s).then(i,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var u=e.apply(t,n);function o(e){r(u,i,a,o,s,"next",e)}function s(e){r(u,i,a,o,s,"throw",e)}o(void 0)}))}}var o=function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"e2b1"))},s=function(){return n.e("components/xia-editor/xia-editor").then(n.bind(null,"064f"))},c={data:function(){return{cross:"",ruleForm:{huifubiaoti:"",huifuneirong:"",huifushijian:"",yanyuanzhanghao:"",nicheng:"",touxiang:"",shangjiazhanghao:"",shangjianicheng:""},user:{},ro:{huifubiaoti:!1,huifuneirong:!1,huifushijian:!1,yanyuanzhanghao:!1,nicheng:!1,touxiang:!1,shangjiazhanghao:!1,shangjianicheng:!1}}},components:{wPicker:o,xiaEditor:s},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=u(i.default.mark((function t(n){var a,r,u,o;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.ruleForm.huifushijian=this.$utils.getCurDateTime(),a=e.getStorageSync("nowTable"),t.next=4,this.$api.session(a);case 4:if(r=t.sent,this.user=r.data,this.ruleForm.yanyuanzhanghao=this.user.yanyuanzhanghao,this.ro.yanyuanzhanghao=!0,this.ruleForm.nicheng=this.user.nicheng,this.ro.nicheng=!0,this.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=18;break}return this.ruleForm.id=n.id,t.next=16,this.$api.info("xiaoxihuifu",this.ruleForm.id);case 16:r=t.sent,this.ruleForm=r.data;case 18:if(this.cross=n.cross,!n.cross){t.next=58;break}u=e.getStorageSync("crossObj"),t.t0=i.default.keys(u);case 22:if((t.t1=t.t0()).done){t.next=58;break}if(o=t.t1.value,"huifubiaoti"!=o){t.next=28;break}return this.ruleForm.huifubiaoti=u[o],this.ro.huifubiaoti=!0,t.abrupt("continue",22);case 28:if("huifuneirong"!=o){t.next=32;break}return this.ruleForm.huifuneirong=u[o],this.ro.huifuneirong=!0,t.abrupt("continue",22);case 32:if("huifushijian"!=o){t.next=36;break}return this.ruleForm.huifushijian=u[o],this.ro.huifushijian=!0,t.abrupt("continue",22);case 36:if("yanyuanzhanghao"!=o){t.next=40;break}return this.ruleForm.yanyuanzhanghao=u[o],this.ro.yanyuanzhanghao=!0,t.abrupt("continue",22);case 40:if("nicheng"!=o){t.next=44;break}return this.ruleForm.nicheng=u[o],this.ro.nicheng=!0,t.abrupt("continue",22);case 44:if("touxiang"!=o){t.next=48;break}return this.ruleForm.touxiang=u[o].split(",")[0],this.ro.touxiang=!0,t.abrupt("continue",22);case 48:if("shangjiazhanghao"!=o){t.next=52;break}return this.ruleForm.shangjiazhanghao=u[o],this.ro.shangjiazhanghao=!0,t.abrupt("continue",22);case 52:if("shangjianicheng"!=o){t.next=56;break}return this.ruleForm.shangjianicheng=u[o],this.ro.shangjianicheng=!0,t.abrupt("continue",22);case 56:t.next=22;break;case 58:this.styleChange();case 59:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}(),methods:{huifuneirongChange:function(e){this.ruleForm.huifuneirong=e},styleChange:function(){this.$nextTick((function(){}))},huifushijianConfirm:function(e){console.log(e),this.ruleForm.huifushijian=e.result,this.$forceUpdate()},touxiangTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.touxiang="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=u(i.default.mark((function t(){var n,a,r,u,o,s,c,h,f,l;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.cross){t.next=16;break}if(o=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==o){t.next=16;break}if(n||(n=e.getStorageSync("crossObj")),o.startsWith("[")){t.next=12;break}for(c in n)c==o&&(n[c]=s);return h=e.getStorageSync("crossTable"),t.next=10,this.$api.update("".concat(h),n);case 10:t.next=16;break;case 12:a=Number(e.getStorageSync("userid")),r=n["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 16:if(!r||!a){t.next=38;break}return this.ruleForm.crossuserid=a,this.ruleForm.crossrefid=r,f={page:1,limit:10,crossuserid:a,crossrefid:r},t.next=22,this.$api.list("xiaoxihuifu",f);case 22:if(l=t.sent,!(l.data.total>=u)){t.next=28;break}return this.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 28:if(!this.ruleForm.id){t.next=33;break}return t.next=31,this.$api.update("xiaoxihuifu",this.ruleForm);case 31:t.next=35;break;case 33:return t.next=35,this.$api.add("xiaoxihuifu",this.ruleForm);case 35:this.$utils.msgBack("提交成功");case 36:t.next=46;break;case 38:if(!this.ruleForm.id){t.next=43;break}return t.next=41,this.$api.update("xiaoxihuifu",this.ruleForm);case 41:t.next=45;break;case 43:return t.next=45,this.$api.add("xiaoxihuifu",this.ruleForm);case 45:this.$utils.msgBack("提交成功");case 46:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),i=t.getMonth()+1,a=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),i=i>9?i:"0"+i,a=a>9?a:"0"+a,"".concat(n,"-").concat(i,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};t.default=c}).call(this,n("543d")["default"])},"87b2":function(e,t,n){"use strict";n.r(t);var i=n("dff3"),a=n("fc9c");for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("a00c");var u,o=n("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"1c123282",null,!1,i["a"],u);t["default"]=s.exports},a00c:function(e,t,n){"use strict";var i=n("15c1"),a=n.n(i);a.a},dff3:function(e,t,n){"use strict";var i={"xia-editor":()=>n.e("components/xia-editor/xia-editor").then(n.bind(null,"064f")),"w-picker":()=>Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"e2b1"))},a=function(){var e=this,t=e.$createElement,n=(e._self._c,e.ruleForm.touxiang.split(","));e.$mp.data=Object.assign({},{$root:{g0:n}})},r=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}))},fc9c:function(e,t,n){"use strict";n.r(t);var i=n("2a0d"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a}},[["13ed","common/runtime","common/vendor"]]]);