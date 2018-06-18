import { autoserialize } from 'cerialize';

export class Post {

    @autoserialize
    public name: string;

    @autoserialize
    public content: string;

    public constructor(name: string, content: string) {
        this.name = name;
        this.content = content;
    }

    public getDisplayName(): string {
        return `${this.name} - ${this.content}`;
    }

}
