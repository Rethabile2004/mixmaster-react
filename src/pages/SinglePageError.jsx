import { useRouteError } from "react-router-dom";

import React from 'react'

const SinglePageError = () => {
  const error=useRouteError();
  console.log(error);
    return (
    <div>{error.message}</div>
  )
}


export default SinglePageError