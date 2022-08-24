<script lang="ts">
	import { createEventDispatcher } from 'svelte';
import Spinner from './Spinner.svelte';

	const dispatch = createEventDispatcher();
	let recherche: string = '';
	let message: string = '';



	
	let toggle = false;

	// open /close modal
	function toggleClass() {
		toggle = !toggle;
	}
	const onSubmit = () => {
		if (recherche.length >= 3) {
			message = ""
			setTimeout(() => {
				dispatch('recherche-user', { txt: recherche });
			}, 2000);
		} else {
			toggle =true
			message = "Votre recherche doit être composée d'un minimum de 3 caractères."
		}
	};
	

</script>

<form on:submit|preventDefault={onSubmit}>
	<div class=" {toggle ? 'notification  is-danger p-2 mb-5  ' : ''}">
	
	{#if toggle}
		
	<button on:click={toggleClass} class="delete"></button>
	{message}
	{/if}
	  </div>
	<div class="field">
		<p class="control has-icons-left ">
			<input bind:value={recherche} class="input is-rounded " type="text" placeholder="Recherche" />
			<span class="icon is-small is-left">
				<i class="fa-solid fa-magnifying-glass" />
			</span>
		</p>

	</div>
</form>

