export default class Color {
  constructor(Color: string) {
    this.Color = Color;
  }

  private _Color: string = "";
  get Color(): string {
    return this._Color;
  }
  set Color(newColor: string) {
    if (newColor.startsWith("#")) this._Color = newColor;
  }
}
