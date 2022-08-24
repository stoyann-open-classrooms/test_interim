<script lang="ts">
	import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher()
  let recherche:string = ""
  
  const onSubmit = () => {
    if(recherche.length >= 3) {
      dispatch('recherche-user' , {txt :recherche})
      recherche = ""
    }
    
  }
</script>

<form on:submit|preventDefault={onSubmit}  > 
    <div class="field">
        <p class="control has-icons-left ">
          <input bind:value={recherche} class="input is-rounded " type="text" placeholder="Recherche">
          <span class="icon is-small is-left">
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
          
        </p>
      </div>

</form>


