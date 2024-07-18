import { Box, HStack, Stack } from "@chakra-ui/react";
import { Families } from "./Families";
import { GenderSelect } from "./GenderSelect";
import { GenderSpecificForm } from "./GenderSpecificForm";
import { Result } from "./Result";
import { SubmitButton } from "./SubmitButton";

export function Form() {
  // 非同期通信のIFがこんな感じでuseEffectが結果必要だとあんまり Suspense が意味ない
  // const data = useSuspenseFormQuery();
  // const load = useSetAtom(loadFormValuesWriteOnlyAtom);
  // useEffect(() => {
  //   load(data);
  // }, [data, load]);
  return (
    <HStack gap={2} alignItems="baseline">
      <form>
        <Stack gap={4} w="500px">
          <GenderSelect />
          <Stack border="2px solid #d3d3d3" borderRadius="10px" p={4}>
            <GenderSpecificForm />
            <Families />
            <SubmitButton />
          </Stack>
        </Stack>
      </form>
      <Box w="500px">
        <Result />
      </Box>
    </HStack>
  );
}
