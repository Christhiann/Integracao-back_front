import { useState, useEffect, PropsWithChildren, FC } from 'react';
import { BarraDoDiagnostico } from './barra-do-diagnostico';

export interface DiagnosisInformationProps { 
  probability: number,
  condition_name: string,
}

export const WrapperBarraDoDiagnostico: FC<PropsWithChildren<DiagnosisInformationProps>> = (props) => {
  const { children, probability, condition_name } = props
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev < probability ? prev + 1 : probability));
    }, 0);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='p-3'>
      <BarraDoDiagnostico condition_name={condition_name} target={probability} progress={progress} />
      {children}
    </div>
  );
};
