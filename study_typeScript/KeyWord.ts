class KeyWord {
  private readonly MSG: string;

  constructor() {
    this.MSG = 'Hello';
  }

  log() {
    // this.MSG = 'Hi'; //* readOnly
    console.log(`MSG: ${this.MSG}`);
  }
}

new KeyWord().log();
