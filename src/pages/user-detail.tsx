import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../utils/main";

export const randomInt = (min:number, max:number) =>{
    return (Math.floor(Math.random() * max) + min);
}

const formatter = new Intl.NumberFormat();
  

export const Detail = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    
    const anb = randomInt(1, 1000);
    const amt = randomInt(1, 100);
    const sp = randomInt(1, 100000000);
    const ol = randomInt(1, 100000);
    const salaryPaidRecently = Boolean(Math.round(Math.random()));//3 month

    let outcome = "green";


    if(anb < (sp*0.15) && amt < 15){
        outcome = "red";
    }
    if(anb > (sp*0.15) && anb < (sp*0.30) && amt > 15 && amt < 30 && salaryPaidRecently && ol <= 1){
        outcome = "amber";
    }

    if(anb > (sp*0.30) && amt > 30 && salaryPaidRecently && ol <= 1){
        outcome = "green";
    }

    const handleGetStarted = async()=>{
        setLoading(true)
        await new Promise(r => setTimeout(r, 2000));
        // setLoading(false)
        navigate('/face-capture')
    }
    return ( 
        <div className="flex w-3/4 flex-col py-8 px-2 bg-gray-600 rounded-2xl">
            <div className="font-bold mb-2 self-center">
                {(outcome=="invalid") && "Invalid"}
                {(outcome=="red") && "You do not qualify for a loan"}
                {(outcome=="amber") && "You just fall short of the ability to get a loan"}
                {(outcome=="green") && "Congratulations You have Qualified for a loan up to"}
            </div>
            <div className="font-extrabold mb-2 self-center">
                Max loan = {formatter.format(5 * sp)}
            </div>
            

            {(outcome=="green") &&  <div className="flex w-full mt-6 justify-end">
                <Button type="submit" onClick={handleGetStarted} loading={loading}>
                    Approve
                </Button>
            </div>}
            
        </div>
     );
}
 
