
import { useState } from 'react';



const BgLoader = (props) => {
    const [isLoading, setIsLoading] = useState(true);

    if (isLoading) {
        return <span style={{background: "red"}}>Loading...</span>;

      } else setIsLoading(false);
   
};

export default BgLoader;
