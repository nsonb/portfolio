import { useState } from 'react';
import FriendItem, { Friend } from './components/FriendItem';
import BillForm from './components/BillForm';
import AddFriendForm from './components/AddFriendForm';

const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

const BillSplit = () => {
  const [friendList, setFriendList] = useState(initialFriends);
  const [currentFriend, setCurrentFriend] = useState<Friend | null>(null);
  const renderFriendList = friendList.map((f) => (
    <FriendItem
      friend={f}
      key={f.id}
      updateCurrentFriend={() => {
        setCurrentFriend(f);
      }}
    />
  ));

  const updateBill = (friend: Friend, amount: number) => {
    setFriendList((fl) =>
      fl.map((f) => {
        if (f.id === friend.id) return { ...f, balance: f.balance + amount };
        return f;
      })
    );
  };

  return (
    <div className="w-full">
      <h1 className="border border-4 border-black w-fit p-4 ml-[20px]">
        Bill Split
      </h1>
      <div className="flex flex-row gap-8 justify-center items-start">
        <div className="flex flex-col gap-4 border border-2 border-black p-4">
          {renderFriendList}{' '}
          <AddFriendForm
            addFriend={(f: Friend) => {
              setFriendList((fl) => [...fl, f]);
            }}
          />
        </div>
        {currentFriend && (
          <BillForm friend={currentFriend} updateBill={updateBill} />
        )}
      </div>
    </div>
  );
};

export default BillSplit;
