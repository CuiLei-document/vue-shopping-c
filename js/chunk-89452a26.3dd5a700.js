(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-89452a26"],{"08d8":function(t,e,r){},"091e":function(t,e,r){},1054:function(t,e,r){"use strict";r("ff41")},"159b":function(t,e,r){var n=r("da84"),a=r("fdbc"),i=r("17c2"),c=r("9112");for(var o in a){var s=n[o],u=s&&s.prototype;if(u&&u.forEach!==i)try{c(u,"forEach",i)}catch(l){u.forEach=i}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,a=r("a640"),i=a("forEach");t.exports=i?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"3b42":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"profile"},[r("nav-bar",{staticClass:"navbar",scopedSlots:t._u([{key:"content",fn:function(){return[r("div",[t._v("分类")])]},proxy:!0}])}),r("div",{staticClass:"content"},[r("tab-menu",{attrs:{categories:t.categories},on:{selectItem:t.selectItem}}),r("Scroll",{staticClass:"scroll",attrs:{"pull-up-load":!0},on:{pullingUp:t.loadMode}},[r("tab-content-category",{attrs:{subcategories:t.showSubCategories}}),r("tab-control",{attrs:{titles:["热销","新品","销量"]},on:{tabClick:t.tabClick}}),r("tab-content-detail",{attrs:{categoryDetail:t.showCategoryDetail}})],1)],1)],1)},a=[],i=r("5530"),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Scroll",{staticClass:"tab-menu"},[r("div",{staticClass:"menu-list"},t._l(t.categories,(function(e,n){return r("div",{key:n,staticClass:"menu-list-item",class:{active:n===t.currentIndex},on:{click:function(e){return t.itemClick(n)}}},[t._v(" "+t._s(e.title)+" ")])})),0)])},o=[],s=r("5d17"),u={components:{Scroll:s["a"]},props:{categories:{type:Array,default:[]}},data:function(){return{currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("selectItem",t)}}},l=u,f=(r("1054"),r("2877")),d=Object(f["a"])(l,c,o,!1,null,"d3a28430",null),g=d.exports,b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.subcategories.list?r("grid-view",{attrs:{cols:2,lineSpace:15,"v-margin":20}},t._l(t.subcategories.list,(function(e,n){return r("div",{key:n,staticClass:"item"},[r("a",{attrs:{href:e.link}},[r("img",{staticClass:"item-img",attrs:{src:e.image,alt:""}}),r("div",{staticClass:"item-title"},[t._v(t._s(e.title))])])])})),0):t._e()],1)},p=[],h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"gridView",staticClass:"grid-view"},[t._t("default")],2)},y=[],v=(r("a9e3"),r("99af"),{name:"GridView",props:{cols:{type:Number,default:2},hMargin:{type:Number,default:8},vMargin:{type:Number,default:8},itemSpace:{type:Number,default:8},lineSpace:{type:Number,default:8}},mounted:function(){setTimeout(this._autoLayout,20)},updated:function(){this._autoLayout()},methods:{_autoLayout:function(){var t=this.$refs.gridView,e=t.children;t.style.padding="".concat(this.vMargin,"px ").concat(this.hMargin,"px");for(var r=(t.clientWidth-2*this.hMargin-(this.cols-1)*this.itemSpace)/this.cols,n=0;n<e.length;n++){var a=e[n];a.style.width=r+"px",(n+1)%this.cols!==0&&(a.style.marginRight=this.itemSpace+"px"),n>=this.cols&&(a.style.marginTop=this.lineSpace+"px")}}}}),m=v,_=(r("7f63"),Object(f["a"])(m,h,y,!1,null,"435c569f",null)),C=_.exports,w={components:{GridView:C},props:{subcategories:{type:Object,default:function(){return[]}}}},O=w,x=(r("7083"),Object(f["a"])(O,b,p,!1,null,"700779b1",null)),D=x.exports,j=r("9bd0"),k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("grid-view",t._l(t.categoryDetail,(function(t,e){return r("goods-list-item",{key:e,attrs:{item:t}})})),1)},I=[],E=r("9977"),S={components:{GridView:C,GoodsListItem:E["a"]},props:{categoryDetail:{type:Array,default:function(){return[]}}}},T=S,P=Object(f["a"])(T,k,I,!1,null,null,null),M=P.exports,$=r("0790"),N=(r("30a3"),r("8073")),A=function(){return Object(N["a"])({url:"/category"})};function V(t){return Object(N["a"])({url:"/subcategory",params:{maitKey:t}})}function G(t,e){return Object(N["a"])({url:"/subcategory/detail",params:{miniWallkey:t,type:e}})}var L="pop",W="new",J="sell",K={components:{TabMenu:g,TabContentCategory:D,TabContentDetail:M,TabControl:j["a"],NavBar:$["a"],Scroll:s["a"]},data:function(){return{categories:[],categoryData:{},currentIndex:-1,currentType:L}},created:function(){this._getCategory()},computed:{showSubCategories:function(){return-1===this.currentIndex?{}:this.categoryData[this.currentIndex].subcategories},showCategoryDetail:function(){return-1===this.currentIndex?[]:this.categoryData[this.currentIndex].categoryDetail[this.currentType]}},methods:{_getCategory:function(){var t=this;A().then((function(e){console.log(e),t.categories=e.data.category.list;for(var r=0;r<t.categories.length;r++)t.categoryData[r]={subcategories:{},categoryDetail:{pop:[],new:[],sell:[]}};t._getCategories(0)}))},_getCategories:function(t){var e=this;this.currentIndex=t;var r=this.categories[t].maitKey;V(r).then((function(r){e.categoryData[t].subcategories=r.data,e.categoryData=Object(i["a"])({},e.categoryData),e._getCategoryDetail(L),e._getCategoryDetail(W),e._getCategoryDetail(J)}))},_getCategoryDetail:function(t){var e=this,r=this.categories[this.currentIndex].miniWallkey;G(r,t).then((function(r){e.categoryData[e.currentIndex].categoryDetail[t]=r,e.categoryData=Object(i["a"])({},e.categoryData)}))},tabClick:function(t){switch(t){case 0:this.currentType=L;break;case 1:this.currentType=W;break;case 2:this.currentType=J}},loadMode:function(){},selectItem:function(t){this._getCategories(t)}}},B=K,R=(r("eb74"),Object(f["a"])(B,n,a,!1,null,"36b5e3fc",null));e["default"]=R.exports},"4de4":function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").filter,i=r("1dde"),c=i("filter");n({target:"Array",proto:!0,forced:!c},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");var n=r("ade3");function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},6350:function(t,e,r){},7083:function(t,e,r){"use strict";r("091e")},"7c21":function(t,e,r){},"7f63":function(t,e,r){"use strict";r("08d8")},"98fe":function(t,e,r){"use strict";r("6350")},"99af":function(t,e,r){"use strict";var n=r("23e7"),a=r("d039"),i=r("e8b5"),c=r("861d"),o=r("7b0b"),s=r("50c4"),u=r("8418"),l=r("65f0"),f=r("1dde"),d=r("b622"),g=r("2d00"),b=d("isConcatSpreadable"),p=9007199254740991,h="Maximum allowed index exceeded",y=g>=51||!a((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),v=f("concat"),m=function(t){if(!c(t))return!1;var e=t[b];return void 0!==e?!!e:i(t)},_=!y||!v;n({target:"Array",proto:!0,forced:_},{concat:function(t){var e,r,n,a,i,c=o(this),f=l(c,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(i=-1===e?c:arguments[e],m(i)){if(a=s(i.length),d+a>p)throw TypeError(h);for(r=0;r<a;r++,d++)r in i&&u(f,d,i[r])}else{if(d>=p)throw TypeError(h);u(f,d++,i)}return f.length=d,f}})},"9bd0":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tab-control"},t._l(t.titles,(function(e,n){return r("div",{key:n,staticClass:"tab-control-item",class:{active:n===t.currentIndex},on:{click:function(e){return t.tabIndex(n)}}},[r("span",[t._v(" "+t._s(e)+" ")])])})),0)},a=[],i={props:{titles:{type:Array,default:[]}},data:function(){return{currentIndex:0}},methods:{tabIndex:function(t){this.currentIndex=t,this.$emit("tabClick",t)}}},c=i,o=(r("98fe"),r("2877")),s=Object(o["a"])(c,n,a,!1,null,"10ee5dde",null);e["a"]=s.exports},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,r){var n=r("23e7"),a=r("7b0b"),i=r("df75"),c=r("d039"),o=c((function(){i(1)}));n({target:"Object",stat:!0,forced:o},{keys:function(t){return i(a(t))}})},dbb4:function(t,e,r){var n=r("23e7"),a=r("83ab"),i=r("56ef"),c=r("fc6a"),o=r("06cf"),s=r("8418");n({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,r,n=c(t),a=o.f,u=i(n),l={},f=0;while(u.length>f)r=a(n,e=u[f++]),void 0!==r&&s(l,e,r);return l}})},e439:function(t,e,r){var n=r("23e7"),a=r("d039"),i=r("fc6a"),c=r("06cf").f,o=r("83ab"),s=a((function(){c(1)})),u=!o||s;n({target:"Object",stat:!0,forced:u,sham:!o},{getOwnPropertyDescriptor:function(t,e){return c(i(t),e)}})},eb74:function(t,e,r){"use strict";r("7c21")},ff41:function(t,e,r){}}]);
//# sourceMappingURL=chunk-89452a26.3dd5a700.js.map