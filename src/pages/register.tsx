import { useState } from "react";
import { Button } from "../utils/main";

export const Register = () => {
    const [loading, setLoading] = useState(false);
    const handleSubmit: any = async (e:any)=>{
        e.preventDefault();
        setLoading(true)
        await new Promise(r => setTimeout(r, 2000));
        e?.target?.submit?.()
    }
    return ( 
        <div className="flex w-3/4 lg:w-96 justify-center items-center py-8 px-1 bg-gray-600 rounded-2xl">
            <form action="/detail" onSubmit={handleSubmit} className="flex flex-col w-full px-1">
                <div className="flex flex-col w-full">
                    <span className="font-bold">First Name</span>
                    <input name="first_name" required className="w-full px-1 h-10 rounded-lg"/>
                </div>

                <div className="flex flex-col w-full">
                    <span className="font-bold">Last Name</span>
                    <input name="last_name" required className="w-full px-1 h-10 rounded-lg"/>
                </div>

                <div className="flex flex-col w-full">
                    <span className="font-bold">Email</span>
                    <input name="email" type={'email'} required className="w-full px-1 h-10 rounded-lg"/>
                </div>


                <div className="flex flex-col w-full">
                    <span className="font-bold">BVN</span>
                    <input name="bvn" required className="w-full px-1 h-10 rounded-lg"/>
                </div>

                <div className="flex flex-col w-full">
                    <span className="font-bold">Amount</span>
                    <input name="amount" type={'number'} required className="w-full px-1 h-10 rounded-lg"/>
                </div>

                <div className="flex w-full justify-end">
                    <Button type="submit" onClick={()=>{}} loading={loading}>
                        Send
                    </Button>
                </div>
            </form>
        </div>
     );
}
 
