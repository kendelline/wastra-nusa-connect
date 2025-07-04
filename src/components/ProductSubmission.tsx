
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Upload, Calendar, Check } from "lucide-react";

const ProductSubmission = () => {
  const recentSubmissions = [
    {
      name: "Selendang Songket Emas",
      category: "Aksesori",
      status: "Sedang Review",
      submittedDate: "2 hari lalu",
      estimatedValue: "Rp 350.000"
    },
    {
      name: "Kain Tapis Gajah",
      category: "Kain Panjang", 
      status: "Diterima",
      submittedDate: "5 hari lalu",
      estimatedValue: "Rp 850.000"
    },
    {
      name: "Tas Tenun Mini",
      category: "Aksesori",
      status: "Terjual",
      submittedDate: "1 minggu lalu", 
      estimatedValue: "Rp 125.000"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Submit New Product */}
      <Card className="border-amber-200">
        <CardHeader>
          <CardTitle className="text-amber-800">Setor Produk Baru</CardTitle>
          <CardDescription>Upload karya tenunan Anda untuk dijual</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-amber-700 mb-2 block">
                  Nama Produk
                </label>
                <Input 
                  placeholder="Contoh: Selendang Songket Palembang"
                  className="border-amber-200 focus:border-amber-400"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-amber-700 mb-2 block">
                  Kategori Produk
                </label>
                <Select>
                  <SelectTrigger className="border-amber-200">
                    <SelectValue placeholder="Pilih kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kain-panjang">Kain Panjang</SelectItem>
                    <SelectItem value="selendang">Selendang</SelectItem>
                    <SelectItem value="sarung">Sarung</SelectItem>
                    <SelectItem value="rok">Rok</SelectItem>
                    <SelectItem value="tas">Tas & Dompet</SelectItem>
                    <SelectItem value="aksesori">Aksesori Lainnya</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-amber-700 mb-2 block">
                  Waktu Pengerjaan (hari)
                </label>
                <Input 
                  type="number"
                  placeholder="Contoh: 14"
                  className="border-amber-200 focus:border-amber-400"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-amber-700 mb-2 block">
                  Ukuran/Dimensi
                </label>
                <Input 
                  placeholder="Contoh: 200cm x 100cm"
                  className="border-amber-200 focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-amber-700 mb-2 block">
                  Jenis Benang Utama
                </label>
                <Select>
                  <SelectTrigger className="border-amber-200">
                    <SelectValue placeholder="Pilih jenis benang" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sutra">Sutra</SelectItem>
                    <SelectItem value="katun">Katun</SelectItem>
                    <SelectItem value="sutra-emas">Sutra + Emas</SelectItem>
                    <SelectItem value="campuran">Campuran</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-amber-700 mb-2 block">
                  Kompleksitas Motif
                </label>
                <Select>
                  <SelectTrigger className="border-amber-200">
                    <SelectValue placeholder="Pilih tingkat kompleksitas" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sederhana">Sederhana</SelectItem>
                    <SelectItem value="menengah">Menengah</SelectItem>
                    <SelectItem value="rumit">Rumit</SelectItem>
                    <SelectItem value="sangat-rumit">Sangat Rumit</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-amber-700 mb-2 block">
              Deskripsi & Cerita Produk
            </label>
            <Textarea 
              placeholder="Ceritakan inspirasi, makna motif, dan keunikan produk Anda..."
              className="border-amber-200 focus:border-amber-400 min-h-24"
              rows={4}
            />
          </div>

          {/* Photo Upload */}
          <div>
            <label className="text-sm font-medium text-amber-700 mb-2 block">
              Foto Produk
            </label>
            <div className="border-2 border-dashed border-amber-300 rounded-lg p-8 text-center">
              <Upload className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <p className="text-amber-600 mb-2">Upload foto produk Anda</p>
              <p className="text-sm text-amber-500 mb-4">PNG, JPG hingga 10MB. Minimal 3 foto</p>
              <Button variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-50">
                Pilih File
              </Button>
            </div>
          </div>

          {/* Value Calculator Preview */}
          <Card className="bg-amber-50 border-amber-300">
            <CardHeader>
              <CardTitle className="text-amber-800 text-lg">Estimasi Nilai Produk</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-amber-600">Bahan Baku:</span>
                  <span className="text-amber-800">Rp 125.000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-600">Waktu Kerja (14 hari):</span>
                  <span className="text-amber-800">Rp 280.000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-600">Kompleksitas Motif:</span>
                  <span className="text-amber-800">Rp 95.000</span>
                </div>
                <hr className="border-amber-300" />
                <div className="flex justify-between font-semibold text-lg">
                  <span className="text-amber-700">Estimasi Total:</span>
                  <span className="text-amber-800">Rp 500.000</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button className="w-full bg-amber-600 hover:bg-amber-700 text-lg py-6">
            <Plus className="h-5 w-5 mr-2" />
            Setor Produk
          </Button>
        </CardContent>
      </Card>

      {/* Recent Submissions */}
      <Card className="border-amber-200">
        <CardHeader>
          <CardTitle className="text-amber-800">Produk Terbaru</CardTitle>
          <CardDescription>Status produk yang telah Anda setor</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentSubmissions.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-amber-50 rounded-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-200 to-orange-200 rounded-lg flex items-center justify-center">
                    <Plus className="h-8 w-8 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-800">{product.name}</h4>
                    <p className="text-sm text-amber-600">{product.category}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="h-4 w-4 text-amber-500" />
                      <span className="text-sm text-amber-500">{product.submittedDate}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge 
                    variant={
                      product.status === "Terjual" ? "default" :
                      product.status === "Diterima" ? "secondary" : "outline"
                    }
                    className={
                      product.status === "Terjual" ? "bg-green-100 text-green-800" :
                      product.status === "Diterima" ? "bg-blue-100 text-blue-800" :
                      "bg-orange-100 text-orange-800"
                    }
                  >
                    {product.status}
                  </Badge>
                  <p className="text-lg font-semibold text-amber-800 mt-1">
                    {product.estimatedValue}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductSubmission;
