import Link from "next/link";
import HomeIcon from "../atoms/HomeIcon";
import HomeText from "../atoms/HomeText";

export default function HomeButton() {
    return (
            <Link href="/" className="flex gap-3 px-4 py-2 items-baseline hover:bg-black">
                <HomeIcon />
                <HomeText />
            </Link>
    )
}