<script lang="ts">
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div class=" m-8 container">
	<Header />
	<slot />
	<Footer />
</div>
