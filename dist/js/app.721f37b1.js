(function(){"use strict";var t={4190:function(t,e,a){var o=a(3751),c=a(641);const r={id:"app"};function s(t,e,a,o,s,n){const i=(0,c.g2)("catalog-wrapper");return(0,c.uX)(),(0,c.CE)("div",r,[(0,c.bF)(i)])}const n={class:"catalog-wrapper"};function i(t,e,a,o,r,s){const i=(0,c.g2)("router-view");return(0,c.uX)(),(0,c.CE)("div",n,[(0,c.bF)(i)])}var l=a(6278),p={name:"CatalogWrapper",props:{},data(){return{}},methods:{},watch:{},computed:{...(0,l.L8)(["CART"])}},u=a(6262);const d=(0,u.A)(p,[["render",i],["__scopeId","data-v-413c49e3"]]);var _=d,m={name:"App",components:{CatalogWrapper:_}};const g=(0,u.A)(m,[["render",s]]);var h=g,C=(a(4114),a(1250)),v=(0,l.y$)({state(){const t=JSON.parse(localStorage.getItem("cart"))||[];return{products:[],cart:t,searchQuery:""}},actions:{GET_PRODUCTS_FROM_API({commit:t}){return(0,C.A)({method:"GET",url:"https://products-shoes-5eef7-default-rtdb.europe-west1.firebasedatabase.app/products.json"}).then((e=>(t("SET_PRODUCTS_TO_STATE",e.data),e))).catch((t=>(console.log(t),t)))},ADD_TO_CART({commit:t},e){t("SET_CART",e)},DELETE_FROM_CART({commit:t},e){t("REMOVE_FROM_CART",e)},INCREMENT_CART_ITEM({commit:t},e){t("INCREMENT",e)},DECREMENT_CART_ITEM({commit:t},e){t("DECREMENT",e)},GET_SEARCH_QUERY({commit:t},e){t("SET_SEARCH_QUERY",e)}},mutations:{SET_PRODUCTS_TO_STATE(t,e){t.products=e},SET_CART(t,e){if(t.cart.length){let a=!1;t.cart.map((function(t){t.article===e.article&&(a=!0,t.quantity++)})),a||t.cart.push(e)}else t.cart.push(e);localStorage.setItem("cart",JSON.stringify(t.cart))},REMOVE_FROM_CART(t,e){t.cart.splice(e,1),localStorage.setItem("cart",JSON.stringify(t.cart))},INCREMENT(t,e){t.cart[e].quantity++,localStorage.setItem("cart",JSON.stringify(t.cart))},DECREMENT(t,e){t.cart[e].quantity>1&&(t.cart[e].quantity--,localStorage.setItem("cart",JSON.stringify(t.cart)))},SET_SEARCH_QUERY(t,e){t.searchQuery=e}},getters:{PRODUCTS(t){return t.products},CART(t){return t.cart},SEARCH_QUERY(t){return t.searchQuery}}}),f=a(5220),E=a(33);const T=t=>((0,c.Qi)("data-v-dd2d9d4a"),t=t(),(0,c.jt)(),t),k={class:"catalog"},R={class:"catalog__link-wrap"},y={class:"catalog__link"},A=T((()=>(0,c.Lk)("h1",{class:"catalog__title"},"Catalog",-1))),L={class:"catalog__filters"},b={class:"catalog__list"};function S(t,e,a,o,r,s){const n=(0,c.g2)("router-link"),i=(0,c.g2)("catalog-notification"),l=(0,c.g2)("catalog-selected"),p=(0,c.g2)("catalog-search"),u=(0,c.g2)("catalog-item");return(0,c.uX)(),(0,c.CE)("div",k,[(0,c.Lk)("div",R,[(0,c.bF)(n,{to:{name:"cart"}},{default:(0,c.k6)((()=>[(0,c.Lk)("div",y,"Cart: "+(0,E.v_)(t.CART.length),1)])),_:1})]),A,(0,c.bF)(i,{messages:r.messages},null,8,["messages"]),(0,c.Lk)("div",L,[(0,c.bF)(l,{options:r.categories,onSelect:s.sortByCategories,selected:r.selected},null,8,["options","onSelect","selected"]),(0,c.bF)(p)]),(0,c.Lk)("div",b,[((0,c.uX)(!0),(0,c.CE)(c.FK,null,(0,c.pI)(s.filteredProducts,(t=>((0,c.uX)(),(0,c.Wv)(u,{key:t.article,product_data:t,onAddToCart:s.addToCart},null,8,["product_data","onAddToCart"])))),128))])])}const O={class:"catalog-item"},I={class:"catalog-item__popup"},P={class:"catalog-item__image-wrap"},w=["src","alt"],F={class:"catalog-item__content"},D={class:"catalog-item__name"},M={class:"catalog-item__price"},Q={class:"catalog-item__category"},N={class:"catalog-item__image-wrap"},U=["src","alt"],X={class:"catalog-item__name"},j={class:"catalog-item__price"},B={class:"catalog-item__btns"};function q(t,e,a,o,r,s){const n=(0,c.g2)("catalog-popup");return(0,c.uX)(),(0,c.CE)("div",O,[r.isPopupVisible?((0,c.uX)(),(0,c.Wv)(n,{key:0,onClosePopup:s.closePopup,rightButtonPopup:"Add to cart",popupTitle:a.product_data.name,onRightBtnAction:s.addToCart},{default:(0,c.k6)((()=>[(0,c.Lk)("div",I,[(0,c.Lk)("div",P,[(0,c.Lk)("img",{src:a.product_data.image,alt:a.product_data.name,class:"catalog-item__image"},null,8,w)]),(0,c.Lk)("div",F,[(0,c.Lk)("p",D,(0,E.v_)(a.product_data.name),1),(0,c.Lk)("p",M,(0,E.v_)(a.product_data.price)+" грн.",1),(0,c.Lk)("p",Q,(0,E.v_)(a.product_data.category),1)])])])),_:1},8,["onClosePopup","popupTitle","onRightBtnAction"])):(0,c.Q3)("",!0),(0,c.Lk)("div",N,[(0,c.Lk)("img",{src:a.product_data.image,alt:a.product_data.name,class:"catalog-item__image"},null,8,U)]),(0,c.Lk)("p",X,(0,E.v_)(a.product_data.name),1),(0,c.Lk)("p",j,(0,E.v_)(a.product_data.price)+" грн.",1),(0,c.Lk)("div",B,[(0,c.Lk)("button",{class:"btn catalog-item__show-info",onClick:e[0]||(e[0]=(...t)=>s.showPopup&&s.showPopup(...t))}," Show info "),(0,c.Lk)("button",{class:"btn catalog-item__btn",onClick:e[1]||(e[1]=(...t)=>s.addToCart&&s.addToCart(...t))}," Add to cart ")])])}const V=t=>((0,c.Qi)("data-v-92c1fe72"),t=t(),(0,c.jt)(),t),Y={class:"catalog-popup__wrapper",ref:"popup_wrapper"},$={class:"catalog-popup"},H={class:"catalog-popup__header"},G={class:"catalog-popup__title"},W={class:"catalog-popup__content"},K={class:"catalog-popup__footer"},x={class:"catalog-popup__cart-link"},J=V((()=>(0,c.Lk)("p",{class:"catalog-popup__go-cart"},"Cart↗",-1)));function z(t,e,a,o,r,s){const n=(0,c.g2)("router-link");return(0,c.uX)(),(0,c.CE)("div",Y,[(0,c.Lk)("div",$,[(0,c.Lk)("div",H,[(0,c.Lk)("span",G,(0,E.v_)(a.popupTitle),1),(0,c.Lk)("span",null,[(0,c.Lk)("i",{class:"material-icons catalog-popup__icon",onClick:e[0]||(e[0]=(...t)=>s.closePopup&&s.closePopup(...t))},"close")])]),(0,c.Lk)("div",W,[(0,c.RG)(t.$slots,"default",{},void 0,!0)]),(0,c.Lk)("div",K,[(0,c.Lk)("button",{class:"btn catalog-popup__close",onClick:e[1]||(e[1]=(...t)=>s.closePopup&&s.closePopup(...t))},"Close"),(0,c.Lk)("div",x,[(0,c.bF)(n,{to:{name:"cart"}},{default:(0,c.k6)((()=>[J])),_:1})]),(0,c.Lk)("button",{class:"btn",onClick:e[2]||(e[2]=(...t)=>s.rightBtnAction&&s.rightBtnAction(...t))},(0,E.v_)(a.rightButtonPopup),1)])])],512)}var Z={name:"CatalogPopup",props:{rightButtonPopup:{type:String,default:"ok"},popupTitle:{type:String,default:"Popup name"}},methods:{closePopup(){this.$emit("closePopup")},rightBtnAction(){this.$emit("rightBtnAction")}},mounted(){const t=this;document.addEventListener("click",(function(e){e.target===t.$refs["popup_wrapper"]&&t.closePopup()}))}};const tt=(0,u.A)(Z,[["render",z],["__scopeId","data-v-92c1fe72"]]);var et=tt,at={name:"CatalogItem",props:{product_data:{type:Object,default:{}},imageWrapStyles:Object,contentStyles:Object,popupStyles:Object},data(){return{isPopupVisible:!1}},methods:{addToCart(){this.$emit("addToCart",this.product_data)},showPopup(){this.isPopupVisible=!0},closePopup(){this.isPopupVisible=!1}},components:{CatalogPopup:et}};const ot=(0,u.A)(at,[["render",q],["__scopeId","data-v-5a65c00a"]]);var ct=ot;const rt={class:"catalog-select"},st={key:0,class:"catalog-select__options"},nt=["onClick"];function it(t,e,a,o,r,s){return(0,c.uX)(),(0,c.CE)("div",rt,[(0,c.Lk)("p",{class:"catalog-select__title",onClick:e[0]||(e[0]=t=>r.areOptionsVisible=!r.areOptionsVisible)},(0,E.v_)(a.selected),1),r.areOptionsVisible?((0,c.uX)(),(0,c.CE)("div",st,[((0,c.uX)(!0),(0,c.CE)(c.FK,null,(0,c.pI)(a.options,(t=>((0,c.uX)(),(0,c.CE)("p",{class:"catalog-select__options-item",key:t.value,onClick:e=>s.selectOptions(t)},(0,E.v_)(t.name),9,nt)))),128))])):(0,c.Q3)("",!0)])}var lt={name:"CatalogSelected",data(){return{areOptionsVisible:!1}},props:{options:{type:Array,default(){return[]}},selected:{type:String,default:""}},methods:{selectOptions(t){this.$emit("select",t),this.areOptionsVisible=!1},hideSelect(){this.areOptionsVisible=!1}},mounted(){document.addEventListener("click",this.hideSelect.bind(this),!0)},unmounted(){document.removeEventListener("click",this.hideSelect)}};const pt=(0,u.A)(lt,[["render",it],["__scopeId","data-v-83fa343e"]]);var ut=pt;const dt=t=>((0,c.Qi)("data-v-971d572e"),t=t(),(0,c.jt)(),t),_t={class:"catalog-notification"},mt=dt((()=>(0,c.Lk)("i",{class:"material-icons"},"check_circle",-1)));function gt(t,e,a,r,s,n){return(0,c.uX)(),(0,c.CE)("div",_t,[(0,c.bF)(o.F,{name:"animate",class:"catalog-notification__list",tag:"div"},{default:(0,c.k6)((()=>[((0,c.uX)(!0),(0,c.CE)(c.FK,null,(0,c.pI)(a.messages,(t=>((0,c.uX)(),(0,c.CE)("div",{class:"catalog-notification__content",key:t.id},[(0,c.Lk)("span",null,(0,E.v_)(t.name),1),mt])))),128))])),_:1})])}var ht={name:"CatalogNotovocation",props:{messages:{type:Array,default(){return[]}}},methods:{hideNotification(){let t=this;this.messages.length||setInterval((()=>{t.messages.splice(t.messages.length-1,1)}),2e3)}},mounted(){this.hideNotification()}};const Ct=(0,u.A)(ht,[["render",gt],["__scopeId","data-v-971d572e"]]);var vt=Ct;const ft={class:"catalog-search"};function Et(t,e,a,r,s,n){return(0,c.uX)(),(0,c.CE)("form",ft,[(0,c.Lk)("i",{class:"catalog-search__icon material-icons",onClick:e[0]||(e[0]=t=>n.searchByName(s.searchQuery))},"search"),(0,c.bo)((0,c.Lk)("input",{name:"query",type:"text",placeholder:"Search...",class:"catalog-search__input","onUpdate:modelValue":e[1]||(e[1]=t=>s.searchQuery=t),onKeypress:e[2]||(e[2]=(0,o.jR)((0,o.D$)((t=>n.searchByName(s.searchQuery)),["prevent"]),["enter"]))},null,544),[[o.Jo,s.searchQuery]]),(0,c.Lk)("i",{class:"catalog-search__clear material-icons",onClick:e[3]||(e[3]=(...t)=>n.clearSearch&&n.clearSearch(...t))},"clear")])}var Tt={name:"CatalogSearch",data(){return{searchQuery:""}},methods:{...(0,l.i0)(["GET_SEARCH_QUERY"]),searchByName(t){this.GET_SEARCH_QUERY(t)},clearSearch(){this.searchQuery="",this.GET_SEARCH_QUERY()}}};const kt=(0,u.A)(Tt,[["render",Et],["__scopeId","data-v-7973b39d"]]);var Rt=kt,yt={name:"CatalogMain",data(){return{categories:[{name:"All",value:"All"},{name:"Male",value:"M"},{name:"Female",value:"F"}],sortedProducts:[],selected:"All",messages:[]}},computed:{...(0,l.L8)(["PRODUCTS","CART","SEARCH_QUERY"]),filteredProducts(){return this.sortedProducts.length>0?this.sortedProducts:this.PRODUCTS&&this.PRODUCTS.length>0?this.PRODUCTS:[]}},methods:{...(0,l.i0)(["GET_PRODUCTS_FROM_API","ADD_TO_CART"]),addToCart(t){this.ADD_TO_CART(t).then((()=>{let t=Date.now().toLocaleString();this.messages.unshift({name:"The product has been added to the cart",id:t})}))},sortByCategories(t){this.sortedProducts=this.PRODUCTS.filter((e=>e.category===t.name)),this.selected=t.name},filteredByName(t){this.sortedProducts=[...this.PRODUCTS],this.selected="All",this.sortedProducts=t?this.sortedProducts.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):this.PRODUCTS}},mounted(){this.GET_PRODUCTS_FROM_API().catch((t=>{console.error("Error fetching products:",t)}))},watch:{SEARCH_QUERY(){this.filteredByName(this.SEARCH_QUERY)}},components:{CatalogItem:ct,CatalogSelected:ut,CatalogNotification:vt,CatalogSearch:Rt}};const At=(0,u.A)(yt,[["render",S],["__scopeId","data-v-dd2d9d4a"]]);var Lt=At;const bt=t=>((0,c.Qi)("data-v-63fbeca1"),t=t(),(0,c.jt)(),t),St={class:"cart__link-wrap"},Ot=bt((()=>(0,c.Lk)("div",{class:"cart__link"},"Return to Catalog",-1))),It={class:"catalog-cart"},Pt=bt((()=>(0,c.Lk)("h1",{class:"catalog-cart__title"},"CART",-1))),wt={key:0,class:"catalog-cart__subtitle"};function Ft(t,e,a,o,r,s){const n=(0,c.g2)("router-link"),i=(0,c.g2)("cart-item-wrap");return(0,c.uX)(),(0,c.CE)(c.FK,null,[(0,c.Lk)("div",St,[(0,c.bF)(n,{to:{name:"catalog"}},{default:(0,c.k6)((()=>[Ot])),_:1})]),(0,c.Lk)("div",It,[Pt,t.CART.length?(0,c.Q3)("",!0):((0,c.uX)(),(0,c.CE)("p",wt," Cart is empty. Please add goods to Cart ")),t.CART.length?((0,c.uX)(),(0,c.Wv)(i,{key:1,cart_data:t.CART},null,8,["cart_data"])):(0,c.Q3)("",!0)])],64)}const Dt=t=>((0,c.Qi)("data-v-3d8f36e6"),t=t(),(0,c.jt)(),t),Mt={class:"cart-item-wrapp"},Qt={class:"cart-item-wrapp__total"},Nt=Dt((()=>(0,c.Lk)("p",{class:"cart-item-wrapp__total-title"},"Total: ",-1))),Ut={class:"cart-item-wrapp__total-sum"};function Xt(t,e,a,o,r,s){const n=(0,c.g2)("catalog-cart-item");return(0,c.uX)(),(0,c.CE)(c.FK,null,[(0,c.Lk)("div",Mt,[((0,c.uX)(!0),(0,c.CE)(c.FK,null,(0,c.pI)(a.cart_data,((t,e)=>((0,c.uX)(),(0,c.Wv)(n,{key:t.article,cart_item_data:t,onDeleteFromCart:t=>s.deleteFromCart(e),onIncrementItem:t=>s.incrementItem(e),onDecrementItem:t=>s.decrementItem(e)},null,8,["cart_item_data","onDeleteFromCart","onIncrementItem","onDecrementItem"])))),128))]),(0,c.Lk)("div",Qt,[Nt,(0,c.Lk)("p",Ut,(0,E.v_)(s.cartTotlaCost)+" грн.",1)])],64)}const jt=t=>((0,c.Qi)("data-v-c2f21186"),t=t(),(0,c.jt)(),t),Bt={class:"catalog-cart-item"},qt={class:"catalog-cart-item__wrap"},Vt=["src","alt"],Yt={class:"catalog-cart-item__info"},$t={class:"catalog-cart-item__quantity"},Ht=jt((()=>(0,c.Lk)("p",{class:"catalog-cart-item__quantity__info"},"QTY:",-1))),Gt={class:"catalog-cart-item__quantity__wrap"},Wt={class:"catalog-cart-item__quantity__number"};function Kt(t,e,a,o,r,s){return(0,c.uX)(),(0,c.CE)("div",Bt,[(0,c.Lk)("div",qt,[(0,c.Lk)("img",{src:a.cart_item_data.image,alt:a.cart_item_data.name,class:"catalog-cart-item__image"},null,8,Vt)]),(0,c.Lk)("div",Yt,[(0,c.Lk)("p",null,(0,E.v_)(a.cart_item_data.name),1),(0,c.Lk)("p",null,(0,E.v_)(a.cart_item_data.price)+" грн.",1),(0,c.Lk)("p",null,"арт. "+(0,E.v_)(a.cart_item_data.article),1)]),(0,c.Lk)("div",$t,[Ht,(0,c.Lk)("div",Gt,[(0,c.Lk)("button",{class:"btn catalog-cart-item__quantity-increment",onClick:e[0]||(e[0]=(...t)=>s.incrementItem&&s.incrementItem(...t))},"+"),(0,c.Lk)("p",Wt,(0,E.v_)(a.cart_item_data.quantity),1),(0,c.Lk)("button",{class:"btn catalog-cart-item__quantity-decrement",onClick:e[1]||(e[1]=(...t)=>s.decrementItem&&s.decrementItem(...t))},"-")])]),(0,c.Lk)("button",{class:"btn",onClick:e[2]||(e[2]=(...t)=>s.deleteFromCart&&s.deleteFromCart(...t))},"Delete")])}var xt={name:"CatalogCartItem",props:{cart_item_data:{type:Object,default(){return{}}}},methods:{deleteFromCart(){this.$emit("deleteFromCart")},decrementItem(){this.$emit("decrementItem")},incrementItem(){this.$emit("incrementItem")}}};const Jt=(0,u.A)(xt,[["render",Kt],["__scopeId","data-v-c2f21186"]]);var zt=Jt,Zt={name:"CartItemWrapp",props:{cart_data:{type:Array,default(){return[]}}},methods:{...(0,l.i0)(["DELETE_FROM_CART","INCREMENT_CART_ITEM","DECREMENT_CART_ITEM"]),deleteFromCart(t){this.DELETE_FROM_CART(t)},decrementItem(t){this.DECREMENT_CART_ITEM(t)},incrementItem(t){this.INCREMENT_CART_ITEM(t)}},computed:{cartTotlaCost(){let t=[];for(let e of this.cart_data)t.push(e.price*e.quantity);return t=t.reduce((function(t,e){return t+e})),t}},components:{CatalogCartItem:zt}};const te=(0,u.A)(Zt,[["render",Xt],["__scopeId","data-v-3d8f36e6"]]);var ee=te,ae={name:"CatalogCart",computed:{...(0,l.L8)(["CART"])},components:{CartItemWrap:ee}};const oe=(0,u.A)(ae,[["render",Ft],["__scopeId","data-v-63fbeca1"]]);var ce=oe;const re=(0,f.aE)({history:(0,f.LA)(),routes:[{path:"/",name:"catalog",component:Lt},{path:"/cart",name:"cart",component:ce,props:!0}]});var se=re;(0,o.Ef)(h).use(v).use(se).mount("#app")}},e={};function a(o){var c=e[o];if(void 0!==c)return c.exports;var r=e[o]={exports:{}};return t[o].call(r.exports,r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(e,o,c,r){if(!o){var s=1/0;for(p=0;p<t.length;p++){o=t[p][0],c=t[p][1],r=t[p][2];for(var n=!0,i=0;i<o.length;i++)(!1&r||s>=r)&&Object.keys(a.O).every((function(t){return a.O[t](o[i])}))?o.splice(i--,1):(n=!1,r<s&&(s=r));if(n){t.splice(p--,1);var l=c();void 0!==l&&(e=l)}}return e}r=r||0;for(var p=t.length;p>0&&t[p-1][2]>r;p--)t[p]=t[p-1];t[p]=[o,c,r]}}(),function(){a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,o){var c,r,s=o[0],n=o[1],i=o[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(c in n)a.o(n,c)&&(a.m[c]=n[c]);if(i)var p=i(a)}for(e&&e(o);l<s.length;l++)r=s[l],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(p)},o=self["webpackChunkinternet_shop"]=self["webpackChunkinternet_shop"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[504],(function(){return a(4190)}));o=a.O(o)})();
//# sourceMappingURL=app.721f37b1.js.map