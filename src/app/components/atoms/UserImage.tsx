import Image from "next/image";

export default function UserImage() {
    return (
        <div>
            <Image
            src="https://picsum.photos/80" 
            width={80} 
            height={80} 
            className="rounded-full" 
            alt="Avatar" />
        </div>
    )
}