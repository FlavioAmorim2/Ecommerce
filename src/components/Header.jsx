import logo from '../assets/logo/hashtag.svg';
import UserButtons from './UserButtons';

const Header = () => {
    return( 
        <header className='flex text-xl sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 px-6 py-4 items-end justify-between text-base z-10'>
            <a href="/">
                <img className='h-16 px-2' src={logo} alt="Logo Hashtag" />
            </a>
            <UserButtons />
        </header>

    );
}

export default Header;