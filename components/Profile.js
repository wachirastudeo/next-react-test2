import React from 'react'



function Username({username,isVerified}) { 

 

  return(
    <>
    { isVerified? (
    <p>{username}✔</p>
    ) : (
      <p>{username} </p>
      )
    } 
    
    </>
  )

 }


export default function ({user}) {
 
  return (
    <div className='col-6 col-md-4 text-center'>
      <img src={user.avatar}
        alt={user.fname+' '+user.lname}
        width={100}
      >
      </img>
      <Username 
        username={user.fname+' '+user.lname}
        isVerified={user.isVerified}
      />
    </div>
  )
}
