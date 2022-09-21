import React, { useContext } from 'react'
import UserContext from '../context/User/UserContext'
import profile from '../styles/profile.module.css'
const Profile = () => {

    const { selectedUser } = useContext(UserContext);

    return (
        <>
            {
                selectedUser ? (
                      <section className={profile.text_center}>
                          <img 
                              src={selectedUser.avatar} 
                              alt={selectedUser.first_name}
                              className={profile.img} />
                          <div>
                              {`${selectedUser.first_name} ${selectedUser.last_name}`}
                          </div>
                          <div>{selectedUser.email}</div>
                      </section>
                ) : (
                    <section className={profile.text_center}>Selecciona un usuario</section>
                )
            }
        </>
    )
}

export default Profile