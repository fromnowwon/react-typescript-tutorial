import React, { useState } from 'react'
import { IState as Props } from '../App';

interface IProps {
  people: Props["people"]
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    url: "",
    age: "",
    note: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  const handleClick = (): void => {
    if (
      !input.name ||
      !input.age ||
      !input.url
    ) {
      return
    }

    setPeople([
      ...people,
      {
        name: input.name,
        age: Number(input.age),
        url: input.url,
        note: input.note,
      }
    ])
  }

  return (
    <div className='add-to-list'>
      <input
        type="text"
        placeholder='name'
        className='add-to-list-input'
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder='url'
        className='add-to-list-input'
        value={input.url}
        onChange={handleChange}
        name="url"
      />
      <input
        type="number"
        placeholder='age'
        className='add-to-list-input'
        value={input.age}
        onChange={handleChange}
        name="age"
      />
      <textarea
        placeholder='note'
        className='add-to-list-input'
        value={input.note}
        onChange={handleChange}
        name="note"
      />
      <button onClick={handleClick}>Add to list</button>
    </div>
  )
}

export default AddToList