<script lang="ts">
  import spiner from '../assets/spinner.gif'
import Spinner from './Spinner.svelte';

import UserLigne from './UserLigne.svelte';
	export let users: any[] = [];

	



</script>

<table class="table is-bordered is-fullwidth mb-4 mt-5">
	<thead>
		<tr>
			<th />
			<th>nom</th>
			<th>Télèphone</th>
			<th>Action</th>
		</tr>
	</thead>
	<tbody>
    {#if users.length === 0}
    
    <Spinner/>
    {/if}
		{#each users as user (user.id)}
		
			<UserLigne item={user}/>
		{/each}
	</tbody>
</table>
