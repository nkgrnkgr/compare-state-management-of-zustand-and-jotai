import { useAtom, useAtomValue } from "jotai";
import { InputBase } from "./InputBase";
import { getNoteErrorMessagesReadOnlyAtom, noteAtom } from "./formAtom";

export function InputNote() {
  const [note, setNote] = useAtom(noteAtom);
  const noteError = useAtomValue(getNoteErrorMessagesReadOnlyAtom);
  return (
    <InputBase
      label="備考"
      width="400px"
      placeholder="備考を入力"
      error={noteError}
      updateValue={setNote}
      value={note}
    />
  );
}
