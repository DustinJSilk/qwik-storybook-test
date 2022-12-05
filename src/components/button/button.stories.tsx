import { Meta } from '@storybook/html'
import { Button, ButtonProps } from './button'

export default {
  title: 'Button',
  args: {
    label: 'My button',
    title: 'My button title',
    link: false,
    type: 'Primary',
  },
  argTypes: {
    type: {
      options: ['Primary', 'Secondary'],
      control: {
        type: 'select',
      },
    },
  },
} as Meta

type Options = ButtonProps & { label: string; link: boolean; type: string }

const Template = ({ label, title, link, type }: Options) => (
  <Button
    title={title}
    href={link ? '/' : undefined}
    primary={type === 'Primary'}
  >
    {label}
  </Button>
)

export const Default = Template.bind({})
