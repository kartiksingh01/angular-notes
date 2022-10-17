export class Notes {
  public title: string;
  public description: string;
  public id: number;
  constructor(id: number, title: string, description: string) {
    this.id = id;
    this.title = title;
    this.description = description;
  }
}
