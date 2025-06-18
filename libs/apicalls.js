async function getUsers() {
    const res = await fetch("https://dummyjson.com/users");
    if (!res.ok) {
        throw new Error ('failed to fetch users')
    }
    const data = await res.json()
    return data
}

export {getUsers}