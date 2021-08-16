<script lang="ts">
  import CalcModel from "../model/CalcModel";
  import Button from "./Button.svelte";
  import Display from "./Display.svelte";
  import Row from "./Row.svelte";

  let calc = new CalcModel();
  const  selectedNumber = (num: string) => calc = calc.selectedNumber(num);
  const selectedOperation = (op: string) => calc = calc.selectedOperation(op);
  const  selectedPt = () => calc = calc.selectedPt(); //quando seleciona o . ou ,
  const clean = () => calc = calc.clean();
  const calculate = () => calc = calc.calculate();
  
</script>

<div class="calc">
  <Display value={calc.value} />
  <Row>
    <Button highlightColor triple text="AC" onClick={clean}/>
    <Button highlightColor operation text="/" onClick={selectedOperation}/>
  </Row>
  <Row>
    <Button text="7" onClick={selectedNumber} />
    <Button text="8" onClick={selectedNumber} />
    <Button text="9" onClick={selectedNumber} />
    <Button operation text="*" onClick={selectedOperation}/>
  </Row>
  <Row>
    <Button text="4" onClick={selectedNumber} />
    <Button text="5" onClick={selectedNumber} />
    <Button text="6" onClick={selectedNumber} />
    <Button operation text="+" onClick={selectedOperation}/>
  </Row>
  <Row>
    <Button text="1" onClick={selectedNumber} />
    <Button text="2" onClick={selectedNumber} />
    <Button text="3" onClick={selectedNumber} />
    <Button operation text="-" onClick={selectedOperation}/>
  </Row>
  <Row>
    <Button double text="0" onClick={selectedNumber} />
    <Button text="," onClick={selectedPt}/>
    <Button highlightColor text="=" onClick={calculate}/>
  </Row>
  
</div>

<style>
  .calc {
    width: 150px;
    height: 220px;
    padding: 3px;

    display: flex;
    flex-direction: column;
    background-color: var(--backgroundColor);
    border-radius: 5px;
    box-shadow: 
    2px -2px 12px 0 rgba(39, 39, 39, 0.3) }




</style>