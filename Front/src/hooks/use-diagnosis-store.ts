import { create, StoreApi, UseBoundStore } from "zustand";

type sexOptions = 'masculino' | 'feminino' | undefined

interface DiagnosisStoreProps {
    sexo: sexOptions
    setSexo: (arg: sexOptions) => void
    diagnostico: string
    setDiagnostico: (arg: string) => void
    diagnosticoStep: number
    setDiagnosticoStep: (arg: number) => void
}

export const useDiagnosisStore: UseBoundStore<StoreApi<DiagnosisStoreProps>> = create((set) => ({
    sexo: undefined,
    setSexo: (newSexo: DiagnosisStoreProps['sexo']) => set(() => ({ sexo: newSexo })),
    diagnostico: '',
    setDiagnostico: (newDiagnostico: string) => set(() => ({ diagnostico: newDiagnostico })),
    diagnosticoStep: 1,
    setDiagnosticoStep: (currentStep: number) => set(() => ({ diagnosticoStep: currentStep })),
}))