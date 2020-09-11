export class Propietarios {

    constructor(_id = '', nombreCompleto = '', contacto = '',  casa = 0) {
        this._id = _id;
        this.nombreCompleto = nombreCompleto;
        this.contacto = contacto;
        this.casa = casa;
    }
    _id : string ;
    nombreCompleto : string;
    contacto :string;
    casa: number;
}
