 import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './components/common/LandingPage.jsx'
import Login from './components/LoginPage/Login.jsx'
import Registration from './components/RegistrationPage/Registration.jsx'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registration />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App