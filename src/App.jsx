import { useState } from "react";
import { inputBox } from "./components";
import useCurrencyInfo from "./hooks/CustomCurrency";

function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setto] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from)
    return <></>;
}

export default App;
