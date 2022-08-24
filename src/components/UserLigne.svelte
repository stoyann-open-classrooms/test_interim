<script lang="ts">
import UserCard from "./UserCard.svelte";


	export /**
	 * @type {{  firstName: string; lastName: string; id: number;  }}
	 */ let item:any;
	/**
	 * Open / close modal
	 *
	 * @returns bool
	 */
 

     
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

<tr>
	<!-- <td><i class="fa-solid fa-user" /></td> -->
	<td><img src={item.image} alt=""> </td>
	<td>{formateName(item.firstName , item.lastName)}</td>
	<td>{item.phone}</td>
	<td>
		<UserCard {item}/>
	</td>

</tr>
