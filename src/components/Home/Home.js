import './Home.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/exports'
import { setUserData } from '../../Redux/Action'


const Home = () => {

    const dispatch = useDispatch()
    const {userData} = useSelector(state => state.Reducer)
    // console.log(userData)

    let username = ''
    let password = ''

    const onChangeUsername = (e) => {
        username = e.target.value
    }

    const onChangePassword = (e) => {
        password = e.target.value
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const userDetails = {
            name: username,
            password: password,
        }

        dispatch(setUserData(userDetails))

        e.target.reset()
    }

    return(
        <>
        <div className='home-container' onSubmit={onSubmit}>
            <form className="form">
                <input className='input' type="username" placeholder="user name" onChange={onChangeUsername} />
                <input className='input' type="password" placeholder="password" onChange={onChangePassword} /><br/>
                <input className='input submit-btn' type="submit" />
            </form>

            <table className='table'>
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>User Password</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td>Maria Anders</td>
                        <td>maria123</td>
                    </tr> */}
                    {userData.map(item => (
                        <tr key={item.name}>
                            <td>{item.name}</td>
                            <td>{item.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Home