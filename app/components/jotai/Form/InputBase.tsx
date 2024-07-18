import { FormLabel, Input, Stack, Text } from "@chakra-ui/react";

type Props = {
  label: string;
  placeholder: string;
  value: string;
  updateValue: (value: string) => void;
  error: string | null;
  width?: string;
};

export function InputBase({
  label,
  placeholder,
  value,
  updateValue,
  error,
  width = "200px",
}: Props) {
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
