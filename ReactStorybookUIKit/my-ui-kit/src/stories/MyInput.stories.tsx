import type { Meta, StoryObj } from '@storybook/react';

import  MyInput  from '../MyInput/MyInput';

const meta = {
  title: 'Example/MyInput',
  component: MyInput,
} satisfies Meta<typeof MyInput>;

export default meta;
type Story = StoryObj<typeof meta>;


export const SmallInput: Story = {
    args: {
    big: false,
    placeholder: 'Олег',
    label: 'Ваше имя'}
};

export const BigInput: Story = {
    args: {
    big: true,
    placeholder: 'Олег',
    label: 'Ваше имя'}
};

