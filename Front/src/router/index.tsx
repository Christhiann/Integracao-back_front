import { AppLayout, DiagnosticoSteps, Home, NotFound } from '@/features'
import { BrowserRouter, Route, Routes } from "react-router"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route index element={<Home/>}/>
                    {/* <Route path="enviar-imagem/:opcaoCorpo/:doenca/:sexo" element={<EnvioDeImagem/>}/> */}
                    <Route path="diagnostico" element={<DiagnosticoSteps/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router