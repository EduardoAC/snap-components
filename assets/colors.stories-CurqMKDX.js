import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{n as a}from"./styled-components.browser.esm-Be0L4FOQ.js";import"./index-DJO9vBfz.js";const m={title:"Theme/Colors",tags:["autodocs"]},t={render:()=>{const r=a();return n.jsx("div",{style:{display:"flex",gap:"16px",alignItems:"center",justifyContent:"space-evenly",background:"lightGray",padding:"32px"},children:Object.entries(r.colors).map(([s,e])=>{if(typeof e=="string")return n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[n.jsx("h4",{children:s}),n.jsx("div",{style:{background:e,width:"50px",height:"50px",padding:r.spacing.sm,color:r.colors.darken(e,2),display:"flex",alignItems:"center",justifyContent:"center"},children:e})]},s)})})}};var o,i,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const theme = useTheme();
    return <div style={{
      display: "flex",
      gap: "16px",
      alignItems: "center",
      justifyContent: "space-evenly",
      background: "lightGray",
      padding: "32px"
    }}>
        {Object.entries(theme.colors).map(([color, colorHex]) => {
        if (typeof colorHex === "string") {
          return <div key={color} style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
                <h4>{color}</h4>
                <div style={{
              background: colorHex as string,
              width: "50px",
              height: "50px",
              padding: theme.spacing.sm,
              color: theme.colors.darken(colorHex, 2),
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
                  {colorHex}
                </div>
              </div>;
        }
      })}
      </div>;
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const g=["Default"];export{t as Default,g as __namedExportsOrder,m as default};
