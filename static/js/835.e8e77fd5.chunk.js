"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[835],{7835:function(e,n,r){r.r(n),r.d(n,{default:function(){return y}});var l=r(1413),a=r(4925),i=r(935),t=r(7872),o=r(184),s=["axis"],d=(0,i.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});d.displayName="Center";var u={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}},c=((0,t.G)((function(e,n){var r=e.axis,t=void 0===r?"both":r,d=(0,a.Z)(e,s);return(0,o.jsx)(i.m.div,(0,l.Z)((0,l.Z)({ref:n,__css:u[t]},d),{},{position:"absolute"}))})),r(9439)),v=r(3887),p=r(2791),f=r(9434),h=r(7689),m=r(9273),b="LoginForm_logBtn__EIaWA",x=function(){var e=(0,p.useState)(""),n=(0,c.Z)(e,2),r=n[0],l=n[1],a=(0,p.useState)(""),i=(0,c.Z)(a,2),t=i[0],s=i[1],d=(0,f.I0)(),u=(0,h.s0)(),x=function(e){var n=e.target,r=n.name,a=n.value;"email"===r&&l(a),"password"===r&&s(a)};return(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d((0,m.Ib)({email:r,password:t})),l(""),s(""),u("/contacts")},children:[(0,o.jsx)("label",{children:(0,o.jsx)(v.I,{p:"5",borderColor:"teal",_placeholder:{opacity:1,color:"gray.500",textAlign:"center"},focusBorderColor:"teal",variant:"flushed",mt:"50px",placeholder:"Write your email",name:"email",type:"email",required:!0,value:r,onChange:x})}),(0,o.jsx)("label",{children:(0,o.jsx)(v.I,{p:"5",layerStyle:"input",borderColor:"teal",_placeholder:{opacity:1,color:"gray.500",textAlign:"center"},variant:"flushed",focusBorderColor:"teal",mt:"10px",placeholder:"Write your password",name:"password",type:"password",required:!0,value:t,onChange:x,minLength:8})}),(0,o.jsx)("button",{type:"submit",className:b,children:"LOG IN"})]})},y=function(){return(0,o.jsx)("section",{children:(0,o.jsxs)("div",{children:[(0,o.jsx)(d,{textStyle:"h2",mt:"50px",children:"Please log in"}),(0,o.jsx)(x,{})]})})}},3887:function(e,n,r){r.d(n,{I:function(){return _}});var l=r(1413),a=r(4925),i=r(9439),t=r(9886),o=r(2791);function s(e,n){if(null!=e)if("function"!==typeof e)try{e.current=n}catch(r){throw new Error("Cannot assign value '".concat(n,"' to ref '").concat(e,"'"))}else e(n)}function d(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(e){n.forEach((function(n){s(n,e)}))}}var u=r(7872),c=r(9219),v=r(9477),p=r(935),f=r(6992),h=r(184),m=["id","isRequired","isInvalid","isDisabled","isReadOnly"],b=["getRootProps","htmlProps"],x=(0,t.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),y=(0,i.Z)(x,2),g=y[0],Z=y[1],I=(0,t.k)({strict:!1,name:"FormControlContext"}),C=(0,i.Z)(I,2),k=C[0],R=C[1];var j=(0,u.G)((function(e,n){var r=(0,c.jC)("Form",e),t=function(e){var n=e.id,r=e.isRequired,t=e.isInvalid,s=e.isDisabled,u=e.isReadOnly,c=(0,a.Z)(e,m),v=(0,o.useId)(),p=n||"field-".concat(v),h="".concat(p,"-label"),b="".concat(p,"-feedback"),x="".concat(p,"-helptext"),y=(0,o.useState)(!1),g=(0,i.Z)(y,2),Z=g[0],I=g[1],C=(0,o.useState)(!1),k=(0,i.Z)(C,2),R=k[0],j=k[1],F=(0,o.useState)(!1),q=(0,i.Z)(F,2),P=q[0],S=q[1],_=(0,o.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,l.Z)((0,l.Z)({id:x},e),{},{ref:d(n,(function(e){e&&j(!0)}))})}),[x]),O=(0,o.useCallback)((function(){var e,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,l.Z)((0,l.Z)({},r),{},{ref:a,"data-focus":(0,f.PB)(P),"data-disabled":(0,f.PB)(s),"data-invalid":(0,f.PB)(t),"data-readonly":(0,f.PB)(u),id:null!=(e=r.id)?e:h,htmlFor:null!=(n=r.htmlFor)?n:p})}),[p,s,P,t,u,h]),B=(0,o.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,l.Z)((0,l.Z)({id:b},e),{},{ref:d(n,(function(e){e&&I(!0)})),"aria-live":"polite"})}),[b]),N=(0,o.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,l.Z)((0,l.Z)((0,l.Z)({},e),c),{},{ref:n,role:"group"})}),[c]),T=(0,o.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,l.Z)((0,l.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!r,isInvalid:!!t,isReadOnly:!!u,isDisabled:!!s,isFocused:!!P,onFocus:function(){return S(!0)},onBlur:function(){return S(!1)},hasFeedbackText:Z,setHasFeedbackText:I,hasHelpText:R,setHasHelpText:j,id:p,labelId:h,feedbackId:b,helpTextId:x,htmlProps:c,getHelpTextProps:_,getErrorMessageProps:B,getRootProps:N,getLabelProps:O,getRequiredIndicatorProps:T}}((0,v.Lr)(e)),s=t.getRootProps,u=(t.htmlProps,(0,a.Z)(t,b)),x=(0,f.cx)("chakra-form-control",e.className);return(0,h.jsx)(k,{value:u,children:(0,h.jsx)(g,{value:r,children:(0,h.jsx)(p.m.div,(0,l.Z)((0,l.Z)({},s({},n)),{},{className:x,__css:r.container}))})})}));j.displayName="FormControl",(0,u.G)((function(e,n){var r=R(),a=Z(),i=(0,f.cx)("chakra-form__helper-text",e.className);return(0,h.jsx)(p.m.div,(0,l.Z)((0,l.Z)({},null==r?void 0:r.getHelpTextProps(e,n)),{},{__css:a.helperText,className:i}))})).displayName="FormHelperText";var F=["isDisabled","isInvalid","isReadOnly","isRequired"],q=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function P(e){var n=function(e){var n,r,i,t=R(),o=e.id,s=e.disabled,d=e.readOnly,u=e.required,c=e.isRequired,v=e.isInvalid,p=e.isReadOnly,h=e.isDisabled,m=e.onFocus,b=e.onBlur,x=(0,a.Z)(e,q),y=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==t?void 0:t.hasFeedbackText)&&(null==t?void 0:t.isInvalid)&&y.push(t.feedbackId);(null==t?void 0:t.hasHelpText)&&y.push(t.helpTextId);return(0,l.Z)((0,l.Z)({},x),{},{"aria-describedby":y.join(" ")||void 0,id:null!=o?o:null==t?void 0:t.id,isDisabled:null!=(n=null!=s?s:h)?n:null==t?void 0:t.isDisabled,isReadOnly:null!=(r=null!=d?d:p)?r:null==t?void 0:t.isReadOnly,isRequired:null!=(i=null!=u?u:c)?i:null==t?void 0:t.isRequired,isInvalid:null!=v?v:null==t?void 0:t.isInvalid,onFocus:(0,f.v0)(null==t?void 0:t.onFocus,m),onBlur:(0,f.v0)(null==t?void 0:t.onBlur,b)})}(e),r=n.isDisabled,i=n.isInvalid,t=n.isReadOnly,o=n.isRequired,s=(0,a.Z)(n,F);return(0,l.Z)((0,l.Z)({},s),{},{disabled:r,readOnly:t,required:o,"aria-invalid":(0,f.Qm)(i),"aria-required":(0,f.Qm)(o),"aria-readonly":(0,f.Qm)(t)})}var S=["htmlSize"],_=(0,u.G)((function(e,n){var r=e.htmlSize,i=(0,a.Z)(e,S),t=(0,c.jC)("Input",i),o=P((0,v.Lr)(i)),s=(0,f.cx)("chakra-input",e.className);return(0,h.jsx)(p.m.input,(0,l.Z)((0,l.Z)({size:r},o),{},{__css:t.field,ref:n,className:s}))}));_.displayName="Input",_.id="Input"}}]);
//# sourceMappingURL=835.e8e77fd5.chunk.js.map