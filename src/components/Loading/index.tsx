import { CircleNotch } from 'phosphor-react';
import React from 'react';

export default function Loading() {
  return (
    <div className="flex justify-center items-center p-1">
      <CircleNotch weight="bold" className="w-6 h-6 animate-spin" />
    </div>
  );
}
