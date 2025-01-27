

const Size = () => {
  return (
    <div>
        <h5 className="mb-[10px]">Size</h5>
        {/* color boxes */}
        <div className="flex space-x-5">
        <button className="w-[50px] h-[50px] rounded-lg bg-[#FAF4F4] hover:bg-[#FBEBB5] flex justify-center items-center ">L</button>
        <button className="w-[50px] h-[50px] rounded-lg bg-[#FAF4F4] hover:bg-[#FBEBB5] flex justify-center items-center ">XL</button>
        <button className="w-[50px] h-[50px] rounded-lg bg-[#FAF4F4] hover:bg-[#FBEBB5] flex justify-center items-center ">XS</button>
        </div>
       
    </div>
  )
}

export default Size