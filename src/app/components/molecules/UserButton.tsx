import Link from "next/link";
import UserIcon from "../atoms/UserIcon";
import UserText from "../atoms/UserText";

export default function HomeButton() {
    return (
            <Link href="/users" className="flex gap-3 px-4 py-2 items-baseline hover:bg-black">
                <UserIcon size={16}/>
                <UserText />
            </Link>
    )
}