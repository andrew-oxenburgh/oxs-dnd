import { Meta, Story } from '@storybook/react';
import StartingEquipment from '../pages/StartingEquipment';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  title: 'Dnd/Occupation/Components/Starting Equipment',
  component: StartingEquipment,
  argTypes: {
    backgroundColor: { control: 'color' },
    equipment: [],

  },
} as Meta;

const Template: Story = (args: {equipment:[]}) => <StartingEquipment {...args} />;

export const StartingEquipment1 = Template.bind({});
StartingEquipment1.args = {
  primary: true,
  label: 'Button',
  equipment: [
    {
      equipment: {
        index: 'explorers-pack',
        name: "Explorer's Pack",
        url: '/api/equipment/explorers-pack',
      },
      quantity: 1,
    },
    {
      equipment: {
        index: 'javelin',
        name: 'Javelin',
        url: '/api/equipment/javelin',
      },
      quantity: 4,
    },
  ],
};
