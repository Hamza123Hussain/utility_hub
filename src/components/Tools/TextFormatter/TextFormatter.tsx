import React, { useState, ChangeEvent } from 'react'
import { TextFormatterState } from './TextFormatterInterface'
import TextFunctions from './Fucntions'
const TextFormatter: React.FC = () => {
  const [state, setState] = useState<TextFormatterState>({
    text: '',
    stats: {
      wordCount: 0,
      charCount: 0,
    },
    isBold: false,
    fontSize: '16px',
  })

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setState({
      ...state,
      text: e.target.value,
      stats: {
        wordCount: e.target.value.split(/\s+/).filter(Boolean).length,
        charCount: e.target.value.length,
      },
    })
  }
  return (
    <div className="p-4 flex flex-col items-center">
      <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 text-white">
        Text Formatter
      </h2>
      <textarea
        value={state.text}
        onChange={handleChange}
        rows={6}
        className="p-2 border w-[50vw] border-gray-300 rounded mb-4"
        style={{
          fontWeight: state.isBold ? 'bold' : 'normal',
          fontSize: `${state.fontSize}px`,
        }}
      />
      <TextFunctions setState={setState} state={state} />
      {state.stats.wordCount || state.stats.charCount ? (
        <div className="mt-4  bg-black rounded-lg p-4 text-white mx-auto">
          <h3 className="font-semibold text-center text-3xl">
            Text Statistics
          </h3>
          <div className=" flex justify-center gap-5">
            <p className="mt-2 text-lg">Word Count: {state.stats.wordCount}</p>
            <p className="mt-2 text-lg">
              Character Count: {state.stats.charCount}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  )
}
export default TextFormatter
