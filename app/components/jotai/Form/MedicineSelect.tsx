import { Select } from "@chakra-ui/react";
import { useAtom, useAtomValue } from "jotai";
import { getMedicinesReadOnlyAtom, medicineIdAtom } from "./formAtom";

export function MedicineSelect() {
  const [selectedMedicineId, selectMedicineId] = useAtom(medicineIdAtom);
  const medicines = useAtomValue(getMedicinesReadOnlyAtom);
  return (
    <Select
      placeholder="医薬品を選択してください"
      defaultValue={selectedMedicineId}
      onChange={(e) => selectMedicineId(e.target.value)}
    >
      {Object.values(medicines).map((medicine) => (
        <option key={medicine.id} value={medicine.id}>
          {medicine.name}
        </option>
      ))}
    </Select>
  );
}
