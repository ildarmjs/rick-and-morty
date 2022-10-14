
import axios from 'axios'
import { useState, useEffect } from 'react'
import { IPerson, IInfo } from '../models'


export const useCharacters = () => {
	const [characters, setCharacters] = useState<IPerson[]>([])
	const [loading, setLoading] = useState(false)
	const [nextPageUrl, setNextPageUrl] = useState<string | null>('')
	const [prevPageUrl, setPrevPageUrl] = useState<string | null>('')
	const [currentPageUrl, setCurrentPageUrl] = useState<string>(
		'https://rickandmortyapi.com/api/character'
	)
	const [pages, setPages] = useState(1)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const url = currentPageUrl
				setLoading(true)
				const { data } = await axios.get(url)
        const results : Array<IPerson> = data.results;
        const info : IInfo = data.info
				setCharacters(results)
				setLoading(false)
				setNextPageUrl(info.next)
				setPrevPageUrl(info.prev)
				setPages(data.info.pages)
			} catch (error) {
				console.error(error)
				setLoading(false)
			}
		}

		fetchData()
	}, [currentPageUrl])

	function nextPage() {
    if(nextPageUrl === null) {
      return
    }
		setCurrentPageUrl(nextPageUrl)
	}
	function prevPage() {
    if(prevPageUrl === null) {
      return
    }
		setCurrentPageUrl(prevPageUrl)
	}
	function goToPage(num: any) {
		setCurrentPageUrl(`https://rickandmortyapi.com/api/character?page=${num}`)
	}
	function searchPerson(name: string) {
		setCurrentPageUrl(`https://rickandmortyapi.com/api/character/?name=${name}`)
	}
	return {
		searchPerson,
		characters,
		loading,
		nextPage,
		prevPage,
		goToPage,
		pages,
    currentPageUrl	}
}
