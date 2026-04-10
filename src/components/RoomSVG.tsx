import { useTranslation } from 'react-i18next'
import { RoomSVGEn } from './RoomSVGEn'
import { RoomSVGJa } from './RoomSVGJa'

export function RoomSVG() {
  const { i18n } = useTranslation()
  const locale = i18n.language.split('-')[0]
  if (locale === 'ja') return <RoomSVGJa />
  return <RoomSVGEn />
}