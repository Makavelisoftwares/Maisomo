import React from 'react'

function AuthLayoutPage({children}) {
  return (
    <main className='flex items-center justify-center min-h-screen'>
        {children}
    </main>
  )
}

export default AuthLayoutPage