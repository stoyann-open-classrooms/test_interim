<script lang="ts">
  import storeData from '../store/store'
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import SearchBar from '../components/SearchBar.svelte';
	import UserList from '../components/UserList.svelte';
	import '../app.scss';
  let txt:string
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
  storeData.subscribe(valeur => {
    txt = valeur
  })
	
</script>

<Header />
<main class="container p-5">
  <p>{txt}</p>
	<SearchBar />
	<UserList {users}/>
</main>
<Footer />
