import { Link } from 'react-router-dom';
import './index.css';

const Header = () => (
  <nav className='navbar'>
    <div className='navbar-card'>
    <img src='https://res.cloudinary.com/dzpj3dnfw/image/upload/v1732094597/Logo_1_clzzvs.png' className='logo' alt='logo'/>
        <ul>
            <li className='list-items'>
                <Link to="/">Home</Link>
            </li>
            <li className='navigation'>
                <Link to="/products">Products</Link>
            </li>
            <li className='navigation'>
                <Link to="/resources">Resources</Link>
            </li>
            <li className='list-items'>
                <Link to="/pricing">Pricing</Link>
            </li>
        </ul>
    </div>
        <div className='image'>
            <img src='https://res.cloudinary.com/dzpj3dnfw/image/upload/v1732094570/_Navigation_actions_vr5cat.jpg' alt='avatar' />
        </div>
  </nav>
);

export default Header;
