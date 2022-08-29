<script lang="ts">
	export /**
	 * @type {{  firstName: string; lastName: string; id: number;  }}
	 */ let item: any;

	let toggleModal = false;
	let warning = false;

	// open /close modal
	function setToggleModal() {
		toggleModal = !toggleModal;
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
	function formateName(lastName: string, firstName: string): string {
		let last = lastName.toUpperCase();
		let first = firstName.charAt(0).toUpperCase() + firstName.slice(1);
		let formatName = `${first + ' ' + last}`;
		return formatName;
	}
</script>

<button on:click={setToggleModal} class=" btnModal button is-white is-small"
	><i class="fa-solid fa-ellipsis" /></button
>

<div class="modal p-5 {toggleModal ? 'is-active' : ' '} ">
	<div on:click={setToggleModal} class="modal-background" />
	<div class="modal-card">
		<header class="modal-card-head">
			<button on:click={setToggleModal} class="delete close-modal" aria-label="close" />
			<figure class="image is-64x64">
				<img src={item.image} alt="" />
			</figure>
			<h3 class="title is-3">{formateName(item.firstName, item.lastName)}</h3>
		</header>
		<section class="modal-card-body">
			<!-- Content ... -->

			<div class="column">
				<div>E-mail</div>
				<i class="fa-solid fa-envelope" />
				<p>{item.email}</p>
			</div>
			<div class="column">
				<div>Télèphone</div>
				<i class="fa-solid fa-phone" />
				<p>{item.phone}</p>
			</div>
			<div class="column">
				<div>Date de naissance</div>
				<i class="fa-solid fa-cake-candles" />
				<p>{new Date(item.birthDate).toLocaleDateString()}</p>
			</div>
			<div class="column">
				<i class="fa-solid fa-money-check" />
				<div>IBAN</div>
				<p>{item.bank.iban}</p>
			</div>
			<div class="column">
				<i class="fa-solid fa-briefcase-medical" />
				<div>SSN</div>
				<p>{item.ssn}</p>
			</div>

			{#if warning}
				<div class="notification is-warning  ">
					<p>
						Vous êtes sur le point de supprimer l'utilisateur <strong>
							{formateName(item.firstName, item.lastName)}.
						</strong>
						Cette action est irréversible, êtes-vous certain de vouloir continuer ?
					</p>
					<div class="mt-6">
						<button class="button is-danger is-small mr-3">Continuer</button>
						<button on:click={toggleWarning} class="button is-success is-small">Annuler</button>
					</div>
				</div>
			{/if}
		</section>
		<footer class="modal-card-foot">
			<button class="button is-success is-small">
				<i class=" mr-2 fa-solid fa-pen" />Modifier</button
			>
			<button on:click={toggleWarning} class="button is-danger is-small"
				><i class=" mr-2 fa-solid fa-trash" /> Supprimer</button
			>
		</footer>
	</div>
</div>
