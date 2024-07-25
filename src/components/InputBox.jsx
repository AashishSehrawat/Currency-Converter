import React from 'react';
import { useId } from 'react';

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) => {
  const amountInputId = useId();

  return (
    <div className='flex justify-around w-11/12 h-48 bg-white rounded-lg'>
      <div className='flex flex-col justify-around'>
        <label htmlFor={amountInputId} className='text-black/60 text-lg'>
          {label}
        </label>
        <input
          id={amountInputId}
          type="number"
          className='border-b outline-none shadow-md p-2'
          placeholder='Amount'
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className='flex flex-col justify-around'>
        <label className='text-black/60 text-lg'>
          Currency Type
        </label>
        <select
          className='bg-slate-100 outline-none p-1 rounded-lg text-lg text-center cursor-pointer'
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOption.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;