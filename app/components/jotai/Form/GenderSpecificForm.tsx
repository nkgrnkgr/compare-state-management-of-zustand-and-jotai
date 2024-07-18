import { useAtomValue } from "jotai";
import { InputName } from "./InputName";
import { InputNote } from "./InputNote";
import { MedicineSelect } from "./MedicineSelect";
import { PregnantCheckbox } from "./PregnantCheckbox";
import { genderAtom } from "./formAtom";
import { GENDER } from "./types";

export function GenderSpecificForm() {
  const gender = useAtomValue(genderAtom);

  switch (gender) {
    case GENDER.MALE: {
      return (
        <>
          <InputName />
          <MedicineSelect />
          <InputNote />
        </>
      );
    }
    case GENDER.FEMALE: {
      return (
        <>
          <InputName />
          <MedicineSelect />
          <PregnantCheckbox />
          <InputNote />
        </>
      );
    }
    case GENDER.OTHER: {
      return (
        <>
          <InputName />
          <MedicineSelect />
          <InputNote />
        </>
      );
    }
    default: {
      return null;
    }
  }
}
