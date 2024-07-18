import { Button } from "@chakra-ui/react";
import { useSetAtom } from "jotai";
import { addFamilyWriteOnlyAtom } from "../formAtom";

export function AddFamilyButton() {
  const addFamily = useSetAtom(addFamilyWriteOnlyAtom);

  return (
    <Button colorScheme="blue" onClick={() => addFamily()}>
      入力欄を追加
    </Button>
  );
}
