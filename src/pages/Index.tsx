
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BookOpen, Package, User, Calendar, Search, Plus } from "lucide-react";
import Navigation from "@/components/Navigation";
import DashboardOverview from "@/components/DashboardOverview";
import MaterialsHub from "@/components/MaterialsHub";
import TrainingHub from "@/components/TrainingHub";
import ProductSubmission from "@/components/ProductSubmission";
import ArtisanProfile from "@/components/ArtisanProfile";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 max-w-[430px] mx-auto">
      <Navigation />
      
      {/* Header Section - Optimized for mobile */}
      <header className="bg-gradient-to-r from-amber-800 to-orange-700 text-white py-6">
        <div className="px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Wastra Nusa</h1>
            <p className="text-sm text-amber-100 mb-1">
              Memberdayakan Perajin Tradisional
            </p>
            <p className="text-xs text-amber-200 mb-4">
              Platform untuk perajin Songket, Tapis, dan kain tradisional Indonesia
            </p>
            <div className="flex items-center justify-center space-x-3">
              <Avatar className="h-12 w-12 border-2 border-amber-200">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-amber-600 text-white text-sm">SN</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <p className="font-semibold text-sm">Siti Nurhaliza</p>
                <p className="text-amber-200 text-xs">Perajin Songket Palembang</p>
                <Badge variant="secondary" className="mt-1 bg-amber-100 text-amber-800 text-xs">
                  Level Mahir
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Navigation Tabs - Mobile optimized */}
      <div className="px-2 py-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-4 bg-white shadow-sm border h-12">
            <TabsTrigger 
              value="dashboard" 
              className="flex flex-col items-center gap-1 data-[state=active]:bg-amber-100 data-[state=active]:text-amber-800 p-1"
            >
              <Calendar className="h-3 w-3" />
              <span className="text-xs">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger 
              value="materials"
              className="flex flex-col items-center gap-1 data-[state=active]:bg-amber-100 data-[state=active]:text-amber-800 p-1"
            >
              <Package className="h-3 w-3" />
              <span className="text-xs">Bahan</span>
            </TabsTrigger>
            <TabsTrigger 
              value="training"
              className="flex flex-col items-center gap-1 data-[state=active]:bg-amber-100 data-[state=active]:text-amber-800 p-1"
            >
              <BookOpen className="h-3 w-3" />
              <span className="text-xs">Pelatihan</span>
            </TabsTrigger>
            <TabsTrigger 
              value="products"
              className="flex flex-col items-center gap-1 data-[state=active]:bg-amber-100 data-[state=active]:text-amber-800 p-1"
            >
              <Plus className="h-3 w-3" />
              <span className="text-xs">Setor</span>
            </TabsTrigger>
            <TabsTrigger 
              value="profile"
              className="flex flex-col items-center gap-1 data-[state=active]:bg-amber-100 data-[state=active]:text-amber-800 p-1"
            >
              <User className="h-3 w-3" />
              <span className="text-xs">Profil</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <DashboardOverview />
          </TabsContent>

          <TabsContent value="materials">
            <MaterialsHub />
          </TabsContent>

          <TabsContent value="training">
            <TrainingHub />
          </TabsContent>

          <TabsContent value="products">
            <ProductSubmission />
          </TabsContent>

          <TabsContent value="profile">
            <ArtisanProfile />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
