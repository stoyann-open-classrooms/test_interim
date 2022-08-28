import { writable } from 'svelte/store';

const users = writable([]);
function customUserStore() {
	const fetchUsers = async (searchTerm: string) => {
		const url = `https://dummyjson.com/users/search?q=${searchTerm}`;
		const res = fetch(url);
		const data = await (await res).json();
        users.set(data.users);
	};

	return {
		subscribe: users.subscribe,
		setUsers: () => {
			
			setTimeout(() => fetchUsers(''), 2000);
		},
		search: (searchTerm: string  ) => {
			users.set([]);
			
			
			if (searchTerm.length >= 3) {
				setTimeout(() => fetchUsers(searchTerm), 2000);
			}
			
			
		},
		reset: () => users.set([])
	};
}

export default customUserStore();
