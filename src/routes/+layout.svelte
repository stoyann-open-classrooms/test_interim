<script lang="ts">
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import SearchBar from '../components/SearchBar.svelte';
	import UserList from '../components/UserList.svelte';
	import '../app.scss';
  let users: any[]|undefined = []
  function  fetchUsers() {
    fetch('https://dummyjson.com/users')
    .then(response => response.json())
    .then(function(users2) {
      console.log(users2.users);
      users = users2.users
    })
  }
  fetchUsers()
  
	
</script>

<Header />
<main class="container p-5">
	<SearchBar />
	<UserList {users}/>
</main>
<Footer />
