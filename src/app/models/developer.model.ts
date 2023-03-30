export class Developer {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number = 42,
    public gender: string,
    public bio: string,
    public skillList: Array<any>
  ) {}
}
