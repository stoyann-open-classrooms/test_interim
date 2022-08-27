import { writable } from "svelte/store"

// export const users = writable([])

// const fetchUsers = async (searchTerm: string) => {

// const url = `https://dummyjson.com/users/search?q=${searchTerm}`
// const res = fetch(url)
// const data = await (await res).json()

//   users.set(data.users)
// }


// // TODO = get searchTerm variable from searchBarComponent

//  setTimeout(() => fetchUsers(''), 2000);


// =========================================


function customUserStore(){
    const users = writable([]);
    
const fetchUsers = async (searchTerm: string) => {

    const url = `https://dummyjson.com/users/search?q=${searchTerm}`
    const res = fetch(url)
    const data = await (await res).json()
    
      users.set(data.users)
    }
    fetchUsers('')
    
    return {
        subscribe : users.subscribe,
        search : (searchTerm: string) => {
 setTimeout(() => fetchUsers(searchTerm), 2000);
                    
        }
    }
}

export default customUserStore()