(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tonggao-add-or-update"],{1193:function(i,e,t){"use strict";var n=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("a481"),t("c5f6"),t("f559"),t("ac6a"),t("28a5"),t("96cf");var r=n(t("3b8d")),a=n(t("e2b1")),o=n(t("064f")),s={data:function(){return{cross:"",ruleForm:{tonggaobiaoti:"",tonggaoleixing:"",tonggaozhuangtai:"",zhaomurenshu:"",jiezhiriqi:"",paisheshijian:"",paishedidian:"",yongjin:"",tonggaoneirong:"",tonggaofengmian:"",fabushijian:"",shangjiazhanghao:"",shangjianicheng:"",shangjiaxingming:"",lianxifangshi:""},tonggaoleixingOptions:[],tonggaoleixingIndex:0,tonggaozhuangtaiOptions:[],tonggaozhuangtaiIndex:0,user:{},ro:{tonggaobiaoti:!1,tonggaoleixing:!1,tonggaozhuangtai:!1,zhaomurenshu:!1,jiezhiriqi:!1,paisheshijian:!1,paishedidian:!1,yongjin:!1,tonggaoneirong:!1,tonggaofengmian:!1,fabushijian:!1,shangjiazhanghao:!1,shangjianicheng:!1,shangjiaxingming:!1,lianxifangshi:!1}}},components:{wPicker:a.default,xiaEditor:o.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var i=(0,r.default)(regeneratorRuntime.mark((function i(e){var t,n,r,a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return this.ruleForm.fabushijian=this.$utils.getCurDate(),t=uni.getStorageSync("nowTable"),i.next=4,this.$api.session(t);case 4:return n=i.sent,this.user=n.data,this.ruleForm.shangjiazhanghao=this.user.shangjiazhanghao,this.ro.shangjiazhanghao=!0,this.ruleForm.shangjianicheng=this.user.shangjianicheng,this.ro.shangjianicheng=!0,this.ruleForm.shangjiaxingming=this.user.shangjiaxingming,this.ro.shangjiaxingming=!0,this.ruleForm.lianxifangshi=this.user.lianxifangshi,this.ro.lianxifangshi=!0,this.tonggaoleixingOptions="演员招募,模特拍摄".split(","),i.next=17,this.$api.option("tonggaozhuangtai","tonggaozhuangtai",{});case 17:if(n=i.sent,this.tonggaozhuangtaiOptions=n.data,this.tonggaozhuangtaiOptions.unshift("请选择通告状态"),this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){i.next=28;break}return this.ruleForm.id=e.id,i.next=26,this.$api.info("tonggao",this.ruleForm.id);case 26:n=i.sent,this.ruleForm=n.data;case 28:if(this.cross=e.cross,!e.cross){i.next=96;break}r=uni.getStorageSync("crossObj"),i.t0=regeneratorRuntime.keys(r);case 32:if((i.t1=i.t0()).done){i.next=96;break}if(a=i.t1.value,"tonggaobiaoti"!=a){i.next=38;break}return this.ruleForm.tonggaobiaoti=r[a],this.ro.tonggaobiaoti=!0,i.abrupt("continue",32);case 38:if("tonggaoleixing"!=a){i.next=42;break}return this.ruleForm.tonggaoleixing=r[a],this.ro.tonggaoleixing=!0,i.abrupt("continue",32);case 42:if("tonggaozhuangtai"!=a){i.next=46;break}return this.ruleForm.tonggaozhuangtai=r[a],this.ro.tonggaozhuangtai=!0,i.abrupt("continue",32);case 46:if("zhaomurenshu"!=a){i.next=50;break}return this.ruleForm.zhaomurenshu=r[a],this.ro.zhaomurenshu=!0,i.abrupt("continue",32);case 50:if("jiezhiriqi"!=a){i.next=54;break}return this.ruleForm.jiezhiriqi=r[a],this.ro.jiezhiriqi=!0,i.abrupt("continue",32);case 54:if("paisheshijian"!=a){i.next=58;break}return this.ruleForm.paisheshijian=r[a],this.ro.paisheshijian=!0,i.abrupt("continue",32);case 58:if("paishedidian"!=a){i.next=62;break}return this.ruleForm.paishedidian=r[a],this.ro.paishedidian=!0,i.abrupt("continue",32);case 62:if("yongjin"!=a){i.next=66;break}return this.ruleForm.yongjin=r[a],this.ro.yongjin=!0,i.abrupt("continue",32);case 66:if("tonggaoneirong"!=a){i.next=70;break}return this.ruleForm.tonggaoneirong=r[a],this.ro.tonggaoneirong=!0,i.abrupt("continue",32);case 70:if("tonggaofengmian"!=a){i.next=74;break}return this.ruleForm.tonggaofengmian=r[a].split(",")[0],this.ro.tonggaofengmian=!0,i.abrupt("continue",32);case 74:if("fabushijian"!=a){i.next=78;break}return this.ruleForm.fabushijian=r[a],this.ro.fabushijian=!0,i.abrupt("continue",32);case 78:if("shangjiazhanghao"!=a){i.next=82;break}return this.ruleForm.shangjiazhanghao=r[a],this.ro.shangjiazhanghao=!0,i.abrupt("continue",32);case 82:if("shangjianicheng"!=a){i.next=86;break}return this.ruleForm.shangjianicheng=r[a],this.ro.shangjianicheng=!0,i.abrupt("continue",32);case 86:if("shangjiaxingming"!=a){i.next=90;break}return this.ruleForm.shangjiaxingming=r[a],this.ro.shangjiaxingming=!0,i.abrupt("continue",32);case 90:if("lianxifangshi"!=a){i.next=94;break}return this.ruleForm.lianxifangshi=r[a],this.ro.lianxifangshi=!0,i.abrupt("continue",32);case 94:i.next=32;break;case 96:this.styleChange();case 97:case"end":return i.stop()}}),i,this)})));function e(e){return i.apply(this,arguments)}return e}(),methods:{tonggaoneirongChange:function(i){this.ruleForm.tonggaoneirong=i},styleChange:function(){this.$nextTick((function(){}))},paisheshijianChange:function(i){this.ruleForm.paisheshijian=i.target.value,this.$forceUpdate()},fabushijianChange:function(i){this.ruleForm.fabushijian=i.target.value,this.$forceUpdate()},tonggaoleixingChange:function(i){this.tonggaoleixingIndex=i.target.value,this.ruleForm.tonggaoleixing=this.tonggaoleixingOptions[this.tonggaoleixingIndex]},tonggaozhuangtaiChange:function(i){this.tonggaozhuangtaiIndex=i.target.value,this.ruleForm.tonggaozhuangtai=this.tonggaozhuangtaiOptions[this.tonggaozhuangtaiIndex]},tonggaofengmianTap:function(){var i=this;this.$api.upload((function(e){i.ruleForm.tonggaofengmian="upload/"+e.file,i.$forceUpdate(),i.$nextTick((function(){i.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var i=(0,r.default)(regeneratorRuntime.mark((function i(){var e,t,n,r,a,o,s,g,l,h;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!this.cross){i.next=16;break}if(a=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==a){i.next=16;break}if(e||(e=uni.getStorageSync("crossObj")),a.startsWith("[")){i.next=12;break}for(s in e)s==a&&(e[s]=o);return g=uni.getStorageSync("crossTable"),i.next=10,this.$api.update("".concat(g),e);case 10:i.next=16;break;case 12:t=Number(uni.getStorageSync("userid")),n=e["id"],r=uni.getStorageSync("statusColumnName"),r=r.replace(/\[/,"").replace(/\]/,"");case 16:if(!n||!t){i.next=38;break}return this.ruleForm.crossuserid=t,this.ruleForm.crossrefid=n,l={page:1,limit:10,crossuserid:t,crossrefid:n},i.next=22,this.$api.list("tonggao",l);case 22:if(h=i.sent,!(h.data.total>=r)){i.next=28;break}return this.$utils.msg(uni.getStorageSync("tips")),i.abrupt("return",!1);case 28:if(!this.ruleForm.id){i.next=33;break}return i.next=31,this.$api.update("tonggao",this.ruleForm);case 31:i.next=35;break;case 33:return i.next=35,this.$api.add("tonggao",this.ruleForm);case 35:this.$utils.msgBack("提交成功");case 36:i.next=46;break;case 38:if(!this.ruleForm.id){i.next=43;break}return i.next=41,this.$api.update("tonggao",this.ruleForm);case 41:i.next=45;break;case 43:return i.next=45,this.$api.add("tonggao",this.ruleForm);case 45:this.$utils.msgBack("提交成功");case 46:case"end":return i.stop()}}),i,this)})));function e(){return i.apply(this,arguments)}return e}(),optionsChange:function(i){this.index=i.target.value},bindDateChange:function(i){this.date=i.target.value},getDate:function(i){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1,r=e.getDate();return"start"===i?t-=60:"end"===i&&(t+=2),n=n>9?n:"0"+n,r=r>9?r:"0"+r,"".concat(t,"-").concat(n,"-").concat(r)},toggleTab:function(i){this.$refs[i].show()}}};e.default=s},2116:function(i,e,t){"use strict";t.r(e);var n=t("1193"),r=t.n(n);for(var a in n)"default"!==a&&function(i){t.d(e,i,(function(){return n[i]}))}(a);e["default"]=r.a},"73ee":function(i,e,t){"use strict";t.r(e);var n=t("7cc8"),r=t("2116");for(var a in r)"default"!==a&&function(i){t.d(e,i,(function(){return r[i]}))}(a);t("f008");var o,s=t("f0c5"),g=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"1bd3ccd6",null,!1,n["a"],o);e["default"]=g.exports},"7cc8":function(i,e,t){"use strict";var n={"xia-editor":t("064f").default},r=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("v-uni-view",{staticClass:"content"},[t("v-uni-view",{style:{width:"100%",padding:"0",position:"relative",background:"#E5FFFC",height:"auto"}},[t("v-uni-form",{staticClass:"app-update-pv",style:{width:"94%",padding:"24rpx",margin:"5% 3%",background:"#fff",display:"block",height:"90%"}},[t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#000000",textAlign:"right"}},[i._v("通告标题")]),t("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:i.ro.tonggaobiaoti,placeholder:"通告标题"},model:{value:i.ruleForm.tonggaobiaoti,callback:function(e){i.$set(i.ruleForm,"tonggaobiaoti",e)},expression:"ruleForm.tonggaobiaoti"}})],1),t("v-uni-view",{staticClass:" select",style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#000000",textAlign:"right"}},[i._v("通告类型")]),t("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{value:i.tonggaoleixingIndex,range:i.tonggaoleixingOptions},on:{change:function(e){arguments[0]=e=i.$handleEvent(e),i.tonggaoleixingChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{width:"100%",lineHeight:"80rpx",fontSize:"28rpx",color:"#000"}},[i._v(i._s(i.ruleForm.tonggaoleixing?i.ruleForm.tonggaoleixing:"请选择通告类型"))])],1)],1),t("v-uni-view",{staticClass:" select",style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#000000",textAlign:"right"}},[i._v("通告状态")]),t("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{value:i.tonggaozhuangtaiIndex,range:i.tonggaozhuangtaiOptions},on:{change:function(e){arguments[0]=e=i.$handleEvent(e),i.tonggaozhuangtaiChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{width:"100%",lineHeight:"80rpx",fontSize:"28rpx",color:"#000"}},[i._v(i._s(i.ruleForm.tonggaozhuangtai?i.ruleForm.tonggaozhuangtai:"请选择通告状态"))])],1)],1),t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#000000",textAlign:"right"}},[i._v("招募人数")]),t("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:i.ro.zhaomurenshu,placeholder:"招募人数"},model:{value:i.ruleForm.zhaomurenshu,callback:function(e){i.$set(i.ruleForm,"zhaomurenshu",e)},expression:"ruleForm.zhaomurenshu"}})],1),t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#000000",textAlign:"right"}},[i._v("截止日期")]),t("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:i.ro.jiezhiriqi,placeholder:"截止日期"},model:{value:i.ruleForm.jiezhiriqi,callback:function(e){i.$set(i.ruleForm,"jiezhiriqi",e)},expression:"ruleForm.jiezhiriqi"}})],1),t("v-uni-view",{staticClass:" select",style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#000000",textAlign:"right"}},[i._v("拍摄时间")]),t("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{mode:"date",value:i.ruleForm.paisheshijian},on:{change:function(e){arguments[0]=e=i.$handleEvent(e),i.paisheshijianChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{width:"100%",lineHeight:"80rpx",fontSize:"28rpx",color:"#000"}},[i._v(i._s(i.ruleForm.paisheshijian?i.ruleForm.paisheshijian:"请选择拍摄时间"))])],1)],1),t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#000000",textAlign:"right"}},[i._v("拍摄地点")]),t("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:i.ro.paishedidian,placeholder:"拍摄地点"},model:{value:i.ruleForm.paishedidian,callback:function(e){i.$set(i.ruleForm,"paishedidian",e)},expression:"ruleForm.paishedidian"}})],1),t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#000000",textAlign:"right"}},[i._v("佣金")]),t("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:i.ro.yongjin,placeholder:"佣金"},model:{value:i.ruleForm.yongjin,callback:function(e){i.$set(i.ruleForm,"yongjin",e)},expression:"ruleForm.yongjin"}})],1),t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"},on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.tonggaofengmianTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#000000",textAlign:"right"}},[i._v("通告封面")]),i.ruleForm.tonggaofengmian?t("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:i.baseUrl+i.ruleForm.tonggaofengmian.split(",")[0],mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1),t("v-uni-view",{staticClass:" select",style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#000000",textAlign:"right"}},[i._v("发布时间")]),t("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{mode:"date",value:i.ruleForm.fabushijian},on:{change:function(e){arguments[0]=e=i.$handleEvent(e),i.fabushijianChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{width:"100%",lineHeight:"80rpx",fontSize:"28rpx",color:"#000"}},[i._v(i._s(i.ruleForm.fabushijian?i.ruleForm.fabushijian:"请选择发布时间"))])],1)],1),t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#000000",textAlign:"right"}},[i._v("商家账号")]),t("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:i.ro.shangjiazhanghao,placeholder:"商家账号"},model:{value:i.ruleForm.shangjiazhanghao,callback:function(e){i.$set(i.ruleForm,"shangjiazhanghao",e)},expression:"ruleForm.shangjiazhanghao"}})],1),t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#000000",textAlign:"right"}},[i._v("商家昵称")]),t("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:i.ro.shangjianicheng,placeholder:"商家昵称"},model:{value:i.ruleForm.shangjianicheng,callback:function(e){i.$set(i.ruleForm,"shangjianicheng",e)},expression:"ruleForm.shangjianicheng"}})],1),t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#000000",textAlign:"right"}},[i._v("商家姓名")]),t("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:i.ro.shangjiaxingming,placeholder:"商家姓名"},model:{value:i.ruleForm.shangjiaxingming,callback:function(e){i.$set(i.ruleForm,"shangjiaxingming",e)},expression:"ruleForm.shangjiaxingming"}})],1),t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",alignItems:"center",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#000000",textAlign:"right"}},[i._v("联系方式")]),t("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"rgb(0, 0, 0)",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:i.ro.lianxifangshi,placeholder:"联系方式"},model:{value:i.ruleForm.lianxifangshi,callback:function(e){i.$set(i.ruleForm,"lianxifangshi",e)},expression:"ruleForm.lianxifangshi"}})],1),t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",borderWidth:"0 0 2rpx 0",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"100%",padding:"0 60rpx",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",fontWeight:"500"}},[i._v("通告内容")]),t("xia-editor",{ref:"editor",style:{minHeight:"300rpx",border:"2rpx solid #cccccc",width:"100%",padding:"10rpx 20rpx",height:"auto"},attrs:{placeholder:"通告内容"},on:{editorChange:function(e){arguments[0]=e=i.$handleEvent(e),i.tonggaoneirongChange.apply(void 0,arguments)}},model:{value:i.ruleForm.tonggaoneirong,callback:function(e){i.$set(i.ruleForm,"tonggaoneirong",e)},expression:"ruleForm.tonggaoneirong"}})],1),t("v-uni-view",{staticClass:"btn",style:{width:"100%",justifyContent:"space-between",display:"flex",height:"auto"}},[t("v-uni-button",{staticClass:"bg-red",style:{border:"0",padding:"0px",margin:"0",color:"rgb(255, 255, 255)",borderRadius:"40rpx",background:"#00B578",width:"48%",lineHeight:"80rpx",fontSize:"28rpx",height:"80rpx"},on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.onSubmitTap.apply(void 0,arguments)}}},[i._v("提交")])],1)],1)],1)],1)},a=[];t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return n}))},ae61:function(i,e,t){var n=t("c8b2");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var r=t("4f06").default;r("ccddb10c",n,!0,{sourceMap:!1,shadowMode:!1})},c8b2:function(i,e,t){var n=t("24fb");e=n(!1),e.push([i.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-1bd3ccd6]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),i.exports=e},f008:function(i,e,t){"use strict";var n=t("ae61"),r=t.n(n);r.a}}]);