import React from 'react'
import { useSignOut } from 'react-auth-kit'

function Signout() {
    const signOut = useSignOut()

    return (
        <div>
                 <button style={{border:'1px solid'}} onClick={() => signOut()}>Sign Out</button>
 
        </div>
    )
}

export default Signout
