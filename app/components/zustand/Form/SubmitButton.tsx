import { Button } from "@chakra-ui/react";
import { useFormStore } from "./formStore";
import { selectHasError } from "./selectors";

export function SubmitButton() {
  const isDisabled = useFormStore(selectHasError);
  return (
    <Button colorScheme="green" isDisabled={isDisabled}>
      送信
    </Button>
  );
}
