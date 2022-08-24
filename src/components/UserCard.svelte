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
            <div class="top">
                <img src={item.image} alt="">
                <div class="contact">
                    <h3 class="title is-2">{formateName(item.firstName , item.lastName)}</h3>
                    <p  class="title is-5 m-2" > <i class=" mr-4 fa-solid fa-phone"></i>{item.phone}</p>
                    <p  class="title is-5"><i class=" mr-4 fa-solid fa-envelope"></i>{item.email}</p>
                </div>
            </div>
            <div class="content m-5">
              <div class="name mb-5">

                  <div class="title is-5 m-1">nom :<span class=" mr-4 is-medium " >{item.lastName}</span></div>
                  <div class="title is-5">prénom:<span>{item.firstName}</span></div>
                </div>
              <div class="info mb-5">

                  <div class="title is-5 m-1 ">Date de naissance :<span class=" mr-4">{ new Date(item.birthDate).toLocaleDateString() }</span></div>
                  <div class="title is-5 m-1">sexe:<span class=" mr-4">{item.gender.slice(0, 1).toUpperCase()}</span></div>
                </div>
              <div class="info mb-5">

                  <div class="title is-5 m-1">SSN :<span class=" mr-4">{item.ssn }</span></div>
                  <div class="title is-5 m-1" >IBAN:<span class=" mr-4">{item.bank.iban}</span></div>
                </div>
              
            </div>
              <!-- <div class="info">

                  <div>nom :<span>{item.lastName}</span></div>
                  <div>prénom:<span>{item.firstName}</span></div>
                </div>
              
            </div> -->
            
		</section>
		<footer class="modal-card-foot" />
	</div>
  </div>