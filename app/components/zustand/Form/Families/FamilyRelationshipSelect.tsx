import { Select } from "@chakra-ui/react";
import { assertExists } from "~/utils/assertExists";
import {
  FAMILY_RELATIONSHIP,
  type FamilyRelationShipType,
  useFormStore,
} from "../formStore";

type Props = {
  id: string;
};

export function FamilyRelationshipSelect({ id }: Props) {
  const familyRelationship = useFormStore(
    (state) =>
      state.formValues.families.find((family) => family.id === id)
        ?.familyRelationship,
  );
  assertExists(familyRelationship);
  const selectFamilyRelationship = useFormStore(
    (state) => state.selectFamilyRelationship,
  );

  return (
    <Select
      defaultValue={familyRelationship}
      onChange={(e) =>
        selectFamilyRelationship(id, e.target.value as FamilyRelationShipType)
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
