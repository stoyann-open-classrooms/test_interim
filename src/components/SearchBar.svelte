<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Spinner from './Spinner.svelte';

	const dispatch = createEventDispatcher();
	let recherche: string = '';
	let message: string = '';

	let toggle = false;
	let error = 0
	// open /close modal
	function toggleClass() {
		toggle = !toggle;
	}
	function clear() {
		recherche = '';
	}
	const onSubmit = () => {
		error++
		if (recherche.length >= 3) {
			message = '';
  console.log(error);
  
			setTimeout(() => {
				if ( error === 4) {

					toggle = true;
					dispatch('recherche-user', { txt: "zldslj" });
					message = "Une erreur est survenue, merci de réessayer.";
					error = 0
				} else {
					dispatch('recherche-user', { txt: recherche });
				}
			}, 2000);
		} else {
			toggle = true;
			message = "Votre recherche doit être composée d'un minimum de 3 caractères.";
		}
	};
</script>

<form on:submit|preventDefault={onSubmit}>
	<div class=" {toggle ? 'notification  is-danger p-2 mb-5  ' : ''}">
		{#if toggle}
			<button on:click={toggleClass} on:focus={clear} class="delete" />
			{message}
		{/if}
	</div>
	<div class="field">
		<p class="control has-icons-left has-icons-right ">
			<input bind:value={recherche} class="input is-rounded " type="text" placeholder="Recherche" />
			<span class="icon is-small is-left">
				<i class="fa-solid fa-magnifying-glass" />
			</span>
			{#if recherche.length > 0}
				<span class="icon is-small is-right">
					<button on:focus={clear} class="delete">
						<i class="fa-solid fa-xmark" />
					</button>
				</span>
			{/if}
		</p>
	</div>
</form>
