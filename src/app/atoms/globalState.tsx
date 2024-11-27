import { atom } from "jotai";

const toggleMenuAtom = atom<boolean>(false);
const toggleFanWarningAtom = atom<boolean>(false);

export { toggleFanWarningAtom, toggleMenuAtom };
