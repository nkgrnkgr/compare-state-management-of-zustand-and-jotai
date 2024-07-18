import type { FormValues } from "./formStore";

let data: FormValues | undefined;

export function useSuspenseFormQuery() {
  if (data !== undefined) {
    return data;
  }
  const promise = new Promise<FormValues>(() => {
    setTimeout(() => {
      data = {
        name: "hoge",
        note: "",
        isPregnant: false,
        selectedGenderValue: "男性",
        selectedMedicineId: undefined,
        families: [
          {
            id: "family-1",
            name: "家族xxx",
            familyRelationship: "本人",
          },
        ],
      };
    }, 2000); // 2秒後にデータを返す
  });

  throw promise;
}
