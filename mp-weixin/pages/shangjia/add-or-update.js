(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shangjia/add-or-update"],{3663:function(e,t,n){"use strict";var a=n("8cf0"),i=n.n(a);i.a},"3d6c":function(e,t,n){"use strict";(function(e){n("6cdc"),n("921b");a(n("66fd"));var t=a(n("a1f2"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"4ba6":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n,a,i,r,s){try{var u=e[r](s),o=u.value}catch(c){return void n(c)}u.done?t(o):Promise.resolve(o).then(a,i)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(a,i){var s=e.apply(t,n);function u(e){r(s,a,i,u,o,"next",e)}function o(e){r(s,a,i,u,o,"throw",e)}u(void 0)}))}}var u=function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"e2b1"))},o=function(){return n.e("components/xia-editor/xia-editor").then(n.bind(null,"064f"))},c={data:function(){return{cross:"",ruleForm:{shangjiazhanghao:"",shangjianicheng:"",mima:"",shangjiaxingming:"",shangjiajianjie:"",lianxifangshi:"",shangjiazhaopian:""},user:{},ro:{shangjiazhanghao:!1,shangjianicheng:!1,mima:!1,shangjiaxingming:!1,shangjiajianjie:!1,lianxifangshi:!1,shangjiazhaopian:!1}}},components:{wPicker:u,xiaEditor:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=s(a.default.mark((function t(n){var i,r,s,u;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e.getStorageSync("nowTable"),t.next=3,this.$api.session(i);case 3:if(r=t.sent,this.user=r.data,this.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=13;break}return this.ruleForm.id=n.id,t.next=11,this.$api.info("shangjia",this.ruleForm.id);case 11:r=t.sent,this.ruleForm=r.data;case 13:if(this.cross=n.cross,!n.cross){t.next=49;break}s=e.getStorageSync("crossObj"),t.t0=a.default.keys(s);case 17:if((t.t1=t.t0()).done){t.next=49;break}if(u=t.t1.value,"shangjiazhanghao"!=u){t.next=23;break}return this.ruleForm.shangjiazhanghao=s[u],this.ro.shangjiazhanghao=!0,t.abrupt("continue",17);case 23:if("shangjianicheng"!=u){t.next=27;break}return this.ruleForm.shangjianicheng=s[u],this.ro.shangjianicheng=!0,t.abrupt("continue",17);case 27:if("mima"!=u){t.next=31;break}return this.ruleForm.mima=s[u],this.ro.mima=!0,t.abrupt("continue",17);case 31:if("shangjiaxingming"!=u){t.next=35;break}return this.ruleForm.shangjiaxingming=s[u],this.ro.shangjiaxingming=!0,t.abrupt("continue",17);case 35:if("shangjiajianjie"!=u){t.next=39;break}return this.ruleForm.shangjiajianjie=s[u],this.ro.shangjiajianjie=!0,t.abrupt("continue",17);case 39:if("lianxifangshi"!=u){t.next=43;break}return this.ruleForm.lianxifangshi=s[u],this.ro.lianxifangshi=!0,t.abrupt("continue",17);case 43:if("shangjiazhaopian"!=u){t.next=47;break}return this.ruleForm.shangjiazhaopian=s[u].split(",")[0],this.ro.shangjiazhaopian=!0,t.abrupt("continue",17);case 47:t.next=17;break;case 49:this.styleChange();case 50:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},shangjiazhaopianTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.shangjiazhaopian="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=s(a.default.mark((function t(){var n,i,r,s,u,o,c,h,g,l;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.shangjiazhanghao){t.next=3;break}return this.$utils.msg("商家账号不能为空"),t.abrupt("return");case 3:if(this.ruleForm.shangjianicheng){t.next=6;break}return this.$utils.msg("商家昵称不能为空"),t.abrupt("return");case 6:if(this.ruleForm.mima){t.next=9;break}return this.$utils.msg("密码不能为空"),t.abrupt("return");case 9:if(this.ruleForm.shangjiaxingming){t.next=12;break}return this.$utils.msg("商家姓名不能为空"),t.abrupt("return");case 12:if(!this.ruleForm.lianxifangshi||this.$validate.isMobile(this.ruleForm.lianxifangshi)){t.next=15;break}return this.$utils.msg("联系方式应输入手机格式"),t.abrupt("return");case 15:if(!this.cross){t.next=31;break}if(u=e.getStorageSync("statusColumnName"),o=e.getStorageSync("statusColumnValue"),""==u){t.next=31;break}if(n||(n=e.getStorageSync("crossObj")),u.startsWith("[")){t.next=27;break}for(c in n)c==u&&(n[c]=o);return h=e.getStorageSync("crossTable"),t.next=25,this.$api.update("".concat(h),n);case 25:t.next=31;break;case 27:i=Number(e.getStorageSync("userid")),r=n["id"],s=e.getStorageSync("statusColumnName"),s=s.replace(/\[/,"").replace(/\]/,"");case 31:if(!r||!i){t.next=53;break}return this.ruleForm.crossuserid=i,this.ruleForm.crossrefid=r,g={page:1,limit:10,crossuserid:i,crossrefid:r},t.next=37,this.$api.list("shangjia",g);case 37:if(l=t.sent,!(l.data.total>=s)){t.next=43;break}return this.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 43:if(!this.ruleForm.id){t.next=48;break}return t.next=46,this.$api.update("shangjia",this.ruleForm);case 46:t.next=50;break;case 48:return t.next=50,this.$api.add("shangjia",this.ruleForm);case 50:this.$utils.msgBack("提交成功");case 51:t.next=61;break;case 53:if(!this.ruleForm.id){t.next=58;break}return t.next=56,this.$api.update("shangjia",this.ruleForm);case 56:t.next=60;break;case 58:return t.next=60,this.$api.add("shangjia",this.ruleForm);case 60:this.$utils.msgBack("提交成功");case 61:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),a=t.getMonth()+1,i=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),a=a>9?a:"0"+a,i=i>9?i:"0"+i,"".concat(n,"-").concat(a,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};t.default=c}).call(this,n("543d")["default"])},"8cf0":function(e,t,n){},a1f2:function(e,t,n){"use strict";n.r(t);var a=n("f22d"),i=n("d85f");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("3663");var s,u=n("f0c5"),o=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"10a85144",null,!1,a["a"],s);t["default"]=o.exports},d85f:function(e,t,n){"use strict";n.r(t);var a=n("4ba6"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},f22d:function(e,t,n){"use strict";var a,i=function(){var e=this,t=e.$createElement,n=(e._self._c,e.ruleForm.shangjiazhaopian.split(","));e.$mp.data=Object.assign({},{$root:{g0:n}})},r=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}))}},[["3d6c","common/runtime","common/vendor"]]]);