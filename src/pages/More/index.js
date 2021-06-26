import React from 'react'
import Button from '../../components/atom/Button'
import { Ary, Polkadot } from '../../configs/Images'

export default function More() {
    return (
        <div className="md:px-24 px-5">
            <div className="box-border mt-16  p-7 flex flex-wrap md:flex-nowrap">
                <div className="w-10/12 p-2 mb-16 md:mb-2">
                    <p className="md:text-4xl w-full text-2xl md:w-7/12  font-bold text leading-relaxed">Layanan DPP<span className="text-blue-500">APINDO </span>LAMPUNG UMKM</p>
                    <p className="md:text-xl text-sm text-gray-600 md:w-7/12 mt-4 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae mi convallis convallis proin egestas. Id in sed faucibus pellentesque massa pellentesque ipsum. Vitae amet feugiat ut lacus curabitur lacus vitae. Faucibus sit tristique aenean at sagittis id vel imperdiet massa. Vitae facilisis a non sit sem tempus, varius nisl.</p>
                </div>
                <div className="p-2 justify-end w-full md:w-max flex">
                    {/* pak ari */}
                    <div className="w-64 h-64 bg-gradient-to-b items-center rounded-full from-blue-700 to-blue-400 relative">
                        <img src={Polkadot} className="absolute md:-top-15 md:-left-15  -top-8 -left-8 md:w-32 w-32" style={{ zIndex: -1 }} />
                        <img src={Ary} className="absolute bottom-12" />
                        <p style={{ left: -12 }} className="absolute bottom-0 mx-auto bg-gray-700 p-3 rounded-full text-white  text-center w-max">H. ARY MEIZARY ALFIAN, SE., MBA</p>
                        <p className="text-base w-max text-black left-3 mt-1 absolute -bottom-6 ">KETUA DPP APINDO LAMPUNG.</p>
                    </div>

                </div>
            </div>
        </div>

    )
}
