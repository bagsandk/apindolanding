import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';

function Footer() {
    return (
        <div className={"h-auto bg-gradient-to-b mt-8 from-blue-500 to-blue-400 max-w-full px-16 py-12 xl:mt-10 "}>
            <p className={"text-white text-2xl font-bold"}>{"DPP APINDO LAMPUNG"}</p>
            <p className={"text-white md:text-xl text-sm mt-6 sm:w-6/12"}>{"Gedung Darmapala. Jl. Zaenal Abidin Pagar Alam No. 61, LK.6, Kel. Segala Mider, Kec. Tanjung Karang Barat, Kotamadya Bandar Lampung, Provinsi Lampung."}</p>
            <div className={"flex justify-between w-full mt-6"}>
                <div className={"flex flex-wrap md:flex-nowrap md:justify-start justify-between md:w-max w-full"}>
                    <div className={"flex align-middle items-center "}>
                        <CallIcon style={{ color: "#fff" }} />
                        <p className={"text-white md:text-xl text-sm mx-2 mr-5 "}>{"0721 77013"}</p>
                    </div>
                    <div className={"flex align-middle items-center"}>
                        <EmailIcon style={{ color: "#fff" }} />
                        <p className={"text-white md:text-xl text-sm mx-2 "}>{"office@ddsolution.co.id"}</p>
                    </div>
                </div>
                <p className={"text-white md:text-xl text-sm"}>{"Copyright @ 2021 DDSolution All rights reserved"}</p>
            </div>
        </div>
    )
}
export default Footer;
