"use client"

import { signIn } from "next-auth/react";
import { ChangeEvent,type FC,useState } from "react";

export const RegisterForm:FC = () => {
    const [ loading, setLoading ] = useState(false);
    const [ formValues, setFormValues ] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [ error, setError ] = useState("");
    const onSubmit = async(e: React.FormEvent) =>{
        e.preventDefault();
        setLoading(true);
        setFormValues({ name: "", email: "", password: ""});

        try{
            const res = await fetch("/api/register", {
                method: "POST",
                body: JSON.stringify(formValues),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            setLoading(false);
            if(!res.ok){
                setError((await res.json()).message)
                return;
            }
            signIn(undefined, { callbackUrl: "/" })
        }
        catch(error: any) {
            setLoading(false);
            setError(error);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>{
        const { name,value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    }

    
    return (
        
        <form onSubmit={onSubmit}>
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Holy smokes!</strong>
                <span className="block sm:inline">{error}</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                </span>
              </div>
            )}

            <div className="flex flex-col items-center justify-center min-h-screen px-2 py-6 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            register to your account
                        </h1>
                        <div className="space-y-4 md:space-y-6">
                                <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                <input 
                                    type="name"
                                    name="name"
                                    value={formValues.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    className="bg-gray-700 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 placeholder-gray-400 text-white focus:outline-none" />
                                </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formValues.email}
                                    onChange={handleChange}
                                    placeholder="user@mail.com"
                                    className="bg-gray-700 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 placeholder-gray-400 text-white focus:outline-none" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input 
                                type="password"
                                name="password"
                                value={formValues.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                className="bg-gray-700 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 placeholder-gray-400 text-white focus:outline-none" />
                            </div>
                            <button type="submit" className="w-full text-background bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            {loading ? "loading..." : "Register" }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </form>
    );
}