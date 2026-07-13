import { useState } from 'react'
import { useContent } from '../hooks/useContent'
import styles from './Admin.module.css'

const ADMIN_PASSWORD = 'denise2026'

const LUCIDE_ICONS = [
  'ThumbsUp','Star','Heart','Rocket','Target','Monitor','Zap',
  'Award','Smile','Globe','TrendingUp','Users','Camera','Edit3',
  'CheckCircle','Lightbulb','Clock','Shield'
]

function Admin() {
  const [authed, setAuthed] = useState(false)
  const [pw, setPw] = useState('')
  const [pwError, setPwError] = useState(false)
  const [tab, setTab] = useState('hero')
  const [saved, setSaved] = useState(false)

  const { content, updateContent, resetContent } = useContent()

  const [heroForm, setHeroForm] = useState(content.hero)
  const [aboutForm, setAboutForm] = useState(content.about)
  const [projectsForm, setProjectsForm] = useState(content.projects)
  const [skillsForm, setSkillsForm] = useState(content.skills)
  const [whymeForm, setWhymeForm] = useState(content.whyme)

  const handleLogin = (e) => {
    e.preventDefault()
    if (pw === ADMIN_PASSWORD) {
      setAuthed(true)
    } else {
      setPwError(true)
      setTimeout(() => setPwError(false), 2000)
    }
  }

  const flash = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const saveHero = () => { updateContent('hero', heroForm); flash() }
  const saveAbout = () => { updateContent('about', aboutForm); flash() }
  const saveProjects = () => { updateContent('projects', projectsForm); flash() }
  const saveSkills = () => { updateContent('skills', skillsForm); flash() }
  const saveWhyme = () => { updateContent('whyme', whymeForm); flash() }

  /* ── helpers ── */
  const updateProject = (i, key, val) => {
    const next = projectsForm.map((p, idx) => idx === i ? { ...p, [key]: val } : p)
    setProjectsForm(next)
  }
  const addProject = () => setProjectsForm([...projectsForm, {
    id: Date.now(), title: '', category: '', description: '', result: '', tools: [], instagramURL: ''
  }])
  const removeProject = (i) => setProjectsForm(projectsForm.filter((_, idx) => idx !== i))

  const updateSkill = (i, key, val) => {
    const next = skillsForm.map((s, idx) => idx === i ? { ...s, [key]: val } : s)
    setSkillsForm(next)
  }
  const updateSkillItems = (i, val) => {
    updateSkill(i, 'items', val.split(',').map(s => s.trim()).filter(Boolean))
  }
  const addSkill = () => setSkillsForm([...skillsForm, { category: '', icon: 'Star', items: [] }])
  const removeSkill = (i) => setSkillsForm(skillsForm.filter((_, idx) => idx !== i))

  const updateWhyme = (i, key, val) => {
    const next = whymeForm.map((w, idx) => idx === i ? { ...w, [key]: val } : w)
    setWhymeForm(next)
  }
  const addWhyme = () => setWhymeForm([...whymeForm, { id: Date.now(), icon: 'Star', title: '', description: '' }])
  const removeWhyme = (i) => setWhymeForm(whymeForm.filter((_, idx) => idx !== i))

  /* ── Login screen ── */
  if (!authed) {
    return (
      <div className={styles.loginWrap}>
        <form className={styles.loginBox} onSubmit={handleLogin}>
          <h1 className={styles.loginTitle}>Panel Administrativo</h1>
          <p className={styles.loginSub}>Denise Martinez — Portafolio</p>
          <input
            type="password"
            placeholder="Contraseña"
            value={pw}
            onChange={e => setPw(e.target.value)}
            className={`${styles.loginInput} ${pwError ? styles.loginInputError : ''}`}
          />
          {pwError && <p className={styles.loginError}>Contraseña incorrecta</p>}
          <button type="submit" className={styles.loginBtn}>Entrar</button>
        </form>
      </div>
    )
  }

  /* ── Admin panel ── */
  return (
    <div className={styles.adminWrap}>
      <header className={styles.adminHeader}>
        <span className={styles.adminLogo}>Panel — Denise Martinez</span>
        <div className={styles.adminHeaderRight}>
          {saved && <span className={styles.savedBadge}>✓ Guardado</span>}
          <button className={styles.resetBtn} onClick={() => { if (confirm('¿Restablecer todo el contenido original?')) { resetContent(); window.location.reload() } }}>
            Restablecer todo
          </button>
          <a href="/" className={styles.viewSiteBtn}>Ver sitio →</a>
        </div>
      </header>

      <div className={styles.adminBody}>
        {/* Sidebar */}
        <nav className={styles.sidebar}>
          {[
            { id: 'hero', label: '🏠 Inicio' },
            { id: 'about', label: '👤 Sobre mí' },
            { id: 'projects', label: '📁 Proyectos' },
            { id: 'skills', label: '⚡ Habilidades' },
            { id: 'whyme', label: '⭐ ¿Por qué yo?' },
          ].map(t => (
            <button
              key={t.id}
              className={`${styles.sidebarItem} ${tab === t.id ? styles.sidebarActive : ''}`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </nav>

        {/* Content */}
        <main className={styles.content}>

          {/* HERO */}
          {tab === 'hero' && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Sección Inicio</h2>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Nombre</label>
                <input className={styles.input} value={heroForm.name} onChange={e => setHeroForm({ ...heroForm, name: e.target.value })} />
              </div>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Título (ej: Lic. en Marketing Digital)</label>
                <input className={styles.input} value={heroForm.title} onChange={e => setHeroForm({ ...heroForm, title: e.target.value })} />
              </div>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Frase principal</label>
                <input className={styles.input} value={heroForm.tagline} onChange={e => setHeroForm({ ...heroForm, tagline: e.target.value })} />
              </div>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Correo electrónico</label>
                <input className={styles.input} type="email" value={heroForm.email} onChange={e => setHeroForm({ ...heroForm, email: e.target.value })} />
              </div>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>WhatsApp (solo números, ej: 50496982121)</label>
                <input className={styles.input} value={heroForm.whatsapp} onChange={e => setHeroForm({ ...heroForm, whatsapp: e.target.value })} />
              </div>
              <hr style={{ border: 'none', borderTop: '1px solid var(--color-accent)', margin: '0.5rem 0' }} />
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Tipo de media en el Hero</label>
                <select className={styles.select} value={heroForm.mediaType || 'image'} onChange={e => setHeroForm({ ...heroForm, mediaType: e.target.value })}>
                  <option value="image">Imagen (hero.png)</option>
                  <option value="video">Video</option>
                </select>
              </div>
              {heroForm.mediaType === 'video' && (<>
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>URL del video (directo, YouTube embed, o Instagram embed)</label>
                  <input className={styles.input} value={heroForm.videoUrl || ''} onChange={e => setHeroForm({ ...heroForm, videoUrl: e.target.value })} placeholder="https://..." />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>Orientación del video</label>
                  <select className={styles.select} value={heroForm.videoOrientation || 'vertical'} onChange={e => setHeroForm({ ...heroForm, videoOrientation: e.target.value })}>
                    <option value="vertical">Vertical (9:16, estilo teléfono)</option>
                    <option value="horizontal">Horizontal (16:9, paisaje)</option>
                  </select>
                </div>
              </>)}
              <button className={styles.saveBtn} onClick={saveHero}>Guardar cambios</button>
            </div>
          )}

          {/* ABOUT */}
          {tab === 'about' && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Sobre mí</h2>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Párrafo 1</label>
                <textarea className={styles.textarea} rows={5} value={aboutForm.bio1} onChange={e => setAboutForm({ ...aboutForm, bio1: e.target.value })} />
              </div>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Párrafo 2</label>
                <textarea className={styles.textarea} rows={5} value={aboutForm.bio2} onChange={e => setAboutForm({ ...aboutForm, bio2: e.target.value })} />
              </div>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>URL del reel de Instagram (embed)</label>
                <input className={styles.input} value={aboutForm.reelUrl} onChange={e => setAboutForm({ ...aboutForm, reelUrl: e.target.value })} placeholder="https://www.instagram.com/reel/XXX/embed" />
              </div>
              <button className={styles.saveBtn} onClick={saveAbout}>Guardar cambios</button>
            </div>
          )}

          {/* PROJECTS */}
          {tab === 'projects' && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Proyectos</h2>
              {projectsForm.map((p, i) => (
                <div key={p.id} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardNum}>Proyecto {i + 1}</span>
                    <button className={styles.removeBtn} onClick={() => removeProject(i)}>Eliminar</button>
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>Título</label>
                    <input className={styles.input} value={p.title} onChange={e => updateProject(i, 'title', e.target.value)} />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>Categoría</label>
                    <input className={styles.input} value={p.category} onChange={e => updateProject(i, 'category', e.target.value)} />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>Descripción</label>
                    <textarea className={styles.textarea} rows={3} value={p.description} onChange={e => updateProject(i, 'description', e.target.value)} />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>Resultado</label>
                    <input className={styles.input} value={p.result} onChange={e => updateProject(i, 'result', e.target.value)} />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>URL del reel de Instagram</label>
                    <input className={styles.input} value={p.instagramURL} onChange={e => updateProject(i, 'instagramURL', e.target.value)} placeholder="https://www.instagram.com/reel/XXX/" />
                  </div>
                </div>
              ))}
              <button className={styles.addBtn} onClick={addProject}>+ Agregar proyecto</button>
              <button className={styles.saveBtn} onClick={saveProjects}>Guardar cambios</button>
            </div>
          )}

          {/* SKILLS */}
          {tab === 'skills' && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Habilidades</h2>
              {skillsForm.map((s, i) => (
                <div key={i} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardNum}>Categoría {i + 1}</span>
                    <button className={styles.removeBtn} onClick={() => removeSkill(i)}>Eliminar</button>
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>Nombre de la categoría</label>
                    <input className={styles.input} value={s.category} onChange={e => updateSkill(i, 'category', e.target.value)} />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>Ícono</label>
                    <select className={styles.select} value={s.icon} onChange={e => updateSkill(i, 'icon', e.target.value)}>
                      {LUCIDE_ICONS.map(ic => <option key={ic} value={ic}>{ic}</option>)}
                    </select>
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>Habilidades (separadas por coma)</label>
                    <input className={styles.input} value={s.items.join(', ')} onChange={e => updateSkillItems(i, e.target.value)} placeholder="SEO, Análisis de datos, ..." />
                  </div>
                </div>
              ))}
              <button className={styles.addBtn} onClick={addSkill}>+ Agregar categoría</button>
              <button className={styles.saveBtn} onClick={saveSkills}>Guardar cambios</button>
            </div>
          )}

          {/* WHYME */}
          {tab === 'whyme' && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>¿Por qué elegirme?</h2>
              {whymeForm.map((w, i) => (
                <div key={w.id} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardNum}>Tarjeta {i + 1}</span>
                    <button className={styles.removeBtn} onClick={() => removeWhyme(i)}>Eliminar</button>
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>Ícono</label>
                    <select className={styles.select} value={w.icon} onChange={e => updateWhyme(i, 'icon', e.target.value)}>
                      {LUCIDE_ICONS.map(ic => <option key={ic} value={ic}>{ic}</option>)}
                    </select>
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>Título</label>
                    <input className={styles.input} value={w.title} onChange={e => updateWhyme(i, 'title', e.target.value)} />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>Descripción</label>
                    <textarea className={styles.textarea} rows={3} value={w.description} onChange={e => updateWhyme(i, 'description', e.target.value)} />
                  </div>
                </div>
              ))}
              <button className={styles.addBtn} onClick={addWhyme}>+ Agregar tarjeta</button>
              <button className={styles.saveBtn} onClick={saveWhyme}>Guardar cambios</button>
            </div>
          )}

        </main>
      </div>
    </div>
  )
}

export default Admin
