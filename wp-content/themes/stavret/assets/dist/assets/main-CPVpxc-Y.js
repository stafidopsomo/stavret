import{r as d,M as B,j as r,i as z,u as U,P as H,a as Z,b as V,L as X,m as b,c as W,d as G}from"./use-reduced-motion-DI1xwXTl.js";function _(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Q(...e){return t=>{let o=!1;const l=e.map(i=>{const s=_(i,t);return!o&&typeof s=="function"&&(o=!0),s});if(o)return()=>{for(let i=0;i<l.length;i++){const s=l[i];typeof s=="function"?s():_(e[i],null)}}}}function K(...e){return d.useCallback(Q(...e),e)}class q extends d.Component{getSnapshotBeforeUpdate(t){const o=this.props.childRef.current;if(z(o)&&t.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const l=o.offsetParent,i=z(l)&&l.offsetWidth||0,s=z(l)&&l.offsetHeight||0,a=getComputedStyle(o),n=this.props.sizeRef.current;n.height=parseFloat(a.height),n.width=parseFloat(a.width),n.top=o.offsetTop,n.left=o.offsetLeft,n.right=i-n.width-n.left,n.bottom=s-n.height-n.top}return null}componentDidUpdate(){}render(){return this.props.children}}function J({children:e,isPresent:t,anchorX:o,anchorY:l,root:i,pop:s}){var c;const a=d.useId(),n=d.useRef(null),m=d.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:p}=d.useContext(B),h=((c=e.props)==null?void 0:c.ref)??(e==null?void 0:e.ref),w=K(n,h);return d.useInsertionEffect(()=>{const{width:k,height:f,top:u,left:y,right:M,bottom:C}=m.current;if(t||s===!1||!n.current||!k||!f)return;const S=o==="left"?`left: ${y}`:`right: ${M}`,L=l==="bottom"?`bottom: ${C}`:`top: ${u}`;n.current.dataset.motionPopId=a;const v=document.createElement("style");p&&(v.nonce=p);const j=i??document.head;return j.appendChild(v),v.sheet&&v.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${k}px !important;
            height: ${f}px !important;
            ${S}px !important;
            ${L}px !important;
          }
        `),()=>{var R;(R=n.current)==null||R.removeAttribute("data-motion-pop-id"),j.contains(v)&&j.removeChild(v)}},[t]),r.jsx(q,{isPresent:t,childRef:n,sizeRef:m,pop:s,children:s===!1?e:d.cloneElement(e,{ref:w})})}const t5=({children:e,initial:t,isPresent:o,onExitComplete:l,custom:i,presenceAffectsLayout:s,mode:a,anchorX:n,anchorY:m,root:p})=>{const h=U(e5),w=d.useId();let c=!0,k=d.useMemo(()=>(c=!1,{id:w,initial:t,isPresent:o,custom:i,onExitComplete:f=>{h.set(f,!0);for(const u of h.values())if(!u)return;l&&l()},register:f=>(h.set(f,!1),()=>h.delete(f))}),[o,h,l]);return s&&c&&(k={...k}),d.useMemo(()=>{h.forEach((f,u)=>h.set(u,!1))},[o]),d.useEffect(()=>{!o&&!h.size&&l&&l()},[o]),e=r.jsx(J,{pop:a==="popLayout",isPresent:o,anchorX:n,anchorY:m,root:p,children:e}),r.jsx(H.Provider,{value:k,children:e})};function e5(){return new Map}const I=e=>e.key||"";function D(e){const t=[];return d.Children.forEach(e,o=>{d.isValidElement(o)&&t.push(o)}),t}const r5=({children:e,custom:t,initial:o=!0,onExitComplete:l,presenceAffectsLayout:i=!0,mode:s="sync",propagate:a=!1,anchorX:n="left",anchorY:m="top",root:p})=>{const[h,w]=Z(a),c=d.useMemo(()=>D(e),[e]),k=a&&!h?[]:c.map(I),f=d.useRef(!0),u=d.useRef(c),y=U(()=>new Map),M=d.useRef(new Set),[C,S]=d.useState(c),[L,v]=d.useState(c);V(()=>{f.current=!1,u.current=c;for(let $=0;$<L.length;$++){const x=I(L[$]);k.includes(x)?(y.delete(x),M.current.delete(x)):y.get(x)!==!0&&y.set(x,!1)}},[L,k.length,k.join("-")]);const j=[];if(c!==C){let $=[...c];for(let x=0;x<L.length;x++){const A=L[x],T=I(A);k.includes(T)||($.splice(x,0,A),j.push(A))}return s==="wait"&&j.length&&($=j),v(D($)),S(c),null}const{forceRender:R}=d.useContext(X);return r.jsx(r.Fragment,{children:L.map($=>{const x=I($),A=a&&!h?!1:c===L||k.includes(x),T=()=>{if(M.current.has(x))return;if(y.has(x))M.current.add(x),y.set(x,!0);else return;let P=!0;y.forEach(Y=>{Y||(P=!1)}),P&&(R==null||R(),v(u.current),a&&(w==null||w()),l&&l())};return r.jsx(t5,{isPresent:A,initial:!f.current||o?void 0:!1,custom:t,presenceAffectsLayout:i,mode:s,root:p,onExitComplete:A?void 0:T,anchorX:n,anchorY:m,children:$},x)})})};function o5({texts:e,morphTime:t=1,cooldownTime:o=.25,className:l,textClassName:i}){const s=d.useRef(null),a=d.useRef(null);return d.useEffect(()=>{let n=e.length-1,m=new Date,p=0,h=o,w;const c=y=>{s.current&&a.current&&(a.current.style.filter=`blur(${Math.min(8/y-8,100)}px)`,a.current.style.opacity=`${Math.pow(y,.4)*100}%`,y=1-y,s.current.style.filter=`blur(${Math.min(8/y-8,100)}px)`,s.current.style.opacity=`${Math.pow(y,.4)*100}%`)},k=()=>{p=0,s.current&&a.current&&(a.current.style.filter="",a.current.style.opacity="100%",s.current.style.filter="",s.current.style.opacity="0%")},f=()=>{p-=h,h=0;let y=p/t;y>1&&(h=o,y=1),c(y)};function u(){w=requestAnimationFrame(u);const y=new Date,M=h>0,C=(y.getTime()-m.getTime())/1e3;m=y,h-=C,h<=0?(M&&(n=(n+1)%e.length,s.current&&a.current&&(s.current.textContent=e[n%e.length],a.current.textContent=e[(n+1)%e.length])),f()):k()}return u(),()=>cancelAnimationFrame(w)},[e,t,o]),r.jsxs("div",{className:`relative ${l??""}`,children:[r.jsx("svg",{className:"absolute h-0 w-0","aria-hidden":"true",focusable:"false",children:r.jsx("defs",{children:r.jsx("filter",{id:"threshold",children:r.jsx("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:`1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140`})})})}),r.jsxs("div",{className:"flex items-center justify-center",style:{filter:"url(#threshold)"},children:[r.jsx("span",{ref:s,className:`absolute inline-block select-none text-center ${i??""}`,style:{fontFamily:"var(--font-heading)"}}),r.jsx("span",{ref:a,className:`absolute inline-block select-none text-center ${i??""}`,style:{fontFamily:"var(--font-heading)"}})]})]})}function g(e){return`data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' width='400' height='300'><rect width='400' height='300' fill='%230a0a0a'/>${e}</svg>`}const i5=g(`
  ${Array.from({length:15}).map((e,t)=>`<line x1='${t*40}' y1='0' x2='${t*40-200}' y2='300' stroke='rgba(255,255,255,0.05)' stroke-width='1'/><line x1='${t*40+200}' y1='0' x2='${t*40}' y2='300' stroke='rgba(255,255,255,0.05)' stroke-width='1'/>`).join("")}
  <polygon points='200,40 320,100 320,220 200,280 80,220 80,100' fill='rgba(255,255,255,0.02)' stroke='rgba(255,255,255,0.6)' stroke-width='2'/>
  <line x1='80' y1='100' x2='200' y2='160' stroke='rgba(255,255,255,0.6)' stroke-width='2'/>
  <line x1='320' y1='100' x2='200' y2='160' stroke='rgba(255,255,255,0.6)' stroke-width='2'/>
  <line x1='200' y1='280' x2='200' y2='160' stroke='rgba(255,255,255,0.6)' stroke-width='2'/>
  <polygon points='200,80 280,120 200,160 120,120' fill='rgba(255,255,255,0.05)' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>
  <polygon points='200,120 280,160 200,200 120,160' fill='rgba(255,255,255,0.05)' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>
  <polygon points='200,160 280,200 200,240 120,200' fill='rgba(255,255,255,0.05)' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>
  <line x1='120' y1='120' x2='120' y2='200' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
  <line x1='280' y1='120' x2='280' y2='200' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
  <line x1='200' y1='80' x2='200' y2='160' stroke='rgba(255,255,255,0.4)' stroke-width='1' stroke-dasharray='4 4'/>
  <text x='18' y='293' font-family='monospace' font-size='7' letter-spacing='2.5' fill='rgba(255,255,255,0.22)'>ISOMETRIC MASSING</text>
`),s5=g(`
  <polygon points='200,30 270,65 200,100 130,65' fill='rgba(255,255,255,0.08)' stroke='rgba(255,255,255,0.6)' stroke-width='1.5'/>
  <line x1='200' y1='100' x2='200' y2='140' stroke='rgba(255,255,255,0.4)' stroke-width='1' stroke-dasharray='3 3'/>
  <line x1='130' y1='65' x2='130' y2='105' stroke='rgba(255,255,255,0.4)' stroke-width='1' stroke-dasharray='3 3'/>
  <line x1='270' y1='65' x2='270' y2='105' stroke='rgba(255,255,255,0.4)' stroke-width='1' stroke-dasharray='3 3'/>
  <polygon points='200,70 270,105 200,140 130,105' fill='rgba(255,255,255,0.05)' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>
  <rect x='190' y='95' width='20' height='20' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='1' transform='rotate(45, 200, 105) scale(1, 0.5)'/>
  <line x1='200' y1='140' x2='200' y2='190' stroke='rgba(255,255,255,0.4)' stroke-width='1' stroke-dasharray='3 3'/>
  <polygon points='200,130 290,175 200,220 110,175' fill='rgba(255,255,255,0.02)' stroke='rgba(255,255,255,0.6)' stroke-width='2'/>
  <polygon points='200,150 290,195 200,240 110,195' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
  <line x1='110' y1='175' x2='110' y2='195' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
  <line x1='290' y1='175' x2='290' y2='195' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
  <line x1='200' y1='220' x2='200' y2='240' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
  <polygon points='200,230 310,285 200,340 90,285' fill='rgba(255,255,255,0.03)'/>
  <text x='18' y='293' font-family='monospace' font-size='7' letter-spacing='2.5' fill='rgba(255,255,255,0.22)'>EXPLODED AXONOMETRIC</text>
`),n5=g(`
  <polygon points='200,40 280,80 200,120 120,80' fill='rgba(255,255,255,0.02)' stroke='rgba(255,255,255,0.3)' stroke-width='1'/>
  <line x1='120' y1='80' x2='120' y2='240' stroke='rgba(255,255,255,0.3)' stroke-width='1'/>
  <line x1='280' y1='80' x2='280' y2='240' stroke='rgba(255,255,255,0.3)' stroke-width='1'/>
  ${Array.from({length:8}).map((e,t)=>`
    <polygon points='${160+t*5},${160-t*10} ${180+t*5},${170-t*10} ${180+t*5},${175-t*10} ${160+t*5},${165-t*10}' fill='rgba(255,255,255,0.08)' stroke='rgba(255,255,255,0.6)' stroke-width='1'/>
    <polygon points='${160+t*5},${160-t*10} ${140+t*5},${150-t*10} ${160+t*5},${140-t*10} ${180+t*5},${170-t*10}' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
  `).join("")}
  <polygon points='200,100 240,120 200,140 160,120' fill='rgba(255,255,255,0.1)' stroke='rgba(255,255,255,0.6)' stroke-width='1.5'/>
  ${Array.from({length:8}).map((e,t)=>`
    <polygon points='${200-t*5},${140+t*10} ${180-t*5},${150+t*10} ${180-t*5},${155+t*10} ${200-t*5},${145+t*10}' fill='rgba(255,255,255,0.08)' stroke='rgba(255,255,255,0.6)' stroke-width='1'/>
  `).join("")}
  <text x='18' y='293' font-family='monospace' font-size='7' letter-spacing='2.5' fill='rgba(255,255,255,0.22)'>3D CIRCULATION CORE</text>
`),a5=g(`
  <line x1='10' y1='10' x2='180' y2='130' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>
  <line x1='390' y1='10' x2='220' y2='130' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>
  <line x1='10' y1='290' x2='180' y2='170' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>
  <line x1='390' y1='290' x2='220' y2='170' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>
  <rect x='10' y='10' width='380' height='280' fill='none' stroke='rgba(255,255,255,0.2)' stroke-width='1'/>
  <rect x='60' y='45' width='280' height='210' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='1.5'/>
  <rect x='120' y='88' width='160' height='124' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='2'/>
  <rect x='180' y='130' width='40' height='40' fill='rgba(255,255,255,0.05)' stroke='rgba(255,255,255,0.7)' stroke-width='2.5'/>
  <line x1='60' y1='290' x2='190' y2='170' stroke='rgba(255,255,255,0.2)' stroke-width='1'/>
  <line x1='130' y1='290' x2='195' y2='170' stroke='rgba(255,255,255,0.2)' stroke-width='1'/>
  <line x1='200' y1='290' x2='200' y2='170' stroke='rgba(255,255,255,0.2)' stroke-width='1'/>
  <line x1='270' y1='290' x2='205' y2='170' stroke='rgba(255,255,255,0.2)' stroke-width='1'/>
  <line x1='340' y1='290' x2='210' y2='170' stroke='rgba(255,255,255,0.2)' stroke-width='1'/>
  <circle cx='200' cy='150' r='1' fill='rgba(255,255,255,0.8)'/>
  <text x='18' y='293' font-family='monospace' font-size='7' letter-spacing='2.5' fill='rgba(255,255,255,0.22)'>1-POINT CORRIDOR PERSPECTIVE</text>
`),l5=g(`
  <polygon points='200,120 320,180 200,240 80,180' fill='rgba(255,255,255,0.03)' stroke='none'/>
  <polygon points='320,180 200,240 200,200 320,140' fill='rgba(255,255,255,0.08)' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
  <polygon points='200,240 80,180 80,140 200,200' fill='rgba(255,255,255,0.02)' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
  <polygon points='200,80 320,140 200,200 80,140' fill='none' stroke='rgba(255,255,255,0.7)' stroke-width='2.5'/>
  <polygon points='200,88 310,143 200,198 90,143' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
  <line x1='145' y1='115' x2='145' y2='155' stroke='rgba(255,255,255,0.5)' stroke-width='2'/>
  <line x1='145' y1='155' x2='235' y2='155' stroke='rgba(255,255,255,0.5)' stroke-width='2'/>
  <line x1='235' y1='155' x2='235' y2='115' stroke='rgba(255,255,255,0.5)' stroke-width='2'/>
  <polygon points='145,155 165,145 165,160 145,170' fill='%230a0a0a' stroke='rgba(255,255,255,0.5)' stroke-width='1'/>
  <text x='18' y='293' font-family='monospace' font-size='7' letter-spacing='2.5' fill='rgba(255,255,255,0.22)'>AXONOMETRIC FLOOR PLAN</text>
`),d5=g(`
  <line x1='50' y1='225' x2='350' y2='75' stroke='rgba(255,255,255,0.2)' stroke-width='1' stroke-dasharray='5 5'/>
  <line x1='50' y1='75' x2='350' y2='225' stroke='rgba(255,255,255,0.2)' stroke-width='1' stroke-dasharray='5 5'/>
  <line x1='200' y1='10' x2='200' y2='290' stroke='rgba(255,255,255,0.2)' stroke-width='1' stroke-dasharray='5 5'/>
  <circle cx='200' cy='150' r='25' fill='rgba(255,255,255,0.05)' stroke='rgba(255,255,255,0.7)' stroke-width='2'/>
  <ellipse cx='200' cy='150' rx='25' ry='12' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
  <polygon points='182,132 120,70 110,80 172,142' fill='rgba(255,255,255,0.08)' stroke='rgba(255,255,255,0.6)' stroke-width='1.5'/>
  <polygon points='218,132 280,70 290,80 228,142' fill='rgba(255,255,255,0.03)' stroke='rgba(255,255,255,0.6)' stroke-width='1.5'/>
  <polygon points='218,168 280,230 290,220 228,158' fill='rgba(255,255,255,0.08)' stroke='rgba(255,255,255,0.6)' stroke-width='1.5'/>
  <polygon points='182,168 120,230 110,220 172,158' fill='rgba(255,255,255,0.03)' stroke='rgba(255,255,255,0.6)' stroke-width='1.5'/>
  <rect x='190' y='50' width='20' height='75' fill='rgba(255,255,255,0.05)' stroke='rgba(255,255,255,0.6)' stroke-width='1.5'/>
  <rect x='190' y='175' width='20' height='75' fill='rgba(255,255,255,0.05)' stroke='rgba(255,255,255,0.6)' stroke-width='1.5'/>
  <circle cx='200' cy='150' r='4' fill='rgba(255,255,255,0.8)'/>
  <text x='18' y='293' font-family='monospace' font-size='7' letter-spacing='2.5' fill='rgba(255,255,255,0.22)'>3D SPACE FRAME NODE</text>
`),g5=g(`
  <polygon points='200,140 340,210 200,280 60,210' fill='rgba(255,255,255,0.02)' stroke='rgba(255,255,255,0.2)' stroke-width='1'/>
  <polygon points='160,50 200,70 200,190 160,170' fill='rgba(255,255,255,0.04)' stroke='rgba(255,255,255,0.6)' stroke-width='1.5'/>
  <polygon points='200,70 240,50 240,170 200,190' fill='rgba(255,255,255,0.08)' stroke='rgba(255,255,255,0.6)' stroke-width='1.5'/>
  <polygon points='200,30 240,50 200,70 160,50' fill='rgba(255,255,255,0.1)' stroke='rgba(255,255,255,0.8)' stroke-width='2'/>
  <polygon points='240,110 280,130 280,210 240,190' fill='rgba(255,255,255,0.04)' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>
  <polygon points='280,130 320,110 320,190 280,210' fill='rgba(255,255,255,0.08)' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>
  <polygon points='280,90 320,110 280,130 240,110' fill='rgba(255,255,255,0.1)' stroke='rgba(255,255,255,0.7)' stroke-width='2'/>
  <polygon points='120,150 160,170 160,230 120,210' fill='rgba(255,255,255,0.04)' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>
  <polygon points='160,170 200,150 200,210 160,230' fill='rgba(255,255,255,0.08)' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>
  <polygon points='160,130 200,150 160,170 120,150' fill='rgba(255,255,255,0.1)' stroke='rgba(255,255,255,0.7)' stroke-width='2'/>
  <text x='18' y='293' font-family='monospace' font-size='7' letter-spacing='2.5' fill='rgba(255,255,255,0.22)'>URBAN MASSING ISOMETRIC</text>
`),h5=g(`
  <polygon points='200,280 340,210 200,140 60,210' fill='rgba(255,255,255,0.02)' stroke='rgba(255,255,255,0.3)' stroke-width='1.5'/>
  <polygon points='200,260 320,200 200,140 80,200' fill='rgba(255,255,255,0.03)' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>
  <polygon points='200,240 300,190 200,140 100,190' fill='rgba(255,255,255,0.04)' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>
  <polygon points='200,220 280,180 200,140 120,180' fill='rgba(255,255,255,0.05)' stroke='rgba(255,255,255,0.6)' stroke-width='1.5'/>
  <polygon points='200,200 260,170 200,140 140,170' fill='rgba(255,255,255,0.06)' stroke='rgba(255,255,255,0.7)' stroke-width='1.5'/>
  <line x1='140' y1='170' x2='140' y2='190' stroke='rgba(255,255,255,0.3)' stroke-width='1'/>
  <line x1='260' y1='170' x2='260' y2='190' stroke='rgba(255,255,255,0.3)' stroke-width='1'/>
  <line x1='200' y1='200' x2='200' y2='280' stroke='rgba(255,255,255,0.3)' stroke-width='1'/>
  <polygon points='200,110 230,125 200,140 170,125' fill='rgba(255,255,255,0.2)' stroke='rgba(255,255,255,0.9)' stroke-width='2'/>
  <polygon points='170,125 200,140 200,170 170,155' fill='rgba(255,255,255,0.08)' stroke='rgba(255,255,255,0.7)' stroke-width='1.5'/>
  <polygon points='200,140 230,125 230,155 200,170' fill='rgba(255,255,255,0.04)' stroke='rgba(255,255,255,0.7)' stroke-width='1.5'/>
  <text x='18' y='293' font-family='monospace' font-size='7' letter-spacing='2.5' fill='rgba(255,255,255,0.22)'>TOPOGRAPHY & SITE CONTOURS</text>
`),y5=g(`
  <polygon points='160,160 200,180 200,260 160,240' fill='rgba(255,255,255,0.03)' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>
  <polygon points='200,180 240,160 240,240 200,260' fill='rgba(255,255,255,0.07)' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>
  <polygon points='120,90 280,170 280,210 120,130' fill='rgba(255,255,255,0.05)' stroke='rgba(255,255,255,0.7)' stroke-width='2'/>
  <polygon points='120,90 160,70 320,150 280,170' fill='rgba(255,255,255,0.1)' stroke='rgba(255,255,255,0.7)' stroke-width='2'/>
  <polygon points='280,170 320,150 320,190 280,210' fill='rgba(255,255,255,0.08)' stroke='rgba(255,255,255,0.7)' stroke-width='2'/>
  <line x1='120' y1='90' x2='160' y2='20' stroke='rgba(255,255,255,0.4)' stroke-width='1' stroke-dasharray='4 2'/>
  <line x1='280' y1='170' x2='240' y2='20' stroke='rgba(255,255,255,0.4)' stroke-width='1' stroke-dasharray='4 2'/>
  <circle cx='160' cy='20' r='3' fill='none' stroke='rgba(255,255,255,0.8)' stroke-width='1.5'/>
  <circle cx='240' cy='20' r='3' fill='none' stroke='rgba(255,255,255,0.8)' stroke-width='1.5'/>
  <text x='18' y='293' font-family='monospace' font-size='7' letter-spacing='2.5' fill='rgba(255,255,255,0.22)'>CANTILEVER STRUCTURAL DIAGRAM</text>
`),c5=g(`
  ${Array.from({length:20}).map((e,t)=>`
    <line x1='${50+t*15}' y1='200' x2='${350-t*15}' y2='80' stroke='rgba(255,255,255,${.1+t/40})' stroke-width='1'/>
    <line x1='${50+t*15}' y1='80' x2='${350-t*15}' y2='200' stroke='rgba(255,255,255,${.1+t/40})' stroke-width='1'/>
  `).join("")}
  <polygon points='50,80 350,80 350,200 50,200' fill='none' stroke='rgba(255,255,255,0.6)' stroke-width='2'/>
  <line x1='50' y1='200' x2='50' y2='250' stroke='rgba(255,255,255,0.5)' stroke-width='2'/>
  <line x1='350' y1='200' x2='350' y2='250' stroke='rgba(255,255,255,0.5)' stroke-width='2'/>
  <line x1='200' y1='140' x2='200' y2='250' stroke='rgba(255,255,255,0.3)' stroke-width='1' stroke-dasharray='5 5'/>
  <ellipse cx='200' cy='250' rx='150' ry='20' fill='rgba(255,255,255,0.02)' stroke='rgba(255,255,255,0.2)' stroke-width='1'/>
  <text x='18' y='293' font-family='monospace' font-size='7' letter-spacing='2.5' fill='rgba(255,255,255,0.22)'>PARAMETRIC RULED SURFACE</text>
`),x5=g(`
  <polygon points='100,240 300,140 320,150 120,250' fill='rgba(255,255,255,0.05)' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>
  ${Array.from({length:4}).map((e,t)=>`
    <polygon points='${140+t*50},${220-t*25} ${145+t*50},${217-t*25} ${145+t*50},${77-t*25} ${140+t*50},${80-t*25}' fill='rgba(255,255,255,0.1)' stroke='rgba(255,255,255,0.7)' stroke-width='1.5'/>
  `).join("")}
  ${Array.from({length:3}).map((e,t)=>`
    <polygon points='${90+t*50},${205-t*25} ${130+t*50},${185-t*25} ${130+t*50},${65-t*25} ${90+t*50},${85-t*25}' fill='rgba(255,255,255,0.04)' stroke='rgba(255,255,255,0.8)' stroke-width='1'/>
  `).join("")}
  <text x='18' y='293' font-family='monospace' font-size='7' letter-spacing='2.5' fill='rgba(255,255,255,0.22)'>CURTAIN WALL EXPLODED ISO</text>
`),k5=g(`
  <line x1='80' y1='200' x2='320' y2='120' stroke='rgba(255,255,255,0.7)' stroke-width='2'/>
  <line x1='120' y1='220' x2='360' y2='140' stroke='rgba(255,255,255,0.7)' stroke-width='2'/>
  <line x1='80' y1='140' x2='320' y2='60' stroke='rgba(255,255,255,0.7)' stroke-width='2'/>
  ${Array.from({length:6}).map((e,t)=>{const o=80+t*40,l=200-t*13.33,i=120+t*40,s=220-t*13.33,a=80+t*40+20,n=140-t*13.33-6.66;return`
      <line x1='${o}' y1='${l}' x2='${i}' y2='${s}' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>
      <line x1='${o}' y1='${l}' x2='${a}' y2='${n}' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
      <line x1='${i}' y1='${s}' x2='${a}' y2='${n}' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
      <circle cx='${o}' cy='${l}' r='3' fill='rgba(10,10,10,1)' stroke='rgba(255,255,255,0.8)' stroke-width='1'/>
      <circle cx='${i}' cy='${s}' r='3' fill='rgba(10,10,10,1)' stroke='rgba(255,255,255,0.8)' stroke-width='1'/>
      <circle cx='${a}' cy='${n}' r='3' fill='rgba(10,10,10,1)' stroke='rgba(255,255,255,0.8)' stroke-width='1'/>
    `}).join("")}
  <text x='18' y='293' font-family='monospace' font-size='7' letter-spacing='2.5' fill='rgba(255,255,255,0.22)'>STRUCTURAL TRUSS ISOMETRIC</text>
`),f5=g(`
  ${Array.from({length:18}).map((e,t)=>`<line x1='${t*20+20}' y1='20' x2='${t*20+20}' y2='270' stroke='rgba(255,255,255,0.05)' stroke-width='1'/>`).join("")}
  ${Array.from({length:13}).map((e,t)=>`<line x1='20' y1='${t*20+20}' x2='380' y2='${t*20+20}' stroke='rgba(255,255,255,0.05)' stroke-width='1'/>`).join("")}
  
  <path d='M40 40 L340 40 L340 240 L40 240 Z' fill='none' stroke='rgba(255,255,255,0.6)' stroke-width='2.5'/>
  <path d='M44 44 L336 44 L336 236 L44 236 Z' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
  
  <rect x='160' y='100' width='80' height='60' fill='rgba(255,255,255,0.08)' stroke='rgba(255,255,255,0.5)' stroke-width='2'/>
  <line x1='160' y1='100' x2='240' y2='160' stroke='rgba(255,255,255,0.2)' stroke-width='1'/>
  <line x1='240' y1='100' x2='160' y2='160' stroke='rgba(255,255,255,0.2)' stroke-width='1'/>
  
  <path d='M100 44 L100 140 M100 180 L100 236 M280 44 L280 100 M240 160 L240 236 M100 120 L160 120 M280 180 L336 180' fill='none' stroke='rgba(255,255,255,0.5)' stroke-width='2'/>
  
  <path d='M100 140 A 40 40 0 0 1 140 180' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='1' stroke-dasharray='3 3'/>
  <line x1='100' y1='140' x2='140' y2='140' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>
  
  <path d='M280 100 A 40 40 0 0 0 240 60' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='1' stroke-dasharray='3 3'/>
  <line x1='280' y1='100' x2='240' y2='100' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>

  <line x1='40' y1='25' x2='340' y2='25' stroke='rgba(255,255,255,0.3)' stroke-width='1'/>
  <line x1='40' y1='20' x2='40' y2='30' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>
  <line x1='160' y1='20' x2='160' y2='30' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>
  <line x1='240' y1='20' x2='240' y2='30' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>
  <line x1='340' y1='20' x2='340' y2='30' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>

  <text x='18' y='293' font-family='monospace' font-size='7' letter-spacing='2.5' fill='rgba(255,255,255,0.22)'>FLOOR PLAN  1:100</text>
`),b5=g(`
  <line x1='10' y1='260' x2='390' y2='260' stroke='rgba(255,255,255,0.7)' stroke-width='2'/>
  <line x1='10' y1='264' x2='390' y2='264' stroke='rgba(255,255,255,0.2)' stroke-width='1'/>
  
  <rect x='80' y='50' width='240' height='210' fill='none' stroke='rgba(255,255,255,0.6)' stroke-width='2'/>
  
  ${Array.from({length:6}).map((e,t)=>`<line x1='80' y1='${50+t*35}' x2='320' y2='${50+t*35}' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>`).join("")}
  ${Array.from({length:11}).map((e,t)=>`<line x1='${100+t*20}' y1='50' x2='${100+t*20}' y2='260' stroke='rgba(255,255,255,0.2)' stroke-width='1'/>`).join("")}
  
  <path d='M80 50 L140 120 M140 50 L80 120 M140 120 L200 190 M200 120 L140 190 M200 50 L260 120 M260 50 L200 120 M260 120 L320 190 M320 120 L260 190' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='1.5'/>
  
  <rect x='70' y='35' width='260' height='15' fill='rgba(255,255,255,0.08)' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>
  <line x1='80' y1='35' x2='80' y2='20' stroke='rgba(255,255,255,0.3)' stroke-width='1'/>
  <line x1='320' y1='35' x2='320' y2='20' stroke='rgba(255,255,255,0.3)' stroke-width='1'/>
  
  <rect x='160' y='225' width='80' height='35' fill='rgba(255,255,255,0.05)' stroke='rgba(255,255,255,0.6)' stroke-width='2'/>
  <line x1='200' y1='225' x2='200' y2='260' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>

  ${[50,120,190,260].map(e=>`<circle cx='60' cy='${e}' r='3' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='1'/><line x1='63' y1='${e}' x2='75' y2='${e}' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>`).join("")}

  <text x='18' y='293' font-family='monospace' font-size='7' letter-spacing='2.5' fill='rgba(255,255,255,0.22)'>NORTH ELEVATION  1:100</text>
`),p5=g(`
  <path d='M20 230 Q 80 230, 100 240 T 300 240 T 380 235' fill='none' stroke='rgba(255,255,255,0.7)' stroke-width='2.5'/>
  ${Array.from({length:30}).map((e,t)=>`<line x1='${t*13}' y1='240' x2='${t*13-15}' y2='270' stroke='rgba(255,255,255,0.1)' stroke-width='1'/>`).join("")}

  <rect x='80' y='60' width='240' height='170' fill='rgba(255,255,255,0.02)' stroke='rgba(255,255,255,0.6)' stroke-width='2'/>
  <line x1='80' y1='120' x2='320' y2='120' stroke='rgba(255,255,255,0.6)' stroke-width='2'/>
  <line x1='80' y1='180' x2='320' y2='180' stroke='rgba(255,255,255,0.6)' stroke-width='2'/>

  <line x1='80' y1='130' x2='320' y2='130' stroke='rgba(255,255,255,0.2)' stroke-width='1' stroke-dasharray='4 2'/>
  <line x1='80' y1='190' x2='320' y2='190' stroke='rgba(255,255,255,0.2)' stroke-width='1' stroke-dasharray='4 2'/>

  <rect x='180' y='60' width='40' height='170' fill='rgba(255,255,255,0.08)' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>
  <line x1='180' y1='230' x2='180' y2='270' stroke='rgba(255,255,255,0.5)' stroke-width='2' stroke-dasharray='4 4'/>
  <line x1='220' y1='230' x2='220' y2='270' stroke='rgba(255,255,255,0.5)' stroke-width='2' stroke-dasharray='4 4'/>

  <path d='M80 60 L140 30 L200 60 L260 30 L320 60' fill='none' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>
  <path d='M80 60 L140 60 L140 30 M200 60 L200 30 M260 60 L260 30 M320 60 L260 60' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='1'/>
  
  <circle cx='110' cy='165' r='2' fill='rgba(255,255,255,0.4)'/><line x1='110' y1='167' x2='110' y2='180' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
  <circle cx='280' cy='105' r='2' fill='rgba(255,255,255,0.4)'/><line x1='280' y1='107' x2='280' y2='120' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>

  <text x='18' y='293' font-family='monospace' font-size='7' letter-spacing='2.5' fill='rgba(255,255,255,0.22)'>SECTION A-A  1:100</text>
`),w5=g(`
  <path d='M-10 40 Q 150 20, 250 100 T 410 160' fill='none' stroke='rgba(255,255,255,0.15)' stroke-width='1'/>
  <path d='M-10 80 Q 150 60, 250 140 T 410 200' fill='none' stroke='rgba(255,255,255,0.15)' stroke-width='1'/>
  <path d='M-10 120 Q 150 100, 250 180 T 410 240' fill='none' stroke='rgba(255,255,255,0.25)' stroke-width='1.5'/>
  <path d='M-10 160 Q 150 140, 250 220 T 410 280' fill='none' stroke='rgba(255,255,255,0.15)' stroke-width='1'/>

  <g transform='rotate(-15, 200, 150)'>
    <rect x='135' y='85' width='140' height='110' fill='rgba(255,255,255,0.03)'/>
    <rect x='130' y='80' width='140' height='110' fill='rgba(10,10,10,1)' stroke='rgba(255,255,255,0.7)' stroke-width='2.5'/>
    <rect x='140' y='90' width='120' height='90' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='1'/>
    <line x1='140' y1='90' x2='260' y2='180' stroke='rgba(255,255,255,0.2)' stroke-width='1'/>
    <line x1='260' y1='90' x2='140' y2='180' stroke='rgba(255,255,255,0.2)' stroke-width='1'/>
  </g>

  ${[[60,60],[90,40],[320,100],[350,130],[280,240],[100,220]].map(([e,t])=>`<circle cx='${e}' cy='${t}' r='12' fill='rgba(255,255,255,0.05)' stroke='rgba(255,255,255,0.4)' stroke-width='1' stroke-dasharray='2 2'/>
     <circle cx='${e}' cy='${t}' r='2' fill='rgba(255,255,255,0.5)'/>`).join("")}

  <circle cx='350' cy='40' r='15' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
  <path d='M350 20 L355 45 L345 45 Z' fill='rgba(255,255,255,0.6)'/>
  <text x='347' y='65' font-family='monospace' font-size='8' fill='rgba(255,255,255,0.5)'>N</text>

  <text x='18' y='293' font-family='monospace' font-size='7' letter-spacing='2.5' fill='rgba(255,255,255,0.22)'>SITE PLAN  1:500</text>
`),m5=g(`
  <path d='M80 40 L320 40 L320 260 L80 260 Z' fill='none' stroke='rgba(255,255,255,0.6)' stroke-width='2.5'/>
  <path d='M90 50 L310 50 L310 250 L90 250 Z' fill='none' stroke='rgba(255,255,255,0.2)' stroke-width='1'/>
  
  ${Array.from({length:12}).map((e,t)=>`<line x1='90' y1='${60+t*15}' x2='180' y2='${60+t*15}' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>`).join("")}
  ${Array.from({length:12}).map((e,t)=>`<line x1='220' y1='${240-t*15}' x2='310' y2='${240-t*15}' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>`).join("")}
  
  <rect x='90' y='50' width='220' height='30' fill='rgba(255,255,255,0.03)' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
  <rect x='90' y='220' width='220' height='30' fill='rgba(255,255,255,0.03)' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
  
  <path d='M180 80 L180 220 M220 80 L220 220' fill='none' stroke='rgba(255,255,255,0.7)' stroke-width='2'/>
  <path d='M170 80 L170 220 M230 80 L230 220' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='1'/>

  <path d='M135 70 L135 210 Q 135 235 180 235 L265 235 Q 265 235 265 210 L265 140' fill='none' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>
  <polygon points='265,135 260,145 270,145' fill='rgba(255,255,255,0.5)'/>

  <path d='M60 160 L100 130 L300 160 L340 130' fill='none' stroke='rgba(255,255,255,0.5)' stroke-width='1.5' stroke-dasharray='5 5'/>

  <text x='18' y='293' font-family='monospace' font-size='7' letter-spacing='2.5' fill='rgba(255,255,255,0.22)'>STAIRCASE DETAIL  1:50</text>
`),u5=g(`
  <rect x='40' y='30' width='320' height='240' fill='none' stroke='rgba(255,255,255,0.12)' stroke-width='1' stroke-dasharray='8 6'/>
  <circle cx='200' cy='150' r='102' fill='none' stroke='rgba(255,255,255,0.14)' stroke-width='1'/>
  <circle cx='200' cy='150' r='42' fill='none' stroke='rgba(255,255,255,0.12)' stroke-width='1'/>

  <line x1='200' y1='36' x2='200' y2='264' stroke='rgba(255,255,255,0.12)' stroke-width='1'/>
  <line x1='86' y1='150' x2='314' y2='150' stroke='rgba(255,255,255,0.12)' stroke-width='1'/>
  <line x1='108' y1='83' x2='292' y2='217' stroke='rgba(255,255,255,0.1)' stroke-width='1'/>
  <line x1='292' y1='83' x2='108' y2='217' stroke='rgba(255,255,255,0.1)' stroke-width='1'/>

  <polygon points='200,46 225,121 304,121 240,167 265,242 200,196 135,242 160,167 96,121 175,121'
    fill='rgba(255,255,255,0.08)' stroke='rgba(255,255,255,0.76)' stroke-width='2.5' stroke-linejoin='round'/>
  <polygon points='200,76 217,132 276,132 228,166 246,222 200,188 154,222 172,166 124,132 183,132'
    fill='none' stroke='rgba(255,255,255,0.28)' stroke-width='1.5' stroke-linejoin='round'/>

  ${[[200,46],[225,121],[304,121],[240,167],[265,242],[200,196],[135,242],[160,167],[96,121],[175,121]].map(([e,t])=>`<circle cx='${e}' cy='${t}' r='3.5' fill='rgba(10,10,10,1)' stroke='rgba(255,255,255,0.72)' stroke-width='1.5'/>`).join("")}

  <text x='18' y='293' font-family='monospace' font-size='7' letter-spacing='2.5' fill='rgba(255,255,255,0.22)'>STAR MARK  1:20</text>
`),$5=g(`
  ${[70,160,250,340].map(e=>`
    <line x1='${e}' y1='40' x2='${e}' y2='270' stroke='rgba(255,255,255,0.2)' stroke-width='1' stroke-dasharray='10 5 2 5'/>
    <circle cx='${e}' cy='25' r='10' fill='none' stroke='rgba(255,255,255,0.6)' stroke-width='1.5'/>
  `).join("")}
  ${[80,150,220].map(e=>`
    <line x1='40' y1='${e}' x2='370' y2='${e}' stroke='rgba(255,255,255,0.2)' stroke-width='1' stroke-dasharray='10 5 2 5'/>
    <circle cx='25' cy='${e}' r='10' fill='none' stroke='rgba(255,255,255,0.6)' stroke-width='1.5'/>
  `).join("")}
  
  <text x='67' y='28' font-family='monospace' font-size='10' fill='rgba(255,255,255,0.6)'>1</text>
  <text x='157' y='28' font-family='monospace' font-size='10' fill='rgba(255,255,255,0.6)'>2</text>
  <text x='247' y='28' font-family='monospace' font-size='10' fill='rgba(255,255,255,0.6)'>3</text>
  <text x='337' y='28' font-family='monospace' font-size='10' fill='rgba(255,255,255,0.6)'>4</text>
  <text x='22' y='83' font-family='monospace' font-size='10' fill='rgba(255,255,255,0.6)'>A</text>
  <text x='22' y='153' font-family='monospace' font-size='10' fill='rgba(255,255,255,0.6)'>B</text>
  <text x='22' y='223' font-family='monospace' font-size='10' fill='rgba(255,255,255,0.6)'>C</text>

  ${[70,160,250,340].map(e=>[80,150,220].map(t=>`
      <rect x='${e-6}' y='${t-8}' width='12' height='16' fill='rgba(10,10,10,1)' stroke='rgba(255,255,255,0.7)' stroke-width='1.5'/>
      <path d='M${e-6} ${t-8} L${e+6} ${t-8} M${e} ${t-8} L${e} ${t+8} M${e-6} ${t+8} L${e+6} ${t+8}' fill='none' stroke='rgba(255,255,255,0.9)' stroke-width='2'/>
    `).join("")).join("")}

  <text x='18' y='293' font-family='monospace' font-size='7' letter-spacing='2.5' fill='rgba(255,255,255,0.22)'>STRUCTURAL GRID & COLUMN LAYOUT</text>
`),L5=g(`
  <rect x='40' y='40' width='60' height='220' fill='rgba(255,255,255,0.03)' stroke='rgba(255,255,255,0.5)' stroke-width='2'/>
  ${Array.from({length:22}).map((e,t)=>`<line x1='40' y1='${50+t*10}' x2='100' y2='${40+t*10}' stroke='rgba(255,255,255,0.15)' stroke-width='1'/>`).join("")}
  
  <path d='M100 80 L140 80 L140 100 L120 100 L120 200 L140 200 L140 220 L100 220 Z' fill='rgba(255,255,255,0.08)' stroke='rgba(255,255,255,0.7)' stroke-width='2'/>
  <rect x='115' y='145' width='5' height='10' fill='rgba(255,255,255,0.4)'/>
  
  <rect x='130' y='100' width='6' height='100' fill='rgba(255,255,255,0.1)' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>
  <rect x='144' y='100' width='6' height='100' fill='rgba(255,255,255,0.1)' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>
  <line x1='136' y1='100' x2='144' y2='100' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>
  <line x1='136' y1='200' x2='144' y2='200' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>

  <circle cx='128' cy='105' r='2' fill='rgba(255,255,255,0.6)'/>
  <circle cx='128' cy='195' r='2' fill='rgba(255,255,255,0.6)'/>
  <circle cx='152' cy='105' r='2' fill='rgba(255,255,255,0.6)'/>
  <circle cx='152' cy='195' r='2' fill='rgba(255,255,255,0.6)'/>

  <path d='M140 120 L180 90 L280 90' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
  <text x='285' y='93' font-family='monospace' font-size='8' fill='rgba(255,255,255,0.4)'>DOUBLE GLAZING (Argon)</text>
  
  <path d='M117 150 L180 150 L280 150' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
  <text x='285' y='153' font-family='monospace' font-size='8' fill='rgba(255,255,255,0.4)'>THERMAL BREAK</text>

  <text x='18' y='293' font-family='monospace' font-size='7' letter-spacing='2.5' fill='rgba(255,255,255,0.22)'>CURTAIN WALL DETAIL  1:5</text>
`),v5=g(`
  <rect x='50' y='30' width='300' height='240' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>
  <line x1='235' y1='30' x2='235' y2='270' stroke='rgba(255,255,255,0.3)' stroke-width='1'/>
  <line x1='235' y1='144' x2='350' y2='144' stroke='rgba(255,255,255,0.3)' stroke-width='1'/>
  <line x1='306' y1='144' x2='306' y2='270' stroke='rgba(255,255,255,0.3)' stroke-width='1'/>
  
  <path d='M50 270 A 185 185 0 0 1 235 85 A 114 114 0 0 1 349 199 A 71 71 0 0 1 278 270 A 44 44 0 0 1 234 226' fill='none' stroke='rgba(255,255,255,0.7)' stroke-width='2'/>
  
  <line x1='50' y1='270' x2='350' y2='30' stroke='rgba(255,255,255,0.15)' stroke-width='1' stroke-dasharray='4 4'/>
  <line x1='50' y1='30' x2='235' y2='270' stroke='rgba(255,255,255,0.15)' stroke-width='1' stroke-dasharray='4 4'/>
  
  <circle cx='235' cy='144' r='3' fill='rgba(255,255,255,0.5)'/>
  <circle cx='306' cy='199' r='2' fill='rgba(255,255,255,0.5)'/>

  <text x='55' y='45' font-family='monospace' font-size='9' fill='rgba(255,255,255,0.5)'>a</text>
  <text x='240' y='45' font-family='monospace' font-size='9' fill='rgba(255,255,255,0.5)'>a+b</text>
  <text x='140' y='140' font-family='monospace' font-size='12' fill='rgba(255,255,255,0.2)'>φ = 1.618</text>

  <text x='18' y='293' font-family='monospace' font-size='7' letter-spacing='2.5' fill='rgba(255,255,255,0.22)'>GOLDEN RATIO PROPORTION STUDY</text>
`),M5=g(`
  <rect x='40' y='30' width='320' height='240' fill='none' stroke='rgba(255,255,255,0.2)' stroke-width='1' stroke-dasharray='8 4'/>
  
  <path d='M80 60 L320 60 L320 120 L260 120 L260 240 L80 240 Z' fill='rgba(255,255,255,0.03)' stroke='rgba(255,255,255,0.6)' stroke-width='2.5'/>
  
  <line x1='140' y1='90' x2='260' y2='90' stroke='rgba(255,255,255,0.6)' stroke-width='2'/>
  <line x1='170' y1='150' x2='170' y2='210' stroke='rgba(255,255,255,0.6)' stroke-width='2'/>
  
  <line x1='80' y1='60' x2='140' y2='90' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>
  <line x1='80' y1='120' x2='140' y2='90' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>
  <line x1='320' y1='60' x2='260' y2='90' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>
  <line x1='320' y1='120' x2='260' y2='90' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>
  
  <line x1='80' y1='240' x2='170' y2='210' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>
  <line x1='260' y1='240' x2='170' y2='210' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>
  
  <line x1='170' y1='150' x2='260' y2='120' stroke='rgba(255,255,255,0.4)' stroke-width='1.5' stroke-dasharray='4 2'/>
  <line x1='170' y1='150' x2='80' y2='120' stroke='rgba(255,255,255,0.4)' stroke-width='1.5' stroke-dasharray='4 2'/>

  <rect x='200' y='70' width='40' height='15' fill='rgba(255,255,255,0.08)' stroke='rgba(255,255,255,0.5)' stroke-width='1'/>
  <line x1='200' y1='77.5' x2='240' y2='77.5' stroke='rgba(255,255,255,0.3)' stroke-width='1'/>

  <path d='M140 75 L140 65 L137 68 M140 65 L143 68' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
  <path d='M140 105 L140 115 L137 112 M140 115 L143 112' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>

  <text x='18' y='293' font-family='monospace' font-size='7' letter-spacing='2.5' fill='rgba(255,255,255,0.22)'>ROOF PLAN  1:100</text>
`),j5=g(`
  <rect x='40' y='30' width='320' height='240' fill='none' stroke='rgba(255,255,255,0.7)' stroke-width='2.5'/>
  
  <rect x='150' y='100' width='100' height='80' fill='rgba(255,255,255,0.05)' stroke='rgba(255,255,255,0.6)' stroke-width='2'/>
  
  ${Array.from({length:7}).map((e,t)=>`<line x1='${40+t*53.3}' y1='30' x2='${150+t*16.6}' y2='100' stroke='rgba(255,255,255,0.2)' stroke-width='1'/>`).join("")}
  <line x1='40' y1='50' x2='360' y2='50' stroke='rgba(255,255,255,0.2)' stroke-width='1'/>
  <line x1='85' y1='75' x2='315' y2='75' stroke='rgba(255,255,255,0.2)' stroke-width='1'/>
  
  ${Array.from({length:11}).map((e,t)=>`<line x1='${40+t*32}' y1='270' x2='${150+t*10}' y2='180' stroke='rgba(255,255,255,0.25)' stroke-width='1'/>`).join("")}
  <line x1='40' y1='240' x2='360' y2='240' stroke='rgba(255,255,255,0.2)' stroke-width='1'/>
  <line x1='80' y1='210' x2='320' y2='210' stroke='rgba(255,255,255,0.2)' stroke-width='1'/>

  <path d='M40 90 L150 120 M40 180 L150 160' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>
  <path d='M360 90 L250 120 M360 180 L250 160' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='1.5'/>
  
  <path d='M100 70 L110 75 L110 200 L100 215 Z' fill='rgba(255,255,255,0.1)' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>
  <path d='M300 70 L290 75 L290 200 L300 215 Z' fill='rgba(255,255,255,0.1)' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>

  <circle cx='200' cy='140' r='2' fill='rgba(255,255,255,0.8)'/>
  <line x1='195' y1='140' x2='205' y2='140' stroke='rgba(255,255,255,0.4)' stroke-width='0.5'/>
  <line x1='200' y1='135' x2='200' y2='145' stroke='rgba(255,255,255,0.4)' stroke-width='0.5'/>

  <text x='18' y='293' font-family='monospace' font-size='7' letter-spacing='2.5' fill='rgba(255,255,255,0.22)'>INTERIOR PERSPECTIVE STUDY</text>
`),R5=g(`
  <rect x='60' y='180' width='280' height='60' fill='rgba(255,255,255,0.05)' stroke='rgba(255,255,255,0.7)' stroke-width='2.5'/>
  ${Array.from({length:20}).map((e,t)=>`<circle cx='${70+t*14}' cy='200' r='1' fill='rgba(255,255,255,0.3)'/><polygon points='${75+t*14},210 ${78+t*14},215 ${72+t*14},215' fill='none' stroke='rgba(255,255,255,0.2)'/>`).join("")}

  <rect x='150' y='170' width='100' height='10' fill='rgba(10,10,10,1)' stroke='rgba(255,255,255,0.8)' stroke-width='2'/>
  
  <rect x='160' y='150' width='6' height='40' fill='rgba(255,255,255,0.6)'/>
  <rect x='234' y='150' width='6' height='40' fill='rgba(255,255,255,0.6)'/>
  <line x1='155' y1='155' x2='171' y2='155' stroke='rgba(255,255,255,0.8)' stroke-width='3'/>
  <line x1='229' y1='155' x2='245' y2='155' stroke='rgba(255,255,255,0.8)' stroke-width='3'/>

  <path d='M180 50 L180 170 M220 50 L220 170' fill='none' stroke='rgba(255,255,255,0.7)' stroke-width='2.5'/>
  <path d='M195 50 L195 170 M205 50 L205 170' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
  
  <path d='M180 170 L140 130 L100 130' fill='none' stroke='rgba(255,255,255,0.5)' stroke-width='1'/>
  <polygon points='145,130 140,125 140,130' fill='rgba(255,255,255,0.5)'/>
  <text x='100' y='125' font-family='monospace' font-size='6' fill='rgba(255,255,255,0.5)'>8mm FILLET WELD</text>
  
  <line x1='270' y1='170' x2='270' y2='180' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
  <line x1='285' y1='170' x2='285' y2='180' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
  <line x1='270' y1='175' x2='330' y2='175' stroke='rgba(255,255,255,0.4)' stroke-width='1'/>
  <circle cx='270' cy='175' r='1' fill='rgba(255,255,255,0.8)'/>
  <circle cx='285' cy='175' r='1' fill='rgba(255,255,255,0.8)'/>

  <text x='18' y='293' font-family='monospace' font-size='7' letter-spacing='2.5' fill='rgba(255,255,255,0.22)'>CONNECTION DETAIL 1:10</text>
`),A5=[i5,s5,n5,a5,l5,d5,g5,h5,y5,c5,x5,k5,f5,b5,p5,w5,m5,u5,$5,L5,v5,M5,j5,R5];function C5({images:e=A5}){const l=Array.from({length:6},(i,s)=>Array.from({length:6},(a,n)=>e[(s*6+n)%e.length]));return r.jsx("div",{style:{position:"absolute",inset:0,overflow:"hidden"},children:r.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",width:"220vmin",height:"220vmin",transform:"translate(-50%, -50%)"},children:r.jsx("div",{style:{width:"100%",height:"100%",transform:"rotateX(45deg) rotateZ(45deg)",transformStyle:"preserve-3d",display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:"14px"},children:l.map((i,s)=>r.jsx(b.figure,{animate:{y:s%2===0?30:-30},transition:{duration:s%2===0?6.9:9.5,repeat:1/0,repeatType:"reverse",ease:"easeInOut"},style:{display:"flex",flexDirection:"column",gap:"14px",margin:0,padding:0},children:i.map((a,n)=>r.jsx("div",{style:{overflow:"hidden",borderRadius:"2px",border:"1px solid rgba(255,255,255,0.05)",flexShrink:0},children:r.jsx("img",{src:a,draggable:!1,alt:"","aria-hidden":"true",loading:"lazy",style:{aspectRatio:"4/3",width:"100%",display:"block",objectFit:"cover",userSelect:"none"}})},n))},s))})})})}const I5=["Design","Build","Create","Vision","Space","Form"],E5=[.16,1,.3,1],S5={hidden:{},show:{transition:{staggerChildren:.11,delayChildren:.15}}},E={hidden:{opacity:0,y:18},show:{opacity:1,y:0,transition:{duration:.75,ease:E5}}},T5={hidden:{opacity:0},show:{opacity:1,transition:{duration:.9,ease:"easeOut"}}},z5={hidden:{opacity:0},show:{opacity:.45,transition:{duration:1.4,ease:"easeOut",delay:.05}}};function O5({contactUrl:e="/contact",aboutUrl:t="/about"}){const o=W();return r.jsxs("section",{style:{position:"relative",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",overflow:"hidden",background:"var(--color-black)"},children:[r.jsx(b.div,{"aria-hidden":"true",variants:o?void 0:z5,initial:"hidden",animate:"show",style:{position:"absolute",inset:0,zIndex:0,opacity:o?.45:void 0,overflow:"hidden"},children:r.jsx(C5,{})}),r.jsx("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,zIndex:1,background:`
            radial-gradient(ellipse 70% 80% at 50% 50%, transparent 20%, rgba(10,10,10,0.65) 70%, rgba(10,10,10,0.92) 100%),
            linear-gradient(to bottom, rgba(10,10,10,0.7) 0%, transparent 20%, transparent 80%, rgba(10,10,10,0.8) 100%)
          `}}),r.jsx("div",{"aria-hidden":"true",style:{position:"absolute",top:0,left:0,right:0,height:"1px",zIndex:2,background:"linear-gradient(to right, transparent, rgba(255,255,255,0.12), transparent)"}}),r.jsxs(b.div,{variants:o?void 0:S5,initial:"hidden",animate:"show",style:{position:"relative",zIndex:10,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",padding:"0 1.5rem"},children:[r.jsx("div",{style:{position:"absolute",inset:"-3rem -4rem",borderRadius:"2px",backdropFilter:"blur(18px) brightness(0.4)",WebkitBackdropFilter:"blur(18px) brightness(0.4)",background:"rgba(10,10,10,0.2)",zIndex:-1,maskImage:"radial-gradient(ellipse 85% 90% at 50% 50%, black 40%, transparent 100%)",WebkitMaskImage:"radial-gradient(ellipse 85% 90% at 50% 50%, black 40%, transparent 100%)"}}),r.jsx(b.p,{variants:o?void 0:E,style:{fontFamily:"var(--font-sans)",fontSize:"0.7rem",letterSpacing:"0.35em",textTransform:"uppercase",color:"var(--color-gray-500)",margin:"0 0 3rem"},children:"Αρχιτεκτονικό Γραφείο · Νίκαια"}),r.jsx(b.div,{variants:o?void 0:E,style:{margin:"0 0 0.5rem"},children:r.jsxs("svg",{viewBox:"0 0 380 300",fill:"none","aria-hidden":"true",style:{width:"clamp(160px, 22vw, 260px)",height:"auto"},children:[r.jsx("style",{children:`
              @keyframes float1 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-6px); } }
              @keyframes float2 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
              @keyframes float3 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
              @keyframes float4 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-5px); } }
              #hero-box1 { animation: float1 4s ease-in-out infinite; }
              #hero-box2 { animation: float2 5s ease-in-out infinite; }
              #hero-box3 { animation: float3 4.5s ease-in-out infinite; }
              #hero-box4 { animation: float4 3.5s ease-in-out infinite; }
            `}),r.jsxs("g",{id:"hero-box1",transform:"rotate(10, 95, 82)",children:[r.jsx("rect",{x:"55",y:"42",width:"80",height:"80",fill:"#0a0a0a",stroke:"rgba(255,255,255,0.78)",strokeWidth:"2.5"}),r.jsx("rect",{x:"62",y:"49",width:"66",height:"66",fill:"none",stroke:"rgba(255,255,255,0.28)",strokeWidth:"1.5"})]}),r.jsxs("g",{id:"hero-box2",children:[r.jsx("polygon",{points:"250,55 330,55 352,33 272,33",fill:"rgba(255,255,255,0.07)",stroke:"rgba(255,255,255,0.7)",strokeWidth:"2.5"}),r.jsx("polygon",{points:"330,55 352,33 352,113 330,135",fill:"rgba(255,255,255,0.04)",stroke:"rgba(255,255,255,0.7)",strokeWidth:"2.5"}),r.jsx("rect",{x:"250",y:"55",width:"80",height:"80",fill:"#0a0a0a",stroke:"rgba(255,255,255,0.78)",strokeWidth:"2.5"})]}),r.jsxs("g",{id:"hero-box3",transform:"rotate(45, 95, 215)",children:[r.jsx("rect",{x:"55",y:"175",width:"80",height:"80",fill:"#0a0a0a",stroke:"rgba(255,255,255,0.78)",strokeWidth:"2.5"}),r.jsx("rect",{x:"62",y:"182",width:"66",height:"66",fill:"none",stroke:"rgba(255,255,255,0.28)",strokeWidth:"1.5"})]}),r.jsxs("g",{id:"hero-box4",transform:"rotate(-10, 295, 215)",children:[r.jsx("rect",{x:"255",y:"175",width:"80",height:"80",fill:"rgba(185,28,28,0.92)",stroke:"rgba(255,255,255,0.82)",strokeWidth:"2.5"}),r.jsx("rect",{x:"262",y:"182",width:"66",height:"66",fill:"none",stroke:"rgba(255,255,255,0.38)",strokeWidth:"1.5"})]})]})}),r.jsx(b.div,{variants:o?void 0:T5,style:{position:"relative",height:"clamp(4rem, 7vw, 6rem)",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0.75rem 0"},children:r.jsx(o5,{texts:I5,morphTime:1.2,cooldownTime:2,textClassName:"text-5xl md:text-6xl font-light tracking-tight"})}),r.jsx(b.p,{variants:o?void 0:E,style:{fontFamily:"var(--font-sans)",fontSize:"0.75rem",fontWeight:400,letterSpacing:"0.28em",textTransform:"uppercase",color:"var(--color-gray-400)",margin:"0.5rem 0 3.5rem"},children:"Design with us"}),r.jsxs(b.div,{variants:o?void 0:E,style:{display:"flex",alignItems:"center",gap:"1rem"},children:[r.jsx(b.a,{href:e,className:"btn btn-primary",whileTap:o?void 0:{scale:.96},transition:{duration:.1},children:"Contact"}),r.jsx(b.a,{href:t,className:"btn btn-outline",whileTap:o?void 0:{scale:.96},transition:{duration:.1},children:"Info"})]})]}),r.jsxs(b.div,{initial:o?void 0:{opacity:0},animate:o?void 0:{opacity:1},transition:{delay:1.2,duration:.6},style:{position:"absolute",bottom:"2.5rem",left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"0.75rem",zIndex:10},children:[r.jsx("span",{style:{fontFamily:"var(--font-sans)",fontSize:"0.625rem",letterSpacing:"0.25em",textTransform:"uppercase",color:"var(--color-gray-600)"},children:"Scroll"}),r.jsx(b.div,{animate:o?void 0:{scaleY:[1,.6,1],opacity:[.4,.9,.4]},transition:{duration:2,repeat:1/0,ease:"easeInOut",delay:1.8},style:{width:"1px",height:"40px",background:"linear-gradient(to bottom, var(--color-gray-600), transparent)",transformOrigin:"top"}})]}),r.jsx("div",{"aria-hidden":"true",style:{position:"absolute",bottom:0,left:0,right:0,height:"1px",zIndex:2,background:"linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)"}})]})}const N5={primary:"#171717",secondary:"#404040",accent:"#a3a3a3"},P5=({children:e,className:t="",animationMode:o="auto-rotate",animationSpeed:l=5,gradientColors:i=N5,backgroundColor:s="#0a0a0a",borderWidth:a=1,borderRadius:n=2,style:m={},...p})=>{const h=()=>{switch(o){case"auto-rotate":return"gradient-border-auto";case"rotate-on-hover":return"gradient-border-hover";case"stop-rotate-on-hover":return"gradient-border-stop-hover";default:return""}},w={"--gradient-primary":i.primary,"--gradient-secondary":i.secondary,"--gradient-accent":i.accent,"--bg-color":s,"--border-width":`${a}px`,"--border-radius":`${n}px`,"--animation-duration":`${l}s`,border:`${a}px solid transparent`,borderRadius:`${n}px`,backgroundImage:`
      linear-gradient(${s}, ${s}),
      conic-gradient(
        from var(--gradient-angle, 0deg),
        ${i.primary} 0%,
        ${i.secondary} 37%,
        ${i.accent} 30%,
        ${i.secondary} 33%,
        ${i.primary} 40%,
        ${i.primary} 50%,
        ${i.secondary} 77%,
        ${i.accent} 80%,
        ${i.secondary} 83%,
        ${i.primary} 90%
      )
    `,backgroundClip:"padding-box, border-box",backgroundOrigin:"padding-box, border-box",...m};return r.jsx("div",{className:`gradient-border-component ${h()} ${t}`,style:w,...p,children:e})},F="stavret_cookies_consent";function _5(){const[e,t]=d.useState(!1),o=W();d.useEffect(()=>{if(!localStorage.getItem(F)){const i=setTimeout(()=>t(!0),2200);return()=>clearTimeout(i)}},[]);const l=i=>{localStorage.setItem(F,i),t(!1)};return r.jsx(r5,{children:e&&r.jsx(b.div,{initial:o?{}:{opacity:0,y:14},animate:o?{}:{opacity:1,y:0},exit:o?{}:{opacity:0,y:10},transition:{duration:.55,ease:[.16,1,.3,1]},style:{position:"fixed",bottom:"2rem",left:"2rem",zIndex:9999,maxWidth:"268px",width:"calc(100vw - 4rem)"},children:r.jsx(P5,{animationMode:"auto-rotate",animationSpeed:9,gradientColors:{primary:"#171717",secondary:"#404040",accent:"#a3a3a3"},backgroundColor:"#0a0a0a",borderWidth:1,borderRadius:2,children:r.jsxs("div",{style:{padding:"1.5rem"},children:[r.jsx("p",{style:{fontFamily:"var(--font-sans)",fontSize:"0.625rem",letterSpacing:"0.25em",textTransform:"uppercase",color:"var(--color-gray-500)",margin:"0 0 0.75rem"},children:"Cookies"}),r.jsx("p",{style:{fontFamily:"var(--font-sans)",fontSize:"0.8125rem",lineHeight:1.65,color:"var(--color-gray-300)",margin:"0 0 1.375rem"},children:"We use cookies to improve your browsing experience on this site."}),r.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[r.jsx("button",{onClick:()=>l("accepted"),className:"btn btn-primary",style:{padding:"0.5rem 1.25rem",fontSize:"0.6875rem"},children:"Accept"}),r.jsx("button",{onClick:()=>l("declined"),style:{background:"none",border:"none",fontFamily:"var(--font-sans)",fontSize:"0.6875rem",letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--color-gray-500)",cursor:"pointer",padding:0},onMouseEnter:i=>i.currentTarget.style.color="var(--color-white)",onMouseLeave:i=>i.currentTarget.style.color="var(--color-gray-500)",children:"Decline"})]})]})})})})}const O=document.getElementById("stavret-hero");if(O){const e=JSON.parse(O.dataset.config||"{}");G.createRoot(O).render(r.jsx(O5,{...e}))}const N=document.createElement("div");N.id="stavret-cookie";document.body.appendChild(N);G.createRoot(N).render(r.jsx(_5,{}));
