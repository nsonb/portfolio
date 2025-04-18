export type Friend = {
  id: number;
  name: string;
  image: string;
  balance: number;
};

const FriendItem = (props: {
  friend: Friend;
  updateCurrentFriend: () => void;
}) => {
  const { friend, updateCurrentFriend } = props;
  return (
    <button
      onClick={() => {
        updateCurrentFriend();
      }}
      className="flex items-center gap-4 p-4  cursor-pointer border border-2 border-white hover:border-black"
    >
      <img
        src={friend.image}
        alt={friend.name}
        className="w-16 h-16 rounded-full"
      />
      <div className="flex flex-col gap-2 justify-start items-start">
        <h3 className="text-lg font-semibold">{friend.name}</h3>
        <p className="text-gray-600">
          {friend.balance < 0
            ? `You owe ${friend.name} €${friend.balance * -1}`
            : `${friend.name} owes you €${friend.balance}`}
        </p>
      </div>
    </button>
  );
};

export default FriendItem;
