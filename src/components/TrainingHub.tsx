
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Check, Calendar } from "lucide-react";

const TrainingHub = () => {
  const trainings = [
    {
      title: "Dasar-Dasar Menggunakan Aplikasi",
      description: "Pelajari cara menggunakan semua fitur Wastra Nusa",
      progress: 100,
      status: "Selesai",
      duration: "30 menit",
      locked: false
    },
    {
      title: "Teknik Tenun Songket Tradisional",
      description: "Menguasai motif dan teknik dasar songket",
      progress: 85,
      status: "Sedang Belajar", 
      duration: "2 jam",
      locked: false
    },
    {
      title: "Pewarnaan Alami untuk Kain",
      description: "Teknik pewarnaan menggunakan bahan alami",
      progress: 60,
      status: "Sedang Belajar",
      duration: "1.5 jam", 
      locked: false
    },
    {
      title: "Membuat Produk Fashion Bernilai Tinggi",
      description: "Transform kain tradisional menjadi fashion modern",
      progress: 0,
      status: "Terkunci",
      duration: "3 jam",
      locked: true
    },
    {
      title: "Marketing & Branding Produk Wastra",
      description: "Strategi pemasaran untuk produk tradisional",
      progress: 0,
      status: "Terkunci", 
      duration: "2 jam",
      locked: true
    }
  ];

  const achievements = [
    { name: "Pengguna Baru", desc: "Menyelesaikan onboarding", earned: true },
    { name: "Perajin Pemula", desc: "Menyelesaikan 3 pelatihan dasar", earned: true },
    { name: "Ahli Songket", desc: "Menguasai teknik songket", earned: false },
    { name: "Master Weaver", desc: "Menyelesaikan semua pelatihan", earned: false }
  ];

  return (
    <div className="space-y-6">
      {/* Progress Overview */}
      <Card className="border-amber-200">
        <CardHeader>
          <CardTitle className="text-amber-800">Progress Pembelajaran</CardTitle>
          <CardDescription>Tingkatkan keahlian dengan pelatihan terstruktur</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-800 mb-2">8/12</div>
              <p className="text-sm text-amber-600">Modul Selesai</p>
              <Progress value={67} className="mt-2" />
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-800 mb-2">24</div>
              <p className="text-sm text-amber-600">Jam Belajar</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-800 mb-2">2</div>
              <p className="text-sm text-amber-600">Sertifikat Earned</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Training Modules */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-amber-800">Modul Pelatihan</h3>
        {trainings.map((training, index) => (
          <Card 
            key={index} 
            className={`border-amber-200 ${training.locked ? 'opacity-60' : 'hover:shadow-md transition-shadow'}`}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg ${training.locked ? 'bg-gray-100' : 'bg-amber-100'}`}>
                      {training.status === "Selesai" ? (
                        <Check className="h-5 w-5 text-green-600" />
                      ) : (
                        <BookOpen className={`h-5 w-5 ${training.locked ? 'text-gray-400' : 'text-amber-600'}`} />
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-800">{training.title}</h4>
                      <p className="text-sm text-amber-600">{training.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-4">
                    <Badge 
                      variant={training.status === "Selesai" ? "default" : "secondary"}
                      className={
                        training.status === "Selesai" 
                          ? "bg-green-100 text-green-800" 
                          : training.locked 
                            ? "bg-gray-100 text-gray-600"
                            : "bg-blue-100 text-blue-800"
                      }
                    >
                      {training.status}
                    </Badge>
                    <span className="text-sm text-amber-600 flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {training.duration}
                    </span>
                  </div>

                  {!training.locked && training.progress > 0 && (
                    <div className="mt-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-amber-600">Progress</span>
                        <span className="text-amber-800 font-medium">{training.progress}%</span>
                      </div>
                      <Progress value={training.progress} className="h-2" />
                    </div>
                  )}
                </div>

                <div className="ml-4">
                  <Button 
                    disabled={training.locked}
                    variant={training.status === "Selesai" ? "outline" : "default"}
                    className={training.locked ? "" : "bg-amber-600 hover:bg-amber-700"}
                  >
                    {training.locked ? "Terkunci" : training.status === "Selesai" ? "Ulang" : "Lanjutkan"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Achievements */}
      <Card className="border-amber-200">
        <CardHeader>
          <CardTitle className="text-amber-800">Pencapaian</CardTitle>
          <CardDescription>Badge yang telah Anda raih</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`text-center p-4 rounded-lg border-2 ${
                  achievement.earned 
                    ? 'border-amber-300 bg-amber-50' 
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className={`w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center ${
                  achievement.earned ? 'bg-amber-200' : 'bg-gray-200'
                }`}>
                  <Check className={`h-6 w-6 ${achievement.earned ? 'text-amber-700' : 'text-gray-400'}`} />
                </div>
                <h4 className={`font-semibold text-sm ${achievement.earned ? 'text-amber-800' : 'text-gray-500'}`}>
                  {achievement.name}
                </h4>
                <p className={`text-xs ${achievement.earned ? 'text-amber-600' : 'text-gray-400'}`}>
                  {achievement.desc}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrainingHub;
