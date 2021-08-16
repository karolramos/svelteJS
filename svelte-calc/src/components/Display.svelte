<script lang="ts">
  export let value: string;
  $: fontSize = value.length > 20 ? 'small' : `s-${value.length}`;  // se tiver mais de 20 nums no display ele recebe a fonte small
</script>

<div class={`display ${fontSize}`}>
  <span>{value}</span>
</div>

<style>
  .display {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;

    background-color: #55312D;
    color: #a35256;
    font-size: 1.5rem;
    padding: 0px 3px;
    margin: 3px;
    overflow: hidden;
    border-radius: 5px;
  }


  .s-12 {font-size: 1.45rem;}
  .s-13 {font-size: 1.35rem;}
  .s-14 {font-size: 1.3rem;}
  .s-15 {font-size: 1.2rem;}
  .s-16 {font-size: 1.1rem;}
  .s-17 {font-size: 1rem;}
  .s-18 {font-size: .9rem;}
  .s-19 {font-size: .899rem;}
  .s-20 {font-size: .8rem;}
  .small {font-size: .7rem;}
</style>