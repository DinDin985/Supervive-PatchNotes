interface NewEffectProps {
  change: string;
}

export default function NewEffect({ change }: NewEffectProps) {
  return (
    <li>
      <p>{change}</p>
    </li>
  );
}
