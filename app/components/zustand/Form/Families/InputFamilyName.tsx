import { Input } from "@chakra-ui/react";
import { assertExists } from "~/utils/assertExists";
import { useFormStore } from "../formStore";

type Props = {
  id: string;
};

export function InputFamilyName({ id }: Props) {
  const name = useFormStore(
    (state) =>
      state.formValues.families.find((family) => family.id === id)?.name,
  );
  assertExists(name);
  const updateFamilyName = useFormStore((state) => state.updateFamilyName);
  return (
    <Input
      type="text"
      placeholder="ご家族のお名前"
      value={name}
      onChange={(e) => updateFamilyName(id, e.target.value)}
    />
  );
}
