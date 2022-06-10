import React from 'react'
import { useParams } from 'react-router-dom';
function Users() {
  const { id } = useParams();
  return (
   <div>
    <h2>Soy el usuario con {id}</h2>
   </div>
  );
 }

export default Users;
