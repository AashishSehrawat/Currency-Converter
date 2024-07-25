import { useState } from 'react';
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[url('./assets/Background.avif')] bg-no-repeat bg-cover">
      <div className='flex flex-col justify-center gap-3 backdrop-blur-sm pt-5 bg-white/30 w-6/12 h-4/6 rounded-lg'>
        <form onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}>
          <div className='flex flex-col items-center gap-2 real'>
            <InputBox
              label='From'
              amount={amount}
              onAmountChange={(amount) => setAmount(amount)}
              currencyOption={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
            />
            <button type='button'
              onClick={swap}
              className='absolute translate-x-1/2 translate-y-44 bg-blue-600 text-white p-1 rounded-lg text-lg border-white border-4 hover:bg-blue-800'>
              Swap
            </button>
            <InputBox
              label='To'
              amount={convertedAmount}
              currencyOption={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>
          <div className='flex justify-center w-full pt-2'>
            <button className='bg-blue-600 text-white text-xl p-3 w-11/12 rounded-lg hover:bg-blue-800 transition-'>
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
