import {Meta, Story} from '@storybook/react';
import Occupations from '../pages/Occupations';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
    title: 'Dnd/Classes',
    component: Occupations,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;

const Template: Story = (args) => <Occupations {...args} />;

export const OccupationsThing = Template.bind({});
OccupationsThing.args = {
    primary: true,
    label: 'Button',
};
