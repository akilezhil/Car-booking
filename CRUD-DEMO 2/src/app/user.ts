export interface User {
    id: number,
    name: string,
    email: string,
    mobile: string,
    pincode: string,
    gender: string,
    carNames: string,
    dob: Date,
    isActive: boolean,
    range?: any
    carType: string
}