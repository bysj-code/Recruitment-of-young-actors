(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"55a4":function(n,t,e){},"6e86":function(n,t,e){"use strict";var o=e("55a4"),i=e.n(o);i.a},8069:function(n,t,e){"use strict";e.r(t);var o=e("da67"),i=e.n(o);for(var a in o)"default"!==a&&function(n){e.d(t,n,(function(){return o[n]}))}(a);t["default"]=i.a},"8a1a":function(n,t,e){"use strict";var o,i=function(){var n=this,t=n.$createElement,e=(n._self._c,n.__map(n.menuList,(function(t,e){var o=n.__map(t.frontMenu,(function(t,e){var o=n.__map(t.child,(function(t,e){var o=t.menu.split("列表");return{$orig:n.__get_orig(t),g0:o}}));return{$orig:n.__get_orig(t),l0:o}}));return{$orig:n.__get_orig(t),l1:o}}))),o=n.__map(n.hometonggaolist,(function(t,e){var o=t.tonggaofengmian.substring(0,4),i=t.tonggaofengmian.split(",");return{$orig:n.__get_orig(t),g1:o,g2:i}}));n.$mp.data=Object.assign({},{$root:{l2:e,l3:o}})},a=[];e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return o}))},d537:function(n,t,e){"use strict";(function(n){e("6cdc"),e("921b");o(e("66fd"));var t=o(e("f75a"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},da67:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(e("a34a")),i=a(e("2971"));function a(n){return n&&n.__esModule?n:{default:n}}function c(n,t,e,o,i,a,c){try{var r=n[a](c),u=r.value}catch(s){return void e(s)}r.done?t(u):Promise.resolve(u).then(o,i)}function r(n){return function(){var t=this,e=arguments;return new Promise((function(o,i){var a=n.apply(t,e);function r(n){c(a,o,i,r,u,"next",n)}function u(n){c(a,o,i,r,u,"throw",n)}r(void 0)}))}}e("651d");var u=function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(e.bind(null,"b704"))},s={components:{uniIcons:u},data:function(){return{options2:{effect:"flip",loop:!0},options3:{effect:"cube",loop:!0,cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94}},rows:2,column:4,iconArr:["cuIcon-same","cuIcon-deliver","cuIcon-evaluate","cuIcon-shop","cuIcon-ticket","cuIcon-cascades","cuIcon-discover","cuIcon-question","cuIcon-pic","cuIcon-filter","cuIcon-footprint","cuIcon-pulldown","cuIcon-pullup","cuIcon-moreandroid","cuIcon-refund","cuIcon-qrcode","cuIcon-remind","cuIcon-profile","cuIcon-home","cuIcon-message","cuIcon-link","cuIcon-lock","cuIcon-unlock","cuIcon-vip","cuIcon-weibo","cuIcon-activity","cuIcon-friendadd","cuIcon-friendfamous","cuIcon-friend","cuIcon-goods","cuIcon-selection"],role:"",menuList:[],swiperMenuList:[],user:{},tableName:"",btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],queryList:[{queryName:"通告标题"}],queryIndex:0,searchForm:{tonggaotonggaobiaoti:""},CustomBar:"0",swiperList:[],hometonggaolist:[],news:[]}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=r(o.default.mark((function t(){var e,a,c,r=this;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.role=n.getStorageSync("role"),e=n.getStorageSync("nowTable"),t.next=4,this.$api.session(e);case 4:a=t.sent,this.user=a.data,this.tableName=e,c=i.default.list(),this.menuList=c,this.menuList.forEach((function(n,t){r.role==n.roleName&&n.frontMenu.forEach((function(n,t){n.child[0].buttons.indexOf("查看")>-1&&r.swiperMenuList.push(n)}))}));case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onShow:function(){var n=r(o.default.mark((function n(){var t,e,i,a,c,r,u,s;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),e=[],n.next=4,this.$api.page("config",{page:1,limit:5});case 4:for(t=n.sent,i=!0,a=!1,c=void 0,n.prev=8,r=t.data.list[Symbol.iterator]();!(i=(u=r.next()).done);i=!0)s=u.value,s.name.indexOf("picture")>=0&&s.value&&""!=s.value&&null!=s.value&&e.push({img:s.value,title:s.name});n.next=16;break;case 12:n.prev=12,n.t0=n["catch"](8),a=!0,c=n.t0;case 16:n.prev=16,n.prev=17,i||null==r.return||r.return();case 19:if(n.prev=19,!a){n.next=22;break}throw c;case 22:return n.finish(19);case 23:return n.finish(16);case 24:return e&&(this.swiperList=e),n.next=27,this.$api.list("tonggao",{page:1,sort:"fabushijian",order:"desc",limit:6});case 27:t=n.sent,this.hometonggaolist=t.data.list;case 29:case"end":return n.stop()}}),n,this,[[8,12,16,24],[17,,19,23]])})));function t(){return n.apply(this,arguments)}return t}(),methods:{queryChange:function(n){this.queryIndex=n.detail.value,this.searchForm.tonggaotonggaobiaoti=""},onSwiperTap:function(n){},onNewsDetailTap:function(n){this.$utils.jump("../news-detail/news-detail?id=".concat(n))},onDetailTap:function(n,t){this.$utils.jump("../".concat(n,"/detail?id=").concat(t))},onPageTap:function(t){0==this.queryIndex&&(n.setStorageSync("indexQueryCondition",this.searchForm.tonggaotonggaobiaoti),this.searchForm.tonggaotonggaobiaoti=""),n.navigateTo({url:"../".concat(t,"/list"),fail:function(){n.switchTab({url:"../".concat(t,"/list")})}})},onPageTap2:function(t){n.setStorageSync("useridTag",0),n.navigateTo({url:t,fail:function(){n.switchTab({url:t})}})}}};t.default=s}).call(this,e("543d")["default"])},f75a:function(n,t,e){"use strict";e.r(t);var o=e("8a1a"),i=e("8069");for(var a in i)"default"!==a&&function(n){e.d(t,n,(function(){return i[n]}))}(a);e("6e86");var c,r=e("f0c5"),u=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"69765f26",null,!1,o["a"],c);t["default"]=u.exports}},[["d537","common/runtime","common/vendor"]]]);