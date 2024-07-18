import { z } from "zod";

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

export type Medicine = {
  id: string;
  name: string;
};

export const MEDICINES: Medicine[] = [
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

export const FEMALE_MEDICINES: Medicine[] = [
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

export const formSchema = z.object({
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
