import {FaHome} from 'react-icons/fa'
import {LuFlower2} from 'react-icons/lu'
import {BsInfoCircle} from 'react-icons/bs'
import Link from 'next/link'

const navMap = {
    home:{
        bg_col:"bg-[#0392ce80]",
        border_col:'border-[#00008b]',
        logo:<FaHome className='text-white' size={"20px"} />,
        url:"/home"
    },
    flower:{
        bg_col:"bg-[#4caf5080]",
        border_col:'border-[#4caf50]',
        logo:<LuFlower2 className='text-white' size={"20px"} />,
        url:"/flower"
    },
    about:{
        bg_col:"bg-[#ff980080]",
        border_col:'border-[#ff9800]',
        logo:<BsInfoCircle className='text-white' size={"20px"} />,
        url:"/about"
    },
}

const Header = ()=>{
    return (
        <div className="h-[88px] bg-slate-50 flex flex-col justify-center">
            <div className="flex border-x-2 border-blue-500 px-9 items-center gap-2">
                <div className='min-w-fit'>
                    <img src="/flowerLogo.png" alt='logo' className='h-20'/>
                </div>
                <div className='grow'>
                    <ul className='flex gap-5 justify-center w-full'>
                        {
                            Object.keys(navMap).map((key,i)=>{
                                const _obj =navMap[key] 
                                return (
                                    <li key={i}>
                                        <Link href={_obj.url}>
                                            <div className='flex flex-col items-center gap-1 cursor-pointer'>
                                                <div className={`
                                                    flex justify-center items-center
                                                    border-[6px] w-[50px] h-[50px] rounded-full
                                                    ${_obj.bg_col} ${_obj.border_col}`}
                                                    >
                                                    {_obj.logo}
                                                </div>
                                                <span className='uppercase text-xs'>{key}</span>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;