import './header.css'
import { ButtonLogIn } from '../buttons/buttonLogIn/buttonLogIn'
import {Link} from 'react-router-dom'

export const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>-Find a bike-</div>
            <div className='navigationList'>
            <ul className='navigation'>
                <li className='navigation_item'><Link to='/'>Главная</Link></li>
                <li className='navigation_item'><Link to='/about'>О нас</Link></li>
                <li className='navigation_item'><Link to='/contacts'>Контакты</Link></li>
            </ul>
            </div>
            <ButtonLogIn/>
        </div>
    )
}