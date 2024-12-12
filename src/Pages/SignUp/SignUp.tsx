import React from 'react'
import { SignUp } from '@clerk/clerk-react'

function SignUpPage() {
  return (
    <div className='signUpContainer'>
      <SignUp path="/sign-up" signInUrl='sign-in'/>
    </div>
  )
}

export default SignUpPage