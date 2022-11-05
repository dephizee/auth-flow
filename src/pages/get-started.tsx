import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../utils/main";

export const GetStarted = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleGetStarted = async()=>{
        setLoading(true)
        await new Promise(r => setTimeout(r, 2000));
        navigate('/register')
    }
    return ( 
        <div className="flex w-3/4 justify-center items-center">
            <Button onClick={handleGetStarted} loading={loading}>
                Get Started
            </Button>
        </div>
     );
}
 
