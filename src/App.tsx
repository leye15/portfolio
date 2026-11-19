import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ThemeProvider } from './lib/theme'
import Accueil from './pages/Accueil'
import CentresInteret from './pages/CentresInteret'
import Competences from './pages/Competences'
import Contact from './pages/Contact'
import Experiences from './pages/Experiences'
import Parcours from './pages/Parcours'
import ParcoursDetail from './pages/ParcoursDetail'
import ProjetsPage from './pages/ProjetsPage'

// HashRouter : fonctionne sur n'importe quel hébergement statique (GitHub Pages, Netlify…) sans configuration serveur.
export default function App() {
  return (
    <HashRouter>
      <ThemeProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Accueil />} />
            <Route path="parcours" element={<Parcours />} />
            <Route path="parcours/:id" element={<ParcoursDetail />} />
            <Route path="experiences" element={<Experiences />} />
            <Route path="projets" element={<ProjetsPage />} />
            <Route path="competences" element={<Competences />} />
            <Route path="centres-interet" element={<CentresInteret />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </HashRouter>
  )
}
