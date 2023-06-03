/* eslint-disable @typescript-eslint/ban-types */
import React from 'react'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div className='w-full flex-1 flex flex-col min-h-screen main-border-r p-4'>
        <p className='heading-text font-semibold'>Gateway</p>
    </div>
  )
}

export default Sidebar