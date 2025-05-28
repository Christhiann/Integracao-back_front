import { FC, useState } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface DropdownProps {
    placeholderText: string
    buttonClassName?: string
    itemClassName?: string
    contentClassName?: string
    searchBarIconUrl?: string
    options: {label: string, value: string}[]
    opcaoSelecionada: any
    setOpcaoSelecionada: (option: {label: string, value: string}) => void
}

export const Dropdown: FC<DropdownProps> = (props) => {
  const { placeholderText, options, opcaoSelecionada, setOpcaoSelecionada, searchBarIconUrl, 
    buttonClassName,
    contentClassName, 
    itemClassName } = props

  const [open, setOpen] = useState<boolean>(false)
  
  return (
    <DropdownMenu open={!!open}>
    <DropdownMenuTrigger className={`${buttonClassName}`} onClick={() => setOpen(true)}>
      {!!searchBarIconUrl && searchBarIconUrl}
      {!!opcaoSelecionada ? opcaoSelecionada.label : placeholderText}
    </DropdownMenuTrigger>
    <DropdownMenuContent
    className={`${contentClassName}`}
    onInteractOutside={() => setOpen(false)}>
      {options.map((opcao) => {
        return (
            <DropdownMenuItem
            className={`${itemClassName}`}
            key={`option-${opcao.value}`}
            onSelect={() => {
              setOpcaoSelecionada(opcao)
              setOpen(false)
            }}
            >{opcao.label}</DropdownMenuItem>
        )
      })}
    </DropdownMenuContent>
  </DropdownMenu>
  )
}


