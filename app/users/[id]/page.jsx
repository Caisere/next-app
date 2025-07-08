import React from "react";
import { getUsers } from "@/libs/apicalls";
import { notFound } from "next/navigation";

async function UserPage({ params }) {
    const { id } = await params;

    // console.log(user)
    
    const user = await getUsers(id)
    console.log(user)
    
    if (!user) {
        notFound();
    }
    
    
    return (
        <div className="grid place-items-center h-screen">
            <div className="space-y-8 border-1 p-10 border-stone-300 rounded-md">
                <h1 className="text-center font-semibold text-4xl">User Details</h1>
                <div className="space-y-3">
                    <h2 className="text-stone-600"><span className="font-semibold text-black">Name:</span> {user.firstName} {user.lastName}</h2>
                    <p className="text-stone-600"><span className="font-semibold text-black">Email:</span> {user.email}</p>
                    <p className="text-stone-600"><span className="font-semibold text-black">Age:</span> {user.age}</p>
                    <p className="text-stone-600"><span className="font-semibold text-black">Company:</span> {user.company.name}</p>
                    <p className="text-stone-600"><span className="font-semibold text-black">Gender:</span> {user.gender}</p>
                    <div className="w-28 h-28 rounded-full border-1 border-stone-300 p-2">
                        <img src={user.image} alt={`This is ${user.firstName} image`} className="object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserPage;
