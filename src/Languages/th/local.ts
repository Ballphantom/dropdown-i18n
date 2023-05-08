import menu from './json/menu.json'

export default function local() {
  const mergedLang = JSON.stringify(menu).slice(0,-1)

  return JSON.parse(mergedLang)
}