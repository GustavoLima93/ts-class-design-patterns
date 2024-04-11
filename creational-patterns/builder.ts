// Product class
class Sandwich {
  private bread: string;
  private meat: string;
  private cheese: string;
  private veggies: string;
  private condiments: string;

  // Methods to set the parts of the sandwich
  setBread(bread: string): void {
      this.bread = bread;
  }

  setMeat(meat: string): void {
      this.meat = meat;
  }

  setCheese(cheese: string): void {
      this.cheese = cheese;
  }

  setVeggies(veggies: string): void {
      this.veggies = veggies;
  }

  setCondiments(condiments: string): void {
      this.condiments = condiments;
  }

  // Method to display the sandwich
  display(): void {
      console.log(`Sandwich with ${this.bread}, ${this.meat}, ${this.cheese}, ${this.veggies}, ${this.condiments}`);
  }
}

// Builder class
class SandwichBuilder {
  private sandwich: Sandwich = new Sandwich();

  withBread(bread: string): SandwichBuilder {
      this.sandwich.setBread(bread);
      return this;
  }

  withMeat(meat: string): SandwichBuilder {
      this.sandwich.setMeat(meat);
      return this;
  }

  withCheese(cheese: string): SandwichBuilder {
      this.sandwich.setCheese(cheese);
      return this;
  }

  withVeggies(veggies: string): SandwichBuilder {
      this.sandwich.setVeggies(veggies);
      return this;
  }

  withCondiments(condiments: string): SandwichBuilder {
      this.sandwich.setCondiments(condiments);
      return this;
  }

  build(): Sandwich {
      return this.sandwich;
  }
}

// Usage example
const sandwich = new SandwichBuilder()
  .withBread("Wheat")
  .withMeat("Turkey")
  .withCheese("Swiss")
  .withVeggies("Lettuce, Tomato")
  .withCondiments("Mayo, Mustard")
  .build();

sandwich.display();
