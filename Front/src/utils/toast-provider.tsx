import { FC, PropsWithChildren } from 'react'
import { ToastContainer } from 'react-toastify'

const ToastProvider: FC<PropsWithChildren> = ({children}) => {
  return (
    <div>
      {children}
      <ToastContainer/>
    </div>
  )
}

export default ToastProvider
