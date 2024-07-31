import Menu from "../organisms/Menu";
import UserMain from "../organisms/UserMain";

export default function UserTemplate() {
    return (
        <div className="flex">
            <Menu />
            <UserMain />
        </div>
    )
}