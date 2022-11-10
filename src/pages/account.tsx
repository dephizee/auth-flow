import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { Button } from "../utils/main";
import  { arrayMoveImmutable } from 'array-move';
import { randomInt } from "./user-detail";


const SortableItem :any = SortableElement(({value}:{value:any}) => <li className="px-4 py-4  my-2 border-2 cursor-pointer">{value}</li>);

const SortableList:any = SortableContainer(({items}:any) => {
    return (
      <ul>
        {items.map((value:any, index:any) => (
          <SortableItem key={`item-${value}`} index={index} value={value} />
        ))}
      </ul>
    );
  });
  

export const Account = () => {
    const [loading, setLoading] = useState(false);
    const [accounts, setAccounts] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']);
    const onSortEnd :any = ({oldIndex, newIndex}:any) => {
        setAccounts(oldItems=>arrayMoveImmutable(oldItems, oldIndex, newIndex))
      };
    const navigate = useNavigate();
    useEffect(() => {
        const len = randomInt(1, 10)
        const arr:any = [];
        for(let i = 0; i < len; i++) {
            arr.push(`${randomInt(9999999, 10000000)}`);
        }
        setAccounts(arr)
        console.log('len', 'arry',len, arr )
    }, []);
    return ( 
        <div className="flex w-3/4 flex-col py-8 px-2 bg-gray-600 rounded-2xl">
            <div className="font-bold mb-2 self-center">
                <h1>Accounts</h1>
                
            </div>
            <div className="font-extrabold mb-2 self-center">
                <SortableList items={accounts} onSortEnd={onSortEnd} />
            </div>
            

            <form action="/success">
                <div className="flex w-full mt-6 justify-end">
                    <Button type="submit" onClick={()=>{}} loading={loading}>
                        Save
                    </Button>
                </div>
            </form>
            
        </div>
     );
}
 
