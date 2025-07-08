async function getUsers(id) {

    const data_URL = "https://dummyjson.com/users"

    if(!id) {
        const res = await fetch(data_URL);
        if (!res.ok) {
            throw new Error ('failed to fetch users')
        }
        const data = await res.json()
        const users = data.users
        return users
    }

    if(id) {
        console.log('fetching individual user')
        const res = await fetch(data_URL);
        if (!res.ok) {
            throw new Error (`failed to fetch user with userID:${id}`)
        }
        const data = await res.json()
        const user =  data.users.find((u) => u.id.toString() === id);
        return user
    }

    return data
}

export {getUsers}