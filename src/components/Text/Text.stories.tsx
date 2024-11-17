import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";
import { TypographyVariants } from "src/theme/types";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  args: {
    variant: "body1" as TypographyVariants,
    as: "p",
    children: "This is a sample text",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "heading1",
        "heading2",
        "heading3",
        "heading4",
        "heading5",
        "heading6",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "caption",
      ],
    },
    as: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "label", "a"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {};
