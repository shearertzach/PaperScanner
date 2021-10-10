import Head from 'next/head'
import { useState, useEffect } from 'react'
import InputBox from '../components/InputBox'
import Navbar from '../components/Navbar'
import RepetitiveWords from '../components/RepetitiveWords'

export default function Home() {
  const [repetitiveWords, setRepetitiveWords] = useState(null)
  
  return (
    <div>
      <Head>
        <title>Paper Scanner</title>
      </Head>
      <Navbar />
      <InputBox setRepetitiveWords={setRepetitiveWords} />
      {repetitiveWords && <RepetitiveWords words={repetitiveWords} />}
    </div>
  )
}
