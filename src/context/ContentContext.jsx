import { useState } from 'react'
import defaultProjects from '../data/projects'
import defaultSkills from '../data/skills'
import defaultWhyme from '../data/whyme'
import { ContentContext } from './content-context'

const STORAGE_KEY = 'denise_content_v1'

const defaultContent = {
  hero: {
    name: 'Denise Martinez',
    title: 'Lic. en Marketing Digital',
    tagline: 'Marcas con resultados. Contenido con propósito. Crecimiento sin limites.',
    email: 'martinezdenisemkt@gmail.com',
    whatsapp: '50496982121',
    mediaType: 'image',
    videoUrl: '',
    videoOrientation: 'vertical',
  },
  about: {
    bio1: '¿Belleza, moda y buena energía? Ese es mi terreno. Soy Denise Martínez, modelo y creadora de contenido especializada en lifestyle, belleza y moda. Con experiencia colaborando con marcas reconocidas, salones y plazas comerciales, combino autenticidad y creatividad en cada proyecto. ',
    bio2: 'Soy licenciada en Marketing Digital y modelo profesional, una combinación que me permite entender no solo cómo lucir bien frente a cámara, sino también cómo comunicar el mensaje correcto para cada marca. A lo largo de mi trayectoria he colaborado con marcas de distintos rubros, así como con salones y plazas comerciales que buscan una imagen fresca y profesional. Mi enfoque combina experiencia frente a cámara, visión estratégica y un estilo genuino y cercano, entendiendo que el contenido que mejor conecta es aquel que se siente real. Si tu marca busca una creadora con presencia, versatilidad y compromiso, hablemos y llevemos tu proyecto al siguiente nivel.',
    reelUrl: 'https://www.instagram.com/reel/DS3bm9MEYxY/embed',
  },
  projects: defaultProjects,
  skills: defaultSkills,
  whyme: defaultWhyme,
}

export function ContentProvider({ children }) {
  const [content, setContent] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? { ...defaultContent, ...JSON.parse(saved) } : defaultContent
    } catch {
      return defaultContent
    }
  })

  const updateContent = (section, value) => {
    setContent(prev => {
      const next = { ...prev, [section]: value }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      return next
    })
  }

  const resetContent = () => {
    localStorage.removeItem(STORAGE_KEY)
    setContent(defaultContent)
  }

  return (
    <ContentContext.Provider value={{ content, updateContent, resetContent }}>
      {children}
    </ContentContext.Provider>
  )
}
