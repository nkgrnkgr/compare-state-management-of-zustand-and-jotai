import { Checkbox } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { isPregnantAtom } from "./formAtom";

export function PregnantCheckbox() {
  const [isPregnant, changeIsPregnant] = useAtom(isPregnantAtom);
  return (
    <Checkbox
      defaultChecked={isPregnant}
      onChange={() => changeIsPregnant(!isPregnant)}
    >
      妊娠中
    </Checkbox>
  );
}
