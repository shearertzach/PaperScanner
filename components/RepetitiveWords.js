import React from 'react'
import RepetitiveWordCard from './RepetitiveWordCard'

export default function RepetitiveWords({ words }) {
  let repetitiveWordsAmount = Object.keys(words).filter(word => words[word].instances > 1).length
  var sortable = [];

  function compare(a, b) {
    if (a.instances > b.instances) return -1;
    if (a.instances < b.instances) return 1;
    return 0;
  }

  for (var word in words) {
    sortable.push(words[word]);
  }

  return (
    <div className='max-w-2xl mx-auto mt-5'>
      <hr className='border-2 border-gray-300 rounded-md mb-5' />
      <p className='text-2xl text-center mb-5'>Found {repetitiveWordsAmount} word(s) with multiple instances.</p>
      <div className='flex'>
        {sortable.sort(compare).map(word => {
          if (word.instances > 1) return (
            <RepetitiveWordCard word={word} key={word.value} />
          )
        })}
      </div>
    </div>
  )
}
