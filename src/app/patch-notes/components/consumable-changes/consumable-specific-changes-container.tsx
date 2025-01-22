import { type ReactNode } from "react";

export default function ConsumableSpecificChangesContainer({
  children,
}: {
  children: ReactNode;
}) {
  return <div>{children}</div>;
}
