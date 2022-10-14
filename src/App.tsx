import { Seacrh } from './components/Search'
import { Results } from './components/Results'
import { useCharacters } from './hooks/characters'


function App() {
	const {
		characters,
		loading,
		pages,
		goToPage,
		searchPerson,
		nextPage,
		prevPage,
	} = useCharacters()

  

	return (
		<div className='App'>
			<Seacrh searchPerson={searchPerson}/>
			<Results
				nextPage={nextPage}
				prevPage={prevPage}
				characters={characters}
				loading={loading}
				pages={pages}
				goToPage={goToPage}
			/>
		</div>
	)
}

export default App
