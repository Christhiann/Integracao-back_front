import { useDiagnosisStore } from '@/hooks'
import { FC } from 'react'
import { useNavigate } from 'react-router'

export interface ItemDeOpcaoDeDiagnosticoComponentProps {
  imgUrl: string
  description: string
  diagnosticoTipo: string
}

export const ItemDeOpcaoDeDiagnostico: FC<ItemDeOpcaoDeDiagnosticoComponentProps> = (props) => {
  const { imgUrl, description, diagnosticoTipo } = props

  const atualizarDiagnosisStore = useDiagnosisStore((state) => state.setDiagnostico)
  const navigate = useNavigate()

  const handleClick = (diagnostico: string) => {
    atualizarDiagnosisStore(diagnostico)
    navigate(`/diagnostico`)
  }

  return (
    <button
      className="bg-white transition-transform duration-200 w-50 2xl:w-70
      hover:cursor-pointer ease-in-out hover:scale-105 hover:shadow-xl rounded-xl
      flex flex-col 2xl:gap-6 xl:gap-3 2xl:p-6 xl:p-4 p-2 items-center justify-center text-center shadow-lg "
      onClick={() => handleClick(diagnosticoTipo)}
    >
      <img className='xl:w-max xl:max-w-full w-[30%] max-w-[30%]' src={imgUrl} alt={`${description}-image`} />
      <div className="text-gray-400 2xl:text-xl xl:text-lg">{description}</div>
    </button>
  )
}
