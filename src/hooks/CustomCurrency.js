import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [deta, setDeta] = useState({}); //if deta fetch is failed then it will stop the website to crash
    useEffect(() => {
        fetch(
            `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        )
            .then((res) => res.json())
            .then((res) => setDeta(res[currency]));
    }, [currency]);
    console.log(deta)
    return deta
}

export default useCurrencyInfo;