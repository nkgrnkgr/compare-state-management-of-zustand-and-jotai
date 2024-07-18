import { z } from "zod";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const GENDER = {
  MALE: "男性",
  FEMALE: "女性",
  OTHER: "その他",
} as const;

export type GenderType = (typeof GENDER)[keyof typeof GENDER];

export const FAMILY_RELATIONSHIP = {
  OWN: "本人",
  PARTNER: "配偶者",
  FATHER: "父",
  MOTHER: "母",
  BROTHER: "兄弟",
  SISTER: "姉妹",
  ETC: "その他",
} as const;

export type FamilyRelationShipType =
  (typeof FAMILY_RELATIONSHIP)[keyof typeof FAMILY_RELATIONSHIP];

const formSchema = z.object({
  name: z.string().max(10, "名前は10文字以内で入力してください"),
  note: z.string().max(50, "備考は50文字以内で入力してください"),
  selectedGenderValue: z.enum([GENDER.MALE, GENDER.FEMALE, GENDER.OTHER]),
  isPregnant: z.boolean(),
  selectedMedicineId: z.string().optional(),
  families: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      familyRelationship: z.enum([
        FAMILY_RELATIONSHIP.OWN,
        FAMILY_RELATIONSHIP.PARTNER,
        FAMILY_RELATIONSHIP.FATHER,
        FAMILY_RELATIONSHIP.MOTHER,
        FAMILY_RELATIONSHIP.BROTHER,
        FAMILY_RELATIONSHIP.SISTER,
        FAMILY_RELATIONSHIP.ETC,
      ]),
    }),
  ),
});

export type FormValues = z.infer<typeof formSchema>;

type State = {
  formValues: FormValues;
};

const INITIAL_FORM_VALUES: FormValues = {
  name: "",
  note: "",
  isPregnant: false,
  selectedGenderValue: GENDER.MALE,
  selectedMedicineId: undefined,
  families: [
    {
      id: "family-1",
      name: "家族1",
      familyRelationship: FAMILY_RELATIONSHIP.OWN,
    },
  ],
};

type Actions = {
  loadFormFormValues: (values: FormValues) => void;
  updateName: (name: string) => void;
  updateNote: (name: string) => void;
  selectGender: (value: GenderType) => void;
  changeIsPregnant: () => void;
  selectMedicine: (id?: string) => void;
  updateFamilyName: (id: string, name: string) => void;
  selectFamilyRelationship: (id: string, value: FamilyRelationShipType) => void;
  addFamily: () => void;
};

type ErrorMessages = {
  errorMessages: {
    name: string | null;
    note: string | null;
  };
};

export type FormState = State & Actions & ErrorMessages;

export const useFormStore = create<FormState>()(
  immer((set) => ({
    formValues: {
      ...INITIAL_FORM_VALUES,
    },
    loadFormFormValues: (values) => {
      set((state) => {
        // eslint-disable-next-line no-param-reassign
        state.formValues = values;
      });
    },
    changeIsPregnant: () => {
      set((state) => {
        // eslint-disable-next-line no-param-reassign
        state.formValues.isPregnant = !state.formValues.isPregnant;
      });
    },
    selectGender: (value) => {
      set((state) => {
        // eslint-disable-next-line no-param-reassign
        state.formValues = {
          ...INITIAL_FORM_VALUES,
          selectedGenderValue: value,
        };
      });
    },
    updateName(value) {
      set((state) => {
        // eslint-disable-next-line no-param-reassign
        state.formValues.name = value;
        // eslint-disable-next-line no-underscore-dangle, no-param-reassign
        state.errorMessages.name =
          parseState(state)?.name?._errors?.[0] || null;
      });
    },
    updateNote(value) {
      set((state) => {
        // eslint-disable-next-line no-param-reassign
        state.formValues.note = value;
        // eslint-disable-next-line no-underscore-dangle, no-param-reassign
        state.errorMessages.note =
          parseState(state)?.note?._errors?.[0] || null;
      });
    },
    selectMedicine(value) {
      set((state) => {
        // eslint-disable-next-line no-param-reassign
        state.formValues.selectedMedicineId = value;
      });
    },
    updateFamilyName(id, value) {
      set((state) => {
        // biome-ignore lint/style/noNonNullAssertion: <explanation>
        state.formValues.families.find((family) => family.id === id)!.name =
          value;
      });
    },
    selectFamilyRelationship(id, value) {
      set((state) => {
        // biome-ignore lint/style/noNonNullAssertion: <explanation>
        state.formValues.families.find(
          (family) => family.id === id,
        )!.familyRelationship = value;
      });
    },
    addFamily() {
      set((state) => {
        state.formValues.families.push({
          id: `family${String(state.formValues.families.length + 1)}`,
          name: "",
          familyRelationship: FAMILY_RELATIONSHIP.ETC,
        });
      });
    },
    errorMessages: {
      name: null,
      note: null,
    },
  })),
);

function parseState(state: State) {
  const result = formSchema.safeParse(state.formValues);
  if (result.success) return null;
  return result.error.format();
}
