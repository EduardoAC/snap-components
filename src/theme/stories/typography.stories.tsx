// stories/Typography.stories.ts
import type { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";
import { setTypographyMixin } from "@mixins";
import { TypographyVariants } from "../types";
import { typographyDefinitions } from "../../mixins/typography/typography.definitions";

const meta: Meta = {
  title: "Theme/Typography",
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj = {
  render: () => {
    return (
      <div>
        {Object.keys(typographyDefinitions).map((variant) => {
          const StyledText = styled.p`
            ${setTypographyMixin(variant as TypographyVariants)}
          `;
          return (
            <StyledText key={variant}>
              {variant}: The quick brown fox jumps over the lazy dog.
            </StyledText>
          );
        })}
      </div>
    );
  },
};
