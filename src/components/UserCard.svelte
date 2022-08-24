<script>
    
	export /**
	 * @type {{  firstName: string; lastName: string; id: number;  }}
	 */ let item;
</script>
<div class="modal  p-5 ">
    <div class="modal-background" />
	<div class="modal-card">
		<header class="modal-card-head">
		
			<button class="delete" aria-label="close" />
		</header>
		<section class="modal-card-body">
			<!-- Content ... -->
			<div class="contact">
				<p>{item.firstName}</p>
			</div>
		</section>
		<footer class="modal-card-foot" />
	</div>
  </div>