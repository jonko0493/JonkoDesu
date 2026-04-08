import { Icon } from "@iconify/react"

interface Props {
  title: string
  icon: string
  icon2?: string
}

export function IconHeader({ title, icon, icon2 }: Props) {
  return (
    <div className='icon-header'>
      <h2>
        <div><Icon icon={icon}/></div>
        {icon2 !== undefined && <div><Icon icon={icon2}/></div>}
        <div>{title}</div>
      </h2>
    </div>
  )
}
