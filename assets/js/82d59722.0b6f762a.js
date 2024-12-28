"use strict";(self.webpackChunkeverybot_docs=self.webpackChunkeverybot_docs||[]).push([[5624],{38274:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>N,contentTitle:()=>C,default:()=>q,frontMatter:()=>V,metadata:()=>E,toc:()=>D});var n=a(85893),t=a(11151),s=a(67294),l=a(36905),o=a(72957),i=a(16550),u=a(81270),c=a(75238),d=a(33609),h=a(92560);function b(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:a}=e;return(0,s.useMemo)((()=>{const e=r??function(e){return b(e).map((e=>{let{props:{value:r,label:a,attributes:n,default:t}}=e;return{value:r,label:a,attributes:n,default:t}}))}(a);return function(e){const r=(0,d.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,a])}function x(e){let{value:r,tabValues:a}=e;return a.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:a}=e;const n=(0,i.k6)(),t=function(e){let{queryString:r=!1,groupId:a}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:r,groupId:a});return[(0,c._X)(t),(0,s.useCallback)((e=>{if(!t)return;const r=new URLSearchParams(n.location.search);r.set(t,e),n.replace({...n.location,search:r.toString()})}),[t,n])]}function m(e){const{defaultValue:r,queryString:a=!1,groupId:n}=e,t=p(e),[l,o]=(0,s.useState)((()=>function(e){let{defaultValue:r,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!x({value:r,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:t}))),[i,c]=f({queryString:a,groupId:n}),[d,b]=function(e){let{groupId:r}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,t]=(0,h.Nk)(a);return[n,(0,s.useCallback)((e=>{a&&t.set(e)}),[a,t])]}({groupId:n}),m=(()=>{const e=i??d;return x({value:e,tabValues:t})?e:null})();(0,u.Z)((()=>{m&&o(m)}),[m]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!x({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),b(e)}),[c,b,t]),tabValues:t}}var v=a(51048);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:r,block:a,selectedValue:t,selectValue:s,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const r=e.currentTarget,a=u.indexOf(r),n=i[a].value;n!==t&&(c(r),s(n))},h=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;r=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;r=u[a]??u[u.length-1];break}}r?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},r),children:i.map((e=>{let{value:r,label:a,attributes:s}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>u.push(e),onKeyDown:h,onClick:d,...s,className:(0,l.Z)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":t===r}),children:a??r},r)}))})}function g(e){let{lazy:r,children:a,selectedValue:t}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(r){const e=l.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:l.map(((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==t})))})}function w(e){const r=m(e);return(0,n.jsxs)("div",{className:(0,l.Z)("tabs-container",j.tabList),children:[(0,n.jsx)(y,{...e,...r}),(0,n.jsx)(g,{...e,...r})]})}function T(e){const r=(0,v.Z)();return(0,n.jsx)(w,{...e,children:b(e.children)},String(r))}const S={tabItem:"tabItem_Ymn6"};function k(e){let{children:r,hidden:a,className:t}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,l.Z)(S.tabItem,t),hidden:a,children:r})}var I=a(79184);const V={},C="Swerve Generator",E={id:"resources/SwerveGenerator",title:"Swerve Generator",description:"Select Your Module",source:"@site/docs/resources/SwerveGenerator.md",sourceDirName:"resources",slug:"/resources/SwerveGenerator",permalink:"/2024-Everybot-Documentation/resources/SwerveGenerator",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"everybotResources",previous:{title:"Resources",permalink:"/2024-Everybot-Documentation/resources/"}},N={},D=[{value:"Select Your Module",id:"select-your-module",level:2},{value:"Select Your Box Tube",id:"select-your-box-tube",level:2},{value:"Choose Chassis Dimensions and Bellypan Characteristics",id:"choose-chassis-dimensions-and-bellypan-characteristics",level:2},{value:"Configuring the robot and bellypan",id:"configuring-the-robot-and-bellypan",level:2}];function M(e){const r={h1:"h1",h2:"h2",p:"p",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"swerve-generator",children:"Swerve Generator"}),"\n",(0,n.jsx)(r.h2,{id:"select-your-module",children:"Select Your Module"}),"\n",(0,n.jsxs)(T,{children:[(0,n.jsx)(k,{value:"apple",label:"SDS",default:!0,children:(0,n.jsxs)(T,{children:[(0,n.jsxs)(k,{value:"apple",label:"MK4",default:!0,children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)("div",{style:{overflow:"hidden",float:"left",display:"inline-block",margin:"0.00px 50.00px 0px 0px"},children:(0,n.jsx)("span",{style:{overflow:"hidden",display:"inline-block",margin:"0.00px 0.00px",border:"0.00px solid #000000",transform:"rotate(0.00rad) translateZ(0px)"},children:(0,n.jsx)(I.Z,{autoLoad:"true",img:a(24152),style:{marginLeft:"0.00px",marginTop:"0.00px",transform:"rotate(0.00rad) translateZ(0px)",maxWidth:"400px"}})})})," Select your drive motor:"]}),(0,n.jsx)("br",{}),(0,n.jsx)(r.p,{children:"Select your angle motor:"}),(0,n.jsx)("br",{}),(0,n.jsx)(r.p,{children:"Select your encoder:"}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]}),(0,n.jsx)(k,{value:"orange",label:"MK4c",children:(0,n.jsx)(r.p,{children:"This is an orange \ud83c\udf4a"})}),(0,n.jsx)(k,{value:"banana",label:"MMK4i",children:(0,n.jsx)(r.p,{children:"This is a banana \ud83c\udf4c"})}),(0,n.jsx)(k,{value:"Thrifty",label:"MK4n",children:(0,n.jsx)(r.p,{children:"This is a banana \ud83c\udf4c"})})]})}),(0,n.jsx)(k,{value:"orange",label:"WCP",children:(0,n.jsx)(r.p,{children:"This is an orange \ud83c\udf4a"})}),(0,n.jsx)(k,{value:"banana",label:"REV",children:(0,n.jsx)(r.p,{children:"This is a banana \ud83c\udf4c"})}),(0,n.jsx)(k,{value:"Thrifty",label:"ThriftyBot",children:(0,n.jsx)(r.p,{children:"This is a banana \ud83c\udf4c"})})]}),"\n",(0,n.jsx)(r.h2,{id:"select-your-box-tube",children:"Select Your Box Tube"}),"\n",(0,n.jsxs)(T,{children:[(0,n.jsx)(k,{value:"orange",label:"REV",children:(0,n.jsx)(r.p,{children:"This is an orange \ud83c\udf4a"})}),(0,n.jsx)(k,{value:"banana",label:"WCP",children:(0,n.jsx)(r.p,{children:"This is a banana \ud83c\udf4c"})}),(0,n.jsx)(k,{value:"Andy",label:"Andy",children:(0,n.jsx)(r.p,{children:"This is a banana \ud83c\udf4c"})}),(0,n.jsx)(k,{value:"Thrifty",label:"Thrifty",children:(0,n.jsx)(r.p,{children:"This is a banana \ud83c\udf4c"})})]}),"\n",(0,n.jsx)(r.h2,{id:"choose-chassis-dimensions-and-bellypan-characteristics",children:"Choose Chassis Dimensions and Bellypan Characteristics"}),"\n",(0,n.jsx)(r.p,{children:"Length: Limit this based on what is possible"}),"\n",(0,n.jsx)(r.p,{children:"Width:"}),"\n",(0,n.jsx)(r.p,{children:"Belly Thickness:"}),"\n",(0,n.jsx)(r.h2,{id:"configuring-the-robot-and-bellypan",children:"Configuring the robot and bellypan"}),"\n",(0,n.jsx)(r.p,{children:"Gyroscope: this will determine whether to make holes in the center for a roborio (for the NAX or other gyros) or holes for a Pigeon"}),"\n",(0,n.jsx)(r.p,{children:"Battery: included by default, should only need one location across all bellypans"}),"\n",(0,n.jsx)(r.p,{children:"Motor Controllers: could be a strech to get this one working in a fashion people would be happy with but could create mounting locations around swerve modules in the bellypan"}),"\n",(0,n.jsx)(r.p,{children:"Include bumper hardware: This could be part of the fabworks partnership, shouldn't be hard to get a bumper solution that will work across all swerves, I really like my team's adhevsive ready studs"})]})}function q(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(M,{...e})}):M(e)}},24152:(e,r,a)=>{a.r(r),a.d(r,{default:()=>n});const n=a.p+"assets/images/MK4Image3_2048x2048-03bd391349b237b3fa6113eb6880cda1.webp"}}]);