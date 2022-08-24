<script>
import UserCard from "./UserCard.svelte";

	export /**
	 * @type {{  firstName: string; lastName: string; id: number;  }}
	 */ let item;


</script>

<tr>
	<td><i class="fa-solid fa-user" /></td>
	<td>{item.firstName}</td>
	<td>user</td>
	<td>
		<button on:click={() => console.log(item.id)} class="button is-white is-small"><i class="fa-solid fa-ellipsis" /></button>
	</td>
    <UserCard {item}/>
</tr>
