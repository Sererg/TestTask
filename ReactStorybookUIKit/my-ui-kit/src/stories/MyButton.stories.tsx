import type { Meta, StoryObj } from '@storybook/react';

import  MyButton  from '../MyButton/MyButton';

const meta = {
  title: 'Example/MyButton',
  component: MyButton,
} satisfies Meta<typeof MyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RedBtn: Story = {
  args: {
    color:'RED',
    children: "RED"
  },
};

export const BigBtn: Story = {
  args: {
    color: 'orange',
    big: true,
    children: 'Какой то текст'
  },
};
