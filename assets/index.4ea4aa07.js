var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,o=(e,o)=>{for(var i in o||(o={}))r.call(o,i)&&s(e,i,o[i]);if(t)for(var i of t(o))n.call(o,i)&&s(e,i,o[i]);return e},i=(e,t,r)=>(s(e,"symbol"!=typeof t?t+"":t,r),r);import{p as c,a,y as l,N as u}from"./vendor.dddff98d.js";import{r as p}from"./index.06df7f2c.js";class d extends c{render(){return a("div",{class:"_stack_h4ta0_1"},this.props.stack.map(((e,t)=>a("div",{class:"_message_h4ta0_13",onClick:()=>this.messageClick(t)},a("pre",null,e)))))}messageClick(e){this.props.stack.splice(e,1),this.setState({})}}var f=e=>{const t={},r={};async function n(n,s,o,i,c,a=!1){a?r[s]={resolve:i,reject:c}:s&&(t[s]={resolve:i,reject:c});try{await e.send(e.encode({method:n,id:s,args:o}))}catch(l){delete t[s],delete r[s],c(l)}a||s||i()}return e.onmessage=n=>{try{const s=e.decode(n);if(!("result"in s)&&!("error"in s))return;const{result:o,error:i,id:c}=s;if(c in t||c in r){const{resolve:e,reject:n}=t[c]||r[c];delete t[c],i?n(i):e(o)}}catch(s){}},Object.assign(((e,...t)=>{const r=p();if("function"!=typeof t[t.length-1])return new Promise(((s,o)=>n(e,r,t,s,o)));{const s=t.pop();n(e,r,t,(e=>s(null,e)),(e=>s(e)),!0)}}),{notify:(e,...t)=>new Promise(((r,s)=>n(e,null,t,r,s)))})};function h(e){return e}var g=e=>{const t={encode:h,decode:h,send:t=>e.send(t)};return e.onmessage=e=>t.onmessage(e),t};function m(e){const t={send(t){e.postMessage(t)}};return e.addEventListener("message",(({data:e})=>t.onmessage(e))),t}const y="undefined"!=typeof BigInt;function _(e){const t=e.toString(2).padStart(64,"0");return[parseInt(t.slice(0,32),2),parseInt(t.slice(-32),2)]}function b(e){return e.toString(2).padStart(32,"0")}const w=["10.0.0.0/8","127.0.0.0/8","172.16.0.0/12","192.168.0.0/16"],S=/^((.+\.local)|localhost|loopback)$/;function j(e){return Number.parseInt(e.split(".").map((e=>(+e).toString(16).padStart(2,"0"))).join(""),16)}function v(e,t){const[r,n]=t.split("/"),s=parseInt("".padStart(+n,"1").padEnd(32,"0"),2);const o=function(e,t){if(y)return Number(BigInt(e)&BigInt(t));const r=_(e),n=_(t);return parseInt(b((r[0]&n[0])>>>0)+b((r[1]&n[1])>>>0),2)}(j(r),s),i=o+function(e,t){if(y)return Number(BigInt(e)^BigInt(t));const r=_(e),n=_(t);return parseInt(b((r[0]^n[0])>>>0)+b((r[1]^n[1])>>>0),2)}(s,4294967295),c=j(e);return c>=o&&c<=i}const k=new URL("https://"+location.hash.slice(1));new class{constructor(e){this.local=function(e){if(!/^(\d+\.){3}\d+$/.test(e))return!1;const[t,r,n,s]=e.split(".").map((e=>+e<256));return t&&r&&n&&s}(e)?w.map((t=>v(e,t))).reduce(((e,t)=>e||t)):S.test(e)}}(k.hostname).local&&(k.protocol="http:");const x=f(g(m(new function(){return new Worker("/assets/api.547a7515.js",{type:"module"})})));function I(){let e=k.origin+k.pathname;return"/"!==e[e.length-1]&&(e+="/"),e}var O=new class e{constructor(t=I()){return new Proxy(Object.create(e.prototype),{get:(e,r)=>("string"!=typeof r||r in e||(e[r]=x.bind(null,r,t)),e[r]),has:(e,t)=>"string"==typeof t||t in e})}},E=new Map;class P extends c{constructor(){super(...arguments),i(this,"props",{children:[]})}render(){return a("div",{class:"_block_uw8t8_1"},this.props.children.map(G))}}var T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:P,render:function(e){return a(P,o({},e))}});const M="_wrap_180gg_1",B="_ph_180gg_6";class z extends c{constructor(){super(...arguments),i(this,"props",{placeholder:""})}render(){const{placeholder:e}=this.props;return a("div",{class:M},a("input",{class:"_input_180gg_18",placeholder:" "}),a("div",{class:B},e))}}var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:z,render:function(e){return a(z,o({},e))}});const U=f(g(m(new function(){return new Worker("/assets/worker.143d1a9c.js",{type:"module"})})));class C extends c{constructor(){super(...arguments),i(this,"props",{url:""})}render(){const{url:e}=this.props;return(async(e,t)=>{/^\.\.?\/./.test(e)&&(e=new URL(e,t).toString()),await U("exec",e)})(e),null}}var N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:C,render:function(e){return a(C,o({},e))}});const R=document.head.querySelector('link[rel="shortcut icon"]'),W=document.head.querySelector("title"),q=R.getAttribute("href"),A=W.innerText;class F extends c{constructor(){super(...arguments),i(this,"props",{title:"",icon:"",children:[]})}render(){const{children:e,title:t,icon:r}=this.props;return W.innerText=t||A,R.setAttribute("href",r?new URL(r,I()).href:q),e.map(G)}}const $={"./block/index.jsx":T,"./input/index.jsx":L,"./module/index.jsx":N,"./page/index.jsx":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:F,render:function(e){return E.get("setPage")(a(F,o({},e))),null}})},D={};for(const K in $)D[K.slice(2,-10)]=$[K].render;var V,G=(V=function(e){if("string"!=typeof e.type)throw new TypeError('"type" field is not of type string');if(e.type in D)return D[e.type](e);throw new TypeError('field "type" is not valid. Valid ones are: '+Object.keys(D).join(", "))},function(...e){try{return V.apply(this,e)}catch(t){throw E.get("showError")(t),t}});let H=null;class J extends c{constructor(){super(...arguments),i(this,"state",{errorStack:[]})}componentDidMount(){E.set("showError",(e=>{"string"!=typeof e&&"string"==typeof e.stack&&(e=e.stack),this.state.errorStack.push(e),this.setState({}),setTimeout(this.removeFirstError.bind(this),3e3)})),E.set("setPage",(e=>{H=e,this.setState({})}))}componentWillUnmount(){E.set("showError",(()=>{})),E.set("setPage",(e=>H=e))}removeFirstError(){this.state.errorStack.shift(),this.setState({})}render(){return a(l,null,H,a(d,{stack:this.state.errorStack}))}}O.getIndex().then(G),u(a(J,null),document.body);
