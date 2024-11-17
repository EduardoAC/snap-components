import{j as p}from"./jsx-runtime-CkxqCPlQ.js";import{f as $}from"./index-BowcO4kn.js";import{l,d as f}from"./styled-components.browser.esm-Be0L4FOQ.js";import{s as g}from"./typography.mixin-BmWcM0Sj.js";import"./index-DJO9vBfz.js";function v(o,r){return l`
    background-color: ${r};
    color: ${o};
    border: 2px solid ${r};

    &:hover {
      background-color: ${({theme:e})=>e.colors.hover(r)};
      border-color: ${({theme:e})=>e.colors.hover(r)};
    }

    &:active {
      outline: 2px solid ${({theme:e})=>e.colors.active(r)};
    }

    &:disabled {
      background-color: ${({theme:e})=>e.colors.disabled(r)};
      border-color: ${({theme:e})=>e.colors.disabled(r)};
      color: ${({theme:e})=>e.colors.disabled(o)};
      cursor: not-allowed;
    }
  `}function y(o,r){return l`
    background-color: transparent;
    color: ${o};
    border: 2px solid ${r};

    &:hover {
      background-color: ${({theme:e})=>e.colors.hover(r)};
      border-color: ${({theme:e})=>e.colors.hover(r)};
    }

    &:active {
      outline: 2px solid ${({theme:e})=>e.colors.active(r)};
    }

    &:disabled {
      border-color: ${({theme:e})=>e.colors.disabled(r)};
      color: ${({theme:e})=>e.colors.disabled(o)};
      cursor: not-allowed;
    }
  `}function x(o,r){return l`
    background-color: transparent;
    color: ${o};
    border: none;

    ${r&&l`
      &:hover,
      &:focus {
        background-color: ${({theme:e})=>e.colors.hover(r)};
      }

      &:active {
        outline: 2px solid ${({theme:e})=>e.colors.active(r)};
      }
    `}

    &:disabled {
      background-color: ${({theme:e})=>e.colors.disabled(o)};
      color: ${({theme:e})=>e.colors.disabled(o)};
      cursor: not-allowed;
    }
  `}function b(o){switch(o){case"primary":return{$foreground:"foreground",$background:"primary"};case"secondary":return{$foreground:"background",$background:"secondary"}}}function h(o,r){return l`
    ${({theme:e})=>{const{$foreground:a,$background:t}=b(r);console.log(a,t,e.colors);const s=e.colors[a],i=e.colors[t];switch(o){case"filled":return v(s,i);case"outlined":return y(s,i);case"text":return x(s,i);default:return null}}}
  `}const w=o=>l`
    ${({theme:r})=>{const e=r.spacing;return`padding: ${{small:{padding:`0 ${e.sm}`},medium:{padding:`${e.xxs} ${e.md}`},large:{padding:`${e.xs} ${e.lg}`}}[o].padding};`}}
  `,B=f.button`
  border-radius: ${({theme:o})=>o.spacing.xs};
  ${({$size:o})=>w(o)}
  ${({$variant:o,$color:r})=>h(o,r)};
  ${g("body1")}
`;function c({variant:o="filled",size:r="medium",color:e="primary",children:a,...t}){return p.jsx(B,{$variant:o,$size:r,$color:e,...t,children:a})}c.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:'"filled" | "outlined" | "text"',elements:[{name:"literal",value:'"filled"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"text"'}]},description:"Is this the principal call to action on the page?",defaultValue:{value:'"filled"',computed:!1}},color:{required:!1,tsType:{name:"Extract",elements:[{name:"ColorRoles"},{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]}],raw:'Extract<ColorsAvailable, "primary" | "secondary">'},description:"What background color to use",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"How large should the button be?",defaultValue:{value:'"medium"',computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:"Button contents"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"}}};const q={title:"components/Button",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","secondary"]}},args:{onClick:$()}},n={render:o=>p.jsx(c,{...o,children:"Example"}),args:{color:"primary"}};var d,u,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Button {...args}>Example</Button>,
  args: {
    color: "primary"
  }
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const z=["Default"];export{n as Default,z as __namedExportsOrder,q as default};
