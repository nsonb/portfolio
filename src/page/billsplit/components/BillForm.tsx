import { useState } from 'react';
import { Friend } from './FriendItem';

const BillForm = (props: {
  friend: Friend;
  updateBill: (friend: Friend, amount: number) => void;
}) => {
  const { friend, updateBill } = props;
  const [billAmount, setBillAmount] = useState(0);
  const [yourAmount, setYourAmount] = useState(0);
  const [youPay, setYouPay] = useState<'you' | 'friend'>('you');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateBill(
      friend,
      (billAmount - yourAmount) * (youPay === 'friend' ? -1 : 1)
    );
    setBillAmount(0);
    setYourAmount(0);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-start items-start p-6 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Split a Bill with {friend.name}
      </h2>

      <div className="mb-4 flex flex-col">
        <label htmlFor="billValue" className="mb-1 text-gray-700">
          Bill Value
        </label>
        <input
          id="billValue"
          type="number"
          placeholder="Enter bill value"
          value={billAmount}
          onChange={(e) => setBillAmount(Number(e.target.value))}
          required
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4 flex flex-col">
        <label htmlFor="yourExpense" className="mb-1 text-gray-700">
          Your Expense
        </label>
        <input
          id="yourExpense"
          type="number"
          placeholder="Enter your expense"
          value={yourAmount}
          onChange={(e) => setYourAmount(Number(e.target.value))}
          required
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4 flex flex-col">
        <label htmlFor="friendExpense" className="mb-1 text-gray-700">
          {friend.name}'s Expense
        </label>
        <div
          id="friendExpense"
          className="p-3 bg-gray-200 rounded border border-gray-300"
        >
          {billAmount - yourAmount}
        </div>
      </div>

      <div className="mb-4 flex flex-col">
        <label htmlFor="splitWith" className="mb-1 text-gray-700">
          Who pays?
        </label>
        <select
          id="splitWith"
          value={youPay}
          onChange={(e) => setYouPay(e.target.value as 'you' | 'friend')}
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="you">You</option>
          <option value="friend">{friend.name}</option>
        </select>
      </div>

      <button
        type="submit"
        className="p-3 rounded border border-2 border-black bg-white text-black cursor-pointer hover:bg-black hover:text-white transition duration-200"
      >
        Split Bill
      </button>
    </form>
  );
};

export default BillForm;
