import{j as s}from"./jsx-runtime-CkxqCPlQ.js";import{n as o}from"./styled-components.browser.esm-Be0L4FOQ.js";import"./index-DJO9vBfz.js";const m={title:"Theme/Spacing"},e={render:()=>{const n=o(),a=n==null?void 0:n.spacing;return a?s.jsx("div",{children:Object.keys(n.spacing).map(r=>s.jsxs("div",{style:{marginBottom:a[r],background:"lightgray",padding:"8px"},children:[r,": ",a[r]]}))}):s.jsx("p",{children:"Failing loading spacing theme"})}};var i,t,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const theme = useTheme();
    const spacing = theme?.spacing;
    if (!spacing) {
      return <p>Failing loading spacing theme</p>;
    }
    return <div>\r
        {Object.keys(theme.spacing).map(key => <div style={{
        marginBottom: spacing[key as Spacing],
        background: "lightgray",
        padding: "8px"
      }}>\r
            {key}: {spacing[key as Spacing]}\r
          </div>)}\r
      </div>;
  }
}`,...(c=(t=e.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};const l=["Default"];export{e as Default,l as __namedExportsOrder,m as default};
