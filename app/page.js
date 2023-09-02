import React from 'react'
import Profile from '@/components/Profile';

async function getData() {
  const res = await fetch('https://melivecode.com/api/users')
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();

}
export default async function page() {
  const users = await getData();
  console.log(users);
  const userList = users.map(user =>
    <Profile user={user} />
  )

  return <div>
    {userList}



  </div>;

}

