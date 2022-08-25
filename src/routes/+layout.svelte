<script lang="ts">
  import spiner from '../assets/spinner.gif'

	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import SearchBar from '../components/SearchBar.svelte';
	import UserList from '../components/UserList.svelte';
	import '../app.scss';
	let txt: string;
	let users: any[] | undefined = [];
	
	
	
	function fetchUsers() {
		fetch('https://dummyjson.com/users?limit=100')
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

<Header />
<main class="container p-5">
	
  <SearchBar on:recherche-user={goRecherche} />
  {#if !users}
  <img src={spiner} alt="loader">
    
  {/if}
	<UserList {users} />
</main>
<Footer />
