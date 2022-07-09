export class eventModel {
    constructor(
        public availability: Boolean,
        public quantityPeople: Number,
        public actualQuantityPeople: Number,
        public name: string,
        public house: string,
    ){}
}