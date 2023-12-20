import SkeletonCard from "@/components/skeletonCard"
import { Button } from "@/components/ui/button"
import { HiOutlineRefresh } from "react-icons/hi";
import { IoMdAdd } from "react-icons/io";
import { Input } from "@/components/ui/input"

export default function loading() {
     return (
            <div className="mx-auto" style={{ width: '60%', marginLeft: 'auto', marginRight: 'auto' }}>
                <div className="mx-4 my-4 space-x-2 flex justify-end items-center">
                    <h1 className="flex-shrink-0 mr-6 mb-2">Nike Stock Viewer</h1>
                    <Input placeholder="Search Products" className='focus:ring-0'/>
                    <Button variant="outline"><IoMdAdd className="mr-1"/>Add Products</Button>
                    <Button variant="outline"><HiOutlineRefresh className="mr-1"/>Refresh</Button>
                </div>
                <div><hr className="pb-2 pt-0 mx-4"></hr></div>
                <div className="grid grid-cols-3 gap-6 my-6 mx-8">
                        {"123456789".split('').map(i => (
                            <SkeletonCard key={i} />
                        ))}
                    </div>
            </div>
    );
}
        
