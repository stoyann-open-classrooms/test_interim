<script lang="ts">
	import userData from '../../stores/usersStore';
	import Spinner from '../shared/Spinner.svelte';

	let message: string = '';
	let toggle = false;
	let error = 0;
	let searchTerm = '';
	userData.subscribe((val) => {
		console.log(val);
	});

	// open /close modal
	function toggleClass() {
		toggle = !toggle;
		searchTerm = '';
	}
	function clear() {
		searchTerm = '';

		if (toggle === true) {
			toggle = false;
		}
		// TODO = return list of all users
	}
	const onSubmit = () => {
		error++;
		userData.search(searchTerm);
		if (error >= 4) {
			toggle = true;
			message = 'Une erreur est survenue, merci de réessayer';
		}
		if (searchTerm.length < 3) {
			toggle = true;
			message = 'Votre recherche doit contenir un minimum de 3 caractères';
		}

		userData.search(searchTerm);
	};
</script>

{#if toggle || !userData}
	<Spinner />
{/if}
<form on:submit|preventDefault={onSubmit}>
	<div class=" {toggle ? 'notification  is-danger p-2 mb-5  ' : ''}">
		{#if toggle}
			<button on:click={toggleClass} on:focus={clear} class="delete" />
			{message}
		{/if}
	</div>
	<div class="field">
		<p class="control has-icons-left has-icons-right ">
			<input
				bind:value={searchTerm}
				class="input is-rounded "
				type="text"
				placeholder="Recherche"
			/>
			<span class="icon is-small is-left">
				<i class="fa-solid fa-magnifying-glass" />
			</span>
			{#if searchTerm.length > 0}
				<span class="icon is-small is-right">
					<button on:focus={clear} class="delete">
						<i class="fa-solid fa-xmark" />
					</button>
				</span>
			{/if}
		</p>
	</div>
</form>
