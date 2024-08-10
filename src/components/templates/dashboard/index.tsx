import { ComponentPropsWithRef } from 'react'

type DashboardTemplateProps = ComponentPropsWithRef<'div'> & {}

export function DashboardTemplate({ ...props }: DashboardTemplateProps) {
  return <div {...props}></div>
}
