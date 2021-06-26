import React from 'react'
import { Ary, Cari, DDS, DDSLogo, Email, Facebook, Instagram, MapDDS, Polkadot, Telepon, Whatsapp } from '../../configs/Images'

const mappp = [
    { text: 'dpp.apindo.lampung@gmail.com', icon: Email },
    { text: '+62 822 4098 8888 / +62 815 4098 8888 ', icon: Telepon },
    { text: 'dpp.apindo.lampung@gmail.com', icon: Email },
    { text: 'dpp.apindo.lampung@gmail.com', icon: Email },
]
export default function Direksi() {
    return (
        <div className=" px-5">
            <p className="text-black text-2xl text-center  md:text-3xl font-bold leading-relaxed  mt-20">
                Kontak
            </p>

            <div className="md:py-20 md:px-32 md:mt-0 px-5 flex justify-around  items-center flex-wrap relative">

                <div className="flex justify-around w-full items-center flex-wrap">
                    {mappp.map((a) => {
                        return (
                            <div className="md:w-6/12 w-full  h-auto p-2 justify-center flex flex-col">
                                <div className="m-4 md:mx-10 mx-2 p-4 items-center flex shadow-xl rounded-xl">
                                    <img src={a.icon} className="object-contain h-6 w-6  mr-5"/>
                                    <p className="text-black text-md text-center font-bold leading-relaxed ">
                                        {a.text}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}
