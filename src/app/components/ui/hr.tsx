import { twMerge } from "tailwind-merge";

interface HrProps {
  className?: string;
}

export default function Hr({ className }: HrProps) {
  return (
    <div
      className={twMerge(
        `relative mx-auto h-[1px] w-10/12 overflow-hidden rounded-full`,
        className,
      )}
    >
      <div className="absolute left-1/2 h-full w-full bg-gradient-to-r from-white from-20% to-transparent"></div>
      <div className="absolute right-1/2 h-full w-full bg-gradient-to-l from-white from-20% to-transparent"></div>
    </div>
  );
}
