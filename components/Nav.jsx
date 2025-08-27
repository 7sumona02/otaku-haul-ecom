import Link from 'next/link'

const Nav = () => {
  return (
    <div className='sticky inset-x-0 top-0 z-10 w-[60%] mx-auto bg-white/40 backdrop-blur-lg transition-all rounded-lg py-3 px-6 translate-4'>
        <div className='flex justify-between items-center text-black'>
            <Link href='/'><div className='text-lg font-semibold tracking-tighter cursor-pointer'>Otaku Haul</div></Link>
            <div className='flex items-center gap-6 font-medium tracking-tight'>
                <Link href='/shop'><div className='cursor-pointer'>Shop</div></Link>
                <Link href='/contact'><div className='cursor-pointer'>Contact</div></Link>
            </div>
        </div>
    </div>
  )
}

export default Nav