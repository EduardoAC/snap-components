import{j as i}from"./jsx-runtime-CkxqCPlQ.js";import{n as o}from"./styled-components.browser.esm-Be0L4FOQ.js";import"./index-DJO9vBfz.js";const m={title:"Theme/Spacing"},e={render:()=>{const n=o(),a=n==null?void 0:n.spacing;return a?i.jsx("div",{children:Object.keys(n.spacing).map(s=>i.jsxs("div",{style:{marginBottom:a[s],background:"lightgray",padding:"8px"},children:[s,": ",a[s]]}))}):i.jsx("p",{children:"Failing loading spacing theme"})}};var t,r,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const theme = useTheme();
    const spacing = theme?.spacing;
    if (!spacing) {
      return <p>Failing loading spacing theme</p>;
    }
    return <div>
        {Object.keys(theme.spacing).map(key => <div style={{
        marginBottom: spacing[key as Spacing],
        background: "lightgray",
        padding: "8px"
      }}>
            {key}: {spacing[key as Spacing]}
          </div>)}
      </div>;
  }
}`,...(c=(r=e.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const l=["Default"];export{e as Default,l as __namedExportsOrder,m as default};
