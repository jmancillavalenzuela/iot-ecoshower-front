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