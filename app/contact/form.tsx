"use client"
import { useForm } from "react-hook-form";
import type { FC } from "react";
import { toast } from "react-hot-toast";
type FormInput = {
    name: string;
    email: string;
    message: string;
  };
  
export const ContactForm:FC = () =>{
    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
        reset,
      } = useForm<FormInput>();
      async function onSubmit(formData: FormInput) { 
        await fetch('/api/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
    
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        }).then(() => {

            toast.success('Your email message has been sent successfully');
        });
    
        reset();
      }
    return (
        <>
        <form className="ml-auto space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <input type='text' placeholder='Name'
                {...register('name')}
                    className="w-full rounded-md py-3 px-4 bg-transparent border text-gray-200 text-sm focus:outline-none focus:border-blue-500 focus:bg-transparent" />
                <input 
                    type='email' 
                    placeholder='Email'
                    {...register('email')}
                    className="w-full rounded-md py-3 px-4 bg-transparent border text-gray-200 text-sm focus:outline-none focus:border-blue-500 focus:bg-transparent" />
                <textarea 
                    {...register('message')}
                    placeholder='Message'
                    rows={6}
                    className="w-full rounded-md py-3 px-4 bg-transparent border text-gray-200 text-sm focus:outline-none focus:border-blue-500 focus:bg-transparent"></textarea>
                <button type='submit'
                    disabled={isSubmitting}
                    className="text-white bg-gradient-to-r from-orange-700 via-orange-400 to-yellow-500 text-background tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6">{isSubmitting ? "sending...." : "Send"}</button>
            </form>
        </>
    );
}