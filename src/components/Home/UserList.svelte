<script lang="ts">
	import Spinner from '../shared/Spinner.svelte';
	import UserLigne from './UserLigne.svelte';
	import userData from '../../stores/usersStore';
	let data: string | any[];
	userData.subscribe((usr) => {
		data = usr;
	});
	import { onMount } from 'svelte';
	onMount(() => {
		userData.setUsers();
	});
</script>

<table class="table is-bordered is-fullwidth mb-4 mt-5">
	<thead>
		<tr>
			<th />
			<th>Nom</th>
			<th>Télèphone</th>
			<th>Action</th>
		</tr>
	</thead>
	<tbody>
		{#if data.length === 0 || !data}
			<Spinner />
		{/if}
		{#each data as user (user.id)}
			<UserLigne item={user} />
		{/each}
	</tbody>
</table>
