
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-white border-b border-amber-200 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">WN</span>
            </div>
            <span className="text-xl font-bold text-amber-800">Wastra Nusa</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="border-amber-200 text-amber-700 hover:bg-amber-50">
            <Search className="h-4 w-4 mr-2" />
            Cari Bantuan
          </Button>
          <Button variant="outline" size="sm" className="border-amber-200 text-amber-700 hover:bg-amber-50">
            Notifikasi
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
