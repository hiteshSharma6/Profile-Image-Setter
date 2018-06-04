export class ColorGenerator {
    
  constructor() {}

  static generateColor(): string {
    return "rgb("
      + Math.floor(Math.random() * 255) + ","
      + Math.floor(Math.random() * 255) + ","
      + Math.floor(Math.random() * 255)
      + ")";
  }

}