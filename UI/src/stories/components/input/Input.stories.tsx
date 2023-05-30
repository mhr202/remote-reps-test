import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryInput: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
    helperText: "We'll only use this for spam",
    type: "email",
    id: "email",
    name: "email",
  },
};
