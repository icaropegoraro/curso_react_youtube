import { Link } from 'react-router-dom'

export const Dashboard = () => {
    return (
        <div>
            <p>Dashboard</p>
            <Link to={'/login'}>Anderson</Link>
        </div>  
    )
}