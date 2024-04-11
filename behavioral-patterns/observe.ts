// Interface que define o Observador
interface Observer {
  update(message: string): void;
}

// Classe que representa o Sujeito (ou Observável)
class Blog {
  private observers: Observer[] = [];
  private latestArticle: string;

  addObserver(observer: Observer): void {
      this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
      const index = this.observers.indexOf(observer);
      if (index > -1) {
          this.observers.splice(index, 1);
      }
  }

  publishArticle(article: string): void {
      this.latestArticle = article;
      this.notifyObservers();
  }

  private notifyObservers(): void {
      for (const observer of this.observers) {
          observer.update(this.latestArticle);
      }
  }
}

// Implementação concreta do Observador
class Subscriber implements Observer {
  private name: string;

  constructor(name: string) {
      this.name = name;
  }

  update(message: string): void {
      console.log(`${this.name} received an update: ${message}`);
  }
}

// Exemplo de uso
const blog = new Blog();

const subscriber1 = new Subscriber("Alice");
const subscriber2 = new Subscriber("Bob");

blog.addObserver(subscriber1);
blog.addObserver(subscriber2);

blog.publishArticle("New article: Design Patterns");
