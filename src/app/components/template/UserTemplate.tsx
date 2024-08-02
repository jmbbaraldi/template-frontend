import UserPageMolHeader from "../molecules/UserPageMolHeader";
import Menu from "../organisms/Menu";
import UserList from "../organisms/UserList";

export default function UserTemplate() {
    return (
        <div className="flex">
            <Menu />
            <div className="w-screen">
                <UserPageMolHeader />
                <UserList />
            </div>
        </div>
    )
}