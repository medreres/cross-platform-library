import  { FC, PropsWithChildren } from 'react'

export const Fragment:FC<PropsWithChildren> = ({children}) => {
  return (
    <>{children}</>
  )
}
