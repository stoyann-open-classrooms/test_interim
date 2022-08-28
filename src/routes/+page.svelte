<script lang="ts">
	import UserList from '../components/Home/UserList.svelte';
	import SearchBar from '../components/Home/SearchBar.svelte';
	import '../app.scss';
</script>

<main class="container p-5">
	<h1 class="title is-4">Rechercher un utilisateur</h1>
	<SearchBar />
	<UserList />
</main>
