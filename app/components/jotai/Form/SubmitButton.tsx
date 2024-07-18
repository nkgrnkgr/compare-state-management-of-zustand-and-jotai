import { Button } from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import { isDisabledButtonReadOnlyAtom } from "./formAtom";

export function SubmitButton() {
  const isDisabled = useAtomValue(isDisabledButtonReadOnlyAtom);

  return <Button isDisabled={isDisabled}>送信</Button>;
}
