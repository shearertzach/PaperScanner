import React from 'react'

export default function RepetitiveWordCard({ word, setWord }) {
  return (
    <div className='border border-gray-400 rounded-md p-3 px-6 m-2 hover:bg-gray-300 transition-all cursor-pointer' onClick={() => setWord(word.value)}>
      <p className='text-lg font-semibold'>{word.value} - {word.instances}</p>
    </div>
  )
}
