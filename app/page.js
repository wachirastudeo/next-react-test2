import React from 'react'
import Profile from '@/components/Profile';

async function getData() {
  const res = await fetch('https://melivecode.com/api/users')
  if(!res.ok){
    throw new Error('Failed to fetch data');
  }
  return res.json();
  
}
export default function page() {

  const users =[ {
    avatar:'https://i.imgur.com/7vQD0fPs.jpg',
    fname:'Gregorio',
    lname:'Y. Zara',
    isVerified:true
  },
  {
    avatar:'https://i.imgur.com/1bX5QH6.jpg',
    fname:'Lin',
    lname:'Lanying',
    isVerified:false

  },
  
  ]
  return <div>
    <h1>Hellow world</h1>
    <Profile
     avatar={'https://i.imgur.com/7vQD0fPs.jpg'}
     fname={'Gregorio'}
     lname={'Y. Zara'}
     />
    <Profile
     avatar={'https://i.imgur.com/7vQD0fPs.jpg'}
     fname={'Gregorio'}
     lname={'Y. Zara'}
     />
    <Profile
     avatar={'https://i.imgur.com/7vQD0fPs.jpg'}
     fname={'Gregorio'}
     lname={'Y. Zara'}
     />
    <Profile user={users[0]} />
    <Profile user={users[1]} />

   

  </div>;
 
}

