import React from "react";
import { getUsers } from "@/libs/apicalls";
import { notFound } from "next/navigation";

async function UserPage({ params }) {
    const { id } = params;

    try {
        const userData = await getUsers();
        const user = userData.users.find((u) => u.id.toString() === id);

        if (!user) {
            notFound();
        }

        return (
            <div>
                <h1>User Details</h1>
                <div>
                    <h2>{user.firstName} {user.lastName}</h2>
                    <p>Email: {user.email}</p>
                    <p>Age: {user.age}</p>
                    <p>Company: {user.company.name}</p>
                </div>
            </div>
        );
    } catch (error) {
        console.error("Error fetching user:", error);
        notFound();
    }
}

export default UserPage;
