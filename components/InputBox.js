import React, { useState } from 'react'

export default function InputBox({ setRepetitiveWords }) {
  const [document, setDocument] = useState('')

  function findRepetitiveWords() {
    let words = document.split(" ")
    let repetitiveWords = {}

    if (words < 1) return
    else {
      for (let i in words) {
        if (words[i] === 'a' || words[i] === 'the' || words[i] === 'and') { }
        else {
          if (!repetitiveWords[words[i]]) repetitiveWords[words[i]] = { value: words[i], instances: 1 }
          else repetitiveWords[words[i]].instances += 1
        }
      }
    }
    setRepetitiveWords(repetitiveWords)
  }

  return (
    <div className='mx-auto max-w-2xl w-11/12'>
      <p className='text-2xl font-semibold mb-3'>Start typing below...</p>
      <textarea
        className='w-full rounded-md resize-none p-4 h-64 outline-none border-2 border-gray-400 shadow-md'
        value={document}
        onChange={e => setDocument(e.target.value)}
      />
      <button
        className='w-full mt-5 px-8 py-2 border-2 border-blue-400 rounded-md font-semibold hover:bg-blue-300 transition-all'
        onClick={() => findRepetitiveWords()}
      >
        Scan
      </button>
    </div>
  )
}
