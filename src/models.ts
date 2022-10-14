export interface IPerson {
	image: string
	name: string
	status: string
	gender: string
	location: {
		name: string
	}
}

export interface IInfo {
  count: number
  next: string | null
  pages: number
  prev: string | null
}