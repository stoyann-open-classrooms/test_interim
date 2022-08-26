<script></script>

<main class="container p-5">
	<h1 class="title is-3 is-center">Ajouter un utilisateur</h1>
	<p>
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae esse possimus illo pariatur
		accusantium quisquam atque voluptates.
	</p>
	<form class="mt-6">
		<div class="field">
			<p class="help mb-2">Entrez le prénom de l'utilisateur</p>
			<div class="control">
				<input class="input" type="text" placeholder="Prénom" />
			</div>
		</div>

		<div class="field">
			<p class="help mb-2">Entrez le nom de l'utilisateur</p>
			<div class="control has-icons-left has-icons-right">
				<input class="input" type="text" placeholder="Nom" />
				<span class="icon is-small is-left">
					<i class="fas fa-user" />
				</span>
				<span class="icon is-small is-right">
					<i class="fas fa-check" />
				</span>
			</div>
		</div>

		<div class="field">
			<p class="help mb-2">Entrez le nom de l'utilisateur</p>
			<div class="control has-icons-left has-icons-right">
				<input class="input" type="text" placeholder="Nom" />
				<span class="icon is-small is-left">
					<i class="fas fa-envelope" />
				</span>
				<span class="icon is-small is-right">
					<i class="fas fa-check" />
					<i class="fas fa-exclamation-triangle" />
				</span>
			</div>
		</div>
		<div class="field">
			<div class="control">
				<div class="select">
					<select>
						<option>Sexe</option>
						<option>Homme </option>
						<option>Femme</option>
					</select>
				</div>
			</div>
		</div>
		<div class="field">
			<p class="help mb-2">E-mail de l'utilisateur.</p>
			<div class="control has-icons-left has-icons-right">
				<input class="input" type="email" placeholder="Email input" />
				<span class="icon is-small is-left">
					<i class="fas fa-envelope" />
				</span>
				<span class="icon is-small is-right">
					<i class="fas fa-exclamation-triangle" />
				</span>
			</div>
		</div>
		<div class="field">
			<p class="help mb-2">IBAN de l'utilisateur.</p>
			<div class="control has-icons-left has-icons-right">
				<input class="input " type="number" placeholder="Iban" value="hello@" />
				<span class="icon is-small is-left">
					<i class="fa-solid fa-money-check" />
				</span>
				<!-- <span class="icon is-small is-right">
					<i class="fas fa-exclamation-triangle" />
				</span> -->
			</div>
		</div>
		<div class="field">
			<p class="help mb-2">SSN de l'utilisateur.</p>
			<div class="control has-icons-left has-icons-right">
				<input class="input" type="text" placeholder="SSN" />
				<span class="icon is-small is-left">
					<i class="fa-solid fa-money-check" />
				</span>
				<span class="icon is-small is-right" />
			</div>
		</div>

		<div class="field">
			<p class="help mb-2">Informations complémentaires.</p>
			<div class="control">
				<textarea class="textarea" />
			</div>
		</div>
		<div class="field is-grouped is-grouped-centered">
			<p class="control">
				<a class="button is-primary" href="/add-user">Envoyer</a>
			</p>
			<p class="control">
				<a class="button is-light" href="/add-user">Annuler</a>
			</p>
		</div>
	</form>
</main>
