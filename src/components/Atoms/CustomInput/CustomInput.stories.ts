import type { Meta, StoryObj } from '@storybook/react';

import CustomInput from './CustomInput';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/CustomInput',
  component: CustomInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof CustomInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    background:"#eee",
    border:"1px solid black",
    width:"200px",
    hoverBgColor:"#ffffff",
    borderRadius:"2px",
    padding:"10px 20px",
    margin:"10px 10px"
  },
};