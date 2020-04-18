import React from "react";

import { Button, Gradient, Icon, Label } from "./styles";

export default function PayButton({ onPress, focused }) {
  return (
    <Button onPress={onPress}>
      <Gradient focused={focused}>
        <Icon focused={focused} />
        <Label focused={focused}>Pagar</Label>
      </Gradient>
    </Button>
  );
}
