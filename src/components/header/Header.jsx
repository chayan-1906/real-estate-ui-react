import logo from '../../assets/logo.png'
import './Header.css'

export const Header = () => {
    return (
        <section className='h-wrapper'>
            <div className='flexCenter paddings innerWidth h-container'>
                <img src={logo} alt='logo' width='100px'/>
                <div className='flexCenter h-menu'>
                    <a href=''>Residencies</a>
                    <a href=''>Our Value</a>
                    <a href=''>Contact Us</a>
                    <a href=''>Get Started</a>
                    <button className='button'>
                        <a href=''>Contact</a>
                    </button>
                    <a href=''></a>
                </div>
            </div>
        </section>
    )
}
