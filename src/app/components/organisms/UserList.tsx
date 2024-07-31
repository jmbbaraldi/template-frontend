import UserLine from "../molecules/UserLine";

export default function UserList() {
    return (
        <div className="flex flex-col items-baseline gap-5 cursor-pointer">
            <UserLine />
            <UserLine />
            <UserLine />
        </div>
    )
}