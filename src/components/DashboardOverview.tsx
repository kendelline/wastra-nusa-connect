
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Calendar, Package, BookOpen, Plus } from "lucide-react";

const DashboardOverview = () => {
  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-amber-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-amber-700">Pendapatan Bulan Ini</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-800">Rp 2.850.000</div>
            <p className="text-xs text-green-600 mt-1">+15% dari bulan lalu</p>
          </CardContent>
        </Card>

        <Card className="border-amber-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-amber-700">Produk Terjual</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-800">12</div>
            <p className="text-xs text-amber-600 mt-1">3 dalam proses</p>
          </CardContent>
        </Card>

        <Card className="border-amber-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-amber-700">Pelatihan Selesai</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-800">8/12</div>
            <Progress value={67} className="mt-2 h-2" />
          </CardContent>
        </Card>

        <Card className="border-amber-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-amber-700">Rating Produk</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-800">4.8</div>
            <p className="text-xs text-amber-600 mt-1">dari 24 ulasan</p>
          </CardContent>
        </Card>
      </div>

      {/* Current Projects */}
      <Card className="border-amber-200">
        <CardHeader>
          <CardTitle className="text-amber-800">Proyek Aktif</CardTitle>
          <CardDescription>Kelola proyek tenunan yang sedang berlangsung</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-amber-50 rounded-lg">
              <div>
                <h4 className="font-semibold text-amber-800">Songket Selendang Premium</h4>
                <p className="text-sm text-amber-600">Estimasi selesai: 3 hari</p>
                <Progress value={75} className="mt-2 w-32 h-2" />
              </div>
              <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                Dalam Proses
              </Badge>
            </div>

            <div className="flex items-center justify-between p-4 bg-amber-50 rounded-lg">
              <div>
                <h4 className="font-semibold text-amber-800">Tapis Lampung Motif Gajah</h4>
                <p className="text-sm text-amber-600">Estimasi selesai: 7 hari</p>
                <Progress value={45} className="mt-2 w-32 h-2" />
              </div>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                Baru Dimulai
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-amber-200 hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader>
            <Package className="h-8 w-8 text-amber-600 mb-2" />
            <CardTitle className="text-amber-800">Pesan Bahan</CardTitle>
            <CardDescription>Beli benang, pewarna, dan alat tenun</CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-amber-200 hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader>
            <BookOpen className="h-8 w-8 text-amber-600 mb-2" />
            <CardTitle className="text-amber-800">Lanjut Pelatihan</CardTitle>
            <CardDescription>Tingkatkan skill dengan video tutorial</CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-amber-200 hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader>
            <Plus className="h-8 w-8 text-amber-600 mb-2" />
            <CardTitle className="text-amber-800">Upload Produk</CardTitle>
            <CardDescription>Setor hasil karya untuk dijual</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default DashboardOverview;
