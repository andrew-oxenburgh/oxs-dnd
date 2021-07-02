import { Meta, Story } from '@storybook/react'
import OsxNavBar from '../pages/OsxNavBar'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
   title: 'Dnd/Navigation Bar',
   component: OsxNavBar,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta

const Template: Story = (args) => <OsxNavBar {...args} />

export const NavigationBar = Template.bind({})
NavigationBar.args = {
   primary: true,
   label: 'Button',
}
