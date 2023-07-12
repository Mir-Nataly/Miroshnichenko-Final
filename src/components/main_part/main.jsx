import './main.css'
import { ButtonReport } from '../buttons/buttonReport/buttonReport'

export const Main = () => {
    return (
        <div className='main-part'>
            <div className='right_side'>
                <span className='short_description'>Пропал велосипед?
                <p className='long_description'>Пожалуйста, оставьте заявку в специальной форме.</p></span>
                <ButtonReport/>
            </div>
        </div>
    )
}