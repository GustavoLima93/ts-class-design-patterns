// Classe base para manipuladores
abstract class Handler {
  protected nextHandler: Handler;

  setNextHandler(nextHandler: Handler): void {
      this.nextHandler = nextHandler;
  }

  abstract handleRequest(amount: number): void;
}

// Implementações concretas dos manipuladores
class ManagerHandler extends Handler {
  handleRequest(amount: number): void {
      if (amount <= 1000) {
          console.log(`Manager can approve $${amount}`);
      } else if (this.nextHandler != null) {
          this.nextHandler.handleRequest(amount);
      } else {
          console.log(`No one can approve $${amount}`);
      }
  }
}

class DirectorHandler extends Handler {
  handleRequest(amount: number): void {
      if (amount <= 5000) {
          console.log(`Director can approve $${amount}`);
      } else if (this.nextHandler != null) {
          this.nextHandler.handleRequest(amount);
      } else {
          console.log(`No one can approve $${amount}`);
      }
  }
}

class CFOHandler extends Handler {
  handleRequest(amount: number): void {
      if (amount <= 10000) {
          console.log(`CFO can approve $${amount}`);
      } else {
          console.log(`No one can approve $${amount}`);
      }
  }
}

// Exemplo de uso
const manager = new ManagerHandler();
const director = new DirectorHandler();
const cfo = new CFOHandler();

manager.setNextHandler(director);
director.setNextHandler(cfo);

manager.handleRequest(1500);
manager.handleRequest(7000);
manager.handleRequest(12000);
