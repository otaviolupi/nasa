import Image from "next/image"
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // opcional: define como variável CSS
})

interface PageStructureProps {
    children: any
}
export default function PageStructure(props: PageStructureProps) {
    return (
        <div className={`min-h-[100svh] flex flex-col ${inter.className}`}>
            <header className="bg-black py-3 flex justify-center items-center">
                <Image src="/nasa-logo.svg" alt="Logo Nasa" width="60" height="60" />
            </header>
            <div className="flex-1">
                {props.children}
            </div>
            <footer className="bg-black py-6 flex flex-col">
                <div className="md:w-[700px] 2xl:w-[1400px] mx-auto my-0 flex flex-col gap-3">
                    <Image src="/nasa-logo.svg" alt="Logo Nasa" width="60" height="60" />
                    <span className="text-2xl font-bold text-white block w-[352px]">National Aeronautics and Space Administration</span>
                    <span className="text-sm text-[#b9b9bb] w-[352px]">NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery.</span>
                </div>
            </footer>
        </div>
    )
}