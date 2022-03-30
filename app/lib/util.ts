import { Theme } from '~/types'

export function setTheme(theme: Theme) {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
