import { InputBase } from "./InputBase";

export function InputName() {
  return (
    <InputBase
      label="名前"
      placeholder="名前"
      valueSelector={(state) => state.formValues.name}
      updateValueSelector={(state) => state.updateName}
      errorSelector={(state) => state.errorMessages.name}
    />
  );
}
