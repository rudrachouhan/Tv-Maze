import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import {Form}   from './components/Form'
import { Summary } from './components/Summary'
import { AppContext } from './context/contextApi'
import {Header} from './components/Header'

function App() {

  return (
    <AppContext>
      <BrowserRouter>
      <div className="flex flex-col h-full">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/form" element={<Form />} />
        </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  )
}

export default App
