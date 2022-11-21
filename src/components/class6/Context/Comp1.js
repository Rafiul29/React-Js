import React from 'react'
import { Comp2 } from './Comp2'
import { UserProvider } from './userContext';
export const Comp1 = () => {
  const userName="rafiul";
  return (
    <div>
     <UserProvider value={userName}>
     <Comp2 />
     
     </UserProvider>
    </div>
  )
}
