import { atom } from "jotai";
import { atomFamily } from "jotai/utils";
import {
  FAMILY_RELATIONSHIP,
  FEMALE_MEDICINES,
  type FormValues,
  GENDER,
  type GenderType,
  MEDICINES,
  type Medicine,
  formSchema,
} from "./types";

type Family = FormValues["families"][0];

const INITIAL_FAMILY: Family = {
  id: "family-1",
  name: "家族",
  familyRelationship: FAMILY_RELATIONSHIP.OWN,
};

const INITIAL_FORM_VALUES: FormValues = {
  name: "",
  note: "",
  isPregnant: false,
  selectedGenderValue: GENDER.MALE,
  selectedMedicineId: undefined,
  families: [INITIAL_FAMILY],
};

export const nameAtom = atom<string, [string], void>(
  INITIAL_FORM_VALUES.name,
  (get, set, update) => {
    set(nameAtom, update);
    // eslint-disable-next-line no-underscore-dangle
    const nameError =
      parseState(get(getFormReadOnlyAtom))?.name?._errors?.[0] || null;
    set(errorMessagesAtom, (prev) => ({ ...prev, name: nameError }));
  },
);
export const noteAtom = atom<string, [string], void>(
  INITIAL_FORM_VALUES.note,
  (get, set, update) => {
    set(noteAtom, update);
    // eslint-disable-next-line no-underscore-dangle
    const noteError =
      parseState(get(getFormReadOnlyAtom))?.note?._errors?.[0] || null;
    set(errorMessagesAtom, (prev) => ({ ...prev, note: noteError }));
  },
);
export const isPregnantAtom = atom(INITIAL_FORM_VALUES.isPregnant);
export const medicineIdAtom = atom<string | undefined>(
  INITIAL_FORM_VALUES.selectedMedicineId,
);
export const genderAtom = atom<GenderType, [GenderType], void>(
  INITIAL_FORM_VALUES.selectedGenderValue,
  (_, set, update) => {
    set(genderAtom, update);
    set(nameAtom, INITIAL_FORM_VALUES.name);
    set(noteAtom, INITIAL_FORM_VALUES.note);
    set(isPregnantAtom, INITIAL_FORM_VALUES.isPregnant);
    set(medicineIdAtom, INITIAL_FORM_VALUES.selectedMedicineId);
    set(errorMessagesAtom, {
      name: null,
      note: null,
    });
    set(familyIdsAtom, [INITIAL_FAMILY.id]);
    set(familiesAtom(INITIAL_FAMILY.id), {
      ...INITIAL_FAMILY,
    });
  },
);
const errorMessagesAtom = atom<{
  name: string | null;
  note: string | null;
}>({
  name: null,
  note: null,
});

const familyIdsAtom = atom<string[]>([INITIAL_FAMILY.id]);

export const familiesAtom = atomFamily(
  (id: string) =>
    atom<Family>({
      ...INITIAL_FAMILY,
      id,
    }),
  (a, b) => a === b,
);

export const addFamilyWriteOnlyAtom = atom<null, [], void>(null, (get, set) => {
  const newFamilyId = `family-${get(familyIdsAtom).length + 1}`;
  set(familyIdsAtom, (prev) => [...prev, newFamilyId]);
  set(familiesAtom(newFamilyId), {
    ...INITIAL_FAMILY,
    id: newFamilyId,
  });
});

export const loadFormValuesWriteOnlyAtom = atom<null, [FormValues], void>(
  null,
  (_, set, loadedFormValues) => {
    set(nameAtom, loadedFormValues.name);
    set(noteAtom, loadedFormValues.note);
    set(genderAtom, loadedFormValues.selectedGenderValue);
    set(isPregnantAtom, loadedFormValues.isPregnant);
    // biome-ignore lint/complexity/noForEach: <explanation>
    loadedFormValues.families.forEach((f) => {
      set(familiesAtom(f.id), f);
    });
    set(medicineIdAtom, loadedFormValues.selectedMedicineId);
  },
);

export const getFamilyIdsReadOnlyAtom = atom((get) => get(familyIdsAtom));

export const getFormReadOnlyAtom = atom<FormValues>((get) => {
  const name = get(nameAtom);
  const note = get(noteAtom);
  const selectedGenderValue = get(genderAtom);
  const birthday = get(birthdayAtom);
  const isPregnant = get(isPregnantAtom);
  const selectedMedicineId = get(medicineIdAtom);
  const families = get(familyIdsAtom).map((id) => get(familiesAtom(id)));

  const formValues: FormValues = {
    name,
    note,
    selectedGenderValue,
    birthday,
    isPregnant,
    selectedMedicineId,
    families,
  };
  return formValues;
});

export const getMedicinesReadOnlyAtom = atom<Medicine[]>((get) =>
  get(genderAtom) === GENDER.FEMALE ? FEMALE_MEDICINES : MEDICINES,
);

export const getNameErrorMessagesReadOnlyAtom = atom<string | null>(
  (get) => get(errorMessagesAtom).name,
);
export const getNoteErrorMessagesReadOnlyAtom = atom<string | null>(
  (get) => get(errorMessagesAtom).note,
);
export const isDisabledButtonReadOnlyAtom = atom<boolean>(
  (get) =>
    get(errorMessagesAtom).name !== null ||
    get(errorMessagesAtom).note !== null ||
    get(errorMessagesAtom).birthday !== null,
);

function parseState(formValues: FormValues) {
  const result = formSchema.safeParse(formValues);
  if (result.success) return null;
  return result.error.format();
}

function formatDate(date: Date): AWSDate {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 月は0から始まるので+1する
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}` as AWSDate;
}
