import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { initializeIcons } from "@fluentui/react/lib/Icons";

initializeIcons();

import SampleProject from "../src/tsx/sampleProject";

export default {
  title: "SampleProject",
  component: SampleProject
};

const Template: Story<ComponentProps<typeof SampleProject>> = (args) => (
  <SampleProject {...args} />
);

export const InitializeControl = Template.bind({});
InitializeControl.args = {
  value: "",
  onChange: action("onChange")
};
