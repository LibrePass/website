<script>
	import './styles.scss';
	import Header from "$lib/Header.svelte";
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>LibrePass is an <a href="https://github.com/LibrePass">open source</a> program</p>
	</footer>
</div>

<style lang="scss">
	@import "$lib/css/variables.scss";

	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 0;
		width: 100%;
		/*max-width: 64rem;*/
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem;
		background: $bg-color-3;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
