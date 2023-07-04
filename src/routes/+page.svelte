<script>
	import Home from '$components/Home.svelte';
</script>

<svelte:head>
	<title>Trivia King</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>

  <div>
    <Home />
  </div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
