
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Edit, MapPin, Calendar, Star, Award } from "lucide-react";

const ArtisanProfile = () => {
  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card className="border-amber-200">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex flex-col items-center">
              <Avatar className="h-32 w-32 border-4 border-amber-200">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-amber-100 text-amber-800 text-2xl">SN</AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm" className="mt-4 border-amber-300 text-amber-700 hover:bg-amber-50">
                <Edit className="h-4 w-4 mr-2" />
                Edit Foto
              </Button>
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-amber-800">Siti Nurhaliza</h2>
                <div className="flex items-center gap-2 text-amber-600 mt-1">
                  <MapPin className="h-4 w-4" />
                  <span>Palembang, Sumatera Selatan</span>
                </div>
                <div className="flex items-center gap-2 text-amber-600 mt-1">
                  <Calendar className="h-4 w-4" />
                  <span>Bergabung sejak Maret 2023</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="default" className="bg-amber-600">
                  Perajin Songket
                </Badge>
                <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                  Level Mahir
                </Badge>
                <Badge variant="outline" className="border-green-300 text-green-700">
                  ⭐ 4.8 Rating
                </Badge>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-800">47</div>
                  <p className="text-sm text-amber-600">Produk Terjual</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-800">4.8</div>
                  <p className="text-sm text-amber-600">Rating Rata-rata</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-800">8</div>
                  <p className="text-sm text-amber-600">Bulan Aktif</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personal Story */}
      <Card className="border-amber-200">
        <CardHeader>
          <CardTitle className="text-amber-800">Cerita Saya</CardTitle>
          <CardDescription>Bagikan inspirasi dan perjalanan Anda sebagai perajin</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea 
            className="border-amber-200 focus:border-amber-400 min-h-32"
            placeholder="Ceritakan perjalanan Anda sebagai perajin, inspirasi, dan motivasi..."
            defaultValue="Saya telah menenun songket sejak usia 15 tahun, belajar dari ibu dan nenek saya. Setiap helai benang yang saya tenun membawa cerita tradisi Palembang yang telah turun temurun. Melalui Wastra Nusa, saya berharap dapat memperkenalkan keindahan songket kepada lebih banyak orang dan melestarikan warisan budaya ini untuk generasi mendatang."
            rows={6}
          />
          <div className="flex justify-end">
            <Button className="bg-amber-600 hover:bg-amber-700">
              <Edit className="h-4 w-4 mr-2" />
              Simpan Cerita
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Skills & Specialization */}
      <Card className="border-amber-200">
        <CardHeader>
          <CardTitle className="text-amber-800">Keahlian & Spesialisasi</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-amber-800 mb-3">Jenis Kain</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-amber-700">Songket Palembang</span>
                  <Badge variant="default" className="bg-green-100 text-green-800">
                    <Star className="h-3 w-3 mr-1" />
                    Expert
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-amber-700">Songket Sumatera</span>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    Advanced
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-amber-700">Tenun Ikat</span>
                  <Badge variant="outline" className="border-orange-300 text-orange-700">
                    Intermediate
                  </Badge>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-amber-800 mb-3">Teknik Khusus</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-amber-300 text-amber-700">
                  Motif Lepus
                </Badge>
                <Badge variant="outline" className="border-amber-300 text-amber-700">
                  Pucuk Rebung
                </Badge>
                <Badge variant="outline" className="border-amber-300 text-amber-700">
                  Bungo Malur
                </Badge>
                <Badge variant="outline" className="border-amber-300 text-amber-700">
                  Tampuk Pinang
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className="border-amber-200">
        <CardHeader>
          <CardTitle className="text-amber-800">Pencapaian & Sertifikat</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg">
              <div className="p-3 bg-amber-200 rounded-full">
                <Award className="h-6 w-6 text-amber-700" />
              </div>
              <div>
                <h4 className="font-semibold text-amber-800">Perajin Terbaik Bulan Ini</h4>
                <p className="text-sm text-amber-600">Meraih penjualan tertinggi di platform</p>
                <p className="text-xs text-amber-500">Diraih pada Desember 2024</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg">
              <div className="p-3 bg-amber-200 rounded-full">
                <Star className="h-6 w-6 text-amber-700" />
              </div>
              <div>
                <h4 className="font-semibold text-amber-800">Master Weaver Certified</h4>
                <p className="text-sm text-amber-600">Menyelesaikan semua modul pelatihan</p>
                <p className="text-xs text-amber-500">Diraih pada November 2024</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg">
              <div className="p-3 bg-amber-200 rounded-full">
                <Award className="h-6 w-6 text-amber-700" />
              </div>
              <div>
                <h4 className="font-semibold text-amber-800">Customer Favorite</h4>
                <p className="text-sm text-amber-600">Rating 4.8+ selama 6 bulan berturut-turut</p>
                <p className="text-xs text-amber-500">Diraih pada Oktober 2024</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card className="border-amber-200">
        <CardHeader>
          <CardTitle className="text-amber-800">Informasi Kontak</CardTitle>
          <CardDescription>Data akan ditampilkan kepada pembeli yang tertarik</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-amber-700 mb-2 block">
                Nomor WhatsApp
              </label>
              <Input 
                placeholder="+62 812-3456-7890"
                className="border-amber-200 focus:border-amber-400"
                defaultValue="+62 812-3456-7890"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-amber-700 mb-2 block">
                Instagram (opsional)
              </label>
              <Input 
                placeholder="@sitinurhaliza_songket"
                className="border-amber-200 focus:border-amber-400"
                defaultValue="@sitinurhaliza_songket"
              />
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium text-amber-700 mb-2 block">
              Alamat Lengkap
            </label>
            <Textarea 
              placeholder="Jl. Merdeka No. 123, Kelurahan..."
              className="border-amber-200 focus:border-amber-400"
              defaultValue="Jl. Merdeka No. 123, Kelurahan Bukit Lama, Kecamatan Ilir Barat I, Palembang, Sumatera Selatan 30114"
              rows={3}
            />
          </div>

          <div className="flex justify-end">
            <Button className="bg-amber-600 hover:bg-amber-700">
              Simpan Perubahan
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArtisanProfile;
