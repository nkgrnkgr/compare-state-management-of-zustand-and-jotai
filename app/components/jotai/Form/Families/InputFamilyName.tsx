import { Input } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { familiesAtom } from "../formAtom";

type Props = {
  id: string;
};

export function InputFamilyName({ id }: Props) {
  const [family, updateFamily] = useAtom(familiesAtom(id));
  return (
    <Input
      type="text"
      placeholder="ご家族のお名前"
      value={family.name}
      onChange={(e) =>
        updateFamily({
          ...family,
          name: e.target.value,
        })
      }
    />
  );
}
