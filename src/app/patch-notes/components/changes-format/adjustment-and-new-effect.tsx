import Adjustment from "./adjustment";
import NewEffect from "./new-effect";

interface AdjustmentAndNewEffect {
  change: string | ChangeObject;
}

type ChangeObject = {
  part1: string;
  part2: string;
};

export default function AdjustmentAndNewEffect({
  change,
}: AdjustmentAndNewEffect) {
  if (typeof change === "string") {
    return <NewEffect change={change} />;
  } else if (typeof change === "object") {
    return <Adjustment change={change} />;
  }
}
