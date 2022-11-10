
import { Button } from "../utils/main";
  

export const Term = () => {
    
    return ( 
        <div className="flex w-3/4 flex-col py-8 px-2 bg-gray-600 rounded-2xl">
            <div className="font-bold mb-2 self-center">
                <h1>Terms and Conditions</h1>
                
            </div>
            <div className="font-extrabold mb-2 self-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum ducimus voluptas animi quis! Pariatur, hic expedita. Accusamus doloremque quae animi laboriosam optio qui, expedita totam fugit, facere harum quasi tenetur.
            </div>
            

            <form action="/account">
                <div className="flex w-full mt-6 justify-end">
                    <label htmlFor="">Agree to terms?</label>
                    <input className="h-6 w-6 mx-4 my-auto" type={'checkbox'} required />
                    <Button type="submit" onClick={()=>{}} loading={false}>
                        Agree
                    </Button>
                </div>
            </form>
            
        </div>
     );
}
 
