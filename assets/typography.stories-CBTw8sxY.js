import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{d as p}from"./styled-components.browser.esm-Be0L4FOQ.js";import{t as i,s as d}from"./typography.mixin-BmWcM0Sj.js";import"./index-DJO9vBfz.js";const l={title:"Theme/Typography",tags:["autodocs"]},e={render:()=>r.jsx("div",{children:Object.keys(i).map(t=>{const a=p.p`
            ${d(t)}
          `;return r.jsxs(a,{children:[t,": The quick brown fox jumps over the lazy dog."]},t)})})};var n,o,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    return <div>
        {Object.keys(typographyDefinitions).map(variant => {
        const StyledText = styled.p\`
            \${setTypographyMixin(variant as TypographyVariants)}
          \`;
        return <StyledText key={variant}>
              {variant}: The quick brown fox jumps over the lazy dog.
            </StyledText>;
      })}
      </div>;
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,l as default};
