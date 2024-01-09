import { Suspense, useState } from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import Journey from './components/journey/Journey'
import { Page2 } from './components/pages/Page2'
import Page3 from './components/pages/Page3'
import Page4 from './components/pages/Page4'
import Page6 from './components/pages/Page6'
import Page8 from './components/pages/Page8'
import Page9 from './components/pages/Page9'
import Page11 from './components/pages/Page11'
import Page17 from './components/pages/Page17'
import Page19 from './components/pages/Page19'
import LoadingSuprise from './common/LoadingSuprise'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Suspense fallback={<LoadingSuprise />}> <Home /></Suspense>} />
        <Route path='/our-journey' element={<Suspense fallback={<LoadingSuprise />}> <Journey />  </Suspense>} />
        <Route path='/our-journey/page2' element={<Suspense fallback={<LoadingSuprise />}> <Page2 />  </Suspense>} />
        <Route path='/our-journey/page3' element={<Suspense fallback={<LoadingSuprise />}> <Page3 />  </Suspense>} />
        <Route path='/our-journey/page4' element={<Suspense fallback={<LoadingSuprise />}> <Page4 />  </Suspense>} />
        <Route path='/our-journey/page6' element={<Suspense fallback={<LoadingSuprise />}> <Page6 />  </Suspense>} />
        <Route path='/our-journey/page8' element={<Suspense fallback={<LoadingSuprise />}> <Page8 />  </Suspense>} />
        <Route path='/our-journey/page9' element={<Suspense fallback={<LoadingSuprise />}> <Page9 />  </Suspense>} />
        <Route path='/our-journey/page11' element={<Suspense fallback={<LoadingSuprise />}> <Page11 />  </Suspense>} />
        <Route path='/our-journey/page17' element={<Suspense fallback={<LoadingSuprise />}> <Page17 />  </Suspense>} />
        <Route path='/our-journey/page19' element={<Suspense fallback={<LoadingSuprise />}> <Page19 />  </Suspense>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
