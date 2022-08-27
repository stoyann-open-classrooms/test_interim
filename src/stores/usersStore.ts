import { writable } from "svelte/store"

export const users = writable([])

const fetchUsers = async (searchTerm: string) => {
const url = `https://dummyjson.com/users/search?q=${searchTerm}`
const res = fetch(url)
const data = await (await res).json()

  users.set(data.users)
}


// TODO = get searchTerm variable from searchBarComponent

setTimeout(() => fetchUsers('ter'), 2000);
