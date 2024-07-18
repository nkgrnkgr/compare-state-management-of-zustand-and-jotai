import { useAtom, useAtomValue } from "jotai";
import { InputBase } from "./InputBase";
import { getNameErrorMessagesReadOnlyAtom, nameAtom } from "./formAtom";

export function InputName() {
  const [name, setName] = useAtom(nameAtom);
  const nameError = useAtomValue(getNameErrorMessagesReadOnlyAtom);
  return (
    <InputBase
      label="名前"
      placeholder="名前を入力"
      error={nameError}
      updateValue={setName}
      value={name}
    />
  );
}
