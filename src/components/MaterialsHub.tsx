
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Package, Plus } from "lucide-react";

const MaterialsHub = () => {
  const materials = [
    {
      name: "Benang Sutra Emas",
      category: "Benang",
      price: "Rp 45.000/gulung",
      stock: "Tersedia",
      image: "/placeholder.svg"
    },
    {
      name: "Benang Katun Premium",
      category: "Benang", 
      price: "Rp 25.000/gulung",
      stock: "Tersedia",
      image: "/placeholder.svg"
    },
    {
      name: "Pewarna Alami Indigo",
      category: "Pewarna",
      price: "Rp 35.000/kg",
      stock: "Stok Terbatas",
      image: "/placeholder.svg"
    },
    {
      name: "Alat Tenun Bukan Mesin (ATBM)",
      category: "Alat",
      price: "Rp 2.500.000",
      stock: "Pre-order",
      image: "/placeholder.svg"
    }
  ];

  const rentalTools = [
    {
      name: "Alat Tenun Semi-Otomatis",
      price: "Rp 150.000/minggu",
      description: "Cocok untuk produksi skala menengah"
    },
    {
      name: "Mesin Pewarna Otomatis", 
      price: "Rp 200.000/minggu",
      description: "Hasil pewarnaan konsisten dan merata"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Search and Filter */}
      <Card className="border-amber-200">
        <CardHeader>
          <CardTitle className="text-amber-800">Cari Bahan & Alat</CardTitle>
          <CardDescription>Temukan kebutuhan tenunan Anda</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-amber-500" />
              <Input 
                placeholder="Cari benang, pewarna, alat..." 
                className="pl-10 border-amber-200 focus:border-amber-400"
              />
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-48 border-amber-200">
                <SelectValue placeholder="Kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua</SelectItem>
                <SelectItem value="benang">Benang</SelectItem>
                <SelectItem value="pewarna">Pewarna</SelectItem>
                <SelectItem value="alat">Alat</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Materials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {materials.map((material, index) => (
          <Card key={index} className="border-amber-200 hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg mb-4 flex items-center justify-center">
                <Package className="h-12 w-12 text-amber-600" />
              </div>
              <Badge variant="outline" className="w-fit border-amber-300 text-amber-700">
                {material.category}
              </Badge>
              <CardTitle className="text-amber-800">{material.name}</CardTitle>
              <CardDescription className="text-lg font-semibold text-amber-700">
                {material.price}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <Badge 
                  variant={material.stock === "Tersedia" ? "default" : "secondary"}
                  className={material.stock === "Tersedia" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"}
                >
                  {material.stock}
                </Badge>
                <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                  <Plus className="h-4 w-4 mr-1" />
                  Pesan
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tool Rental Section */}
      <Card className="border-amber-200">
        <CardHeader>
          <CardTitle className="text-amber-800">Sewa Alat</CardTitle>
          <CardDescription>Akses alat canggih tanpa investasi besar</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {rentalTools.map((tool, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-amber-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-amber-800">{tool.name}</h4>
                  <p className="text-sm text-amber-600">{tool.description}</p>
                  <p className="text-lg font-semibold text-amber-700 mt-1">{tool.price}</p>
                </div>
                <Button variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-100">
                  Sewa Sekarang
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Calculator Tool */}
      <Card className="border-amber-200">
        <CardHeader>
          <CardTitle className="text-amber-800">Kalkulator Kebutuhan</CardTitle>
          <CardDescription>Hitung kebutuhan bahan untuk proyek Anda</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium text-amber-700 mb-2 block">
                Jenis Kain
              </label>
              <Select>
                <SelectTrigger className="border-amber-200">
                  <SelectValue placeholder="Pilih jenis kain" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="songket">Songket</SelectItem>
                  <SelectItem value="tapis">Tapis</SelectItem>
                  <SelectItem value="ikat">Ikat</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium text-amber-700 mb-2 block">
                Ukuran (meter)
              </label>
              <Input 
                type="number" 
                placeholder="2.5" 
                className="border-amber-200 focus:border-amber-400"
              />
            </div>
            <div className="flex items-end">
              <Button className="w-full bg-amber-600 hover:bg-amber-700">
                Hitung Kebutuhan
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MaterialsHub;
