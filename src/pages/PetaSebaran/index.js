import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import React from 'react'
import Button from '../../components/atom/Button'
import { Ary, BandarLampung, LampungSelatan, MapLampung, MapLampung1, Polkadot } from '../../configs/Images'

const data = [
    {
        id: 1,
        kota: 'Lampung Selatan',
        jml: 12,
        img:LampungSelatan
    },
    {
        id: 2,
        kota: 'Bandar Lampung',
        jml: 56,
        img:BandarLampung
    }
];
export default function PetaSebaran() {
    const [kabupaten, setKabupaten] = React.useState('');
    const [selected, setSelected] = React.useState(null);


    const handleChange = (event) => {
        if(event.target.value == ""){
            setSelected(null);
        }
        setKabupaten(event.target.value);
        data.map((x) => {
            if (x.id == event.target.value) {
                setSelected(x);
            } 
        })
    };
    console.log(selected)
    return (
        <div className="md:px-24 px-5">
            <div className="bg-white py-20 bg-gradient-to-b px-10 flex w-full justify-around  items-center flex-wrap md:flex-nowrap">
                {selected == null ? (
                    <div className="md:w-6/12 w-full h-auto bg-white">
                        <img src={MapLampung1} className="bg-white rounded-lg" />
                    </div>
                ) : (
                    <div className="md:w-6/12 w-full h-auto bg-white p-6 shadow-lg rounded-lg relative justify-center ">
                        <div className="absolute md:top-20 md:left-20 top-12 left-12">
                            <p className=" md:text-6xl text-4xl font-bold text-white">{selected.jml}</p>
                            <p className=" md:text-md text-sm font-bold text-white">Total UMKM</p>
                        </div>
                        <p className="absolute bottom-7 w-full text-center md:text-xl md:text-md font-bold text-white" >{selected.kota}</p>
                        <img src={selected.img} className=" from-blue-600 to-blue-300 bg-gradient-to-b rounded-lg" />
                    </div>
                )}
                <div>
                    <p className="text-black text-right w-96 text-3xl font-bold leading-relaxed">
                        Sebaran Seluruh UMKM
                        di Provinsi Lampung
                    </p>
                    <p className="text-black w-96 text-right text-sm font-light leading-relaxed mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae mi convallis convallis proin egestas. Id in sed faucibus pellentesque pellentesque ipsum.
                    </p>
                    <FormControl variant="outlined" className="w-80 float-right" >
                        <InputLabel id="demo-simple-select-outlined-label">Kabupaten</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={kabupaten}
                            onChange={handleChange}
                            label="kabupaten"
                        >
                            <MenuItem value="">
                                <em>Lampung</em>
                            </MenuItem>
                            <MenuItem value={1}>Lampung Selatan</MenuItem>
                            <MenuItem value={2}>Bandar Lampung</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>

        </div>

    )
}
