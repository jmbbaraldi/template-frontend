import HomeButton from "../molecules/HomeButton";
import UserButton from "../molecules/UserButton";

export default function Menu() {
    return (
        <aside className="w-72 bg-zinc-800 h-screen">
            <nav className="flex flex-col">
                <HomeButton />
                <UserButton />
            </nav>
        </aside>
    )
}