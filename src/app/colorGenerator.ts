export class ColorGenerator {
    
  constructor() {}

  static generateColor(): string {
    console.log("genrating color");
    return "rgba("
      + Math.floor(Math.random() * 255)+ ","
      + Math.floor(Math.random() * 255)+ ","
      + Math.floor(Math.random() * 255)+ ","
      + "1)";
  }

}