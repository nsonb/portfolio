import { Friend } from './FriendItem';
import { useState } from 'react';

const AddFriendForm = (props: { addFriend: (f: Friend) => void }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.addFriend({
      id: Math.floor(Math.random() * 1000000),
      name,
      image,
      balance: 0,
    });
    setName('');
    setImage('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row gap-4 w-fit mx-auto p-4 h-30 border border-2 border-white"
    >
      <div className="flex flex-col justify-between">
        <input
          type="text"
          placeholder="Friend's Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mb-2 p-2 rounded border border-gray-300"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
          className="p-2 rounded border border-gray-300"
        />
      </div>
      <button
        type="submit"
        className="p-2 rounded border-none bg-black text-white cursor-pointer h-full"
      >
        Add Friend
      </button>
    </form>
  );
};

export default AddFriendForm;
