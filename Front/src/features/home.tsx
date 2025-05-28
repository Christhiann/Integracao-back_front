import { ItemDeOpcaoDeDiagnostico, OpcoesDeDiagnostico } from "@/components"
import { useEffect } from "react"

export const Home = () => {
  useEffect(() => {
    localStorage.clear()
  }, [])
  
  return (
    <div className="h-full flex justify-center items-center">
      <div className="grid grid-rows-2 xl:grid-cols-5 grid-cols-4 2xl:gap-6 xl:gap-2 gap-1">
      {OpcoesDeDiagnostico.map((opcao) => {
        return (
          <ItemDeOpcaoDeDiagnostico
          key={`id-${opcao.diagnosticoTipo}`}
          imgUrl={opcao.imgUrl} 
          description={opcao.description}
          diagnosticoTipo={opcao.diagnosticoTipo}
          />
        )
      })}
      </div>
    </div>
  )
}

