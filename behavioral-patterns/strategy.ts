// Definição da interface de estratégia de ataque
interface AttackStrategy {
  attack(): void;
}

// Classe Knight com uma estratégia de ataque
class Knight {
  private attackStrategy: AttackStrategy;

  setAttackStrategy(attackStrategy: AttackStrategy): void {
      this.attackStrategy = attackStrategy;
  }

  performAttack(): void {
      this.attackStrategy.attack();
  }
}

// Implementações concretas da estratégia de ataque
class SwordAttack implements AttackStrategy {
  attack(): void {
      console.log("Sword attack!");
  }
}

class BowAttack implements AttackStrategy {
  attack(): void {
      console.log("Bow attack!");
  }
}

// Exemplo de uso
const knight = new Knight();
knight.setAttackStrategy(new SwordAttack()); // Configura o ataque como SwordAttack
knight.performAttack(); // Executa o ataque de espada

knight.setAttackStrategy(new BowAttack()); // Altera a estratégia para BowAttack
knight.performAttack(); // Executa o ataque de arco