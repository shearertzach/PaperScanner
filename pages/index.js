import Head from 'next/head'
import { useState } from 'react'
import InputBox from '../components/InputBox'
import Navbar from '../components/Navbar'
import RepetitiveWords from '../components/RepetitiveWords'
import WordInfoCard from '../components/WordInfoCard'

export default function Home() {
  const [repetitiveWords, setRepetitiveWords] = useState(null)
  const [word, setWord] = useState(null)

  return (
    <div>
      <Head>
        <title>Paper Scanner</title>
      </Head>
      <Navbar />
      <InputBox setRepetitiveWords={setRepetitiveWords} />
      {repetitiveWords && <RepetitiveWords words={repetitiveWords} setWord={setWord} />}
      {word && <WordInfoCard word={word} setWord={setWord} />}
    </div>
  )
}
