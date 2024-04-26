import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})

    useEffect(() => {

        fetch(`https://open.er-api.com/v6/latest/usd`)
            .then(() => res.json())
            .then((res) => setData(res[currency]))
        // console.log(data);

    }, [currency])

    return data;
}

export default useCurrencyInfo;