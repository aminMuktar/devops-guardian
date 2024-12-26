"use client"
import { signIn } from "next-auth/react";
import { useSearchParams,useRouter } from "next/navigation";
import { ChangeEvent, useState, type FC } from "react";

export const LoginForm:FC =()=>{
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formValue, setFormValue] = useState({
        email: "",
        password: ""
    });
    const [ error, setError ] = useState("");
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
    const onSubmit = async (e: React.FormEvent)=>{
        e.preventDefault();
        try{
            setLoading(true)
            setFormValue({ email: "", password:"" });
            const res = await signIn("credentials", {
                redirect: false,
                email: formValue.email,
                password: formValue.password,
                callbackUrl
            });
            setLoading(false);
            if (!res?.error){
                router.push(callbackUrl);
            }
            else{
                setError("invalid email or password");
            }

        }
        catch(error: any){
            setLoading(false)
            setError(error)
        }
    }
    const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
        const { name, value } = event.target;
        setFormValue({ ...formValue, [name]: value});
    }
    return (
        <>
            <form onSubmit={onSubmit}>
            <div className="flex flex-col items-center justify-center min-h-screen px-2 py-6 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            login to your account
                        </h1>
                        <div className="space-y-4 md:space-y-6">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formValue.email}
                                    onChange={handleChange}
                                    placeholder="user@mail.com"
                                    className="bg-gray-700 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 placeholder-gray-400 text-white focus:outline-none" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input 
                                type="password"
                                name="password"
                                value={formValue.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                className="bg-gray-700 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 placeholder-gray-400 text-white focus:outline-none" />
                            </div>
                            {error && (
                                <div className="bg-zinc-900 bg-opacity-50 backdrop-blur-lg text-red-500 px-4 py-3 rounded relative" role="alert">
                                <span className="block sm:inline">{error}</span>
                                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                                </span>
                            </div>
                            )}
                            <button type="submit" className="w-full text-background bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            {loading ? "loading..." : "Login" }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </>
    );
}