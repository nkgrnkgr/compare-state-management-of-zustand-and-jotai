import { Checkbox } from "@chakra-ui/react";
import { useFormStore } from "./formStore";

export function PregnantCheckbox() {
  const isPregnant = useFormStore((state) => state.formValues.isPregnant);
  const changeIsPregnant = useFormStore((state) => state.changeIsPregnant);
  return (
    <Checkbox defaultChecked={isPregnant} onChange={() => changeIsPregnant()}>
      妊娠中
    </Checkbox>
  );
}
