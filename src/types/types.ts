export interface IMovieItem {
  id: number
  externalId: ExternalId
  name: string
  alternativeName: string
  enName: any
  names: any[]
  type: string
  typeNumber: number
  year: number
  description: string
  shortDescription: string
  slogan: string
  status: any
  rating: Rating
  votes: Votes
  movieLength: number
  totalSeriesLength: any
  seriesLength: any
  ratingMpaa: string
  ageRating: number
  poster: {
    url: string
    previewUrl: string
  }
  backdrop: Backdrop
  genres: {
    name: string
  }[]
  countries: Country[]
  persons: Person[]
  budget: Budget
  premiere: Premiere
  sequelsAndPrequels: SequelsAndPrequel[]
  watchability: Watchability
  top10: any
  top250: number
  isSeries: boolean
  audience: Audience[]
  ticketsOnSale: boolean
  lists: string[]
  networks: any
  createdAt: string
  updatedAt: string
  videos: Videos
}

export interface ExternalId {
  kpHD: string
  imdb: string
}

export interface Rating {
  kp: number
  imdb: number
  filmCritics: number
  russianFilmCritics: number
  await: any
}

export interface Votes {
  kp: number
  imdb: number
  filmCritics: number
  russianFilmCritics: number
  await: number
}

export interface Backdrop {
  url: string
  previewUrl: string
}



export interface Country {
  name: string
}

export interface Person {
  id: number
  photo: string
  name: string
  enName?: string
  description?: string
  profession: string
  enProfession: string
}

export interface Budget {
  currency: string
  value: number
}

export interface Premiere {
  country: any
  digital: any
  cinema: any
}

export interface SequelsAndPrequel {
  id: number
  name: string
  alternativeName: string
  enName: any
  type: string
  poster: Poster2
}

export interface Poster2 {
  url: string
  previewUrl: string
}

export interface Watchability {
  items: Item[]
}

export interface Item {
  name: string
  logo: Logo
  url: string
}

export interface Logo {
  url: string
}

export interface Audience {
  count: number
  country: string
}

export interface Videos {
  trailers: any[]
}

export interface IMovieData {
  docs: IMovieItem[];
  limit: number;
  page: number;
  pages: number;
  total: number;
}

