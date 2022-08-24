<script>
    
import UserCard from "./UserCard.svelte";

 
    export /**
* @type {{  firstName: string; lastName: string; id: number;  }}
*/
     let item
    const closeModal = (/** @type {number} */ itemId) => {
     console.log(itemId);
    }
    </script>
    
    <UserCard>
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <!-- <p class="modal-card-title">{user[0].firstName + " " + user[0].lastName } </p> -->
            <button on:click={ () => closeModal(item.id)} class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
            <!-- Content ... -->
            <div class="contact">
               <p>{item.firstName + " " + item.lastName}</p>
            </div>
          </section>
          <footer class="modal-card-foot">
         
          </footer>
        </div>
    </UserCard>