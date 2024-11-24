import type { Meta, StoryObj } from "@storybook/react";
import { Layout, Header, Footer, Content, Sider } from "./index";

const meta: Meta<typeof Layout> = {
  title: "Components/Layout",
  component: Layout,
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;

type Story = StoryObj<typeof Layout>;

export const Default: Story = {
  render: () => (
    <Layout>
      <Header>Header</Header>
      <Layout hasSider>
        <Sider>Sider</Sider>
        <Content>Main Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  ),
};

export const WithoutSider: Story = {
  render: () => (
    <Layout>
      <Header>Header</Header>
      <Content>Main Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  ),
};

export const WithRtl: Story = {
  render: () => (
    <Layout direction="rtl">
      <Header>Header</Header>
      <Layout hasSider>
        <Sider>Sider</Sider>
        <Content>Main Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  ),
};
