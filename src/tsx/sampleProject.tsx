import React, { useState, useEffect } from "react";
import { Fabric } from "@fluentui/react/lib/Fabric";
import { Stack } from "@fluentui/react/lib/Stack";

export interface ISampleProjectProps {
  value: string;
  disabled: boolean;
  required: boolean;
  hidden: boolean;
  onChange: (value: string) => void;
}

const SampleProject: React.FC<ISampleProjectProps> = (props) => {
  const { value, onChange, disabled, required, hidden } = props;

  useEffect(() => {}, [value]);

  if (hidden) return <Fabric />;

  return (
    <Fabric>
      <Stack />
    </Fabric>
  );
};

export default SampleProject;
