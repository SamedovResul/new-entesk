import React from 'react';
import { useParams,useLocation } from 'react-router-dom'
const UserParams = (studentBoolean) => {
  const { name } = useParams();
  console.log(studentBoolean)
  return {
    name,
    studentBoolean
    }
};

export default UserParams;
