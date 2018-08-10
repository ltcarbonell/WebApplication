export class Exam {
    constructor(
        public title: string,
        public description: string,
        public _id?: string,
        public updatedAt?: Date,
        public createdAt?: Date,
        public lastUpdatedBy?: string,
    ) { }
}