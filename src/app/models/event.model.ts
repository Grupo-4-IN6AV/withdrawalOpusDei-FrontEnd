export class eventModel {
    constructor(
        public name: string,
        public typeEvent: string,
        public startDate: Date,
        public endDate: Date,
        public typePublic: string,
    ){}
}