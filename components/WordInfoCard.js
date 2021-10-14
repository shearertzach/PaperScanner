import React, { useState, useEffect } from 'react'

export default function WordInfoCard({ word, setWord }) {
  const [wordInfo, setWordInfo] = useState(null)
  const [loading, setLoading] = useState(true)

  async function getWordInfo() {
    let url = `/api/synonym/${word}`
    let res = await fetch(url)
    let json = await res.json()
    setWordInfo(json)
    setLoading(false)
  }

  function closeCard() {
    setWord(null)
    setLoading(true)
    setWordInfo(null)
  }

  useEffect(() => {
    getWordInfo()
  }, [])


  return (
    <div className='absolute w-screen h-screen top-0 left-0 z-0'>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-11/12 max-w-2xl overflow-y-scroll' style={{ maxHeight: "95%" }}>
        <div className='px-5 py-5 bg-gray-700 rounded-t-lg text-gray-200 text-3xl'>Viewing <span className='font-semibold'>{word}</span>.</div>
        <div className='p-5 bg-white rounded-b-lg'>
          {!loading && wordInfo.slice(0, 3).map((wrd, index) => {
            if (!wrd.meta) return
            else {
              return (
                <div className='mb-5' key={index}>
                  <p className='text-2xl font-semibold'>{index}. {wrd.hwi.hw} • {wrd.fl}</p>
                  <div className='ml-5'>
                    <p className='text-xl'>Definitions</p>
                    {wrd.shortdef.map((def, defInd) => <p className='ml-3' key={defInd}>- {def}</p>)}
                  </div>
                  <div className='ml-5'>
                    <p className='text-xl'>Synonyms</p>
                    {wrd.meta.syns[0].slice(0, 5).map((synonym, synInd) => <p className='ml-3' key={synInd}>- {synonym}</p>)}
                  </div>
                </div>
              )
            }
          })}
          <button
            className='w-full mt-5 px-8 py-2 border-2 border-blue-400 rounded-md font-semibold hover:bg-blue-300 transition-all'
            onClick={() => closeCard()}
          >
            Close
          </button>
        </div>
      </div>
      <div className='absolute w-full h-full top-0 left-0 bg-black bg-opacity-50 z-10' onClick={() => closeCard()} />
    </div>
  )
}
