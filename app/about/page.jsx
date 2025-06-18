import React from "react";
import { getUsers } from "@/libs/apicalls";
import Link from "next/link";

async function AboutPage() {
    const user = await getUsers();
    const users = user.users;
    console.log(users);

    return (
        <div>
            <h1>About Us</h1>
            <p>A FrontEnd Engineer in Making</p>
            <br />
            {users.map((user) => (
                <ul key={user.id}>
                    <li>
                        <Link href={`/about/${user.id}`} prefetch={true}>
                            <p>
                                {user.firstName} {user.lastName}
                            </p>
                        </Link>
                    </li>
                </ul>
            ))}
        </div>
    );
}

export default AboutPage;
