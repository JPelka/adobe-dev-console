"use strict";(self.webpackChunkadobe_dev_console=self.webpackChunkadobe_dev_console||[]).push([[5206],{32199:function(e,i,n){n.d(i,{BA:function(){return x},NN:function(){return O},Rp:function(){return z},__:function(){return _},ck:function(){return T},gq:function(){return P},mQ:function(){return k},ms:function(){return q},vS:function(){return A}});var t=n(4942),r=n(87462),a=n(63366),o=n(15007),l=n(75900),s=n.n(l),d=n(95223),c=n(158),m=["orientation","density","isQuiet","isHeader","children","className","onFontsReady"],u=["elementType","isDisabled","isSelected","className","children","icon","label"],p=["elementType","icon","isSelected","isDisabled","className","children","iconSize"],v=["className"],b=["className","index"],g=["elementType","isDisabled","isSelected","className","children","icon","hasDropdown","label"],f=["elementType","isHidden","className","children"],h=["theme","orientation","className","APIReference"];function y(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function w(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?y(Object(n),!0).forEach((function(i){(0,t.Z)(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}var x=function(e,i){e.current.style.transform="translate("+i.current.offsetLeft+"px, 0px)",e.current.style.width=i.current.offsetWidth+"px"},z=function(e,i){e.current.style.transition=i?"":"none"},Z="480px",D=function(e){var i;return"img"===(null==e||null===(i=e.props)||void 0===i?void 0:i.mdxType)?(0,o.cloneElement)(e,{loading:"eager"}):e},N=function(e){var i=e.image,n=void 0===i?"":i,t=e.styles,r=void 0===t?"":t;return n?(0,o.cloneElement)(n,{children:(0,c.ve)(n.props.children,D),css:(0,d.iv)("display:flex;align-items:center;justify-content:center;height:100%;width:100%;margin-top:var(--spectrum-global-dimension-size-0);img{display:block;object-fit:contain;}",r,";","")}):null},S=function(e){var i=e.icon,n=e.styles;return i?(0,o.cloneElement)(i,{alt:"",css:(0,d.iv)("height:var(--spectrum-global-dimension-size-600);width:var(--spectrum-global-dimension-size-600);margin-top:var(--spectrum-global-dimension-size-0);img{display:block;object-fit:contain;}",n,";","")}):null},k=(0,o.forwardRef)((function(e,i){var n=e.orientation,t=void 0===n?"horizontal":n,l=e.density,c=void 0===l?"regular":l,u=e.isQuiet,p=void 0===u||u,v=e.isHeader,b=void 0!==v&&v,g=e.children,f=e.className,h=e.onFontsReady,y=(0,a.Z)(e,m);return(0,o.useEffect)((function(){document.fonts.ready.then((function(){h&&h()}))}),[h]),(0,d.tZ)("div",(0,r.Z)({ref:i},y,{role:b?void 0:"tablist","aria-orientation":b?void 0:"orientation",className:s()(f,"spectrum-Tabs","spectrum-Tabs--sizeM","spectrum-Tabs--"+t,{"spectrum-Tabs--quiet":p},{"spectrum-Tabs--compact":"compact"===c})}),g)})),T=(0,o.forwardRef)((function(e,i){var n,t=e.elementType,o=void 0===t?"div":t,l=e.isDisabled,c=void 0!==l&&l,m=e.isSelected,p=void 0!==m&&m,v=e.className,b=e.children,g=e.icon,f=e.label,h=(0,a.Z)(e,u),y=o;return(0,d.tZ)(y,(0,r.Z)({},h,{ref:i,role:"tab",title:null==f||null===(n=f.props)||void 0===n?void 0:n.children,"aria-selected":p,disabled:c,className:s()(v,"spectrum-Tabs-item",{"is-selected":p},{"is-disabled":c})}),g?(0,d.tZ)(E,{icon:g,isSelected:p,isDisabled:c}):null,f?(0,d.tZ)(_,null," ",f," "):null,b)})),I={name:"16l42sl",styles:"height:var(--spectrum-global-dimension-size-600);width:var(--spectrum-global-dimension-size-550);z-index:1"},E=(0,o.forwardRef)((function(e,i){var n=e.elementType,t=void 0===n?"div":n,o=e.icon,l=e.isSelected,c=e.isDisabled,m=e.className,u=(e.children,e.iconSize),v=void 0===u?"xl":u,b=(0,a.Z)(e,p),g=t;return(0,d.tZ)(g,(0,r.Z)({},b,{ref:i,className:s()(m,"spectrum-Icon",{"is-selected":l},{"is-disabled ":c}),css:I}),o?function(e,i,n){var t,r,a;return"img"===(null==e||null===(t=e.props)||void 0===t||null===(r=t.children)||void 0===r||null===(a=r.props)||void 0===a?void 0:a.mdxType)?(0,d.tZ)(N,{image:e,className:s()(i,"spectrum-Icon--spectrum-icon-size-"+n)}):(0,d.tZ)(S,{icon:e,className:s()(i,"spectrum-Icon--spectrum-icon-size-"+n)})}(o,m,v):null)})),R={name:"pwo431",styles:"transition-property:transform,width"},O=(0,o.forwardRef)((function(e,i){var n=e.className,t=(0,a.Z)(e,v);return(0,d.tZ)("div",(0,r.Z)({},t,{ref:i,className:s()(n,"spectrum-Tabs-selectionIndicator"),css:R}))})),j={name:"pwo431",styles:"transition-property:transform,width"},A=(0,o.forwardRef)((function(e,i){var n=e.className,t=e.index,o=void 0===t?0:t,l=(0,a.Z)(e,b);return(0,d.tZ)("div",(0,r.Z)({},l,{ref:i,className:s()(n,"spectrum-Tabs-selectionIndicator",{default:0===o}),css:j}))})),_=function(e){var i=e.children;return(0,d.tZ)("span",{className:"spectrum-Tabs-itemLabel"},i)},P=(0,o.forwardRef)((function(e,i){var n,t=e.elementType,o=void 0===t?"div":t,l=e.isDisabled,c=void 0!==l&&l,m=e.isSelected,u=void 0!==m&&m,p=e.className,v=e.children,b=e.icon,f=e.hasDropdown,h=void 0!==f&&f,y=e.label,w=(0,a.Z)(e,g),x=o;return(0,d.tZ)(x,(0,r.Z)({},w,{ref:i,title:null==y||null===(n=y.props)||void 0===n?void 0:n.children,"aria-selected":u,autofocus:!0,tabIndex:"0",onKeyDown:function(e){var i;("ArrowRight"===e.key&&("tabindex5"===w.id&&document.getElementById("getCredentialID").focus(),e.target.nextElementSibling&&e.target.nextElementSibling.focus()),"ArrowLeft"===e.key)&&("tabindex0"===w.id?null===(i=document.getElementById("product"))||void 0===i||i.focus():e.target.previousElementSibling&&e.target.previousElementSibling.focus());"ArrowDown"===e.key&&(e.preventDefault(),h?(null==w?void 0:w.openDropDown)&&(null==w||w.openDropDown({index:w.index,isOpen:!0,id:w.id})):e.target.nextElementSibling&&e.target.nextElementSibling.focus()),"ArrowUp"===e.key&&((null==w?void 0:w.openDropDown)&&(null==w||w.openDropDown({isOpen:!1,id:w.id})),e.target.previousElementSibling&&e.target.previousElementSibling.focus())},disabled:c,className:s()(p,"spectrum-Tabs-item",{"is-selected":u},{"is-disabled":c})}),b?(0,d.tZ)(E,{icon:b,isSelected:u,isDisabled:c}):null,y?(0,d.tZ)(_,null," ",y," "):null,v)})),B=(0,o.forwardRef)((function(e,i){var n=e.elementType,t=void 0===n?"div":n,o=e.isHidden,l=e.className,c=e.children,m=(0,a.Z)(e,f),u=t;return(0,d.tZ)(u,(0,r.Z)({},m,{ref:i,hidden:o,className:s()(l)}),c)})),L={name:"15jol59",styles:"color:#4b9cf5;&:focus{text-decoration:underline;border-bottom:1px solid #1374e6;}"},U={name:"1lx7s8w",styles:"background:var(--spectrum-global-color-gray-100);max-width:100%;overflow-x:hidden!important;margin:0;padding-bottom:calc(var(--spectrum-global-dimension-size-1250) + var(--spectrum-global-dimension-size-250))"},q=function(e){var i=e.theme,n=void 0===i?"light":i,t=e.orientation,r=void 0===t?"horizontal":t,l=e.className,m=e.APIReference,u=void 0===m?"":m,p=(0,a.Z)(e,h),v=(0,o.useState)([])[0],b=(0,o.useRef)(null),g=(0,o.useState)({tab:0}),f=g[0],y=g[1],z=Object.keys(p).filter((function(e){return e.startsWith("heading")})).map((function(e){return e})).map((function(e,i){var n,t;return{heading:(null==p||null===(n=p["heading"+i])||void 0===n||null===(t=n.props)||void 0===t?void 0:t.children)||(null==p?void 0:p.heading),content:(null==p?void 0:p["content"+i])||(null==p?void 0:p.content),image:(null==p?void 0:p["image"+i])||(null==p?void 0:p.image)}})),D=function(e){void 0===e&&(e=f.tab);var i=v.filter((function(e){return null==e?void 0:e.current}))[e];x(b,i)},N=function(e){y({tab:e}),D(e)};return(0,d.tZ)("section",{className:s()(l,"tabsBlock spectrum--"+n),css:U},(0,d.tZ)("div",{css:(0,d.iv)("display:","vertical"===r?"inline-flex":"",";@media only screen and (min-width: ",c.LU,"){margin:0 auto!important;}@media screen and (max-device-width: ",c.q9,"){flex-direction:column;}","")},(0,d.tZ)("div",{css:(0,d.iv)("display:","vertical"===r?"grid":"block",";position:relative;grid-template-columns:300px calc(100% - 300px);margin-top:","vertical"===r?"var(--spectrum-global-dimension-size-300)":"",";width:","vertical"===r?c.Av+" !important":"inherit",";@media only screen and (max-width: ",c.q9,"){width:100%!important;}@media only screen and (device-width: ",c.LU,"){width:",(0,c.MY)(8),"!important;}","")},(0,d.tZ)("div",{css:(0,d.iv)((null==z?void 0:z.length)>6?"overflow-x:auto; overflow-y: hidden;":"",";","")},(null==z?void 0:z.length)>0?(0,d.tZ)(k,{orientation:r,isQuiet:!0,onFontsReady:D},z.map((function(e,i){var n=(0,o.createRef)();v.push(n);var t=f.tab===i;return(0,d.tZ)(o.default.Fragment,null,(0,d.tZ)(T,{className:"tabItem",key:"tabItem_"+i,id:"tabItem_"+i,ref:n,isSelected:t,"aria-controls":"tabView"+i,tabIndex:i===f.tab?0:-1,"aria-label":e.heading,"aria-selected":i===f.tab,label:(0,d.tZ)("b",null,e.heading),icon:e.image,onKeyDown:function(e){if("ArrowDown"===e.key||"Enter"===e.key){var n;if(e.preventDefault(),z.length===i+1&&""!==u)null===(n=document.getElementById("apiReference"))||void 0===n||n.setAttribute("tabIndex",0),document.getElementById("apiReference").focus();e.currentTarget.nextSibling&&e.currentTarget.nextSibling.nextSibling.focus()}"ArrowUp"===e.key&&(e.preventDefault(),e.currentTarget.previousSibling&&e.currentTarget.previousSibling.previousSibling.focus())},onFocus:function(){N(i)},onClick:function(){N(i)},css:(0,d.iv)("text-align:left;white-space:normal;width:","vertical"===r?"calc(var(--spectrum-global-dimension-size-2000) + var(--spectrum-global-dimension-size-600))":"calc(var(--spectrum-global-dimension-static-grid-fixed-max-width) / var(--spectrum-global-dimension-static-grid-columns))","!important;font-size:var(--spectrum-global-dimension-size-200);margin-bottom:","vertical"===r?"1rem !important":"0rem",";display:flex!important;padding:var(--spectrum-global-dimension-size-125)!important;height:auto!important;line-height:","vertical"===r?"initial !important":"initial",";.spectrum-Tabs-itemLabel{margin-top:5px;margin-bottom:5px;}.spectrum-Icon{background-size:var(--spectrum-global-dimension-size-225) var(--spectrum-global-dimension-size-275);width:var(--spectrum-global-dimension-size-500);height:var(--spectrum-global-dimension-size-400);}&.is-disabled{pointer-events:none;}&::before{left:var(--spectrum-global-dimension-size-0)!important;right:var(--spectrum-global-dimension-size-0)!important;border:none!important;}@media only screen and (max-width: ",Z,"){margin-top:var(--spectrum-global-dimension-size-25)!important;margin-bottom:var(--spectrum-global-dimension-size-25)!important;}@media only screen and (max-width: ",c.q9,"){padding-left:var(--spectrum-global-dimension-size-0)!important;}@media only screen and (min-width: ",c.LU,"){left:var(--spectrum-global-dimension-size-250)!important;}","")},(0,d.tZ)("div",{key:"mobileTabView_"+i,className:"mobileTabView",hidden:!t,css:(0,d.iv)("display:none;padding:var(--spectrum-global-dimension-size-0)!important;h3{font-size:var(--spectrum-heading-s-text-size, var(--spectrum-alias-heading-s-text-size));}p{font-size:var(--spectrum-body-s-text-size, var(--spectrum-global-dimension-font-size-150));}@media only screen and (max-width: ","767px","){display:block;}","")},e.content?e.content:null)))})),(0,d.tZ)(O,{ref:b}),""!==u&&(0,d.tZ)("div",{css:(0,d.iv)("text-align:left;white-space:normal;width:calc(var(--spectrum-global-dimension-size-2500) + var(--spectrum-global-dimension-size-750))!important;font-size:var(--spectrum-global-dimension-size-200);padding:var(--spectrum-global-dimension-size-125)!important;@media only screen and (max-width: ",Z,"){left:var(--spectrum-global-dimension-size-100)!important;margin-top:var(--spectrum-global-dimension-size-125)!important;margin-bottom:var(--spectrum-global-dimension-size-125)!important;}@media only screen and (min-width: ",c.LU,"){left:var(--spectrum-global-dimension-size-250)!important;}","")},(0,d.tZ)("span",{css:(0,d.iv)("text-align:left;cursor:pointer;margin-top:var(--spectrum-global-dimension-size-85);margin-left:var(--spectrum-global-dimension-size-400);@media only screen and (max-width: ",Z,"){margin-left:var(--spectrum-global-dimension-size-100)!important;}@media only screen and (max-width: ",c.q9,"){margin-left:var(--spectrum-global-dimension-size-100)!important;}","")},(0,d.tZ)("a",{href:u,tabIndex:-1,id:"apiReference",css:L,target:"_blank",rel:"noreferrer",onKeyDown:function(e){"ArrowUp"===e.key&&(e.preventDefault(),N((null==z?void 0:z.length)-1),document.getElementById("tabItem_"+((null==z?void 0:z.length)-1)).focus())},onBlur:function(){document.getElementById("apiReference").setAttribute("tabIndex",-1)}},"API Reference")))):null),(null==z?void 0:z.length)>0?z.map((function(e,i){var n=f.tab===i,t=e.content;return t.props=w(w({},t.props),{},{index:f.tab}),(0,d.tZ)(B,{key:"tabView_"+i,id:"tabView"+i,className:"tabView",isHidden:!n,css:(0,d.iv)("text-align:left;padding:0px 0 var(--spectrum-global-dimension-size-100) 10px!important;overflow-x:hidden!important;@media only screen and (max-width: ",Z,"){padding-left:inherit!important;max-width:",(0,c.MY)(3),"!important;}@media only screen and (device-width: ",c.q9,"){max-width:",(0,c.MY)(3.5),"!important;}@media only screen and (device-width: ",c.LU,"){max-width:",(0,c.MY)(6.5),"!important;padding-left:var(--spectrum-global-dimension-size-500);}","")},t)})):null)))}}}]);
//# sourceMappingURL=3f943334-101b068effdea6a3e6a4.js.map