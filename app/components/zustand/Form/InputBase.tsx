import { FormLabel, Input, Stack, Text } from "@chakra-ui/react";
import { type FormState, useFormStore } from "./formStore";

type Props = {
  label: string;
  placeholder: string;
  valueSelector: (state: FormState) => string;
  updateValueSelector: (state: FormState) => (value: string) => void;
  errorSelector: (state: FormState) => string | null;
  width?: string;
};

export function InputBase({
  label,
  placeholder,
  valueSelector,
  updateValueSelector,
  errorSelector,
  width = "200px",
}: Props) {
  const value = useFormStore(valueSelector);
  const updateValue = useFormStore(updateValueSelector);
  const error = useFormStore(errorSelector);

  return (
    <Stack gap={2} w="fit-content">
      <FormLabel w={width}>
        <Text>{label}</Text>
        <Input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => updateValue(e.target.value)}
        />
      </FormLabel>
      {error && <Text color="red">{error}</Text>}
    </Stack>
  );
}
