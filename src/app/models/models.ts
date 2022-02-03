export interface Glass {
    nr: number;
    capacity: number;
    unit:string;
    empty:boolean;
}

export interface Jug {
    filling:number;
    readonly unit:string;
    fillingPercent:number;
    remain:number;
    readonly total:number;
    height: number;
}

export const GLASSES:Glass[] = [
    {
        nr:1,
        capacity: 250, 
        unit: 'ml',
        empty: true
    },
    {
        nr:2,
        capacity: 350, 
        unit: 'ml',
        empty: true
    },
    {
        nr:3,
        capacity: 250, 
        unit: 'ml',
        empty: true
    },
    {
        nr:4,
        capacity: 400, 
        unit: 'ml',
        empty: true
    },
    {
        nr:5,
        capacity: 250, 
        unit: 'ml',
        empty: true
    },
    {
        nr:6,
        capacity: 250, 
        unit: 'ml',
        empty: true
    },
    {
        nr:7,
        capacity: 250, 
        unit: 'ml',
        empty: true
    },
    {
        nr:8,
        capacity: 250, 
        unit: 'ml',
        empty: true
    },
]