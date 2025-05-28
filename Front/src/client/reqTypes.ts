interface ServerRes {
    original_filename: string
    exam_type: string
    results: any[]
    patient_sex_considered?: string | null
}

interface ClientReq {
    file: any
    exam_type: string
    patient_sex?: string
    selected_diseases_json?: string[]
    path: string
}

export interface ReqTypes {
    sendImage: (reqData: ClientReq) => Promise<ServerRes>
}