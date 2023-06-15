
import { useSelector } from 'react-redux'
import '../styles/profile.css'




function Profile() {
  
   const user = useSelector(state => state.user)

   console.log(user)
    return (
    
    <div className="profile">
      <div className='profile_data'>

        <h1>{user?.firstName} {user?.lastName}</h1>
        <h3>{user?.email}</h3>
        <h4>*******</h4>
        <h2>{user?.phone}</h2>
      </div>
    </div>
  
  )
}

export default Profile