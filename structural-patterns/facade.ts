// Subsistema 1
class CPU {
  freeze(): void {
      console.log("CPU freezing...");
  }

  execute(): void {
      console.log("CPU executing...");
  }
}

// Subsistema 2
class Memory {
  load(): void {
      console.log("Memory loading...");
  }
}

// Subsistema 3
class HardDrive {
  read(): void {
      console.log("Hard Drive reading...");
  }
}

// Fachada que simplifica a interação com os subsistemas
class ComputerFacade {
  private cpu: CPU;
  private memory: Memory;
  private hardDrive: HardDrive;

  constructor() {
      this.cpu = new CPU();
      this.memory = new Memory();
      this.hardDrive = new HardDrive();
  }

  startComputer(): void {
      console.log("Starting computer...");
      this.cpu.freeze();
      this.memory.load();
      this.hardDrive.read();
      this.cpu.execute();
      console.log("Computer started.");
  }
}

// Exemplo de uso
const computer = new ComputerFacade();
computer.startComputer();