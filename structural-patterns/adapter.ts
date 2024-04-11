// Interface representing the dollar payment service
interface DollarPaymentService {
  processPayment(amount: number): void;
}

// Concrete implementation of the dollar payment service
class PayPalService implements DollarPaymentService {
  processPayment(amount: number): void {
      console.log(`Processing dollar payment of $${amount}`);
  }
}

// Interface representing the euro payment service
interface EuroPaymentService {
  processPaymentInEuros(amount: number): void;
}

// Adapter allowing the dollar payment service to handle euros
class EuroPaymentServiceAdapter implements EuroPaymentService {
  private dollarPaymentService: DollarPaymentService;

  constructor(dollarPaymentService: DollarPaymentService) {
      this.dollarPaymentService = dollarPaymentService;
  }

  processPaymentInEuros(amount: number): void {
      // Converting euros to dollars using a fictitious exchange rate
      const amountInDollars = amount * 1.2;
      this.dollarPaymentService.processPayment(amountInDollars);
  }
}

// Usage example
function main() {
  // Using the dollar payment service directly
  const dollarService: DollarPaymentService = new PayPalService();
  dollarService.processPayment(100.0);

  // Adapting the dollar payment service to handle euros
  const euroService: EuroPaymentService = new EuroPaymentServiceAdapter(dollarService);
  euroService.processPaymentInEuros(85.0);
}

main();