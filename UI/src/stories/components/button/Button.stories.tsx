import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Button1: Story = {
  args: {
    label: "Button text",
    size: "xs",
  },
};
export const Button2: Story = {
  args: {
    label: "Button text",
    size: "sm",
  },
};
export const Button3: Story = {
  args: {
    label: "Button text",
    size: "md",
  },
};
export const Button4: Story = {
  args: {
    label: "Button text",
    size: "lg",
  },
};
export const Button5: Story = {
  args: {
    label: "Button text",
    size: "xl",
  },
};
