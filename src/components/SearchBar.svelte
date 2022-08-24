<script lang="ts">
	import { createEventDispatcher } from 'svelte';
import Spinner from './Spinner.svelte';

	const dispatch = createEventDispatcher();
	let recherche: string = '';

	// Et pour l'utiliser

	const onSubmit = () => {
		if (recherche.length >= 3) {
			setTimeout(() => {
				dispatch('recherche-user', { txt: recherche });
			}, 2000);
		}
	};
</script>

<form on:submit|preventDefault={onSubmit}>
	<div class="field">
		<p class="control has-icons-left ">
			<input bind:value={recherche} class="input is-rounded " type="text" placeholder="Recherche" />
			<span class="icon is-small is-left">
				<i class="fa-solid fa-magnifying-glass" />
			</span>
		</p>
	</div>
</form>
