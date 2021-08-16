const NOT_CLEAN = false;
const CLEAN_SCREEN = true;

export default class CalcModel {

  #value: string;
  #accumulator: number;
  #operation: string;
  #cleanScreen: boolean;

  constructor(value: string = null, accumulator: number = null, operation: string = null, cleanScreen: boolean = false) {
      this.#value = value, 
      this.#accumulator = accumulator, 
      this.#operation = operation,
      this.#cleanScreen = cleanScreen
  }
  
  get value(){
    return this.#value?.replace('.',',') || '0';
  }
  
  selectedNumber(newValue: string){
    return new CalcModel(
      (this.#cleanScreen || !this.#value) ? newValue : this.#value + newValue, //se limpar a tela ou o valor n existir - retorna o novo valor, caso exista, retorna o atual + novo
      this.#accumulator,
      this.#operation,
      NOT_CLEAN,
    )      
  }
  // selecionando o . ou ,
  selectedPt(){
    return new CalcModel(
      this.#value?.includes('.') ? this.#value : this.#value + '.',
      this.#accumulator,
      this.#operation,
      NOT_CLEAN,
    )      
  }

  clean(){
    return new CalcModel();      
  }

  selectedOperation(nextOperation: string){
    return this.calculate(nextOperation);
  }

  calculate(nextOperation: string = null){
    // caso eu n tenha uma op e caso tenha
    const accumulator = !this.#operation
      ? parseFloat(this.#value)
      : eval(`${this.#accumulator} ${this.#operation} ${this.#value}`);
    const value = !this.#operation ? this.#value : `${accumulator}`; // o que vai p tela

    return new CalcModel(
      value,
      accumulator,
      nextOperation,
      nextOperation ?  CLEAN_SCREEN : NOT_CLEAN
    )
  }
}