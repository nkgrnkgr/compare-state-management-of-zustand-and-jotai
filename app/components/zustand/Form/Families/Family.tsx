import { ListItem, Stack } from "@chakra-ui/react";
import { FamilyRelationshipSelect } from "./FamilyRelationshipSelect";
import { InputFamilyName } from "./InputFamilyName";

type Props = {
  id: string;
};

export function Family({ id }: Props) {
  return (
    <ListItem>
      <Stack gap={2}>
        <InputFamilyName id={id} />
        <FamilyRelationshipSelect id={id} />
      </Stack>
    </ListItem>
  );
}
