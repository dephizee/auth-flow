import { useState } from "react";
import { Button } from "../utils/main";

export const Detail = () => {
    const [loading, setLoading] = useState(false);

    const handleGetStarted = async()=>{
        setLoading(true)
        await new Promise(r => setTimeout(r, 2000));
        setLoading(false)
    }
    return ( 
        <div className="flex w-3/4 flex-col py-8 px-2 bg-gray-600 rounded-2xl">
            <div className="font-bold mb-2 self-center">
                Congratulations You have Qualified for a loan up to
            </div>
            <div className="font-extrabold mb-2 self-center">
                load = 5 * sp
            </div>
            

            <div className="flex w-full mt-6 justify-end">
                <Button type="submit" onClick={handleGetStarted} loading={loading}>
                    Approve
                </Button>
            </div>
            
        </div>
     );
}
 
