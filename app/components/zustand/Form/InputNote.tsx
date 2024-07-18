import { InputBase } from "./InputBase";

export function InputNote() {
  return (
    <InputBase
      label="備考"
      width="400px"
      placeholder="備考"
      valueSelector={(state) => state.formValues.note}
      updateValueSelector={(state) => state.updateNote}
      errorSelector={(state) => state.errorMessages.note}
    />
  );
}
