import{_ as y}from"./C-KDy7tW.js";import{_ as i,f as u,o as t,c as e,F as b,r as g,n as o,a,P as d,b as m,w as k,d as v,t as p,g as M}from"./BWOIcnx8.js";const S="_list_qn75v_3",B="_item_qn75v_13",N={list:S,item:B},V={setup(){u()},props:{path:{type:String}},computed:{path_array(){if(this.path==="/")return[];const s=this.path.split(/\/(?!$)/);return s.map((r,c)=>({name:r||"Home",path:s.slice(0,c+1).join("/")||"/"}))}}},j=a("span",null," ",-1),q={key:0},w={key:1};function x(s,r,c,h,$,l){const _=y;return t(),e("ul",{class:o(s.$style.list)},[j,(t(!0),e(b,null,g(l.path_array,(n,f)=>(t(),e("li",{class:o(s.$style.item),key:f},[n.path!==(s._.provides[d]||s.$route).path?(t(),e("span",q,[m(_,{to:n.path},{default:k(()=>[v(p(n.name),1)]),_:2},1032,["to"])])):(t(),e("span",w,p(n.name.replace(/\//g,"")),1))],2))),128))],2)}const C={$style:N},F=i(V,[["render",x],["__cssModules",C]]),P="_root_4rxph_2",R="_container_4rxph_10",z="_footer_4rxph_20",D="_breadcrumbs_4rxph_31",E={root:P,container:R,footer:z,breadcrumbs:D},H={setup(){u()}},L=a("p",null,"© 2017-2020 gyojir",-1),T=[L];function A(s,r,c,h,$,l){const _=F;return t(),e("div",{class:o(s.$style.root)},[m(_,{class:o(s.$style.breadcrumbs),path:(s._.provides[d]||s.$route).path},null,8,["class","path"]),a("div",{class:o(s.$style.container)},[M(s.$slots,"default")],2),a("footer",{class:o(s.$style.footer)},T,2)],2)}const G={$style:E},K=i(H,[["render",A],["__cssModules",G]]);export{K as default};
