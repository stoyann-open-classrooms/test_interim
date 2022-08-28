import { writable } from 'svelte/store';
import axios from 'axios';
const users = writable([]);

function customUserStore() {

	const fetchUsers = async (searchTerm: string) => {
		const url = `https://dummyjson.com/users/search?q=${searchTerm}`;
		try {
			const data = await axios.get(url);
		users.set(data.data.users)

		
		} catch (err) {
			console.log(err);
		}
	};

	return {
		subscribe: users.subscribe,
		setUsers: () => {
			setTimeout(() => fetchUsers(''), 2000);
		},
		search: (searchTerm: string) => {
			users.set([]);

			if (searchTerm.length >= 3) {
				setTimeout(() => fetchUsers(searchTerm), 2000);
			}
		},
		reset: () => users.set([])
	};
}

export default customUserStore();
