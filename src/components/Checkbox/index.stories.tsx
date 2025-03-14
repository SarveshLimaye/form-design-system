import React from 'react';
import { Story } from '@storybook/react';
import Checkbox, { CheckboxProps } from '.';

const Template = (args: CheckboxProps) => <Checkbox {...args} />;

export const Primary: Story<CheckboxProps> = Template.bind({});
Primary.args = {
  name: 'spam',
  label: 'I agree to receive spam',
};

export const managingCheckedState: Story<CheckboxProps> = Template.bind({});

managingCheckedState.args = {
  defaultChecked: true,
  name: 'default-checked',
  label: 'Checked by default',
};

managingCheckedState.parameters = {
  docs: {
    description: {
      story:
        '`Checkbox` will render as unchecked by default. Use the `defaultChecked` boolean prop to set the initial state to checked.',
    },
  },
};

export const preventingUserInteraction = (): JSX.Element => (
  <>
    <div>
      <Checkbox disabled name="disabled-unchecked" label="Disabled unchecked" />
    </div>
    <div>
      <Checkbox
        disabled
        defaultChecked
        name="disabled-checked"
        label="Disabled checked"
      />
    </div>
  </>
);

preventingUserInteraction.parameters = {
  docs: {
    description: {
      story:
        'Use the `disabled` prop to prevent the user from changing the checked state of the checkbox.',
    },
  },
};

export const checkboxWithoutLabel: Story<CheckboxProps> = Template.bind({});
checkboxWithoutLabel.args = {
  name: 'no-label',
  label: "I don't have a label",
  showLabel: false,
};

checkboxWithoutLabel.parameters = {
  docs: {
    description: {
      story:
        'You can prevent the label from showing by setting `showLabel` to `false`. The value of the `label` prop will be used to set an ARIA attribute.',
    },
  },
};

export const indeterminateCheckboxes: Story<CheckboxProps> = Template.bind({});
indeterminateCheckboxes.args = {
  indeterminate: true,
  name: 'notsureif',
  label: 'Indeterminate checkbox',
};

indeterminateCheckboxes.parameters = {
  docs: {
    description: {
      story:
        'Passing the `indeterminate` boolean prop will set `indeterminate` attribute of the underlying input element and render the `CheckIndeterminate` icon when the checkbox is checked.',
    },
  },
};

export const readingTheValueOfACheckbox: Story<CheckboxProps> = Template.bind({});
readingTheValueOfACheckbox.args = {
  label: 'Option one',
};

readingTheValueOfACheckbox.parameters = {
  docs: {
    description: {
      story:
        ' The `onChange` prop will be spread on the `input` element the `Checkbox` component renders. Read the `checked` attribute of the event `currentTarget`.',
    },
  },
};

export default {
  component: Checkbox,
  title: 'components/Checkbox',
  argTypes: { onChange: { action: 'onChange' } },
  parameters: {
    componentSubtitle: 'Uncontrolled custom checkbox component with optional label.',
    docs: {
      fds: {
        attributes: ['rest'],
      },
    },
  },
};
