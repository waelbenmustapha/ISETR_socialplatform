import React from "react";
import {useIsAuthenticated} from 'react-auth-kit'

function Feed() {
  const isAuthenticated = useIsAuthenticated()

  return <div>{isAuthenticated()?"connected":"not connected"}</div>;
}

export default Feed;
