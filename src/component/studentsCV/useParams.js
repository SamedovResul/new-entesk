import React, {useState} from 'react';
import { useParams,useLocation, } from 'react-router-dom'

const UserParams = (studentBoolean) => {

  const { name } = useParams();
  return {
    name,
    studentBoolean,
    }
};

export default UserParams;
