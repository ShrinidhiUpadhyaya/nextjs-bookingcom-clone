import React from 'react'
import { Progress } from "@/components/ui/progress"

const DProgressBar = ({label, value}) => {
  return (
    <div className='flexCol gap-2'>
        <div className='flex justify-between items-center font-medium text-sm'>
            <span>{label}</span>
            <span>{value}</span>
        </div>
        <Progress value={value * 10} className='h-2' />
    </div>
  )
}

export default DProgressBar