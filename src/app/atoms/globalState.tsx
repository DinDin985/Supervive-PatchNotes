import { atom } from "jotai";

const toggleMenuAtom = atom<boolean>(false);
const toggleFanWarningAtom = atom<boolean>(true);

export { toggleFanWarningAtom, toggleMenuAtom };
