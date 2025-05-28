import { Header } from '@/components'
import { useDiagnosisStore } from '@/hooks'
import ToastProvider from '@/utils/toast-provider'
import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'

export const AppLayout = () => {
  const setStep = useDiagnosisStore((state) => state.setDiagnosticoStep)     
  const location = useLocation() 
  useEffect(() => {
    if(location.pathname.includes('diagnostico') === false) {
      setStep(1)
    }
  }, [location.pathname])
  
  return (
    <ToastProvider>
    <div className="w-screen bg-background-app">
        <Header/>
        <div className='pt-[96px] 2xl:pt-[110px] h-screen'>
          <Outlet/>
        </div>
    </div>
    </ToastProvider>
  )
}


