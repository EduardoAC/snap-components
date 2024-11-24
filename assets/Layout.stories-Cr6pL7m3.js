import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as l}from"./index-DJO9vBfz.js";import{d as o,l as x}from"./styled-components.browser.esm-Be0L4FOQ.js";const E=o.div`
  display: flex;
  flex-direction: column;
  ${({hasSider:r})=>r&&x`
      flex-direction: row;
    `}
  ${({direction:r})=>r==="rtl"&&x`
      direction: rtl;
    `}
`,u=o.header`
  ${({theme:r,$size:t="md"})=>t&&`padding: ${r.spacing[t]}`};
`,p=o.footer`
  ${({theme:r,$size:t="md"})=>t&&`padding: ${r.spacing[t]}`};
`,m=o.main`
  width: 100%;
  ${({theme:r,$size:t="md"})=>t&&`padding: ${r.spacing[t]}`};
`,R=l.createContext({});function n({children:r,hasSider:t,direction:v,...w}){const[$,h]=l.useState([]),W=l.useMemo(()=>({addSider:i=>h(c=>[...c,i]),removeSider:i=>h(c=>c.filter(_=>_!==i))}),[]);return e.jsx(R.Provider,{value:W,children:e.jsx(E,{hasSider:t||$.length>0,direction:v,...w,children:r})})}n.__docgenInfo={description:"",methods:[],displayName:"Layout",props:{hasSider:{required:!1,tsType:{name:"boolean"},description:""},direction:{required:!1,tsType:{name:"union",raw:'"ltr" | "rtl"',elements:[{name:"literal",value:'"ltr"'},{name:"literal",value:'"rtl"'}]},description:""}}};const M=o.aside`
  width: 200px;
  background: #001529;
  color: white;
  flex-shrink: 0;
  padding: 16px;
`,D={title:"Components/Layout",component:n,parameters:{layout:"fullscreen"}},a={render:()=>e.jsxs(n,{children:[e.jsx(u,{children:"Header"}),e.jsxs(n,{hasSider:!0,children:[e.jsx(M,{children:"Sider"}),e.jsx(m,{children:"Main Content"})]}),e.jsx(p,{children:"Footer"})]})},d={render:()=>e.jsxs(n,{children:[e.jsx(u,{children:"Header"}),e.jsx(m,{children:"Main Content"}),e.jsx(p,{children:"Footer"})]})},s={render:()=>e.jsxs(n,{direction:"rtl",children:[e.jsx(u,{children:"Header"}),e.jsxs(n,{hasSider:!0,children:[e.jsx(M,{children:"Sider"}),e.jsx(m,{children:"Main Content"})]}),e.jsx(p,{children:"Footer"})]})};var S,y,j;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Layout>
      <Header>Header</Header>
      <Layout hasSider>
        <Sider>Sider</Sider>
        <Content>Main Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
}`,...(j=(y=a.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var f,C,L;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Layout>
      <Header>Header</Header>
      <Content>Main Content</Content>
      <Footer>Footer</Footer>
    </Layout>
}`,...(L=(C=d.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var g,F,H;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Layout direction="rtl">
      <Header>Header</Header>
      <Layout hasSider>
        <Sider>Sider</Sider>
        <Content>Main Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
}`,...(H=(F=s.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};const T=["Default","WithoutSider","WithRtl"];export{a as Default,s as WithRtl,d as WithoutSider,T as __namedExportsOrder,D as default};
