import { Select } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { familiesAtom } from "../formAtom";
import { FAMILY_RELATIONSHIP, type FamilyRelationShipType } from "../types";

type Props = {
  id: string;
};

export function FamilyRelationshipSelect({ id }: Props) {
  const [family, updateFamily] = useAtom(familiesAtom(id));
  const selectFamilyRelationship = (value: FamilyRelationShipType) =>
    updateFamily({
      ...family,
      familyRelationship: value,
    });

  return (
    <Select
      defaultValue={family.familyRelationship}
      onChange={(e) =>
        selectFamilyRelationship(e.target.value as FamilyRelationShipType)
      }
    >
      {Object.entries(FAMILY_RELATIONSHIP).map(([key, value]) => (
        <option key={key} value={value}>
          {value}
        </option>
      ))}
    </Select>
  );
}
