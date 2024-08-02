import UserIcon from "../atoms/UserIcon";
import UserPageSubTitle from "../atoms/UserPageSubTitle";
import UserPageTitle from "../atoms/UserPageTitle";

export default function UserPageMolHeader() {
    return(
        <div className="flex gap-2 p-5 w-max items-center">
            <UserIcon size={50}/>
            <div className="flex flex-col">
                <UserPageTitle />
                <UserPageSubTitle />
            </div>
        </div>
    )

}