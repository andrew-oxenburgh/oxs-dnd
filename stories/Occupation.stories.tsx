import { Meta, Story } from '@storybook/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Occupation from '../pages/occupation/[id]'
import occupation from '../test/data/api/occupation'

export default {
   title: 'Dnd/Occupation',
   component: Occupation,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta

const Template: Story = (args: { occupation: [] }) => <Occupation {...args} />

export const Occupation1 = Template.bind({})
Occupation1.args = {
   primary: true,
   label: 'Button',
   occupation,
}
