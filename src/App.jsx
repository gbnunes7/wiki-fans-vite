import { BrowserRouter, Routes,Route } from "react-router-dom"
import Home from "./routes/Home"
import CharacterDetail from "./components/CharacterDetail"
import InitialLayout from "./components/InitialLayout"

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialLayout/>}> 
          <Route path="/" element={<Home/>}/>
          <Route path="/characterDetail/:id" element={<CharacterDetail/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
