<script lang="ts">
	import UserList from './../components/UserList.svelte';

	import SearchBar from '../components/SearchBar.svelte';
	import '../app.scss';
	import Spinner from '../components/shared/Spinner.svelte';
	let txt: string;
	let users: any[] | undefined = [];

	function fetchUsers() {
		fetch('https://dummyjson.com/users')
			.then((response) => response.json())
			.then(function (data) {
				console.log(data.users);
				users = data.users;
			});
	}
	function goRecherche(event: { detail: { txt: any } }) {
		let url = `https://dummyjson.com/users/search?q=${event.detail.txt}`;
		console.log(url);
		fetch(url)
			.then((response) => response.json())
			.then(function (data) {
				console.log(data.users);
				users = data.users;
			});
	}
	fetchUsers();
</script>

<main class="container p-5">
	<SearchBar on:recherche-user={goRecherche} />

	{#if !users}
		<Spinner />
	{/if}
	<UserList {users} />
</main>
