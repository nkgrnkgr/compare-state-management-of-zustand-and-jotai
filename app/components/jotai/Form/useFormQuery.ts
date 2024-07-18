import type { FormValues } from "./types";

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
        birthday: formatDate(new Date()),
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

function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 月は0から始まるので+1する
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
