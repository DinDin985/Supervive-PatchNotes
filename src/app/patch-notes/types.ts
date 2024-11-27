export interface BugFixesProps {
  bugFixes: string[];
  containerClassName?: string;
  cutCornersClassName?: string;
}

export interface CustomProps {
  custom: {
    title: string;
    notes: (string | string[])[];
    bulletPoints: string[];
  };
  containerClassName?: string;
  cutCornersClassName?: string;
  marginVariant?: string;
}

export interface EquipmentChangesProps {
  equipmentChanges: {
    name: string;
    img: string;
    description: string;
    notes: string;
    changes: {
      type: string;
      changes: (string | { part1: string; part2: string })[];
    }[];
  }[];
  containerClassName?: string;
  cutCornersClassName?: string;
  marginVariant?: string;
}

export interface HunterChangesProps {
  hunterChanges: {
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
  }[];
  containerClassName?: string;
  cutCornersClassName?: string;
}

export type initalData = {
  title: string;
  custom: {
    title: string;
    notes: (string | string[])[];
    bulletPoints: string[];
  }[];
  systemChanges: {
    title: string;
    notes: string[];
    changes: { type: string; changes: string[] }[];
  }[];
  hunterChanges: {
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
  }[];
  equipmentChanges: {
    name: string;
    img: string;
    description: string;
    notes: string;
    changes: {
      type: string;
      changes: (string | { part1: string; part2: string })[];
    }[];
  }[];
  powerChanges: {
    name: string;
    img: string;
    description: string;
    notes: string;
    changes: {
      type: string;
      changes: (
        | string
        | {
            part1: string;
            part2: string;
          }
      )[];
    }[];
  }[];
  bugFixesList: string[];
};

export type MidPatchUpdatesProps = {
  midPatchUpdates: {
    title?: string;
    custom?: {
      title: string;
      notes: (string | string[])[];
      bulletPoints: string[];
    }[];
    systemChanges?: {
      title: string;
      notes: (string | string[])[];
      changes: {
        type: string;
        subtitle?: string;
        changes: (
          | string
          | {
              part1: string;
              part2: string;
            }
        )[];
      }[];
    }[];
    hunterChanges?: {
      name: string;
      imgSmall: string;
      imgBig: string;
      description: string;
      notes: string;
      changes: {
        type: string;
        abilityName: string;
        abilityImg: string;
        changes: (
          | string
          | {
              part1: string;
              part2: string;
            }
        )[];
      }[];
    }[];
    equipmentChanges?: {
      name: string;
      img: string;
      description: string;
      notes: string;
      changes: {
        type: string;
        changes: (string | { part1: string; part2: string })[];
      }[];
    }[];
    powerChanges?: {
      name: string;
      img: string;
      description: string;
      notes: string;
      changes: {
        type: string;
        changes: (
          | string
          | {
              part1: string;
              part2: string;
            }
        )[];
      }[];
    }[];
    bugFixesList?: string[];
  };
};

export interface PowerChangesProps {
  powerChanges: {
    name: string;
    img: string;
    description: string;
    notes: string;
    changes: {
      type: string;
      changes: (
        | string
        | {
            part1: string;
            part2: string;
          }
      )[];
    }[];
  }[];
  containerClassName?: string;
  cutCornersClassName?: string;
  marginVariant?: string;
}

export interface SystemChangesProps {
  systemChanges: {
    title: string;
    notes: (string | string[])[];
    changes: {
      type: string;
      subtitle?: string;
      changes: (string | { part1: string; part2: string })[];
    }[];
  }[];
  containerClassName?: string;
  cutCornersClassName?: string;
  marginVariant?: string;
}
