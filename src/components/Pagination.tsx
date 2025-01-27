
interface PaginationButtonProps {
    isActive: boolean;
    pageNumber: number;
    onClick: () => void;
  }
  
  const PaginationButton = ({ isActive, pageNumber, onClick }: PaginationButtonProps) => {
    return (
      <button
        onClick={onClick}
        className={`w-[60px] h-[60px] flex justify-center items-center rounded ${
          isActive ? "bg-[#FBEBB5]" : "bg-[#FFF9E5]"
        }`}
      >
        {pageNumber}
      </button>
    );
  };
  
  export default PaginationButton;
  
