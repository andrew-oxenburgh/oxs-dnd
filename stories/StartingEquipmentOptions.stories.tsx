import { Meta, Story } from '@storybook/react';
import StartingEquipmentOptions from '../pages/StartingEquipmentOptions';
import 'bootstrap/dist/css/bootstrap.min.css';
import occupation from '../test/data/api/occupation';

export default {
  title: 'Dnd/Occupation/Components/Starting Equipment Options',
  component: StartingEquipmentOptions,
  argTypes: {
    backgroundColor: { control: 'color' },
    equipment: [],
  },
} as Meta;

const Template: Story = (args: {options:[]}) => <StartingEquipmentOptions {...args} />;

export const StartingEquipmentOptions1 = Template.bind({});
StartingEquipmentOptions1.args = {
  primary: true,
  label: 'Button',
  options: occupation.starting_equipment_options,
};
