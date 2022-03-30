import { atom } from 'recoil'
import { InitialSettings } from '~/lib/config'

export const settingsState = atom({
  key: 'settingsState',
  default: { ...InitialSettings },
})
