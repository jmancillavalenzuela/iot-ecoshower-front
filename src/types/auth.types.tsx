export interface RECOVERY {
  email: string;
}

export interface LOGIN {
  email: string;
  password: string;
  remember: boolean;
}

export interface UPDATE_USER {
  address: string;
  city: string;
  country: string;
  state: string;
}

export interface SIGN_UP_DATA {
  name: string;
  rut: string;
  email: string;
  prefix: number;
  phone: number;
  address: string;
  countryStateCity: string[];
  password: string;
  acceptTC: boolean;
}

export interface USER_DATA {
  name: string | null;
  role: ROLE;
  rut: string | null;
  email: string | null;
  prefix: number | null;
  phone: string | null;
  address: string | null;
  country: string | null;
  state: string | null;
  city: string | null;
}

export interface USER_FIREBASE_DATA {
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
}

export interface REGISTER_DEVICE_DATA {
  uniqueId: string;
  name: string;
  displayName: string;
}

export interface ROLE {
  id: USER_ROLE;
  description: string;
  naturalKey: string;
}

export enum USER_ROLE {
  ADMIN,
  CLIENT,
}

export interface UPDATE_USER_DATA {
  address: string;
  city: string;
  country: string;
  state: string;
}
export interface TELEMETRY_DEVICE_DATA {
  fluxHotPump: number;
  fluxOutPump: number;
  tempOutShower: number;
  stateShower: number;
  createdAt: string;
}
