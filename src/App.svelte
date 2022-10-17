<script>
	import { onMount } from 'svelte';

	const obj ={'test': 'string'};


	switch(obj) {
		case 'sal': 
			console.log('stuff');
	}
 // test
	if (x === x) {

	}

	export let name;
	const s = 12;
	
	onMount(async () => {
		// const filePath = await window.electronAPI.openFile();
		// console.log(await window.electronAPI.fuck());
		// console.log('file', filePath);
	});
  
</script>

<main>
	
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>