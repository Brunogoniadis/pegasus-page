import { useEffect, useState} from "react";

export const UseBodyScrollLock = () =>{

    const bodyStyle = document.body.style

    const [isLocked, setIsLocked] = useState<boolean>(bodyStyle.overflowY === 'hidden');

    useEffect(() => {
      bodyStyle.overflowY = isLocked ? 'hidden' : 'auto'
    }, [isLocked, bodyStyle])
    
    const toggle =() => setIsLocked(!isLocked)

    return [isLocked, toggle]
}