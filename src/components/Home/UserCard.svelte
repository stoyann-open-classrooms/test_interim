<script lang="ts">
	export /**
	 * @type {{  firstName: string; lastName: string; id: number;  }}
	 */ let item: any;

	let toggle = false;
	let warning = false;

	// open /close modal
	function toggleClass() {
		toggle = !toggle;
	}
	function toggleWarning() {
		warning = !warning;
	}

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

<button on:click={toggleClass} class="button is-white is-small"
	><i class="fa-solid fa-ellipsis" /></button
>

<div class="modal p-5 {toggle ? 'is-active' : ' '} ">
	<div on:click={toggleClass} class="modal-background" />
	<div class="modal-card">
		<button on:click={toggleClass} class="delete" aria-label="close" />
		<header class="modal-card-head" />
		<section class="modal-card-body">
			{#if warning}
				<div class="notification is-warning">
					<p>
						Vous êtes sur le point de supprimer l'utilisateur <strong>
							{formateName(item.firstName, item.lastName)}.
						</strong>
						Cette action est irréversible, êtes-vous certain de vouloir continuer ?
					</p>
					<div class="mt-3">
						<button class="button is-danger is-small mr-3">Supprimer</button>
						<button on:click={toggleWarning} class="button is-success is-small">Annuler</button>
					</div>
				</div>
			{/if}

			<!-- Content ... -->
			<div class=" box top">
				<figure class="image is-110x110">
					<img src={item.image} alt="" />
				</figure>
				<div class="contact ">
					<h3 class="title is-2 p-3">{formateName(item.firstName, item.lastName)}</h3>
				</div>
			</div>
			<div class="box ">
				<div class="box mb-5">
					<div class="title is-6">
						E-mail: {item.email}
					</div>
					<div class="title is-6 m-1 ">
						Date de naissance:
						{new Date(item.birthDate).toLocaleDateString()}
					</div>
					<div class="info mb-5">
						<div class="title is-6 m-1">
							Sexe:
							{item.gender.slice(0, 1).toUpperCase()}
						</div>
					</div>
					<div class="info mb-5">
						<div class="title is-6 m-1">
							SSN: {item.ssn}
						</div>
						<div class="title is-6 m-1">
							IBAN: {item.bank.iban}
						</div>
					</div>
				</div>
			</div>
		</section>
		<footer class="modal-card-foot">
			<button class="button is-success"> <i class=" mr-2 fa-solid fa-pen" />Modifier</button>
			<button on:click={toggleWarning} class="button is-danger"
				><i class=" mr-2 fa-solid fa-trash" /> Supprimer</button
			>
		</footer>
	</div>
</div>
