import UserEmail from "../atoms/UserEmail";
import UserImage from "../atoms/UserImage";
import UserName from "../atoms/UserName";

export default function UserLine() {
    return (
        <div className="flex items-center bg-zinc-800 p-4 rounded-md gap-5 w-full">
                <UserImage />
            <div className="flex flex-col">
                <UserName />
                <UserEmail />
            </div>
        </div>
    )
}