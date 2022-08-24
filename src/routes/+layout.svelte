<script lang="ts">
import  Header  from '../components/Header.svelte';
import  Footer  from '../components/Footer.svelte';
import SearchBar from '../components/SearchBar.svelte';
import UserList from '../components/UserList.svelte';
import '../app.scss';




</script>


<Header/>
<slot />
<main class="container p-5">
  
  <SearchBar/>
  <UserList/>
</main>
<Footer/>
