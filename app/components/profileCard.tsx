interface ProfileCardProps {
    name: string; // Optional name prop
    id: string; // Optional title prop
    imageUrl: string; // Optional image URL prop
    contact: string; //Optional description prop
}

export default function ProfileCard({
    name,
    id,
    imageUrl,
    contact,
}: ProfileCardProps) {
    return (
        <div className=" col-span-1 bg-white text-2xl  text-black shadow rounded-md m-2">
            <div className="p-2 md:flex grid grid-cols-4 md:flex-col justify-center"> {/* Added justify-center */}
                <div className="mx-auto col-span-1"><img src={imageUrl} className="h-[150px] md:h-[180px] max-w-fit" /></div>
                <div className="mt-2 col-span-3 flex flex-col items-center justify-center">
                    <div className="text-2xl text-orange-500 font-bold">{id}</div>
                    <div className="text-lg">{name}</div>
                    <div className="text-[16px] mb-4">{contact}</div>
                </div>
            </div>
        </div>
    );
}
