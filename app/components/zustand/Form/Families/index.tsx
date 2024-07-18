import { List, Stack, Text } from "@chakra-ui/react";
import { useShallow } from "zustand/react/shallow";
import { useFormStore } from "../formStore";
import { AddFamilyButton } from "./AddFamilyButton";
import { Family } from "./Family";

export function Families() {
  // useShallowを使わないとfamily全体にアクセスするので全件再レンダリングが発生する
  const ids = useFormStore(
    useShallow((state) => state.formValues.families.map((family) => family.id)),
  );

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
