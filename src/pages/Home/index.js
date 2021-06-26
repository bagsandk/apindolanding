import { Typography } from "@material-ui/core";
import Button from "../../components/atom/Button";
import CarouselComponent from "../../components/molecule/CarouselComponent";
import { Ary, DDS, DDSLogo, MapLampung, Polkadot } from "../../configs/Images";
import { Link, useHistory } from 'react-router-dom';

const berita = [
    'aa',
    'aa',
    'aa',
]
const headline = [
    'aa',
    'aa',
]

const Home = () => {
    let history = useHistory();
    return (
        <>
            <div className="md:px-24 px-5">
                <CarouselComponent />
                <div className="py-20"></div>
                <div className="box-border  p-7 flex flex-wrap md:flex-nowrap">
                    <div className="w-10/12 p-2 mb-16 md:mb-2">
                        <p className="md:text-4xl w-full text-2xl md:w-7/12  font-bold text leading-relaxed">Selamat datang, di Layanan DPP <span className="text-blue-500">APINDO </span>LAMPUNG UMKM</p>
                        <p className="md:text-xl text-sm text-gray-600 md:w-7/12 mt-4 mb-6">DPP APINDO LAMPUNG adalah blablabla blab lablablabla blabl ablablablablab lablablablab lablablabl ablablabla.</p>
                        <Button text="Learn More" />
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
                <div className="box-border p-7 flex justify-center my-40 ">
                    <div className="from-blue-500 to-blue-300 py-20 bg-gradient-to-b px-6 flex md:w-10/12 w-max flex-wrap md:flex-nowrap justify-around rounded-xl relative">
                        <img src={Polkadot} className="absolute md:-bottom-15 md:-right-15  -bottom-8 -right-8 md:w-32 w-32" style={{ zIndex: -1 }} />
                        <img src={Polkadot} className="absolute md:-top-15 md:-left-15  -top-8 -left-8 md:w-32 w-32" style={{ zIndex: -1 }} />
                        <div>
                            <Typography variant="h4" className="text-white mb-3">
                                Data UMKM di Lampung
                            </Typography>

                            <div className="w-7/12 border-t-2 border-white mt-1" ></div>
                            <div className="flex mt-3 justify-between items-center">
                                <div>
                                    <p className="text-white text-xs">Daftarkan usaha anda menjadi</p>
                                    <p className="text-white text-xs">Mitra DPP APINDO LAMPUNG</p>
                                </div>
                                <div className={"w-max bg-white justify-items-center align-middle rounded-md text-center text-blue-700  px-5 py-2"}>
                                    Daftar
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="bg-white px-12 py-4 rounded-lg md:mt-0 mt-6">
                                <p className="text-6xl font-sans text-transparent bg-clip-text bg-gradient-to-br from-blue-700 to-blue-400 font-bold">
                                    378
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="from-blue-600 to-blue-300 py-20 bg-gradient-to-b px-10 flex w-full justify-around  items-center flex-wrap md:flex-nowrap">
                <div>
                    <p className="text-white w-80 text-3xl font-bold leading-relaxed">
                        Peta sebaran UMKM di Seluruh Lampung
                    </p>
                    <p className="text-white w-80 text-sm font-light leading-relaxed">
                        Silahkan klik daerah untuk mendapatkan data lengkap dari UMKM.
                    </p>
                    <Link to={'/peta-sebaran'}>
                        <div className={"w-max mt-7 bg-white justify-items-center align-middle rounded-md text-center text-blue-600  px-7 py-2"}>
                            Detail
                        </div>
                    </Link>
                </div>
                <img src={MapLampung} className="w-96 h-96" />
            </div>

            <div className="md:py-20 md:px-32 px-5 flex justify-around  items-center flex-wrap">
                <div className="w-full mb-10 md:w-6/12 flex flex-wrap justify-center mt-10">
                    <div className="w-36 h-36 md:h-48 md:w-48 bg-white m-1 p-2">
                        <img src={Polkadot} />
                    </div>
                    <div className="w-36 h-36 md:h-48 md:w-48 bg-white shadow-lg m-1">
                        <img src={DDSLogo} />
                    </div>
                    <div className="w-36 h-36 md:h-48 md:w-48 bg-white shadow-lg m-1">
                        <img src={DDSLogo} />
                    </div>
                    <div className="w-36 h-36 md:h-48 md:w-48 bg-white m-1 p-2">
                        <img src={Polkadot} />
                    </div>
                </div>
                <div className="w-full md:w-6/12">
                    <p className="text-black text-2xl  md:text-3xl font-bold leading-relaxed text-right">
                        UMKM yang terdaftar
                    </p>
                    <p className="text-black  text-2xl md:text-3x1 font-bold leading-relaxed text-right">
                        di APINDO LAMPUNG UMKM
                    </p>
                    <p className="text-sm md:text-md text-gray-600  mt-4 mb-6 text-right">DPP APINDO LAMPUNG adalah blablabla blab lablablabla blabl ablablablablab lablablablab lablablabl ablablabla.</p>
                    <div onClick={() => history.push('/mitra')} className={"w-max bg-white float-right border-2 border-blue-500 rounded-md text-center text-blue-500  px-5 py-2 "}>
                        Lihat Detail
                    </div>
                </div>
            </div>
            {headline.map((a) => {
                return (
                    <div className="md:py-20 md:px-32 md:mt-0 mt-20 px-5 flex justify-around  items-center flex-wrap">
                        <div className="w-full md:w-6/12 px-9">
                            <p className="text-black text-2xl md:text-left text-center  md:text-3xl font-bold leading-relaxed ">
                                Online Course Kewirausahaan Mitra DPP APINDO LAMPUNG
                            </p>
                        </div>
                        <div className="w-full mb-10 md:w-6/12 flex flex-wrap justify-center mt-10">
                            <div className="h-64 w-10/12 shadow-lg rounded-lg relative md:mt-0 mt-10">
                                <img src={Polkadot} className="absolute md:-top-20 md:-right-20  -top-8 -right-8 md:w-48 w-32" style={{ zIndex: -1 }} />
                                <img src={Polkadot} className="absolute md:-bottom-20 md:-left-20  -bottom-8 -left-8 md:w-48 w-32" style={{ zIndex: -1 }} />
                                <div onClick={() => history.push('/detail-berita')} className={" bg-blue-500 opacity-75 top-28 md:left-44  left-32  absolute  rounded-md text-center text-white  px-5 py-2 "}>
                                    Lihat Detail
                                </div>
                                <img src={"https://images.unsplash.com/photo-1495020689067-958852a7765e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"} className="h-64 w-full object-cover rounded-lg" />
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className="mt-20 md:px-32 w-full justify-center">
                <p className="text-3xl text-center font-bold" >
                    Berita Terbaru
                </p>
                <div className="flex justify-around w-full mt-10 flex-wrap">
                    {berita.map((a) => {
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
        </>
    )
}

export default Home;
