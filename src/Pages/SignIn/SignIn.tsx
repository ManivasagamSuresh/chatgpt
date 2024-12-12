import React from 'react'
import { SignIn } from '@clerk/clerk-react'

function SignInPage() {
  return (
    <div className='signInContainer'>
       <SignIn path="/sign-in" signUpUrl='sign-up'/>
    </div>
  )
}

export default SignInPage