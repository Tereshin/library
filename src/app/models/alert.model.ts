export interface IAlert {
    id: number;
    type: string;
    message: string;
}

export class Alert implements IAlert {
    id: number;
    public type: string;
    public message: string;

    constructor(props: any = {}) {
        this.id = props['id'];
        this.type = props['type'];
        this.message = props['message'];
    }
}
