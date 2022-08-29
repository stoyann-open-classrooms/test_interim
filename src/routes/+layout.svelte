<script lang="ts">
	import Header from '../components/shared/Header.svelte';
	import Footer from '../components/shared/Footer.svelte';
	import '../app.scss';
</script>

<!-- doc : https://kit.svelte.dev/docs/routing#page -->

<Header />
<slot />
<Footer />
