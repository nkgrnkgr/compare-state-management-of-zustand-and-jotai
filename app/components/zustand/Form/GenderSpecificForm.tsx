import { InputName } from "./InputName";
import { InputNote } from "./InputNote";
import { MedicineSelect } from "./MedicineSelect";
import { PregnantCheckbox } from "./PregnantCheckbox";
import { GENDER, useFormStore } from "./formStore";

export function GenderSpecificForm() {
  const gender = useFormStore((state) => state.formValues.selectedGenderValue);

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
