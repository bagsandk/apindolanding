import React from 'react'
import { Cari, DDS, Facebook, Instagram, MapDDS, Polkadot, Whatsapp } from '../../configs/Images'

const mappp = [
    'aa',
    'aa',
    'aa',
    'aa',
    'aa',
    'aa',
    'aa',
    'aa',
    'aa',
    'aa',
    'aa',
    'aa',
]
export default function DetailUmkm() {
    return (
        <div className=" px-5">
            <img src={Polkadot} className="absolute md:top-36 md:-left-32  top-24 -left-20 md:w-48 w-32" style={{ zIndex: -1 }} />
            <div className="md:py-20 md:px-32 md:mt-0 mt-20 px-5 flex justify-between  items-start flex-wrap">
                <div className="w-full mb-10 md:w-6/12 flex flex-wrap md:justify-start justify-center">
                    <img src={DDS} className=" w-10/12 rounded-lg" />
                </div>
                <div className="w-full md:w-6/12">
                    <p className="text-black text-2xl md:text-right text-center  md:text-3xl font-bold leading-relaxed ">
                        PT DARMA DIGITAL SOLUTION
                    </p>
                    <p className="md:text-xl text-sm  md:text-right text-center text-gray-600  mt-4 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae mi convallis convallis proin egestas. Id in sed faucibus pellentesque massa pellentesque ipsum. Vitae amet feugiat ut lacus curabitur lacus vitae. Faucibus sit tristique aenean at sagittis id vel imperdiet massa. Vitae facilisis a non sit sem tempus, varius nisl.</p>
                    <div className={"flex flex-row-reverse items-center mt-8"}>
                        <img src={Facebook} className={"w-11 h-11  mx-2"} />
                        <img src={Whatsapp} className={"w-14 h-14  mx-2"} />
                        <img src={Instagram} className={"w-11 h-11 mx-2"} />
                    </div>
                </div>
            </div>
            <div className="md:py-20 md:px-32 md:mt-0 mt-20 px-5 flex justify-around  items-center flex-wrap">
                <div className="w-full md:w-6/12 px-9">
                    <p className="text-black text-2xl md:text-left text-center  md:text-3xl font-bold leading-relaxed ">
                        Alamat
                    </p>
                    <p className="md:text-xl text-sm  md:text-left md:w-5/6 text-center text-gray-600  mt-4 mb-6">Gedung Darmapala. Jl. Zaenal Abidin Pagar Alam No. 61, LK.6, Kel. Segala Mider, Kec. Tanjung Karang Barat, Kotamadya Bandar Lampung, Provinsi Lampung.
                        v</p>
                </div>
                <div className="w-full mb-10 md:w-6/12 flex flex-wrap justify-center mt-10">
                    <div className="rounded-lg relative md:mt-0 mt-10">
                        <img src={Polkadot} className="absolute md:-top-20 md:-right-20  -top-8 -right-8 md:w-48 w-32" style={{ zIndex: -1 }} />
                        <img src={Polkadot} className="absolute md:-bottom-20 md:-left-20  -bottom-8 -left-8 md:w-48 w-32" style={{ zIndex: -1 }} />

                        <img src={MapDDS} className="w-full object-cover rounded-lg" />
                    </div>
                </div>
            </div>
            <div className="md:py-20 md:px-32 md:mt-0 mt-20 px-5 flex justify-around  items-center flex-wrap relative">
                <img src={Polkadot} className="absolute md:top-36 md:-left-32  top-24 -left-20 md:w-48 w-32" style={{ zIndex: -1 }} />
                <img src={Polkadot} className="absolute md:bottom-10 md:right-20  -bottom-4 -right-2 md:w-48 w-32" style={{ zIndex: -1 }} />
                <div className="flex justify-between w-full items-center">
                    <p className="text-black text-2xl  md:text-3xl font-bold leading-relaxed ">
                        Katalog Produk
                    </p>
                    <div className="relative w-max">
                        <input name="search" className="w-56 h-8 bg-gray-200 rounded-lg p-3 " placeholder="Cari" />
                        <img src={Cari} className="absolute w-4 h-4 right-2 top-2" />
                    </div>
                </div>
                <div className="flex justify-around w-full items-center flex-wrap">
                    {mappp.map((a) => {
                        return (
                            <div className="md:w-64 w-full wd:h-80 h-auto p-2">
                                <div className="w-auto md:w-64 wd:h-80 h-auto  shadow-lg p-2 rounded-lg bg-white">
                                    <img src={"https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"} className="rounded-lg" />
                                    <p className="mt-3">
                                        Nama Produk
                                    </p>
                                    <p className="font-bold">
                                        Rp. 40.000.000,00
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
