import React from 'react'

export default function RepetitiveWordCard({ word }) {
  return (
    <div className='border border-gray-400 rounded-md p-3 px-6 m-2'>
      <p className='text-lg font-semibold'>{word.value} - {word.instances}</p>
    </div>
  )
}
