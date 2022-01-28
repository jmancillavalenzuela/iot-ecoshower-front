export interface RECOVERY {
    email: string
}

export interface LOGIN {
    email: string,
    password: string,
    remember: boolean
} 

export interface UPDATE_USER {
    address: string
    city: string
    country: string
    state: string
  }
  
  export interface SIGN_UP_DATA {
    name: string
    rut: string
    email: string
    prefix: number
    phone: number
    address: string
    countryStateCity: string[]
    password: string
    acceptTC: boolean
  }