import React from 'react'
import { Cari, DDS, DDSLogo, Facebook, Instagram, MapDDS, Polkadot, Whatsapp } from '../../configs/Images'

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
    'aa',
    'aa',
    'aa',
]
export default function DetailBerita() {
    return (
        <div className="md:px-24 px-5">
            <img src={Polkadot} className="absolute md:top-36 md:-left-32  top-24 -left-20 md:w-48 w-32" style={{ zIndex: -1 }} />
            <div className="w-full border-b-4">
                <img src="https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" className="w-full h-96 rounded-xl object-cover" />
                <p className="md:text-4xl text-xl font-bold mt-4 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor viverra molestie ullamcorper aliquam</p>
                <p className="md:text-xl text-md text-gray-600  mt-4 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae mi convallis convallis proin egestas. Id in sed faucibus pellentesque massa pellentesque ipsum. Vitae amet feugiat ut lacus curabitur lacus vitae. Faucibus sit tristique aenean at sagittis id vel imperdiet massa. Vitae facilisis a non sit sem tempus, varius nisl.</p>
                <p className="md:text-xl text-md text-gray-600  mt-4 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae mi convallis convallis proin egestas. Id in sed faucibus pellentesque massa pellentesque ipsum. Vitae amet feugiat ut lacus curabitur lacus vitae. Faucibus sit tristique aenean at sagittis id vel imperdiet massa. Vitae facilisis a non sit sem tempus, varius nisl.</p>
                <p className="md:text-xl text-md text-gray-600  mt-4 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae mi convallis convallis proin egestas. Id in sed faucibus pellentesque massa pellentesque ipsum. Vitae amet feugiat ut lacus curabitur lacus vitae. Faucibus sit tristique aenean at sagittis id vel imperdiet massa. Vitae facilisis a non sit sem tempus, varius nisl.</p>
                <div className="flex justify-center w-full">
                    <img src="https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" className="w-4/6 h-96 rounded-xl object-cover" />
                </div>
                <p className="md:text-xl text-md text-gray-600  mt-4 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae mi convallis convallis proin egestas. Id in sed faucibus pellentesque massa pellentesque ipsum. Vitae amet feugiat ut lacus curabitur lacus vitae. Faucibus sit tristique aenean at sagittis id vel imperdiet massa. Vitae facilisis a non sit sem tempus, varius nisl.</p>
            </div>
            <div className="w-full px-10 ">
                <p className="md:text-3xl text-xl font-bold mt-4 mb-6 ">Leave a Comment</p>
                <div className="flex md:justify-between justify-center w-full flex-wrap">
                    <textarea placeholder="Comment" className="w-full h-36 bg-gray-200 rounded-lg p-2 my-2" ></textarea>
                    <input placeholder="Name" className="md:w-96 w-full h-14 bg-gray-200 rounded-lg p-2 my-2" />
                    <input placeholder="Email" className="md:w-96 h-14 w-full bg-gray-200 rounded-lg p-2 my-2" />
                    <button type="submit" className="w-64 h-14 text-white bg-blue-600 rounded-lg p-2 my-2" >
                        Submit
                    </button>
                </div>
                <div className="w-full flex justify-center my-6">
                    <div className="w-6/12 border-b-2">
                    </div>
                </div>
                <div className="w-full px-6 pb-5 bg-gray-100 rounded-t-xl">
                    <div className="flex items-center">
                        <p className="md:text-2xl text-xl font-bold mt-4 mb-6 ">Lorem Ipsum</p>
                        <div className="w-6 border-b-2 mx-2"></div>
                        <p className="md:text-2xl text-xl text-gray-300 mt-4 mb-6 ">21 April 2021</p>
                    </div>
                    <p className="md:text-xl text-md text-gray-600  mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae mi convallis convallis proin egestas. Id in sed faucibus pellentesque massa pellentesque ipsum. Vitae amet feugiat ut lacus curabitur lacus vitae. Faucibus sit tristique aenean at sagittis id vel imperdiet massa. Vitae facilisis a non sit sem tempus, varius nisl.</p>
                </div>
                <div className="w-full px-6 pb-5 bg-gray-200 rounded-b-xl">
                    <div className="flex items-center">
                        <p className="md:text-2xl text-xl font-bold mt-4 mb-6 ">Lorem Ipsum</p>
                        <div className="w-6 border-b-2 mx-2"></div>
                        <p className="md:text-2xl text-xl text-gray-300 mt-4 mb-6 ">21 April 2021</p>
                    </div>
                    <p className="md:text-xl text-md text-gray-600  mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae mi convallis convallis proin egestas. Id in sed faucibus pellentesque massa pellentesque ipsum. Vitae amet feugiat ut lacus curabitur lacus vitae. Faucibus sit tristique aenean at sagittis id vel imperdiet massa. Vitae facilisis a non sit sem tempus, varius nisl.</p>
                </div>
            </div>
        </div>
    )
}
