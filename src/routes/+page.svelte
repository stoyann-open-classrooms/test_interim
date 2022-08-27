<script lang="ts">
	import UserList from '../components/Home/UserList.svelte';

	import SearchBar from '../components/Home/SearchBar.svelte';
	import '../app.scss';
	import Spinner from '../components/shared/Spinner.svelte';
	import { users } from '../stores/usersStore';
	console.log($users);
	let txt: string;

	// function goRecherche(event: { detail: { txt: any } }) {
	// 	let url = `https://dummyjson.com/users/search?q=${event.detail.txt}`;
	// 	console.log(url);
	// 	users = [];
	// 	fetch(url)
	// 		.then((response) => response.json())
	// 		.then(function (data) {
	// 			console.log(data.users);
	// 			users = data.users;
	// 		});
	// }
	// fetchUsers();
</script>

<main class="container p-5">
	<h1 class="title is-4">Rechercher un utilisateur</h1>
	<!-- <SearchBar on:recherche-user={goRecherche} /> -->

	{#if !users}
		<Spinner />
	{/if}
	<UserList />
</main>
