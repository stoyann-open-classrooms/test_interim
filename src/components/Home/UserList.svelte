<script lang="ts">
	import Spinner from '../shared/Spinner.svelte';
	import { users } from '../../stores/usersStore';
	import UserLigne from './UserLigne.svelte';
	let userData: string | any[];
	users.subscribe((usr) => {
		userData = usr;
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
		{#if userData.length === 0}
			<Spinner />
		{/if}
		{#each userData as user (user.id)}
			<UserLigne item={user} />
		{/each}
	</tbody>
</table>
