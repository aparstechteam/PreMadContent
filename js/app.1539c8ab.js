(function(t){function e(e){for(var a,s,r=e[0],c=e[1],l=e[2],d=0,f=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/PreMadContent/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("v-container",[a("v-card",{staticClass:"mt-2",attrs:{flat:""}},[a("v-card-title",[a("div",{staticClass:"title__text suleman ma-auto"},[a("img",{attrs:{src:n("8e16"),width:"200em",alt:"logo"}})])]),a("div",{staticClass:"my-5 text-center"},[a("v-btn",{class:"mx-2 "+(t.isPdf?"white--text":"grey--text"),attrs:{color:t.isPdf?"pink":"grey lighten-2",tile:"",large:""},on:{click:function(e){t.isPdf=!0}}},[t._v("Classes")]),a("v-btn",{class:"mx-2 "+(t.isPdf?"grey--text":"white--text"),attrs:{color:t.isPdf?"grey lighten-2":"pink",tile:"",large:""},on:{click:function(e){t.isPdf=!1}}},[t._v("Notes")])],1),t.isPdf?a("v-card-text",[a("div",{staticClass:"subject__filters my-3"},[a("button",{class:"subject__button "+(""==t.se&&"activebtn"),on:{click:function(e){return t.selectSubject("")}}},[t._v(" All ")]),t._l(t.subjects,(function(e,n){return a("button",{key:n,class:"subject__button "+(t.se==e&&"activebtn"),on:{click:function(n){return t.selectSubject(e)}}},[t._v(" "+t._s(e)+" ")])}))],2),a("div",{staticClass:"subject__filters"},[a("v-sheet",[a("v-text-field",{attrs:{label:"Search...","append-icon":"mdi-magnify"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),a("v-data-table",{staticClass:"suleman black--text",attrs:{"items-per-page":20,"items-per-page-options":[20,50,100,-1],search:t.search,items:t.selected,headers:t.headers,loading:t.selected.length<1},scopedSlots:t._u([{key:"item.basicClass",fn:function(t){var e=t.item;return[a("button-cmp",{attrs:{icon:"mdi-play",link:e.basicClass}})]}},{key:"item.bioCast",fn:function(e){var n=e.item;return[a("premiumbtn",{attrs:{link:n.bioCast,icon:"mdi-dna"},on:{promotion:function(e){t.promotion=!t.promotion}}})]}},{key:"item.id",fn:function(e){var n=e.item;return[a("premiumbtn",{attrs:{link:n.liveClass,icon:"mdi-access-point-network"},on:{promotion:function(e){t.promotion=!t.promotion}}})]}}],null,!1,642388546)})],1):a("v-card-text",[a("div",{staticClass:"subject__filters my-3"},[a("button",{class:"subject__button "+(""==t.se&&"activebtn"),on:{click:function(e){return t.selectSubject("")}}},[t._v(" All ")]),t._l(t.subjects,(function(e,n){return a("button",{key:n,class:"subject__button "+(t.se==e&&"activebtn"),on:{click:function(n){return t.selectSubject(e)}}},[t._v(" "+t._s(e)+" ")])}))],2),a("div",{staticClass:"subject__filters"},[a("v-sheet",[a("v-text-field",{attrs:{label:"Search...","append-icon":"mdi-magnify"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),a("v-data-table",{staticClass:"suleman black--text",attrs:{"items-per-page":20,"items-per-page-options":[20,50,100,-1],search:t.search,items:t.selected,headers:t.bioheaders,loading:t.selected.length<1},scopedSlots:t._u([{key:"item.basicPdf",fn:function(t){var e=t.item;return[a("button-cmp",{attrs:{icon:"mdi-fountain-pen-tip",link:e.basicPdf}})]}},{key:"item.markedBook",fn:function(e){var n=e.item;return[a("premiumbtn",{attrs:{link:n.markedBook,icon:"mdi-book-open-page-variant"},on:{promotion:function(e){t.promotion=!t.promotion}}})]}},{key:"item.lectureSheet",fn:function(e){var n=e.item;return[a("premiumbtn",{attrs:{link:n.lectureSheet,icon:"mdi-notebook"},on:{promotion:function(e){t.promotion=!t.promotion}}})]}}])})],1)],1),a("v-card",{attrs:{href:"https://10minuteschool.com/special/pre-admission-medical-2021?aff=fbg6955",target:"_blank"}},[a("v-img",{attrs:{src:"https://drive.google.com/uc?id=1ZI4ga5IXu9F9vJuowSLxHlJ0rlwm_Xeq"}})],1),a("v-dialog",{attrs:{"max-width":"600px"},model:{value:t.promotion,callback:function(e){t.promotion=e},expression:"promotion"}},[a("v-card",{staticClass:"transparent text-center pb-10",attrs:{elevation:"0",flat:"",href:"https://10minuteschool.com/special/pre-admission-medical-2021?aff=fbg6955",target:"_blank"}},[a("v-img",{staticStyle:{position:"relative"},attrs:{src:"https://drive.google.com/uc?id=1ZI4ga5IXu9F9vJuowSLxHlJ0rlwm_Xeq"}}),a("v-btn",{staticClass:"red enroll_button ma-auto mt-4",attrs:{large:"",dark:"",tile:""}},[t._v(" লাইভ ক্লাস করতে ক্র্যাশ কোর্সটি এনরোল কর ")])],1)],1)],1)],1)],1)},i=[],s=(n("6062"),n("d3b7"),n("3ca3"),n("ddb0"),n("159b"),n("5319"),n("ac1f"),n("4de4"),n("caad"),n("2532"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.link?n("v-btn",{staticClass:"pink",attrs:{href:t.link,small:"",target:"_blank",fab:"",dark:""}},[n("v-icon",{domProps:{innerHTML:t._s(t.icon)}})],1):n("v-btn",{attrs:{small:"",fab:"",color:"#a2a0a0",dark:""}},[n("v-icon",{domProps:{innerHTML:t._s(t.icon)}})],1)}),r=[],c={props:{icon:{type:String},link:{type:String}}},l=c,u=n("2877"),d=n("6544"),f=n.n(d),p=n("8336"),m=n("132d"),b=Object(u["a"])(l,s,r,!1,null,"1bdb9376",null),v=b.exports;f()(b,{VBtn:p["a"],VIcon:m["a"]});var h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.link?n("v-btn",{staticClass:"goldenbutton",attrs:{dark:"",small:"",fab:"",href:t.link,target:"_blank"}},[n("v-icon",{domProps:{innerHTML:t._s(t.icon)}})],1):n("v-btn",{staticClass:"goldenbutton",attrs:{dark:"",small:"",fab:""},on:{click:t.promotion}},[n("v-icon",[t._v("mdi-lock")])],1)},g=[],k={props:{icon:{type:String},link:{type:String}},methods:{promotion:function(){this.$emit("promotion")}}},_=k,x=(n("6b88"),Object(u["a"])(_,h,g,!1,null,"6b7820bb",null)),y=x.exports;f()(x,{VBtn:p["a"],VIcon:m["a"]});var C={name:"App",components:{ButtonCmp:v,Premiumbtn:y},data:function(){return{isPdf:!0,valid:!0,routine:[],selected:[],note:"",subjects:new Set,dialog:!1,pass:"",promotion:!1,search:"",se:"",unlocked:!1,headers:[{text:"Subject",value:"subject"},{text:"Chapter",value:"topic"},{text:"Basic Class",value:"basicClass",align:"center"},{text:"Live Class",value:"id"},{text:"Bio Cast",value:"bioCast",align:"center"}],bioheaders:[{text:"Subject",value:"subject"},{text:"Chapter",value:"topic"},{text:"Hand Note of Basic Class",value:"basicPdf",align:"center"},{text:"Lecture Sheet of Live Class",value:"lectureSheet",align:"center"},{text:"Marked Book of Bio Cast",value:"markedBook",align:"center"}]}},methods:{getData:function(){var t=this;fetch("https://script.google.com/macros/s/AKfycbzrlG4ezDR9XtNdnNuRTMBqjfrT1ZMlg4tQa7IaG7EXCKYM-spK7mmFbJzCZ3dZf9vM/exec").then((function(t){return t.json()})).then((function(e){t.routine=e,t.selected=t.routine,t.routine.forEach((function(e){if(e.subject){var n=e.subject.replace(" প্রথম পত্র","").replace(" দ্বিতীয় পত্র","");t.subjects.add(n)}})),localStorage.getItem("lock")&&(t.unlocked=!0)}))},selectSubject:function(t){this.se=t,this.selected=this.routine.filter((function(e){if(e.subject.includes(t))return e}))},viewNote:function(){this.$refs.form.validate()&&"22CCHM10"==this.pass&&(localStorage.setItem("lock",this.pass),this.$swal({icon:"success",title:"আনলকড",timer:2e3}),this.unlocked=!0,this.dialog=!1)}},created:function(){this.getData()}},j=C,S=(n("5c0b"),n("7496")),w=n("b0af"),P=n("99d9"),V=n("a523"),M=n("8fea"),O=n("169a"),B=n("adda"),T=n("f6c4"),I=n("8dd9"),L=n("8654"),H=Object(u["a"])(j,o,i,!1,null,null,null),J=H.exports;f()(H,{VApp:S["a"],VBtn:p["a"],VCard:w["a"],VCardText:P["a"],VCardTitle:P["b"],VContainer:V["a"],VDataTable:M["a"],VDialog:O["a"],VImg:B["a"],VMain:T["a"],VSheet:I["a"],VTextField:L["a"]});var $=n("2f62");a["a"].use($["a"]);var X=new $["a"].Store({state:{},mutations:{},actions:{},modules:{}}),A=n("f309");a["a"].use(A["a"]);var D=new A["a"]({}),E=n("2ef0"),N=n.n(E),Z=n("9955"),F=n.n(Z),q=n("14ba"),z=n.n(q),K=n("2ead"),G=n.n(K);a["a"].use(z.a),a["a"].use(F.a,{lodash:N.a}),a["a"].use(G.a),a["a"].config.productionTip=!1,new a["a"]({store:X,vuetify:D,render:function(t){return t(J)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"6b88":function(t,e,n){"use strict";n("74b6")},"74b6":function(t,e,n){},"8e16":function(t,e,n){t.exports=n.p+"img/10mslogo.4279601b.png"},"9c0c":function(t,e,n){}});