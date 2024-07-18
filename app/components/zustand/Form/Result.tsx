import { ListItem, OrderedList, Stack, Text } from "@chakra-ui/react";
import { createSelectors } from "../createSelector";
import { useFormStore } from "./formStore";

export function Result() {
  const store = createSelectors(useFormStore);
  const { name, selectedGenderValue, birthday, families } =
    store.use.formValues();

  return (
    <Stack p={2} gap={2} bgColor="tomato">
      <Text variant="body">name: {name}</Text>
      <Text variant="body">gender: {selectedGenderValue}</Text>
      <Text variant="body">birthday: {birthday}</Text>
      <OrderedList spacing={2}>
        {families.map((family) => (
          <ListItem key={family.id}>
            <Text variant="body">
              {family.id}: {family.name}
            </Text>
          </ListItem>
        ))}
      </OrderedList>
    </Stack>
  );
}
