import UserLine from "../molecules/UserLine";

export default function UserList() {
    return (
        <div className="flex flex-col items-baseline gap-4 ">
            <UserLine />
            <UserLine />
            <UserLine />
        </div>
    )
}