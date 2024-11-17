import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{d as p}from"./styled-components.browser.esm-Be0L4FOQ.js";import{t as i,s as d}from"./typography.mixin-BmWcM0Sj.js";import"./index-DJO9vBfz.js";const l={title:"Theme/Typography",tags:["autodocs"]},e={render:()=>t.jsx("div",{children:Object.keys(i).map(r=>{const a=p.p`
            ${d(r)}
          `;return t.jsxs(a,{children:[r,": The quick brown fox jumps over the lazy dog."]},r)})})};var n,o,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    return <div>\r
        {Object.keys(typographyDefinitions).map(variant => {
        const StyledText = styled.p\`
            \${setTypographyMixin(variant as TypographyVariants)}
          \`;
        return <StyledText key={variant}>\r
              {variant}: The quick brown fox jumps over the lazy dog.\r
            </StyledText>;
      })}\r
      </div>;
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,l as default};
