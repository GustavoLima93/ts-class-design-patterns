// Implementação da forma (abstração)
interface Shape {
  draw(): void;
}

// Implementações concretas de formas
class Circle implements Shape {
  draw(): void {
      console.log("Drawing a circle");
  }
}

class Square implements Shape {
  draw(): void {
      console.log("Drawing a square");
  }
}

// Implementação da cor (implementação)
interface Color {
  applyColor(): void;
}

// Implementações concretas de cores
class Red implements Color {
  applyColor(): void {
      console.log("Applying red color");
  }
}

class Blue implements Color {
  applyColor(): void {
      console.log("Applying blue color");
  }
}

// Abstração refinada que usa o padrão Bridge
abstract class ShapeWithColor implements Shape {
  protected color: Color;

  constructor(color: Color) {
      this.color = color;
  }

  draw(): void {}

  abstract drawWithColor(): void;
}

// Implementação refinada da forma com uma cor específica
class ColoredCircle extends ShapeWithColor {
  constructor(color: Color) {
      super(color);
  }

  draw(): void {
      console.log("Drawing a colored circle");
  }

  drawWithColor(): void {
      this.draw();
      this.color.applyColor();
  }
}

class ColoredSquare extends ShapeWithColor {
  constructor(color: Color) {
      super(color);
  }

  draw(): void {
      console.log("Drawing a colored square");
  }

  drawWithColor(): void {
      this.draw();
      this.color.applyColor();
  }
}

// Exemplo de uso
const redCircle = new ColoredCircle(new Red());
const blueSquare = new ColoredSquare(new Blue());

redCircle.drawWithColor();
blueSquare.drawWithColor();
