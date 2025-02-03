"use client"
import Shopcards from '@/components/Shopcards'

import Policy from '@/components/Policy'
import AllBaners from '@/components/AllBaners'
import { Suspense, useState } from 'react'


const Shoppage = () => {
  const [search, setSearch] = useState<string>('')
  const [filter, setFilter] = useState<string>('')
  console.log(search)



  return (
    <>
      {/* <Heroshop /> */}
      <AllBaners expectedPath='/shop' src='/ractangle-shop2.png' span='Home' p='Shop'
        width='100' height='112'
      />

      {/* search and filter bar */}
      <div className='pt-[10px] '>
        <div className=' p-5   flex gap-y-2 flex-col md:flex-row justify-between items-center'>
          <select name="filter" id="filter"
            className='w-[200px] p-2 rounded-lg border border-[#9F9F9F]'
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
          >
            <option value="">Filter by category</option>
            <option value="chair">Chair</option>
            <option value="sofa">Sofa</option>
            <option value="table">Table</option>
            <option value="bed">Bed</option>
          </select>

          {/* search bar */}
          <input type="text"
            name="text"
            id="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder='Search Your Product'
            className='w-[200px] p-2  rounded-t-lg' />
        </div>
      </div>
<Suspense fallback={<div>jiiiiiiiiiiiiiiiii...</div>}>
      <Shopcards
        search={search}
        filter={filter}
      />
      </Suspense>

      <Suspense fallback={<div>jiiiiiiiiiiiiiiiii...</div>}>
      <Policy />
       </Suspense>
    </>
  )
}

export default Shoppage