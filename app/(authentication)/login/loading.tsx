import LoginSkeleton from '@/components/LoginSkeleton'
import React from 'react'

const loading = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
        <LoginSkeleton />
    </div>
  )
}

export default loading