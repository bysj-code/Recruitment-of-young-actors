(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"0453":function(n,t,a){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=e(a("a34a"));function e(n){return n&&n.__esModule?n:{default:n}}function r(n,t,a,i,e,r,u){try{var s=n[r](u),o=s.value}catch(l){return void a(l)}s.done?t(o):Promise.resolve(o).then(i,e)}function u(n){return function(){var t=this,a=arguments;return new Promise((function(i,e){var u=n.apply(t,a);function s(n){r(u,i,e,s,o,"next",n)}function o(n){r(u,i,e,s,o,"throw",n)}s(void 0)}))}}function s(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}var o=function(){return a.e("components/momo-multipleSelect/momo-multipleSelect").then(a.bind(null,"bd56"))},l={data:function(){var n;return{xiaoyanyuanxingbieOptions:[],xiaoyanyuanxingbieIndex:0,ruleForm:(n={yanyuanzhanghao:"",nicheng:"",mima:"",xingming:"",xingbie:"",shengao:"",tizhong:"",jianjie:"",lianxidianhua:"",touxiang:"",shangjiazhanghao:"",shangjianicheng:""},s(n,"mima",""),s(n,"shangjiaxingming",""),s(n,"shangjiajianjie",""),s(n,"lianxifangshi",""),s(n,"shangjiazhaopian",""),n),tableName:""}},components:{multipleSelect:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=u(i.default.mark((function t(){var a;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:[],a=n.getStorageSync("loginTable"),this.tableName=a,"xiaoyanyuan"==this.tableName&&(this.xiaoyanyuanxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.xiaoyanyuanxingbieOptions[0]),this.styleChange();case 5:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),methods:{xiaoyanyuanxingbieChange:function(n){this.xiaoyanyuanxingbieIndex=n.target.value,this.ruleForm.xingbie=this.xiaoyanyuanxingbieOptions[this.xiaoyanyuanxingbieIndex]},xiaoyanyuantouxiangTap:function(){var n=this;this.$api.upload((function(t){n.ruleForm.touxiang="upload/"+t.file,n.$forceUpdate()}))},shangjiashangjiazhaopianTap:function(){var n=this;this.$api.upload((function(t){n.ruleForm.shangjiazhaopian="upload/"+t.file,n.$forceUpdate()}))},toggleTab:function(n){this.$refs[n].show()},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var n=u(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(this.ruleForm.yanyuanzhanghao||"xiaoyanyuan"!=this.tableName){n.next=3;break}return this.$utils.msg("演员账号不能为空"),n.abrupt("return");case 3:if(this.ruleForm.mima||"xiaoyanyuan"!=this.tableName){n.next=6;break}return this.$utils.msg("密码不能为空"),n.abrupt("return");case 6:if("xiaoyanyuan"!=this.tableName||this.ruleForm.mima==this.ruleForm.mima2){n.next=9;break}return this.$utils.msg("两次密码输入不一致"),n.abrupt("return");case 9:if(this.ruleForm.xingming||"xiaoyanyuan"!=this.tableName){n.next=12;break}return this.$utils.msg("姓名不能为空"),n.abrupt("return");case 12:if("xiaoyanyuan"!=this.tableName||!this.ruleForm.lianxidianhua||this.$validate.isMobile(this.ruleForm.lianxidianhua)){n.next=15;break}return this.$utils.msg("联系电话应输入手机格式"),n.abrupt("return");case 15:if(this.ruleForm.shangjiazhanghao||"shangjia"!=this.tableName){n.next=18;break}return this.$utils.msg("商家账号不能为空"),n.abrupt("return");case 18:if(this.ruleForm.shangjianicheng||"shangjia"!=this.tableName){n.next=21;break}return this.$utils.msg("商家昵称不能为空"),n.abrupt("return");case 21:if(this.ruleForm.mima||"shangjia"!=this.tableName){n.next=24;break}return this.$utils.msg("密码不能为空"),n.abrupt("return");case 24:if("shangjia"!=this.tableName||this.ruleForm.mima==this.ruleForm.mima2){n.next=27;break}return this.$utils.msg("两次密码输入不一致"),n.abrupt("return");case 27:if(this.ruleForm.shangjiaxingming||"shangjia"!=this.tableName){n.next=30;break}return this.$utils.msg("商家姓名不能为空"),n.abrupt("return");case 30:if("shangjia"!=this.tableName||!this.ruleForm.lianxifangshi||this.$validate.isMobile(this.ruleForm.lianxifangshi)){n.next=33;break}return this.$utils.msg("联系方式应输入手机格式"),n.abrupt("return");case 33:return n.next=35,this.$api.register("".concat(this.tableName),this.ruleForm);case 35:this.$utils.msgBack("注册成功");case 37:case"end":return n.stop()}}),n,this)})));function t(){return n.apply(this,arguments)}return t}()}};t.default=l}).call(this,a("543d")["default"])},"0943":function(n,t,a){"use strict";(function(n){a("6cdc"),a("921b");i(a("66fd"));var t=i(a("3735"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,a("543d")["createPage"])},"2f71":function(n,t,a){},3735:function(n,t,a){"use strict";a.r(t);var i=a("543f"),e=a("48c7");for(var r in e)"default"!==r&&function(n){a.d(t,n,(function(){return e[n]}))}(r);a("4e19");var u,s=a("f0c5"),o=Object(s["a"])(e["default"],i["b"],i["c"],!1,null,"17cf1171",null,!1,i["a"],u);t["default"]=o.exports},"48c7":function(n,t,a){"use strict";a.r(t);var i=a("0453"),e=a.n(i);for(var r in i)"default"!==r&&function(n){a.d(t,n,(function(){return i[n]}))}(r);t["default"]=e.a},"4e19":function(n,t,a){"use strict";var i=a("2f71"),e=a.n(i);e.a},"543f":function(n,t,a){"use strict";var i,e=function(){var n=this,t=n.$createElement;n._self._c},r=[];a.d(t,"b",(function(){return e})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return i}))}},[["0943","common/runtime","common/vendor"]]]);