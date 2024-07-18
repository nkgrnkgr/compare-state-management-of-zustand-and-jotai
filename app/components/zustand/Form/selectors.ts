import { type FormState, GENDER } from "./formStore";

export const selectHasError = (state: FormState) =>
  state.errorMessages.name !== null || state.errorMessages.note !== null;

// 多分ここじゃない方がよさそう
// 非同期でとってくるならStateに追加するのもあり
type Medicine = {
  id: string;
  name: string;
};

const MEDICINES: Medicine[] = [
  {
    id: "1",
    name: "薬A",
  },
  {
    id: "2",
    name: "薬B",
  },
  {
    id: "3",
    name: "薬C",
  },
];

const FEMALE_MEDICINES: Medicine[] = [
  {
    id: "F1",
    name: "女性用の薬A",
  },
  {
    id: "F2",
    name: "女性用の薬B",
  },
  {
    id: "F3",
    name: "女性用の薬C",
  },
];

export const selectMedicineOptions = (state: FormState) =>
  state.formValues.selectedGenderValue === GENDER.FEMALE
    ? FEMALE_MEDICINES
    : MEDICINES;
