exports.id=825,exports.ids=[825],exports.modules={84060:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sendPost=void 0;let s=i(43348),r=i(15938),sendPost=async(e,t,i={})=>{let a=await fetch(r.store.origin+e,{method:"POST",headers:i,body:t}),o=await a.text(),l=new s.EmailJSResponseStatus(a.status,o);if(a.ok)return l;throw l};t.sendPost=sendPost},17134:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.blockedEmailError=void 0;let s=i(43348);t.blockedEmailError=()=>new s.EmailJSResponseStatus(403,"Forbidden")},19466:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.headlessError=void 0;let s=i(43348);t.headlessError=()=>new s.EmailJSResponseStatus(451,"Unavailable For Headless Browser")},65414:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.limitRateError=void 0;let s=i(43348);t.limitRateError=()=>new s.EmailJSResponseStatus(429,"Too Many Requests")},85699:(e,t,i)=>{"use strict";let s=i(43348),r=i(49596),a=i(60931),o=i(67422);t.ZP={init:r.init,send:a.send,sendForm:o.sendForm,EmailJSResponseStatus:s.EmailJSResponseStatus}},49596:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.init=void 0;let s=i(15938),r=i(81158);t.init=(e,t="https://api.emailjs.com")=>{if(!e)return;let i=(0,r.buildOptions)(e);s.store.publicKey=i.publicKey,s.store.blockHeadless=i.blockHeadless,s.store.storageProvider=i.storageProvider,s.store.blockList=i.blockList,s.store.limitRate=i.limitRate,s.store.origin=i.origin||t}},67422:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sendForm=void 0;let s=i(15938),r=i(84060),a=i(81158),o=i(77265),l=i(2085),d=i(61688),n=i(19466),c=i(27495),u=i(17134),m=i(20507),p=i(65414),findHTMLForm=e=>"string"==typeof e?document.querySelector(e):e,sendForm=async(e,t,i,b)=>{let v=(0,a.buildOptions)(b),f=v.publicKey||s.store.publicKey,P=v.blockHeadless||s.store.blockHeadless,_=s.store.storageProvider||v.storageProvider,y={...s.store.blockList,...v.blockList},h={...s.store.limitRate,...v.limitRate};if(P&&(0,d.isHeadless)(navigator))return Promise.reject((0,n.headlessError)());let g=findHTMLForm(i);(0,l.validateParams)(f,e,t),(0,o.validateForm)(g);let j=new FormData(g);return(0,c.isBlockedValueInParams)(y,j)?Promise.reject((0,u.blockedEmailError)()):await (0,m.isLimitRateHit)(location.pathname,h,_)?Promise.reject((0,p.limitRateError)()):(j.append("lib_version","4.3.3"),j.append("service_id",e),j.append("template_id",t),j.append("user_id",f),(0,r.sendPost)("/api/v1.0/email/send-form",j))};t.sendForm=sendForm},60931:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.send=void 0;let s=i(15938),r=i(84060),a=i(81158),o=i(2085),l=i(14844),d=i(61688),n=i(19466),c=i(27495),u=i(17134),m=i(20507),p=i(65414),send=async(e,t,i,b)=>{let v=(0,a.buildOptions)(b),f=v.publicKey||s.store.publicKey,P=v.blockHeadless||s.store.blockHeadless,_=s.store.storageProvider||v.storageProvider,y={...s.store.blockList,...v.blockList},h={...s.store.limitRate,...v.limitRate};return P&&(0,d.isHeadless)(navigator)?Promise.reject((0,n.headlessError)()):((0,o.validateParams)(f,e,t),(0,l.validateTemplateParams)(i),i&&(0,c.isBlockedValueInParams)(y,i))?Promise.reject((0,u.blockedEmailError)()):await (0,m.isLimitRateHit)(location.pathname,h,_)?Promise.reject((0,p.limitRateError)()):(0,r.sendPost)("/api/v1.0/email/send",JSON.stringify({lib_version:"4.3.3",user_id:f,service_id:e,template_id:t,template_params:i}),{"Content-type":"application/json"})};t.send=send},43348:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=void 0,t.EmailJSResponseStatus=class{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}},15938:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.store=void 0;let s=i(13765);t.store={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(0,s.createWebStorage)()}},81158:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.buildOptions=void 0,t.buildOptions=e=>e?"string"==typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{}},13765:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createWebStorage=void 0,t.createWebStorage=()=>{if("undefined"!=typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}}},27495:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isBlockedValueInParams=void 0;let s=i(9801),isBlockListDisabled=e=>!e.list?.length||!e.watchVariable,getValue=(e,t)=>e instanceof FormData?e.get(t):e[t];t.isBlockedValueInParams=(e,t)=>{if(isBlockListDisabled(e))return!1;(0,s.validateBlockListParams)(e.list,e.watchVariable);let i=getValue(t,e.watchVariable);return"string"==typeof i&&e.list.includes(i)}},61688:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isHeadless=void 0,t.isHeadless=e=>e.webdriver||!e.languages||0===e.languages.length},20507:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isLimitRateHit=void 0;let s=i(99366),getLeftTime=async(e,t,i)=>{let s=Number(await i.get(e)||0);return t-Date.now()+s},isLimitRateHit=async(e,t,i)=>{if(!t.throttle||!i)return!1;(0,s.validateLimitRateParams)(t.throttle,t.id);let r=t.id||e,a=await getLeftTime(r,t.throttle,i);return a>0||(await i.set(r,Date.now().toString()),!1)};t.isLimitRateHit=isLimitRateHit},9801:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validateBlockListParams=void 0,t.validateBlockListParams=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!=typeof t)throw"The BlockList watchVariable has to be a string"}},77265:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validateForm=void 0,t.validateForm=e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"}},99366:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validateLimitRateParams=void 0,t.validateLimitRateParams=(e,t)=>{if("number"!=typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!=typeof t)throw"The LimitRate ID has to be a string"}},2085:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validateParams=void 0,t.validateParams=(e,t,i)=>{if(!e||"string"!=typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!=typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!i||"string"!=typeof i)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"}},14844:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validateTemplateParams=void 0,t.validateTemplateParams=e=>{if(e&&"[object Object]"!==e.toString())throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"}},5986:e=>{e.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}},71298:(e,t)=>{"use strict";function NoopHead(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return NoopHead}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},52300:(e,t,i)=>{"use strict";let{createProxy:s}=i(95153);e.exports=s("E:\\RAJKUMAR\\EPICS-24-Samanvay-main\\EPICS-24-Samanvay-main\\node_modules\\next\\dist\\client\\link.js")},24353:(e,t,i)=>{"use strict";e.exports=i(52300)}};