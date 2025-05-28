import React from 'react';
import { twMerge } from 'tailwind-merge';

type BarraDoDiagnosticoProps = {
  progress: number;
  target: number;
  height?: number;
  condition_name: string
};

export const BarraDoDiagnostico: React.FC<BarraDoDiagnosticoProps> = ({
  progress,
  target,
  condition_name,
}) => {
  const numberPresetColor = progress < target ? 'black' : (
    target < 70 ? 'text-blue' : 'text-purple-700'
  )
  const barPresetColor = target < 70 ? 'bg-blue-500' : 'bg-purple-700'
  return (
    <div>
      <div className="text-xl py-[6px]">{condition_name}: 
        <span className={`${numberPresetColor} text-2xl ml-2 font-bold`}>{progress}%</span>
      </div>
    <div
      className={`w-full rounded-full overflow-hidden bg-gray-300 h-4`}>
      <div
        className={twMerge(`h-full transition-all duration-500 ease-in-out ${barPresetColor}`)}
        style={{ width: `${Math.min(progress, 100)}%` }}
      />
    </div>

    </div>
  );
};

