import { FC } from 'react'
import { DiagnosisInformationProps, WrapperBarraDoDiagnostico } from './barra-diagnostico/wrapper-da-barra'

interface DetalhesDoDiagnosticoProps {
    diagnosticos: DiagnosisInformationProps[]
}
const DetalhesDoDiagnostico: FC<DetalhesDoDiagnosticoProps> = (props) => {
  const { diagnosticos } = props
  return (
    <div className='flex flex-col w-full h-full gap-1'>
    {diagnosticos.map((item,index) => {
        return (
         <WrapperBarraDoDiagnostico 
         key={`id-${index}-${item.condition_name}`} 
         probability={item.probability} 
         condition_name={item.condition_name}/>
        )
    })}
    </div>
  )
}

export default DetalhesDoDiagnostico
