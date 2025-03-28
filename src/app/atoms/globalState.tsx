import { atom } from "jotai";

const toggleMenuAtom = atom<boolean>(false);
const toggleFanWarningAtom = atom<boolean>(false);
const setVisibleSectionAtom = atom<string>("Summary");
const visablePatchNotesPostsAtom = atom<number>(6);

export {
  setVisibleSectionAtom,
  toggleFanWarningAtom,
  toggleMenuAtom,
  visablePatchNotesPostsAtom,
};
