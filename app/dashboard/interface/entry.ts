

export interface Entry{
    _id: string;
    cant: number;
    description: string;
    createAt: number;
    status: EntryStatus;
    state: EntryState;
}

export type EntryStatus = 'Bien' | 'Regular' | 'Mal'

export type EntryState = 'Tecnológico' | 'Mobiliario' | 'Útil'