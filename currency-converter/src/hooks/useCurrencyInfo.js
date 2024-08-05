import { useEffect, useState } from "react";

function userCurrencyInfo(currency){
    const [ data, setData] = useState({});
    useEffect(()=> {
        // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        
        .then((res)=> res.json())
        .then((res)=> setData(res[currency]))
    }, [currency])
    return data;
}

export default userCurrencyInfo;

