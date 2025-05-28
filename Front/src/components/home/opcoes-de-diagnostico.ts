import torax from '../../assets/imgs/icon_torax.png'
import abdomen from '../../assets/imgs/icon_abdomen.png'
import idadeOssea from '../../assets/imgs/icon_idadeOssea.png'
import fratura from '../../assets/imgs/icon_fratura.png'
import desgArticular from '../../assets/imgs/icon_desgArticular.png'
import infantil from '../../assets/imgs/icon_infantil.png'
import coluna from '../../assets/imgs/icon_coluna.png'
import { ItemDeOpcaoDeDiagnosticoComponentProps } from './item-de-opcao-de-diagnostico'

export const OpcoesDeDiagnostico : ItemDeOpcaoDeDiagnosticoComponentProps[] = [
    {
        description: 'Tórax',
        diagnosticoTipo: 'torax',
        imgUrl: torax
    },
    {
        description: 'Abdômen',
        diagnosticoTipo: 'abdomen',
        imgUrl: abdomen
    },
    {
        description: 'Idade óssea',
        diagnosticoTipo: 'idade_ossea',
        imgUrl: idadeOssea
    },
    {
        description: 'Fraturas',
        diagnosticoTipo: 'fraturas',
        imgUrl: fratura
    },
    {
        description: 'Desgaste articular',
        diagnosticoTipo: 'desgaste_articular',
        imgUrl: desgArticular
    },
    {
        description: 'Detecção de Corpo Metálico (Infantil)',
        diagnosticoTipo: 'deteccao_corpo_metalico_infantil',
        imgUrl: infantil
    },
    {
        description: 'Coluna (Lombar / Cervical)',
        diagnosticoTipo: 'coluna_lombar_ou_cervical',
        imgUrl: coluna
    }
]
