import { Button } from "@chakra-ui/react";
import { useFormStore } from "../formStore";

export function AddFamilyButton() {
  const addFamily = useFormStore((state) => state.addFamily);
  return (
    <Button colorScheme="blue" onClick={() => addFamily()}>
      入力欄を追加
    </Button>
  );
}
