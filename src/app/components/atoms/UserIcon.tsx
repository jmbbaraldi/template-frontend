import { FaRegUser } from "react-icons/fa6";

export interface UserIconProps {
    size: number
}

export default function UserIcon(props: UserIconProps) {
    return (
        <FaRegUser size={props.size}/>
    )
}