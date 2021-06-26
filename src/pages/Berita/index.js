import React from 'react'
import { useHistory } from 'react-router'
import { Cari, DDS, DDSLogo, Facebook, Instagram, MapDDS, Polkadot, Whatsapp } from '../../configs/Images'

const mappp = [
    'aa',
    'aa',
    'aa',
    'aa',
    'aa',
    'aa',
    
]
export default function Mitra() {
    let history = useHistory()
    return (
        <div className=" px-5">
            <img src={Polkadot} className="absolute md:top-36 md:-left-32  top-24 -left-20 md:w-48 w-32" style={{ zIndex: -1 }} />
            <p className="text-black text-2xl text-center  md:text-3xl font-bold leading-relaxed  mt-20">
                Berita
            </p>
            <div className="md:py-20 md:px-32 md:mt-0 px-5 flex justify-around  items-center flex-wrap relative">
                <img src={Polkadot} className="absolute md:bottom-10 md:right-20  -bottom-4 -right-2 md:w-48 w-24" style={{ zIndex: -1 }} />
                <div className="flex md:justify-end justify-center md:mt-0 mt-10 w-full items-center mb-10">
                    <div className="relative w-max">
                        <input name="search" className="w-56 h-8 bg-gray-200 rounded-lg p-3 " placeholder="Cari" />
                        <img src={Cari} className="absolute w-4 h-4 right-2 top-2" />
                    </div>
                </div>
                <div className="flex justify-around w-full items-center flex-wrap">
                    {mappp.map((a) => {
                        return (
                            <div onClick={() => history.push('/detail-berita')} className="w-80 h-96 rounded-xl shadow-lg p-2 mb-8" style={{ background: '#FFF8F8' }}>
                                <img src={"https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"} className="h-48 w-full object-cover rounded-lg " />
                                <p className="font-bold leading-relaxed mt-2 text-lg w-11/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <p className="leading-relaxed text-gray-500 mt-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}
