import { Box, HStack, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Families } from "./Families";
import { GenderSelect } from "./GenderSelect";
import { GenderSpecificForm } from "./GenderSpecificForm";
import { Result } from "./Result";
import { SubmitButton } from "./SubmitButton";
import { useFormStore } from "./formStore";
import { useSuspenseFormQuery } from "./useFormQuery";

export function Form() {
  // 非同期通信のIFがこんな感じでuseEffectが結果必要だとあんまり Suspense が意味ない
  // zustandのstoreの初期化をここでやるならOKだけど、Providerをつかった実装に変えた方がよさそう
  const data = useSuspenseFormQuery();
  const load = useFormStore((state) => state.loadFormFormValues);
  useEffect(() => {
    load(data);
  }, [data, load]);

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
