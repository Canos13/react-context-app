import React, { useEffect } from 'react'
import { useContext } from 'react'
import UserContext from '../context/User/UserContext'
import app from '../styles/app.module.css'

const UserList = () => {

    const { user, getUsers, getProfile  } = useContext(UserContext)

    useEffect(() => {
      getUsers()
    }, [])

    return (
        <div className={app.container}>
            {
                user.map((user, i)=>{
                    return (
                        <div 
                          key={i}
                          onClick={ () => getProfile(user.id) }
                          className={app.d_flex}
                          >
                            <img 
                                src={user.avatar} 
                                alt={user.first_name}
                                className={app.img_rounded} />
                            <h2 className={app.h2}>
                              {`${user.first_name} ${user.last_name}`} 
                            </h2>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UserList