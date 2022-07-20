import {Link} from 'react-router-dom'


const Header = () => {
    return(
        <>
        <Link to='/'>
            <button className='user-details-btn'>Home</button>
        </Link>
        <Link to='/user-details'>
            <button className='user-details-btn'>User-Details</button>
        </Link>
        </>
    )
}

export default Header