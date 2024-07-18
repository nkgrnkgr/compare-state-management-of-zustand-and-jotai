import { List, Stack, Text } from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import { getFamilyIdsReadOnlyAtom } from "../formAtom";
import { AddFamilyButton } from "./AddFamilyButton";
import { Family } from "./Family";

export function Families() {
  const ids = useAtomValue(getFamilyIdsReadOnlyAtom);

  return (
    <Stack border="2px solid #d3d3d3" borderRadius="10px" p={4}>
      <Text>ご家族</Text>
      <List spacing={3}>
        {ids.map((id) => (
          <Family key={id} id={id} />
        ))}
      </List>
      <AddFamilyButton />
    </Stack>
  );
}
