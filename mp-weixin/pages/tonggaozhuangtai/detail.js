(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tonggaozhuangtai/detail"],{"0410":function(t,n,e){"use strict";e.r(n);var a=e("e6e9"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a},"617e":function(t,n,e){"use strict";var a={"mescroll-uni":()=>Promise.all([e.e("common/vendor"),e.e("components/mescroll-uni/mescroll-uni")]).then(e.bind(null,"f05e"))},i=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}))},7706:function(t,n,e){},9964:function(t,n,e){"use strict";var a=e("7706"),i=e.n(a);i.a},c4af:function(t,n,e){"use strict";(function(t){e("6cdc"),e("921b");a(e("66fd"));var n=a(e("f0a5"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},e6e9:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function r(t,n,e,a,i,r,u){try{var o=t[r](u),s=o.value}catch(c){return void e(c)}o.done?n(s):Promise.resolve(s).then(a,i)}function u(t){return function(){var n=this,e=arguments;return new Promise((function(a,i){var u=t.apply(n,e);function o(t){r(u,a,i,o,s,"next",t)}function s(t){r(u,a,i,o,s,"throw",t)}o(void 0)}))}}var o={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},count:0,timer:null}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=u(a.default.mark((function t(n){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.id=n.id,n.userid&&(this.userid=n.userid);case 2:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}(),onShow:function(){var n=u(a.default.mark((function n(e){var i,r;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.init(),i=t.getStorageSync("nowTable"),n.next=4,this.$api.session(i);case 4:r=n.sent,this.user=r.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()}));case 7:case"end":return n.stop()}}),n,this)})));function e(t){return n.apply(this,arguments)}return e}(),destroyed:function(){},methods:{onPayTap:function(){t.setStorageSync("paytable","tonggaozhuangtai"),t.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onDetailTap:function(n){t.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(n.id,"&userid=")+this.userid)},onAcrossTap:function(n,e,a,i,r){if(t.setStorageSync("crossTable","tonggaozhuangtai"),t.setStorageSync("crossObj",this.detail),t.setStorageSync("statusColumnName",a),t.setStorageSync("statusColumnValue",r),t.setStorageSync("tips",i),""!=a&&!a.startsWith("[")){var u=t.getStorageSync("crossObj");for(var o in u)if(o==a&&u[o]==r)return void this.$utils.msg(i)}this.$utils.jump("../".concat(n,"/add-or-update?cross=true"))},init:function(){var t=u(a.default.mark((function t(){var n;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.info("tonggaozhuangtai",this.id);case 2:n=t.sent,this.detail=n.data;case 4:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=u(a.default.mark((function t(n){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n.endSuccess(n.size,this.hasNext);case 1:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(n){var e=this;n=e.$base.url+n,t.downloadFile({url:n,success:function(t){200===t.statusCode&&(e.$utils.msg("下载成功"),window.open(n))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){var t=u(a.default.mark((function t(){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$utils.jump("../discusstonggaozhuangtai/add-or-update?refid=".concat(this.id));case 1:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),onSHTap:function(){this.$refs.popup.open()}}};n.default=o}).call(this,e("543d")["default"])},f0a5:function(t,n,e){"use strict";e.r(n);var a=e("617e"),i=e("0410");for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("9964");var u,o=e("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"95e18b16",null,!1,a["a"],u);n["default"]=s.exports}},[["c4af","common/runtime","common/vendor"]]]);