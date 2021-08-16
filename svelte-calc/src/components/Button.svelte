<script lang="ts">
  export let text: string;
  export let triple: boolean = false;
  export let double: boolean = false;
  export let operation: boolean = false;
  export let highlightColor: boolean = false;
  export let onClick: (value: string) => void = () => {};

</script>

<button class="btn" class:triple class:double class:operation class:highlightColor 
  on:click={() => onClick(text)}>
  {text}
</button>

<style>

  .btn {
    margin: 0;
    cursor: pointer;
    flex-basis: 25%;
    border: 1px solid var(--backgroundColor);
    box-shadow: 
    8px -8px 12px 0 rgba(0, 0, 0, 0.3),
    -12px 12px 16px rgba(255, 255, 255, 0.25);
    border-radius: 2px;
    color: #55312D;
    transition: all .3s ease;
  }  
  .btn:hover{
    background-color: #f0bfb9;
    color: #fff;
  }
  .triple{
    flex-basis: 75%;
  }
  .double{
    flex-basis: 50%;
  }
  .operation{
    background-color:#F3BABA;
  }
  .highlightColor{
    background-color: #EAB9B3;
  }
</style>