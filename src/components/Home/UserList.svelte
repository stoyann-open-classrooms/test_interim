<script lang="ts">
	import Spinner from '../shared/Spinner.svelte';
	import UserLigne from './UserLigne.svelte';
	import userData from '../../stores/usersStore';
	import { onMount } from 'svelte';
	let data: string | any[];
	// subscribe to userStore
	userData.subscribe((usr) => {
		data = usr;
	});

	onMount(() => {
		userData.setUsers();
	});
</script>

<table class="table is-bordered is-fullwidth mb-4 mt-5">
	<thead>
		<tr>
			<th />
			<th> <i class="fa-solid fa-user mr-3" /> Nom</th>
			<th> <i class="fa-solid fa-phone mr-3" /> Télèphone</th>
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
