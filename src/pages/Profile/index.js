import React from 'react'
import { Apindo, Cari, DDS, Facebook, Instagram, MapDDS, Polkadot, Whatsapp } from '../../configs/Images'

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
export default function Profile() {
    return (
        <div className=" px-5">

            <div className="md:py-20 md:px-32 md:mt-0 mt-20 px-5 flex justify-around  items-center flex-wrap">
                <div className="w-full md:w-6/12 px-9">
                    <p className="text-black text-2xl md:text-left text-center  md:text-3xl font-bold leading-relaxed ">
                        Profil
                    </p>
                    <p className="md:text-xl text-sm  md:text-left md:w-11/12 text-center text-gray-600  mt-4 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis, cursus sit volutpat bibendum. Mi molestie ridiculus fusce et habitant orci. Pulvinar euismod lobortis nunc quisque dis elementum. Ac ut et at interdum. Enim est purus, dui pretium lectus est ipsum, elementum sed. Turpis ac at volutpat lectus elit commodo, donec euismod egestas. Tortor sed vulputate dictum volutpat amet bibendum duis vitae facilisis. Montes, ultricies tellus gravida ultricies sed sit eu. Quam ultrices sit nec, dictum eget lacus arcu. Tincidunt tempus mollis risus mattis a. Quis porta et sed aliquet ultrices sed. Tristique scelerisque tempus, massa orci convallis tristique a. Amet, ultricies pharetra id cras felis pretium sed pellentesque.</p>
                </div>
                <div className="w-full mb-10 md:w-6/12 flex flex-wrap justify-center mt-10">
                    <div className="w-8/12 p-4 h-auto rounded-lg relative md:mt-0 mt-10 bg-white shadow-xl">
                        <img src={Polkadot} className="absolute md:-top-20 md:-left-20  -top-8 -left-8 md:w-48 w-32" style={{ zIndex: -1 }} />
                        <img src={Polkadot} className="absolute md:-bottom-20 md:-right-20  -bottom-8 -right-8 md:w-48 w-32" style={{ zIndex: -1 }} />
                        <img src={Apindo} className="rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    )
}
