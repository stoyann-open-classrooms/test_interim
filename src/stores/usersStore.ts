import { writable } from "svelte/store"

export const users = writable([])

const fetchUsers = async () => {
const url = 'https://dummyjson.com/users'
const res = fetch(url)
const data = await (await res).json()

  users.set(data.users)
}


fetchUsers()