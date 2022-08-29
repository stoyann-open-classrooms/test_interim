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
	function formateName(lastName: string, firstName: string): string {
		let last = lastName.toUpperCase();
		let first = firstName.charAt(0).toUpperCase() + firstName.slice(1);
		let formatedName = `${first + ' ' + last}`;
		return formatedName;
	}
</script>

<tr>
	<td>
		<figure class="image is-32x32">
			<img src={item.image} alt="user pics" />
		</figure>
	</td>
	<td class="nameFormat">{formateName(item.lastName, item.firstName)}</td>
	<td>{item.phone}</td>
	<td>
		<UserCard {item} />
	</td>
</tr>
