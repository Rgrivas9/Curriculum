import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App'
import Home from './pages/Home'
import { PageContextProvider } from './context/page.Context'
import Summary from './pages/Summary'
import Experience from './pages/Experience'
import Languages from './pages/Languajes'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <PageContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/languajes" element={<Languages />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </PageContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
