import { Select } from "@chakra-ui/react";
import { useFormStore } from "./formStore";
import { selectMedicineOptions } from "./selectors";

export function MedicineSelect() {
  const selectedMedicineId = useFormStore(
    (state) => state.formValues.selectedMedicineId,
  );
  const medicines = useFormStore(selectMedicineOptions);
  const selectMedicine = useFormStore((state) => state.selectMedicine);

  return (
    <Select
      placeholder="医薬品を選択してください"
      defaultValue={selectedMedicineId}
      onChange={(e) => selectMedicine(e.target.value)}
    >
      {Object.values(medicines).map((medicine) => (
        <option key={medicine.id} value={medicine.id}>
          {medicine.name}
        </option>
      ))}
    </Select>
  );
}
