import { FC, PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"

type ContentBoxProps = FC<PropsWithChildren<{className?: string}>>

interface ContentBox {
    Title: ContentBoxProps
    Root: ContentBoxProps
    Content: ContentBoxProps
}

const Root: ContentBoxProps = ({children, className}) => {
    return (
    <div className={twMerge(`
        w-[400px] xl:w-[500px] 2xl:w-[700px] max-w-full h-max
         rounded-lg shadow-2xl overflow-y  ${className ?? ''}`)}>
            {children}
    </div>)
}
const Title: ContentBoxProps = ({children, className}) => {
    console.log(className)
    return (
    <div className={twMerge(` mx-[8%] text-lg xl:text-2xl py-4 xl:py-7 font-medium ${className ?? ''}`)}>
        {children}
    </div>)
}

const Content: ContentBoxProps = ({children, className}) => {
    return ( 
    <div className={twMerge(`bg-white rounded-b-lg p-6 px-10
    h-[200px] xl:h-[380px] 2xl:h-[450px] overflow-y-auto ${className ?? ''}`)}>
        {children}
    </div>)
}

const ContentBox: ContentBox = () => {}

ContentBox.Root = Root
ContentBox.Title = Title
ContentBox.Content = Content

export {ContentBox}