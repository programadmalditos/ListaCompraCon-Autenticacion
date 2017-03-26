export class Producto { 

    constructor(public id: number,
                public nombre: string,
                public precio: number,
                public unidades: number,
                public descripcion?: string) {

    }
}