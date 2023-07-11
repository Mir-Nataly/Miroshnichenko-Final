import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { HomePage } from './pages/homePage';
import { AboutUsPage } from './pages/aboutUsPage';
import { ContactsPage } from './pages/contactsPage';
import { LoginPage } from './pages/loginPage';
import { NotFoundPage } from './pages/notFoundPage';
import { RegisterPage } from './pages/registerPage';
import { ReportPage } from './pages/reportPage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutUsPage/>}/>
      <Route path='/contacts' element={<ContactsPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/report' element={<ReportPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
