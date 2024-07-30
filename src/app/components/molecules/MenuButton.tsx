import Link from "next/link";
import HomeIcon from "../atoms/HomeIcon";
import Text from "../atoms/Text";

export default function MenuButton() {
    return (
            <Link href="/" className="flex gap-3 px-4 py-2 items-baseline hover:bg-black">
                <HomeIcon />
                <Text />
            </Link>
    )
}