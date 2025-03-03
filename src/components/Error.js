import React from 'react';
import { useRouteError } from 'react-router';

const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div>
      <h1>Oops!!!!!!!!!!</h1>
      <h2>Error Occured</h2>
      <h3>Let's play the game </h3>
      <h2>{err.data}
        {err.statusText}</h2>
    </div>
  )
}

export default Error;
