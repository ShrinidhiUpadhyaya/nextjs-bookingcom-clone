import React from 'react'

const DRowSpinbox = ({label}) => {
  return (
    <div className='flex justify-between'>
        {label}
        <input type='number'></input>
    </div>
  )
}

export default DRowSpinbox