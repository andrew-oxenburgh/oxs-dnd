import { Meta, Story } from '@storybook/react'
import Occupations from '../pages/Occupations'
import 'bootstrap/dist/css/bootstrap.min.css'
import classes from '../test/data/api/classes'

export default {
   title: 'Dnd/Occupations',
   component: Occupations,
   argTypes: {
      backgroundColor: { control: 'color' },
      occupations: [],
   },
} as Meta

const Template: Story = (args: {occupations}) => <Occupations {...args} />

export const Occupations1 = Template.bind({})
Occupations1.args = {
   primary: true,
   label: 'Button',
   occupations: classes,
}
