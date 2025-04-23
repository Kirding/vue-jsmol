let loaded = false

export const loadJSmol = () => {
  return new Promise((resolve, reject) => {
    if (typeof Jmol !== 'undefined') {
      resolve(window.Jmol)
      return
    }

    if (loaded) return

    const script = document.createElement('script')
    script.src = '../assets/JSmol.min.js'
    script.onload = () => {
      loaded = true
      resolve(window.Jmol)
    }
    script.onerror = reject
    document.head.appendChild(script)
  })
}