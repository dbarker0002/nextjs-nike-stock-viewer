import SkeletonCard from "@/components/skeletonCard"
import { Button } from "@/components/ui/button"
import { HiOutlineRefresh } from "react-icons/hi";
import { IoMdAdd } from "react-icons/io";
import { Input } from "@/components/ui/input"

export default function loading() {
     return (
        <div className="max-w-screen-2xl m-auto">
            <div className="mx-4 my-4 space-x-2 flex flex-wrap justify-end items-center">
                <h1 className="flex-shrink-0 mr-6 mb-2">Nike Stock Viewer</h1>
                <div className="flex-grow">
                <   Input placeholder="Search Products" className="w-full focus:ring-0"  />
                </div>
                <Button variant="outline"><IoMdAdd className="mr-1"/>Add Products</Button>
                    <Button variant="outline"><HiOutlineRefresh className="mr-1"/>Refresh</Button>
            </div>
            <div><hr className="pb-2 pt-0 mx-4"></hr></div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-6 m-4">
                        {"123456789".split('').map(i => (
                            <SkeletonCard key={i} />
                        ))}
                    </div>
        </div>
    );
}