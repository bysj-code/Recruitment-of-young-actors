(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tonggao/add-or-update"],{2116:function(n,t,i){"use strict";i.r(t);var e=i("ae11"),a=i.n(e);for(var r in e)"default"!==r&&function(n){i.d(t,n,(function(){return e[n]}))}(r);t["default"]=a.a},"326b":function(n,t,i){"use strict";var e=i("cefe"),a=i.n(e);a.a},"73ee":function(n,t,i){"use strict";i.r(t);var e=i("8149"),a=i("2116");for(var r in a)"default"!==r&&function(n){i.d(t,n,(function(){return a[n]}))}(r);i("326b");var o,s=i("f0c5"),u=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,"5dc125e4",null,!1,e["a"],o);t["default"]=u.exports},8149:function(n,t,i){"use strict";var e={"xia-editor":()=>i.e("components/xia-editor/xia-editor").then(i.bind(null,"064f"))},a=function(){var n=this,t=n.$createElement,i=(n._self._c,n.ruleForm.tonggaofengmian.split(","));n.$mp.data=Object.assign({},{$root:{g0:i}})},r=[];i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return e}))},ae11:function(n,t,i){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=a(i("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function r(n,t,i,e,a,r,o){try{var s=n[r](o),u=s.value}catch(g){return void i(g)}s.done?t(u):Promise.resolve(u).then(e,a)}function o(n){return function(){var t=this,i=arguments;return new Promise((function(e,a){var o=n.apply(t,i);function s(n){r(o,e,a,s,u,"next",n)}function u(n){r(o,e,a,s,u,"throw",n)}s(void 0)}))}}var s=function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"e2b1"))},u=function(){return i.e("components/xia-editor/xia-editor").then(i.bind(null,"064f"))},g={data:function(){return{cross:"",ruleForm:{tonggaobiaoti:"",tonggaoleixing:"",tonggaozhuangtai:"",zhaomurenshu:"",jiezhiriqi:"",paisheshijian:"",paishedidian:"",yongjin:"",tonggaoneirong:"",tonggaofengmian:"",fabushijian:"",shangjiazhanghao:"",shangjianicheng:"",shangjiaxingming:"",lianxifangshi:""},tonggaoleixingOptions:[],tonggaoleixingIndex:0,tonggaozhuangtaiOptions:[],tonggaozhuangtaiIndex:0,user:{},ro:{tonggaobiaoti:!1,tonggaoleixing:!1,tonggaozhuangtai:!1,zhaomurenshu:!1,jiezhiriqi:!1,paisheshijian:!1,paishedidian:!1,yongjin:!1,tonggaoneirong:!1,tonggaofengmian:!1,fabushijian:!1,shangjiazhanghao:!1,shangjianicheng:!1,shangjiaxingming:!1,lianxifangshi:!1}}},components:{wPicker:s,xiaEditor:u},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=o(e.default.mark((function t(i){var a,r,o,s;return e.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.ruleForm.fabushijian=this.$utils.getCurDate(),a=n.getStorageSync("nowTable"),t.next=4,this.$api.session(a);case 4:return r=t.sent,this.user=r.data,this.ruleForm.shangjiazhanghao=this.user.shangjiazhanghao,this.ro.shangjiazhanghao=!0,this.ruleForm.shangjianicheng=this.user.shangjianicheng,this.ro.shangjianicheng=!0,this.ruleForm.shangjiaxingming=this.user.shangjiaxingming,this.ro.shangjiaxingming=!0,this.ruleForm.lianxifangshi=this.user.lianxifangshi,this.ro.lianxifangshi=!0,this.tonggaoleixingOptions="演员招募,模特拍摄".split(","),t.next=17,this.$api.option("tonggaozhuangtai","tonggaozhuangtai",{});case 17:if(r=t.sent,this.tonggaozhuangtaiOptions=r.data,this.tonggaozhuangtaiOptions.unshift("请选择通告状态"),this.ruleForm.userid=n.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!i.id){t.next=28;break}return this.ruleForm.id=i.id,t.next=26,this.$api.info("tonggao",this.ruleForm.id);case 26:r=t.sent,this.ruleForm=r.data;case 28:if(this.cross=i.cross,!i.cross){t.next=96;break}o=n.getStorageSync("crossObj"),t.t0=e.default.keys(o);case 32:if((t.t1=t.t0()).done){t.next=96;break}if(s=t.t1.value,"tonggaobiaoti"!=s){t.next=38;break}return this.ruleForm.tonggaobiaoti=o[s],this.ro.tonggaobiaoti=!0,t.abrupt("continue",32);case 38:if("tonggaoleixing"!=s){t.next=42;break}return this.ruleForm.tonggaoleixing=o[s],this.ro.tonggaoleixing=!0,t.abrupt("continue",32);case 42:if("tonggaozhuangtai"!=s){t.next=46;break}return this.ruleForm.tonggaozhuangtai=o[s],this.ro.tonggaozhuangtai=!0,t.abrupt("continue",32);case 46:if("zhaomurenshu"!=s){t.next=50;break}return this.ruleForm.zhaomurenshu=o[s],this.ro.zhaomurenshu=!0,t.abrupt("continue",32);case 50:if("jiezhiriqi"!=s){t.next=54;break}return this.ruleForm.jiezhiriqi=o[s],this.ro.jiezhiriqi=!0,t.abrupt("continue",32);case 54:if("paisheshijian"!=s){t.next=58;break}return this.ruleForm.paisheshijian=o[s],this.ro.paisheshijian=!0,t.abrupt("continue",32);case 58:if("paishedidian"!=s){t.next=62;break}return this.ruleForm.paishedidian=o[s],this.ro.paishedidian=!0,t.abrupt("continue",32);case 62:if("yongjin"!=s){t.next=66;break}return this.ruleForm.yongjin=o[s],this.ro.yongjin=!0,t.abrupt("continue",32);case 66:if("tonggaoneirong"!=s){t.next=70;break}return this.ruleForm.tonggaoneirong=o[s],this.ro.tonggaoneirong=!0,t.abrupt("continue",32);case 70:if("tonggaofengmian"!=s){t.next=74;break}return this.ruleForm.tonggaofengmian=o[s].split(",")[0],this.ro.tonggaofengmian=!0,t.abrupt("continue",32);case 74:if("fabushijian"!=s){t.next=78;break}return this.ruleForm.fabushijian=o[s],this.ro.fabushijian=!0,t.abrupt("continue",32);case 78:if("shangjiazhanghao"!=s){t.next=82;break}return this.ruleForm.shangjiazhanghao=o[s],this.ro.shangjiazhanghao=!0,t.abrupt("continue",32);case 82:if("shangjianicheng"!=s){t.next=86;break}return this.ruleForm.shangjianicheng=o[s],this.ro.shangjianicheng=!0,t.abrupt("continue",32);case 86:if("shangjiaxingming"!=s){t.next=90;break}return this.ruleForm.shangjiaxingming=o[s],this.ro.shangjiaxingming=!0,t.abrupt("continue",32);case 90:if("lianxifangshi"!=s){t.next=94;break}return this.ruleForm.lianxifangshi=o[s],this.ro.lianxifangshi=!0,t.abrupt("continue",32);case 94:t.next=32;break;case 96:this.styleChange();case 97:case"end":return t.stop()}}),t,this)})));function i(n){return t.apply(this,arguments)}return i}(),methods:{tonggaoneirongChange:function(n){this.ruleForm.tonggaoneirong=n},styleChange:function(){this.$nextTick((function(){}))},paisheshijianChange:function(n){this.ruleForm.paisheshijian=n.target.value,this.$forceUpdate()},fabushijianChange:function(n){this.ruleForm.fabushijian=n.target.value,this.$forceUpdate()},tonggaoleixingChange:function(n){this.tonggaoleixingIndex=n.target.value,this.ruleForm.tonggaoleixing=this.tonggaoleixingOptions[this.tonggaoleixingIndex]},tonggaozhuangtaiChange:function(n){this.tonggaozhuangtaiIndex=n.target.value,this.ruleForm.tonggaozhuangtai=this.tonggaozhuangtaiOptions[this.tonggaozhuangtaiIndex]},tonggaofengmianTap:function(){var n=this;this.$api.upload((function(t){n.ruleForm.tonggaofengmian="upload/"+t.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=o(e.default.mark((function t(){var i,a,r,o,s,u,g,h,c,l;return e.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.cross){t.next=16;break}if(s=n.getStorageSync("statusColumnName"),u=n.getStorageSync("statusColumnValue"),""==s){t.next=16;break}if(i||(i=n.getStorageSync("crossObj")),s.startsWith("[")){t.next=12;break}for(g in i)g==s&&(i[g]=u);return h=n.getStorageSync("crossTable"),t.next=10,this.$api.update("".concat(h),i);case 10:t.next=16;break;case 12:a=Number(n.getStorageSync("userid")),r=i["id"],o=n.getStorageSync("statusColumnName"),o=o.replace(/\[/,"").replace(/\]/,"");case 16:if(!r||!a){t.next=38;break}return this.ruleForm.crossuserid=a,this.ruleForm.crossrefid=r,c={page:1,limit:10,crossuserid:a,crossrefid:r},t.next=22,this.$api.list("tonggao",c);case 22:if(l=t.sent,!(l.data.total>=o)){t.next=28;break}return this.$utils.msg(n.getStorageSync("tips")),t.abrupt("return",!1);case 28:if(!this.ruleForm.id){t.next=33;break}return t.next=31,this.$api.update("tonggao",this.ruleForm);case 31:t.next=35;break;case 33:return t.next=35,this.$api.add("tonggao",this.ruleForm);case 35:this.$utils.msgBack("提交成功");case 36:t.next=46;break;case 38:if(!this.ruleForm.id){t.next=43;break}return t.next=41,this.$api.update("tonggao",this.ruleForm);case 41:t.next=45;break;case 43:return t.next=45,this.$api.add("tonggao",this.ruleForm);case 45:this.$utils.msgBack("提交成功");case 46:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var t=new Date,i=t.getFullYear(),e=t.getMonth()+1,a=t.getDate();return"start"===n?i-=60:"end"===n&&(i+=2),e=e>9?e:"0"+e,a=a>9?a:"0"+a,"".concat(i,"-").concat(e,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};t.default=g}).call(this,i("543d")["default"])},cd32:function(n,t,i){"use strict";(function(n){i("6cdc"),i("921b");e(i("66fd"));var t=e(i("73ee"));function e(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,i("543d")["createPage"])},cefe:function(n,t,i){}},[["cd32","common/runtime","common/vendor"]]]);