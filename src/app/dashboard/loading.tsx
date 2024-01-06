import SkeletonCard from "@/components/skeletonCard"
import { Button } from "@/components/ui/button"
import { HiOutlineRefresh } from "react-icons/hi";
import { IoMdAdd } from "react-icons/io";
import { Input } from "@/components/ui/input"
import { BsCartCheck } from "react-icons/bs";
import { FaRegCheckCircle } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import { GrCircleQuestion, GrDocumentDownload } from "react-icons/gr";
import { Separator } from "@/components/ui/separator"
import { PiStudentFill } from "react-icons/pi";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { DarkToggle } from "@/components/darkToggle";

export default function loading() {
     return (
        <div className="max-w-screen-2xl m-auto">
            <div className="mx-4 my-4 space-x-1 flex flex-wrap items-center justify-between">
                <div className="flex items-center">
                    <h1 className="flex-shrink-0" style={{ display: 'flex', alignItems: 'center' }}>
                        Swoosh Spy
                    </h1>
                    <Separator orientation="vertical" className="h-[48px] flex bg-slate-500" style={{ marginLeft: '16px', marginRight: '16px' }} />
                    <h3>Nike Product Tracker</h3>
                </div>
                <div className="flex flex-col items-center">
                    <Alert className="pb-1 mb-0 outline-dashed outline-1 outline-slate-400 lg:block sm:hidden">
                        <PiStudentFill className="w-6 h-6 mt-2" />
                        <AlertTitle className="text-sm font-medium ml-2 mb-0 mt-0">Consider checking my work out below!</AlertTitle>
                        <AlertDescription>
                             <div className="flex items-center justify-start">
                                <Button variant="link" className="p-2" id="linkedIn">My LinkedIn</Button>
                                <Separator orientation="vertical" className="h-[16px] bg-slate-400 flex" />
                                <Button variant="link" className="p-2" id="resume">My Resume</Button>
                                <Separator orientation="vertical" className="h-[16px] bg-slate-400 flex" />
                                <Button variant="link" className="pl-2 pb-2 pr-0" id="github">View on GitHub</Button>
                            </div>
                        </AlertDescription>
                    </Alert>
                </div>
            </div>
            <div className="mx-4 mb-5 mt-4 space-x-4 flex flex-wrap items-center justify-between">
                <div className="flex items-center flex-wrap space-x-2">
                    <Button variant="outline" id="statusFilter">
                        <FaRegCheckCircle className="mr-1" />Status<FaAngleDown className="ml-1" />
                    </Button>
                    <Button variant="outline" id="availFilter">
                        <BsCartCheck className="mr-1" />Availability<FaAngleDown className="ml-1" />
                    </Button>
                    <Button variant="outline" id="platformFilter">
                        <RiComputerLine className="mr-1" />Platform<FaAngleDown className="ml-1" />
                    </Button>
                    <Input id="search"
                        placeholder="Search Products"
                        className="focus:ring-0 xl:w-96 lg:w-64 md:w-48 sm:w-32"
                    />
                </div>
                <div className="flex space-x-2 ml-auto flex-wrap">
                    <Button variant="outline" id="addProducts"><IoMdAdd className="mr-1"/>Add Products</Button>
                    <Button variant="outline" id="refreshProducts" >
                        <HiOutlineRefresh className="mr-1" />Refresh</Button>
                    <Button variant="outline" id="exportCsv">
                        <GrDocumentDownload className="mr-1" />Export CSV</Button>
                    <Button variant="outline" id="help" className="pl-3.5">
                        <GrCircleQuestion className="mr-1" size="16px"/>Help</Button>
                    <DarkToggle />
                </div>
            </div>
            <div>
                <hr className="pb-2 pt-0 mx-4"></hr>
            </div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-6 m-4">
                        {"123456789".split('').map(i => (
                            <SkeletonCard key={i} />
                        ))}
                    </div>
        </div>
    );
}