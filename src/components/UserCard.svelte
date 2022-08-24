<script lang="ts">
	export /**
	 * @type {{  firstName: string; lastName: string; id: number;  }}
	 */ let item: any;

	let toggle = false;

	// open /close modal
	function toggleClass() {
		toggle = !toggle;
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
		<header class="modal-card-head">
			<button on:click={toggleClass} class="delete" aria-label="close" />
		</header>
		<section class="modal-card-body">
			<!-- Content ... -->
			<div class="top">
				<figure class="image is-110x110">
					<img src={item.image} alt="" />
				</figure>
				<div class="contact ">
					<h3 class="title is-2">{formateName(item.firstName, item.lastName)}</h3>
					<p class="title is-5 m-2"><i class=" mr-4 fa-solid fa-phone" /> {item.phone}</p>
					<p class="title is-5"><i class=" mr-4 fa-solid fa-envelope" /> {item.email}</p>
				</div>
			</div>
			<div class="content m-5">
				<div class="name mb-5">
					<div class="title is-6">
						Nom: <span class=" tag is-dark is-medium">{item.lastName}</span>
					</div>
					<div class="title is-6">
						Prénom: <span class=" tag is-dark is-medium">{item.firstName}</span>
					</div>
				</div>
				<div class="info mb-5">
					<div class="title is-6 m-1 ">
						Date de naissance: <span class=" tag is-dark is-medium"
							>{new Date(item.birthDate).toLocaleDateString()}</span
						>
					</div>
					<div class="title is-6 m-1">
						Sexe: <span class=" tag is-dark is-medium">{item.gender.slice(0, 1).toUpperCase()}</span
						>
					</div>
				</div>
				<div class="info mb-5">
					<div class="title is-6 m-1">
						SSN: <span class="tag is-dark is-medium">{item.ssn}</span>
					</div>
					<div class="title is-6 m-1">
						IBAN: <span class=" tag is-dark is-medium">{item.bank.iban}</span>
					</div>
				</div>
			</div>
		</section>
		<footer class="modal-card-foot" />
	</div>
</div>
