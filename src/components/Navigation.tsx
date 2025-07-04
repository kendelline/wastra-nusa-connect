
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-white border-b border-amber-200 py-2">
      <div className="px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xs">WN</span>
          </div>
          <span className="text-lg font-bold text-amber-800">Wastra Nusa</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="border-amber-200 text-amber-700 hover:bg-amber-50 px-2 py-1 text-xs">
            <Search className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
