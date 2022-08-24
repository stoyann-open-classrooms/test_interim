<script lang="ts">

import UserItem from './UserItem.svelte';
  export let users: any[] = []

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
			<tr>
				<td><i class="fa-solid fa-user" /></td>
				<td>{formateName(user.firstName, user.lastName)} </td>
				<td>{user.telephone}</td>
				<td>
					<button on:click={toggle} class="button is-white is-small"
						><i class="fa-solid fa-ellipsis" /></button
					>
				</td>
			</tr>
      {#if toggleModal}
        <UserItem item={user}/>
      {/if}
		{/each}
	</tbody>
</table>
