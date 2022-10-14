
import { IPerson } from "../models"

interface PropsResults {

  characters: Array<IPerson>
	loading: boolean
	nextPage:() => void
	prevPage: () => void
	goToPage: (pageNumber:number) => void
	pages: number
}

export const Results = ({
	characters,
	loading,
	nextPage,
	prevPage,
	goToPage,
	pages,
}:PropsResults) => {
	let pageButtons = []
	for (let i = 1; i <= pages; i++) {
		pageButtons.push(
			<button className={`border py-1 px-2 `} key={i} onClick={() => goToPage(i)}>
				{i}
			</button>
		)
	}

	return (
		<div className='results container max-w-[1000px] mx-auto pt-[110px]'>
			<div className='mb-3 flex flex-wrap justify-center'>
				{prevPage && (
					<button className='border bg-red-400 py-1 px-4' onClick={prevPage}>
						Perious
					</button>
				)}
				{pageButtons}
				{nextPage && (
					<button className='border bg-green-400 py-1 px-4' onClick={nextPage}>
						Next
					</button>
				)}
			</div>
			{loading && (
				<p className='text-center text-2xl font-bold text-red'>Loading...</p>
			)}
			{characters.map(character => (
				<div className='results bg-yellow-300 p-4 rounded-xl mb-10'>
					<div className='flex'>
						<img className='rounded-3xl mr-4' src={character.image} alt='' />
						<div className='rounded-3xl text-center w-full p-4 bg-red-400/30 text-3xl'>
							<h4 className='font-bold text-5xl mb-4'>Info person</h4>
							<div className='text-left border-solid border-black border-2 rounded-lg p-2 '>
								<p>Name: {character.name}</p>
								<p>Status: {character.status}</p>
								<p>Gender: {character.gender}</p>
								<p>Loaction: {character.location.name}</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
