import React from 'react'
import { Ary, Cari, DDS, DDSLogo, Facebook, Instagram, MapDDS, Polkadot, Whatsapp } from '../../configs/Images'

const mappp = [
    'aa',
    'aa',
    'aa',
]
export default function Direksi() {
    return (
        <div className=" px-5">
            <p className="text-black text-2xl text-center  md:text-3xl font-bold leading-relaxed  mt-20">
                Direksi DPP APINDO LAMPUNG
            </p>

            <div className="md:py-20 md:px-32 md:mt-0 px-5 flex justify-around  items-center flex-wrap relative">

                <div className="flex justify-around w-full items-center flex-wrap">
                    {mappp.map((a) => {
                        return (
                            <div className="md:w-80 w-32  h-auto p-2 justify-center flex flex-col">
                                <div className="w-auto md:w-48 h-auto   mx-auto from-blue-600 to-blue-300 rounded-lg bg-gradient-to-b">
                                    <img src={Ary} />
                                </div>
                                <p className="text-black text-md text-center  md:text-lg font-bold leading-relaxed mt-2">
                                    Ary Meizari Alfian, MBA
                                </p>
                                <p className="text-black text-sm text-center  md:text-md leading-relaxed mt-2">
                                    Ketua DPP APINDO LAMPUNG
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}
