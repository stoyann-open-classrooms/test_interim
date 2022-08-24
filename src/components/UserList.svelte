<script lang="ts">

import UserLigne from './UserLigne.svelte';
	export let users: any[] = [];

	console.log(users);

	/**
	 * Open / close modal
	 *
	 * @returns bool
	 */
	let toggleModal = false;
	const toggle = () => {
		toggleModal = !toggleModal;
		console.log(toggleModal);
	};

	/**
	 * formate name
	 *
	 * @param firstName
	 * @param lastName
	 *
	 * @returns formated name
	 */
	function formateName(firstName: string, lastName: string): string {
		let last = lastName.toUpperCase();
		let first = firstName.charAt(0).toUpperCase() + firstName.slice(1);
		let formatName = `${first + ' ' + last}`;
		return formatName;
	}
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
		{#each users as user (user.id)}
		
			<UserLigne item={user}/>
		{/each}
	</tbody>
</table>
