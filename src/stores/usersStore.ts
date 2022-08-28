import { writable } from 'svelte/store';

function customUserStore() {
	const users = writable([]);
	const fetchUsers = async (searchTerm: string) => {
		const url = `https://dummyjson.com/users/search?q=${searchTerm}`;
		const res = fetch(url);
		const data = await (await res).json();

		users.set(data.users);
	};
	
	setTimeout(() => fetchUsers(''), 2000);

	return {
		subscribe: users.subscribe,
		search: (searchTerm: string) => {
			users.set([])
			if (searchTerm.length >= 3) {
				setTimeout(() => fetchUsers(searchTerm), 2000);
			}
		},
		reset: () => users.set([])
	};
}

export default customUserStore();
