!function(t){var e={};function a(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=14)}([function(t,e,a){"use strict";function n(t,e,a,n,i,o,s,r){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=a,u._compiled=!0),n&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=l):i&&(l=r?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(u.functional){u._injectStyles=l;var d=u.render;u.render=function(t,e){return l.call(e),d(t,e)}}else{var c=u.beforeCreate;u.beforeCreate=c?[].concat(c,l):[l]}return{exports:t,options:u}}a.d(e,"a",(function(){return n}))},function(t,e,a){var n=a(4);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(6).default)("2d4047c6",n,!1,{})},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("div",{staticClass:"uk-child-width-1-2@m",attrs:{"uk-grid":""}},[a("div",[a("div",{staticClass:"uk-margin",staticStyle:{display:"none"}},[a("div",[t._m(0),t._v(" "),a("label",{staticClass:"uk-form-label",attrs:{for:"form-meta-title"}},[t._v(t._s(t._f("trans")("Subject")))])]),t._v(" "),a("div",{staticClass:"uk-form-controls",attrs:{id:"input-title-for-website-name"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.module.data.meta.subject,expression:"module.data.meta['subject']"}],staticClass:"uk-width-expand uk-input",attrs:{id:"form-meta-subject",type:"text"},domProps:{value:t.module.data.meta.subject},on:{input:function(e){e.target.composing||t.$set(t.module.data.meta,"subject",e.target.value)}}})]),t._v(" "),a("p",{staticClass:"uk-text-small",attrs:{id:"seo-subject-rule",hidden:""}},[a("span",{staticClass:"uk-text-meta uk-display-block"},[t._v(t._s(t._f("trans")("Subject needs a word or two. This input is data in my post. Link structure will provide you with a clearer information by checking in the Title, Description and Content sections.")))])])]),t._v(" "),a("div",{staticClass:"uk-margin"},[a("div",[a("div",{staticClass:"uk-form-label uk-float-right",attrs:{for:"form-meta-title"}},[a("span",[t._v(t._s(t._f("transChoice")("{0} You must enter a title|{1} %count% Character|]1,Inf[ %count% Characters",t.getTitleCount,{count:t.getTitleCount})))]),t._v(" "),a("a",{staticClass:"uk-margin-left",attrs:{"uk-toggle":"target: #seo-title-rule"}},[t._v("Rule")])]),t._v(" "),a("label",{staticClass:"uk-form-label",attrs:{for:"form-meta-title"}},[t._v(t._s(t._f("trans")("Title")))])]),t._v(" "),a("div",{staticClass:"uk-form-controls",attrs:{id:"input-title-for-website-name"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.module.data.meta["og:title"],expression:"module.data.meta['og:title']"}],staticClass:"uk-width-expand uk-input",class:{"uk-form-success":t.getTitleCount>=50&&t.getTitleCount<=60,"tm-form-warning":t.getTitleCount>=1&&t.getTitleCount<=49,"uk-form-danger":t.getTitleCount>60},attrs:{id:"form-meta-title",placeholder:t.module.title,type:"text"},domProps:{value:t.module.data.meta["og:title"]},on:{input:function(e){e.target.composing||t.$set(t.module.data.meta,"og:title",e.target.value)}}}),t._v(" "),a("span",{attrs:{id:"input-title-position"}},[t._v(" | "+t._s(t.project_title))])]),t._v(" "),a("p",{staticClass:"uk-text-small",attrs:{id:"seo-title-rule",hidden:""}},[a("span",{staticClass:"uk-text-meta uk-display-block"},[t._v(t._s(t._f("trans")("Google typically displays the first 50–60 characters of a title tag. If you keep your titles under 60 characters, our research suggests that you can expect about 90% of your titles to display properly. There's no exact character limit, because characters can vary in width and Google's display titles max out (currently) at 600 pixels.")))]),t._v(" "),a("span",[t._v("Source: ")]),t._v(" "),a("a",{attrs:{href:"https://moz.com/learn/seo/title-tag",target:"_blank"}},[t._v("moz.com")])])]),t._v(" "),a("div",{staticClass:"uk-margin"},[a("div",[a("div",{staticClass:"uk-form-label uk-float-right",attrs:{for:"form-meta-title"}},[a("span",[t._v(t._s(t._f("transChoice")("{0} You must enter a description|{1} %count% Character|]1,Inf[ %count% Characters",t.module.data.meta["og:description"].length,{count:t.module.data.meta["og:description"].length})))]),t._v(" "),a("a",{staticClass:"uk-margin-left",attrs:{"uk-toggle":"target: #seo-desc-rule"}},[t._v("Rule")])]),t._v(" "),a("label",{staticClass:"uk-form-label",attrs:{for:"form-meta-description"}},[t._v(t._s(t._f("trans")("Description")))])]),t._v(" "),a("div",{staticClass:"uk-form-controls"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.module.data.meta["og:description"],expression:"module.data.meta['og:description']"}],staticClass:"uk-width-expand uk-textarea",class:{"uk-form-success":t.module.data.meta["og:description"].length>=141&&t.module.data.meta["og:description"].length<=160,"tm-form-warning":t.module.data.meta["og:description"].length>=1&&t.module.data.meta["og:description"].length<=140,"uk-form-danger":t.module.data.meta["og:description"].length>160},attrs:{id:"form-meta-description",rows:"5",type:"text"},domProps:{value:t.module.data.meta["og:description"]},on:{input:function(e){e.target.composing||t.$set(t.module.data.meta,"og:description",e.target.value)}}})]),t._v(" "),a("p",{staticClass:"uk-text-small",attrs:{id:"seo-desc-rule",hidden:""}},[a("span",{staticClass:"uk-text-meta uk-display-block"},[t._v(t._s(t._f("trans")("Meta descriptions can be any length, but Google generally truncates snippets to ~155–160 characters. It's best to keep meta descriptions long enough that they're sufficiently descriptive, so we recommend descriptions between 50–160 characters. Keep in mind that the \"optimal\" length will vary depending on the situation, and your primary goal should be to provide value and drive clicks.")))]),t._v(" "),a("span",[t._v("Source: ")]),t._v(" "),a("a",{attrs:{href:"https://moz.com/learn/seo/meta-description",target:"_blank"}},[t._v("moz.com")])])])]),t._v(" "),a("div",[a("div",{staticClass:"uk-margin"},[a("ul",{staticClass:"uk-list tm-card"},[a("li",[a("span",{staticClass:"tm-search-engine-title"},[t._v(t._s(t.module.data.meta["og:title"]?t.module.data.meta["og:title"]:t.module.title)+" | "+t._s(t.project_title))])]),t._v(" "),a("li",[a("span",{staticClass:"tm-search-engine-uri uk-text-success"},[t._v(t._s(t.getLink))])]),t._v(" "),a("li",[a("p",{staticClass:"tm-search-engine-desc uk-text-muted uk-width-expand uk-text-break"},[t._v(t._s(t.getDesc))])])])]),t._v(" "),a("div",{staticClass:"uk-margin"},[a("ul",{staticClass:"uk-list tm-information"},[a("li",[a("i",{class:{"pk-icon-circle-success":t.getTitleCount>=50&&t.getTitleCount<=60,"pk-icon-circle-warning":t.getTitleCount>=0&&t.getTitleCount<=49,"pk-icon-circle-danger":t.getTitleCount>60}}),t._v(" "),a("span",[t._v(t._s(t._f("trans")("Title"))+" ")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.getTitleCount>=0&&t.getTitleCount<=49||t.getTitleCount>60,expression:"getTitleCount >= 0 && getTitleCount <= 49 || getTitleCount > 60"}]},[t._v(t._s("length is not recommended character length."))]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.getTitleCount>=50&&t.getTitleCount<=60,expression:"getTitleCount >= 50 && getTitleCount <= 60"}]},[t._v(t._s("length is recommended character length."))])]),t._v(" "),a("li",[a("i",{class:{"pk-icon-circle-success":t.module.data.meta["og:description"].length>=141&&t.module.data.meta["og:description"].length<=160,"pk-icon-circle-warning":t.module.data.meta["og:description"].length>=1&&t.module.data.meta["og:description"].length<=140,"pk-icon-circle":t.module.data.meta["og:description"].length<=1,"pk-icon-circle-danger":t.module.data.meta["og:description"].length>160}}),t._v(" "),a("span",[t._v(t._s(t._f("trans")("Description"))+" ")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.module.data.meta["og:description"].length>=0&&t.module.data.meta["og:description"].length<=140||t.module.data.meta["og:description"].length>160,expression:"module.data.meta['og:description'].length >= 0 && module.data.meta['og:description'].length <= 140 || module.data.meta['og:description'].length > 160"}]},[t._v(t._s("length is not recommended character length."))]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.module.data.meta["og:description"].length>=141&&t.module.data.meta["og:description"].length<=160,expression:"module.data.meta['og:description'].length >= 141 && module.data.meta['og:description'].length <= 160"}]},[t._v(t._s("length is recommended character length."))])])])])])]),t._v(" "),a("div",{staticClass:"uk-margin-large-top"},[a("p",{staticClass:"uk-text-small"},[t._v(t._s(t._f("trans")("This plugin is developed according to the protocol specified in"))+" "),a("a",{attrs:{href:"https://ogp.me",target:"_blank"}},[t._v("https://ogp.me")])])])])};n._withStripped=!0;var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"uk-margin"},[a("input-image-meta",{staticClass:"pk-image-max-height",attrs:{image:t.module.data.meta.type.image},on:{"update:image":function(e){return t.$set(t.module.data.meta.type,"image",e)}},model:{value:t.module.data.meta.type.image,callback:function(e){t.$set(t.module.data.meta.type,"image",e)},expression:"module.data.meta.type.image"}})],1)])};i._withStripped=!0;var o={props:["module"],name:"StructuredProperties",ModulesSeo:{label:"default"},created(){this.module.data.meta.type||this.$set(this.module.data.meta,"type",{image:{src:"",alt:""}})}},s=a(0),r=Object(s.a)(o,i,[],!1,null,null,null);r.options.__file="app/components/types/default.vue";var l=r.exports;let u={props:{module:{type:Object,default:{}},RealSubject:{type:String,default:""},moduleType:{type:String,default:"default"}},data:()=>_.merge({typeMode:"",inputStyle:{title:null,desc:null}},window.$client),created(){this.module.data.meta||this.$set(this.module.data,"meta",{"og:title":"","og:description":"",real_subject:this.RealSubject}),this.module.data.meta["og:description"]||this.$set(this.module.data,"meta",_.merge({"og:description":"",real_subject:this.RealSubject},this.module.data.meta)),_.forIn(this.$options.components,(t,e)=>{t.ModulesSeo&&t.ModulesSeo.label==this.moduleType&&(this.typeMode=_.extend({name:e},t.ModulesSeo))})},computed:{getTitle(){return this.module.data.meta["og:title"]+" | "+this.project_title},getTitleCount(t=!1){return this.getTitle.length},getLink(){return this.project_uri+this.module.url},getDesc(){let t=this.module.data.meta["og:description"];return t.length||(t="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ante nisl, vehicula at scelerisque sed, tempor vel risus. Morbi vitae pellentesque lectus antes."),t}},methods:{checkSubject(t=""){this.module.data.meta.subject;const e=/subject/gim.exec(t);return console.log(e),1}},components:{StandartType:l}};var d=u;window.ModuleSeo=u;var c=d,m=(a(3),Object(s.a)(c,n,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"uk-form-label uk-float-right",attrs:{for:"form-meta-title"}},[e("a",{staticClass:"uk-margin-left",attrs:{"uk-toggle":"target: #seo-subject-rule"}},[this._v("Rule")])])}],!1,null,"08f4a8ee",null));m.options.__file="app/components/module-seo.vue";e.a=m.exports},function(t,e,a){"use strict";var n=a(1);a.n(n).a},function(t,e,a){(t.exports=a(5)(!1)).push([t.i,"\n#input-title-for-website-name[data-v-08f4a8ee]{\n    position:relative;\n}\n#input-title-for-website-name > input[data-v-08f4a8ee]{\n    padding-right:184px;\n}\n#input-title-position[data-v-08f4a8ee]{\n    position: absolute;right: 10px;top: 8px;color: #ccc;\n}\n.tm-form-warning[data-v-08f4a8ee]{\n    color: #fd9867;\n    border-color: #fd9867;\n}\n.tm-search-engine-uri[data-v-08f4a8ee]{\n    font-size:13px;\n}\n.tm-search-engine-title[data-v-08f4a8ee]{\n    font-size: 20px;\n    line-height: normal;\n    color: #1a0dab;\n}\n.tm-search-engine-desc[data-v-08f4a8ee]{\n    display: inline-block;\n    font: 9px;\n    line-height: normal;\n    color: #6a6a6a;\n}\n.tm-card[data-v-08f4a8ee]{\n    border: 1px solid #d2cfcf;\n    padding:10px 20px;\n}\n.tm-card > li[data-v-08f4a8ee]{\n    margin-top: 5px;\n}\n.tm-information > li i[data-v-08f4a8ee]{margin-right:10px}\n.tm-information > li span[data-v-08f4a8ee]{font-size:11px}\n",""])},function(t,e,a){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var a=function(t,e){var a=t[1]||"",n=t[3];if(!n)return a;if(e&&"function"==typeof btoa){var i=(s=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=n.sources.map((function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"}));return[a].concat(o).concat([i]).join("\n")}var s;return[a].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+a+"}":a})).join("")},e.i=function(t,a){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(n[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];null!=s[0]&&n[s[0]]||(a&&!s[2]?s[2]=a:a&&(s[2]="("+s[2]+") and ("+a+")"),e.push(s))}},e}},function(t,e,a){"use strict";function n(t,e){for(var a=[],n={},i=0;i<e.length;i++){var o=e[i],s=o[0],r={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]};n[s]?n[s].parts.push(r):a.push(n[s]={id:s,parts:[r]})}return a}a.r(e),a.d(e,"default",(function(){return p}));var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},s=i&&(document.head||document.getElementsByTagName("head")[0]),r=null,l=0,u=!1,d=function(){},c=null,m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(t,e,a,i){u=a,c=i||{};var s=n(t,e);return g(s),function(e){for(var a=[],i=0;i<s.length;i++){var r=s[i];(l=o[r.id]).refs--,a.push(l)}e?g(s=n(t,e)):s=[];for(i=0;i<a.length;i++){var l;if(0===(l=a[i]).refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete o[l.id]}}}}function g(t){for(var e=0;e<t.length;e++){var a=t[e],n=o[a.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](a.parts[i]);for(;i<a.parts.length;i++)n.parts.push(v(a.parts[i]));n.parts.length>a.parts.length&&(n.parts.length=a.parts.length)}else{var s=[];for(i=0;i<a.parts.length;i++)s.push(v(a.parts[i]));o[a.id]={id:a.id,refs:1,parts:s}}}}function f(){var t=document.createElement("style");return t.type="text/css",s.appendChild(t),t}function v(t){var e,a,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(u)return d;n.parentNode.removeChild(n)}if(m){var i=l++;n=r||(r=f()),e=b.bind(null,n,i,!1),a=b.bind(null,n,i,!0)}else n=f(),e=y.bind(null,n),a=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else a()}}var h,_=(h=[],function(t,e){return h[t]=e,h.filter(Boolean).join("\n")});function b(t,e,a,n){var i=a?"":n.css;if(t.styleSheet)t.styleSheet.cssText=_(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function y(t,e){var a=e.css,n=e.media,i=e.sourceMap;if(n&&t.setAttribute("media",n),c.ssrId&&t.setAttribute("data-vue-ssr-id",e.id),i&&(a+="\n/*# sourceURL="+i.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}},,,,,,,,function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("module-seo",{attrs:{module:t.query,moduleType:"default"},on:{"update:module":function(e){t.query=e}}})],1)};n._withStripped=!0;let i={props:["query"],section:{label:"SEO",priority:200},components:{ModuleSeo:a(2).a}};var o=i;window.Docs.components["docs-meta"]=i;var s=o,r=a(0),l=Object(r.a)(s,n,[],!1,null,null,null);l.options.__file="app/modules/docs-meta.vue";e.default=l.exports}]);