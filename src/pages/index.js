// pages/index.js
import React, { useState, useRef } from 'react';
import khodamIndonesia from '@/data/khodam';

function SearchPage () {

  const [khodam, setKhodam] = useState([]);
  const [nama, setNama] = useState("");
  const nameInputRef = useRef(null);

  function showRandomKhodam() {
    const randomKhodam = khodamIndonesia[Math.floor(Math.random() * khodamIndonesia.length)];

    const nameValue = nameInputRef.current.value;
    if(nameValue) {
      setKhodam(randomKhodam);
    } else {
      alert('ketik nama kamu')
    }
    setNama(nameValue)
  };

  return (
    <div className="min-h-screen bg-gray-600 flex justify-center items-center">
      <div className="container mx-auto bg-indigo-600 rounded-lg p-14">
        <h1 className="text-center font-bold text-white text-4xl">
          Cek Khodam
          <p className="mx-auto font-normal text-sm my-6 max-w-lg">
            Ketikan Nama Kamu, dan lihat khodam yang ada pada dirimu.
          </p>
          <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
            <input
              id='name'
              ref={nameInputRef}
              className="text-base text-gray-700 flex-grow outline-none px-2 "
              type="text"
              placeholder="Tulis nama kamu disini..."
            />
            <div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">

              <button onClick={showRandomKhodam} className="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 font-thin">
                Lihat Khodam
              </button>
            </div>
          </div>
        </h1>
        {nama !== "" &&
          <div className="mx-auto font-normal text-lg my-6 max-w-lg text-white text-center">
            <p>Khodam dalam dirimu adalah : <strong>{khodam.nama_khodam}</strong> </p>
            <p className='pt-3'>Deskripsi Khodam :</p>
            <p className='pb-3'>{khodam.deskripsi}</p>
            <p className='pt-3'>Khodam akan muncul :</p>
            <p className='pb-3'>{khodam.akan_muncul}</p>
          {/* {JSON.stringify(khodam)} */}
          </div>
        }
      </div>
    </div>

  );
};

export default SearchPage;
