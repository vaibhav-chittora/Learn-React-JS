import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})

    useEffect(() => {


        // https://open.er-api.com/v6/latest/usd

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
        // console.log(data);

    }, [currency])

    return data;
}

export default useCurrencyInfo;