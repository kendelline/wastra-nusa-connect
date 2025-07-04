
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Calendar, Package, BookOpen, Plus } from "lucide-react";

const DashboardOverview = () => {
  return (
    <div className="space-y-4 px-2">
      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="border-gray-200 bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-medium text-gray-700">Pendapatan Bulan Ini</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold text-gray-900">Rp 2.8M</div>
            <p className="text-xs text-green-600 mt-1">+15%</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-medium text-gray-700">Produk Terjual</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold text-gray-900">12</div>
            <p className="text-xs text-gray-600 mt-1">3 proses</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-medium text-gray-700">Pelatihan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold text-gray-900">8/12</div>
            <Progress value={67} className="mt-2 h-1" />
          </CardContent>
        </Card>

        <Card className="border-gray-200 bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-medium text-gray-700">Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold text-gray-900">4.8</div>
            <p className="text-xs text-gray-600 mt-1">24 ulasan</p>
          </CardContent>
        </Card>
      </div>

      {/* Current Projects */}
      <Card className="border-gray-200 bg-white">
        <CardHeader>
          <CardTitle className="text-gray-900 text-sm">Proyek Aktif</CardTitle>
          <CardDescription className="text-xs">Kelola proyek tenunan yang sedang berlangsung</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">Songket Selendang Premium</h4>
                  <p className="text-xs text-gray-600">Estimasi selesai: 3 hari</p>
                </div>
                <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200 text-xs">
                  Proses
                </Badge>
              </div>
              <Progress value={75} className="h-1" />
            </div>

            <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">Tapis Lampung Motif Gajah</h4>
                  <p className="text-xs text-gray-600">Estimasi selesai: 7 hari</p>
                </div>
                <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 text-xs">
                  Baru
                </Badge>
              </div>
              <Progress value={45} className="h-1" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 gap-3">
        <Card className="border-gray-200 bg-white hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader className="pb-2">
            <div className="flex items-center space-x-3">
              <Package className="h-6 w-6 text-amber-600" />
              <div>
                <CardTitle className="text-gray-900 text-sm">Pesan Bahan</CardTitle>
                <CardDescription className="text-xs">Beli benang, pewarna, dan alat tenun</CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        <Card className="border-gray-200 bg-white hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader className="pb-2">
            <div className="flex items-center space-x-3">
              <BookOpen className="h-6 w-6 text-amber-600" />
              <div>
                <CardTitle className="text-gray-900 text-sm">Lanjut Pelatihan</CardTitle>
                <CardDescription className="text-xs">Tingkatkan skill dengan video tutorial</CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        <Card className="border-gray-200 bg-white hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader className="pb-2">
            <div className="flex items-center space-x-3">
              <Plus className="h-6 w-6 text-amber-600" />
              <div>
                <CardTitle className="text-gray-900 text-sm">Upload Produk</CardTitle>
                <CardDescription className="text-xs">Setor hasil karya untuk dijual</CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default DashboardOverview;
