import { LoginForm } from "./form";


export default function Login(){
    return (
        <section className="min-h-screen">
            <div className="container mx-auto py-2 h-full flex justify-center items-center">
                <div className="md:w-8/12 lg:w-5/12 px-2 py-10">
                    <LoginForm />
                </div>
            </div>
        </section>
    );
}