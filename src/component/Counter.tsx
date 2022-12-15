import { useState } from 'react'
import Button from './Button'

interface CountProps {
    count: any;
    setCount: any;
    prevState: any;
}

export default function Counter(props: CountProps) {
    const {count, setCount} = props;
    
    function addClick(){
        setCount((prevState) => prevState + 1)
    }
    
    function minClick(){
        setCount((prevState) => prevState - 1)
    }

    return (
        <div>
            <h1 className='text-3xl font-semibold'>{count}</h1>
            <div className='flex gap-x-2'>
            <Button onClick={minClick}>Min</Button>
            <Button onClick={addClick}>Add</Button>
            {/* <Button onClick={() => {
            addClick();
            addClick();
            addClick();
            }}>+3</Button> */}
            </div>
        </div>
    )
}