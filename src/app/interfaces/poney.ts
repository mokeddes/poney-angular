export interface Poney {
    id?: string,
    name: PoneyName,
    img: string,
    distance?: number
}

type PoneyName = string