<script lang="ts">
	import userData from '../../stores/usersStore';
	import Spinner from '../shared/Spinner.svelte';

	let message: string = '';
	let toggle = false;
	let error = 0;
	let searchTerm = '';

	// search submit when user click outside the searchbar
	function clickOutside(element: HTMLInputElement, callbackFunction: { (): void; (): void }) {
		function onClick(event) {
			// console.log(element.value);
			if (!element.contains(event.target) && element.value != '') {
				callbackFunction();
			}
		}

		document.body.addEventListener('click', onClick);

		return {
			update(newCallbackFunction: { (): void; (): void }) {
				callbackFunction = newCallbackFunction;
			},
			destroy() {
				document.body.removeEventListener('click', onClick);
			}
		};
	}
	// open /close modal
	function toggleClass() {
		toggle = !toggle;
		searchTerm = '';
		location.reload();
	}
	// clear search input
	function clear() {
		searchTerm = '';
		if (toggle === true) {
			toggle = false;
		}
		location.reload();
		userData.setUsers();
	}
	// search submit
	const onSubmit = () => {
		error++;
		console.log(error);

		if (error >= 8) {
			toggle = true;
			message = 'Une erreur est survenue, merci de réessayer';
			searchTerm = 'XXXXXXXX';
			userData.search(searchTerm);
		}
		if (searchTerm.length < 3) {
			toggle = true;
			message = 'Votre recherche doit contenir un minimum de 3 caractères';
			userData.setUsers();
		}

		userData.search(searchTerm);
	};
</script>

{#if error === 8}
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
				use:clickOutside={() => {
					onSubmit();
				}}
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
