import type { ReactElement, ReactNode } from "react";

export interface BugFixesProps {
  bugFixes: string[];
  containerClassName?: string;
  cutCornersClassName?: string;
}

type Custom = {
  title: string;
  img?: string;
  description?: (
    | string
    | {
        type: string;
        link: string;
        anchorText: string;
      }
  )[];
  notes: (string | string[])[];
  bulletPoints?: string[];
};

export interface CustomProps {
  custom: Custom;
  containerClassName?: string;
  cutCornersClassName?: string;
  marginVariant?: string;
}

export interface ConsumableChangesProps {
  children: ReactNode[];
  consumableImg: string;
}

type EquipmentChanges = {
  name: string;
  img: string;
  description: string;
  notes: string;
  changes: {
    type: string;
    changes: (string | { part1: string; part2: string })[];
  }[];
};

export interface EquipmentChangesProps {
  children: ReactNode[];
  equipmentImg: string;
}

export type HunterChangesContainerProps = {
  children: ReactNode;
  variant?: "midPatchUpdate" | "default";
};

export type HunterAbilityChangesProps = {
  children: ReactNode;
  abilityImg: string;
  abilityName: string;
};

type HunterChanges = {
  name: string;
  imgSmall: string;
  imgBig: string;
  description: string;
  notes: string;
  changes: {
    type: string;
    abilityName: string;
    abilityImg: string;
    changes: (string | { part1: string; part2: string })[];
  }[];
};

export interface HunterChangesProps {
  children: ReactNode[];
  imgBig: string;
  imgSmall: string;
  variant: "midPatchUpdate";
}

export type HunterIntroProps = {
  children: ReactNode;
  imgBig: string;
  imgSmall: string;
};

export type initalData = {
  title: string;
  custom: Custom[];
  systemChanges: SystemChanges[];
  hunterChanges: HunterChanges[];
  equipmentChanges: EquipmentChanges[];
  bugFixesList: string[];
};

export type IntroductionProps = {
  children?: ReactNode;
  img: string;
};

export type MidPatchUpdatesProps = {
  children: ReactNode;
  title: string;
};

export type PatchNotesPostListProps = {
  children: ReactElement<{ posts: posts }>;
};

export type posts = {
  frontmatter: {
    title: string;
    "cover-image": string;
    date: string;
    description: string;
  };
  content: React.ReactNode;
  slug: string;
};

export type PatchNotesListProps = {
  posts: posts[];
  numOfVisablePosts: number;
};

export type PatchNotesListContainer = {
  postLength: number;
  posts: posts[];
};

export interface PowerChangesProps {
  children: ReactNode[];
  powerImg: string;
}

export type ShowMorePosts = () => void;

export type ShowMoreButtonProps = {
  ShowMorePosts: ShowMorePosts;
  numOfVisablePosts: number;
  postLength: number;
};

export type SummaryProps = {
  children?: ReactNode;
  authorName: string;
  authorImg?: string;
};

type SystemChanges = {
  title: string;
  notes: (string | string[])[];
  changes: {
    type: string;
    subtitle?: string;
    changes: (string | { part1: string; part2: string })[];
  }[];
};

export interface SystemChangesProps {
  children: ReactNode;
}
