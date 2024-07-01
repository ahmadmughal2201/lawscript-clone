interface HeaderProps {
    toggleSidebar: () => void;
  }
  
  export default function Header({ toggleSidebar }: HeaderProps) {
    return (
      <div className="h-14 bg-gradient-to-r from-slate-100 to-white w-full flex justify-between px-6 rounded-xl mt-1 border-slate-100  border">
        <button onClick={toggleSidebar}>Close</button>
        <button>Mode</button>
      </div>
    );
  }
  