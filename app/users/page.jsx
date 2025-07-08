import React from 'react'
import { getUsers } from "@/libs/apicalls";
import Link from "next/link";

const UsersPage = async () => {
    const users = await getUsers();

    return (
        <div>
            <h1 className='text-black font-semibold'>Click on ech user to know more about them</h1>
            {users.map((user, i) => (
                <ul key={user.id}>
                    <li>
                        <Link href={`/users/${user.id}`} prefetch={true}>
                            <p>
                                <span className='mx-2'>{i + 1}:</span>
                                {user.firstName} {user.lastName}
                            </p>
                        </Link>
                    </li>
                </ul>
            ))}
        </div>
    );
}

export default UsersPage