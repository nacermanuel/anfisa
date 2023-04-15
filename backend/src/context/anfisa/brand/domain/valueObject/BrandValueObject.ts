import { BrandModel } from "../model/BrandModel";

export class BrandRValueObject implements BrandModel{
    
    readonly id: string ;
    readonly name: string ;

    constructor(
        id: string,
        name: string
    ){
        this.id = id ;
        this.name = name ;
    }
}