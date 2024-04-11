// Interfaces for the game products
interface Graphics {
  render(): void;
}

interface Sound {
  play(): void;
}

interface Controls {
  handleInput(): void;
}

// Abstract factory for creating the products
interface GameFactory {
  createGraphics(): Graphics;
  createSound(): Sound;
  createControls(): Controls;
}

// Concrete product implementations for PC
class PCGraphics implements Graphics {
  render(): void {
      console.log("Rendering graphics for PC.");
  }
}

class PCSound implements Sound {
  play(): void {
      console.log("Playing sound for PC.");
  }
}

class PCControls implements Controls {
  handleInput(): void {
      console.log("Handling input for PC.");
  }
}

// Concrete product implementations for console
class ConsoleGraphics implements Graphics {
  render(): void {
      console.log("Rendering graphics for console.");
  }
}

class ConsoleSound implements Sound {
  play(): void {
      console.log("Playing sound for console.");
  }
}

class ConsoleControls implements Controls {
  handleInput(): void {
      console.log("Handling input for console.");
  }
}

// Concrete factory implementations for PC
class PCGameFactory implements GameFactory {
  createGraphics(): Graphics {
      return new PCGraphics();
  }

  createSound(): Sound {
      return new PCSound();
  }

  createControls(): Controls {
      return new PCControls();
  }
}

// Concrete factory implementations for console
class ConsoleGameFactory implements GameFactory {
  createGraphics(): Graphics {
      return new ConsoleGraphics();
  }

  createSound(): Sound {
      return new ConsoleSound();
  }

  createControls(): Controls {
      return new ConsoleControls();
  }
}

// Client using the factories and products
class GameClient {
  static main(): void {
      const pcFactory: GameFactory = new PCGameFactory();
      const pcGraphics: Graphics = pcFactory.createGraphics();
      const pcSound: Sound = pcFactory.createSound();
      const pcControls: Controls = pcFactory.createControls();

      pcGraphics.render();
      pcSound.play();
      pcControls.handleInput();

      const consoleFactory: GameFactory = new ConsoleGameFactory();
      const consoleGraphics: Graphics = consoleFactory.createGraphics();
      const consoleSound: Sound = consoleFactory.createSound();
      const consoleControls: Controls = consoleFactory.createControls();

      consoleGraphics.render();
      consoleSound.play();
      consoleControls.handleInput();
  }
}

// Running the client code
GameClient.main();