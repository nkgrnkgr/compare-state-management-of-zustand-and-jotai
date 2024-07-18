import { Select } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { genderAtom } from "./formAtom";
import { GENDER, type GenderType } from "./types";

export function GenderSelect() {
  const [selectedGenderValue, selectGender] = useAtom(genderAtom);

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
