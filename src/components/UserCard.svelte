<script lang="ts">
    
	export /**
	 * @type {{  firstName: string; lastName: string; id: number;  }}
	 */ let item:any

     
	/**
	 * formate name
	 *
	 * @param firstName
	 * @param lastName
	 *
	 * @returns formated name
	 */
	function formateName(firstName:string, lastName: string): string {
		let last = lastName.toUpperCase();
		let first = firstName.charAt(0).toUpperCase() + firstName.slice(1);
		let formatName = `${first + ' ' + last}`;
		return formatName;
	}
</script>
<div class="modal is-active p-5 ">
    <div class="modal-background" />
	<div class="modal-card">
		<header class="modal-card-head">
		
			<button class="delete" aria-label="close" />
		</header>
		<section class="modal-card-body">
			<!-- Content ... -->
			<div class="contact">
				<p>{formateName(item.firstName , item.lastName)}</p>
			</div>
		</section>
		<footer class="modal-card-foot" />
	</div>
  </div>