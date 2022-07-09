export class eventModel {
    constructor(
        public date: Date,
        public room: string,
        public event: string,
        public client: string, //Persona que enviará su formulario para su reservación
        public DPI: string,
        public age: string,
        public gender: string,
    ){}
}