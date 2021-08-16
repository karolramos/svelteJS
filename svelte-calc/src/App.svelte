<script lang="ts">
	import Calc from "./components/Calc.svelte";

</script>

<main>
	<Calc />
</main>

<style>
	:global(body){
		background-color: #fff;
	}
	
	:root {
		--backgroundColor: #C6A7AA;
	}

	main {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	
</style>