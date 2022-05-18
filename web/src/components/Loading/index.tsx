import { CircleNotch } from 'phosphor-react';

export default function Loading() {
  return (
    <div className="flex justify-center items-center p-1">
      <CircleNotch weight="bold" className="w-5 h-5 animate-spin" />
    </div>
  );
}
