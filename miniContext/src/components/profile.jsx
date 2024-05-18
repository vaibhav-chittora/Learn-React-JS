import React, {useContext} from 'react';
import UserContext from '../context/UserContext';


function profile() {

   const {user} = useContext(UserContext) 

   if(!user) return <div>Please sign up first and login</div>

   return <div>Welcome to the website {user.username}</div>
   
   
}

export default profile