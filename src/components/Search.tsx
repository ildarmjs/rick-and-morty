import { useState } from 'react'

interface PropsSearch {
  searchPerson: (a: string) => void
}

export const Seacrh = ({ searchPerson }:PropsSearch) => {

  const [personName, setPersonName] = useState('')

	return (
		<div className='search mb-10 fixed w-full'>
			<header className='p-5 bg-blue-300/80 flex justify-center'>
        <form onSubmit={(event)=> {
          event.preventDefault() 
          searchPerson(personName)
          
          setPersonName('')
        } }>
          <input
            type='text'
            placeholder={'Search name'}
            className='text-center rounded text-2xl border py-2 px-3 text-grey-darkest outline-none'
            value={personName}
            onChange={event => setPersonName(event.target.value)}
          />
        </form>
			</header>
		</div>
	)
}
