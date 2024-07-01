import Link from "next/link";
const Page = () => {
    return (
        <div className="grid grid-cols-2 gap-2 py-2">
            <Link href={'/chat'} >
            <div className="w-full h-96 rounded-xl bg-gray-100 flex flex-col justify-center items-center p-4">
                <h2 className="text-2xl font-bold mb-2">Research Law</h2>
                <p className="text-gray-700">Description for card 1.</p>
            </div>
            </Link>
            <div className="w-full h-96 rounded-xl bg-gray-100 flex flex-col justify-center items-center p-4">
                <h2 className="text-2xl font-bold mb-2">Draft Documents</h2>
                <p className="text-gray-700">Description for card 2.</p>
            </div>
            <div className="w-full h-96 rounded-xl bg-gray-100 flex flex-col justify-center items-center p-4">
                <h2 className="text-2xl font-bold mb-2">Get Advicee</h2>
                <p className="text-gray-700">Description for card 3.</p>
            </div>
            <div className="w-full h-96 rounded-xl bg-gray-100 flex flex-col justify-center items-center p-4">
                <h2 className="text-2xl font-bold mb-2">Hire A Lawyer</h2>
                <p className="text-gray-700">Description for card 4.</p>
            </div>
        </div>
    );
}

export default Page;
