export interface Root {
    current_page: number
    data: Daum[]
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string
    links: Link[]
    next_page_url: string
    path: string
    per_page: number
    prev_page_url: any
    to: number
    total: number
  }
  
  export interface Daum {
    breed: string
    country: string
    origin: string
    coat: string
    pattern: string
  }
  
  export interface Link {
    url?: string
    label: string
    active: boolean
  }
  