import { Select } from "@chakra-ui/react";
import { GENDER, type GenderType, useFormStore } from "./formStore";

export function GenderSelect() {
  const selectedGenderValue = useFormStore(
    (state) => state.formValues.selectedGenderValue,
  );
  const selectGender = useFormStore((state) => state.selectGender);

  return (
    <Select
      defaultValue={selectedGenderValue}
      onChange={(e) => selectGender(e.target.value as GenderType)}
    >
      {Object.entries(GENDER).map((v) => (
        <option key={v[0]} value={v[1]}>
          {v[1]}
        </option>
      ))}
    </Select>
  );
}
