import './UserDetails.css'
import { useSelector } from 'react-redux/es/exports'

const UserDetails = () => {

    const {userData} = useSelector(state => state.Reducer)

    return(
        <>
            <table className='table'>
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>User Password</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map(item => (
                        <tr key={item.name}>
                            <td>{item.name}</td>
                            <td>{item.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default UserDetails