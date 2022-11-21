import React from 'react'
import { UserConsumer } from './userContext'
export const Comp4 = () => {
  return (
    <div>
      <UserConsumer>
        {
          (userName)=>{
            return <h1>hello ,{userName}</h1>
          }
        }
      </UserConsumer>
       
    </div>
  )
}
