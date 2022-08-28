<script lang="ts">
	import UserCard from './UserCard.svelte';

	export /**
	 * @type {{  firstName: string; lastName: string; id: number;  }}
	 */ let item: any;
	/**

     
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
		let formatedName = `${first + ' ' + last}`;
		return formatedName;
	}
</script>

<tr>
	<td><img src={item.image} alt="" /></td>
	<td class="nameFormat">{formateName(item.firstName, item.lastName)}</td>
	<td>{item.phone}</td>
	<td>
		<UserCard {item} />
	</td>
</tr>
