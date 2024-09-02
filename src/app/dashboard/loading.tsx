import SkeletonCard from "@/components/skeletonCard"
import { useState, useEffect } from 'react';
import { getProductData, ProductData } from "@/utils/nike/product";
import CardGrid from '@/components/cardGrid';
import { AddModal } from '@/components/addModal';
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { DarkToggle } from '@/components/darkToggle';
import { HiOutlineRefresh } from "react-icons/hi";
import { BsCartCheck, BsQuestionCircle } from "react-icons/bs";
import { FaRegCheckCircle } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr";
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from "@/components/ui/separator"
import { PiStudentFill } from "react-icons/pi";
import { LuDollarSign } from "react-icons/lu";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { StatusFilterDropdown, PlatformFilterDropdown, AvailabilityFilterDropdown, PriceFilterDropdown } from '@/components/filterDropdown';
import { HelpModal } from '@/components/helpModal';
import Link from 'next/link';
import { SettingsModal } from '@/components/settingsModal';
import { IoMdAdd } from "react-icons/io";

export default function loading() {
     return (
        <div className="max-w-screen-2xl m-auto">
            <div className="fixed top-0 z-10 mt-0 bg-white dark:bg-[#020817]">
            <div className="mx-4 my-4 space-x-1 flex flex-wrap items-center justify-between">
                <div className="flex space-x-4 items-baseline">
                    <Link className="flex items-center justify-center flex-shrink-0 font-extrabold" href="/">
                        <h3>Swoosh Spy</h3>
                    </Link>
                    {/* <div className="hidden md:block">
                    <Button variant="ghost" id="helpButton" className="p-0 mx-4 font-normal text-lg text-slate-400 hover:bg-transparent" asChild>
                        <Link className="text-slate-800" href="/dashboard">
                            Dashboard
                        </Link>
                    </Button>
                    <SettingsModal />
                    </div> */}
                </div>
                <div className="flex flex-col items-center">
                    <Avatar className="h-12 w-12">
                        <AvatarImage src={""} alt={""} />
                        <AvatarFallback>?</AvatarFallback>
                    </Avatar>
                </div>
            </div>
            <div className="mx-4 mb-5 mt-4 space-x-0 2xl:space-x-28 flex flex-wrap items-center justify-between">
                <div className="flex items-center flex-wrap space-x-2 mr-2 2xl:mr-0">
                    <Button variant="outline" className="focus:ring-0 hidden md:flex" id="statusFilter">
                            <FaRegCheckCircle className="mr-1" />Status<FaAngleDown className="ml-1" />
                        </Button>
                    <Button variant="outline" className="focus:ring-0 hidden md:flex" id="availabilityFilter">
                            <BsCartCheck className="mr-1" />Availability<FaAngleDown className="ml-1" />
                        </Button>
                    <Button variant="outline" className="focus:ring-0 hidden md:flex" id="platformFilter">
                            <RiComputerLine className="mr-1" />Platform<FaAngleDown className="ml-1" />
                        </Button>
                    <Button id="priceFilter" variant="outline" className="hidden md:flex">
                        <LuDollarSign className="mr-0.5" />Price<FaAngleDown className="ml-1" />
                    </Button>
                    <Button variant="outline" id="mobileAddButtonSkeleton" className="flex md:hidden"><IoMdAdd className="mr-1"/>Add Products</Button>
                    <Input
                        id="search"
                        placeholder="Search Products"
                        className="focus:ring-0 2xl:w-96 xl:w-64 lg:w-48 w-48"
                        // onChange={(e) => setSearchValue(e.target.value)}
                        // value={searchValue}
                    />
                </div>
                <div className="flex space-x-2 ml-auto flex-wrap">
                    <Button variant="outline" id="addButtonSkeleton" className="hidden md:flex"><IoMdAdd className="mr-1"/>Add Products</Button>
                    <Button variant="outline" id="refreshProducts" className="hidden md:flex">
                        <HiOutlineRefresh className="mr-1.5" />Refresh</Button>
                    <Button variant="outline" id="exportCsv" className="hidden md:flex">
                        <GrDocumentDownload className="mr-1.5" />Export CSV</Button>
                    <SettingsModal></SettingsModal>
                </div>
            </div>
            <div>
                <hr className="pb-0 pt-0 hr-full-width"></hr>
            </div>
            </div>
            <div className="mt-40 grid 2xl:grid-cols-4 w-[92%] md:w-10/12 2xl:w-[97.75%] lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-6 m-4">
                {"123456789".split('').map(i => (
                            <SkeletonCard key={i} />
                        ))}
            </div>
        </div>
    );
}