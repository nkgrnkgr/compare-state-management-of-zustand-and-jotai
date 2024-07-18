import { ListItem, OrderedList, Stack, Text } from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import { getFormReadOnlyAtom } from "./formAtom";

export function Result() {
  const { name, selectedGenderValue, birthday, families } =
    useAtomValue(getFormReadOnlyAtom);

  return (
    <Stack p={2} gap={2} bgColor="tomato">
      <Text variant="body">name: {name}</Text>
      <Text variant="body">gender: {selectedGenderValue}</Text>
      <Text variant="body">birthday: {birthday}</Text>
      <OrderedList spacing={2}>
        {families.map((family) => (
          <ListItem key={family.id}>
            <Text variant="body">
              {family.id}: {family.name}: {family.familyRelationship}
            </Text>
          </ListItem>
        ))}
      </OrderedList>
    </Stack>
  );
}
