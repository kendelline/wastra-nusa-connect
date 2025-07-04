
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <Navigation />
      
      {/* Header Section */}
      <header className="bg-gradient-to-r from-amber-800 to-orange-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Wastra Nusa</h1>
              <p className="text-xl text-amber-100 max-w-2xl">
                Memberdayakan Perajin Tradisional di Era Digital
              </p>
              <p className="text-amber-200 mt-2">
                Platform untuk perajin Songket, Tapis, dan kain tradisional Indonesia
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16 border-2 border-amber-200">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-amber-600 text-white text-lg">SN</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">Siti Nurhaliza</p>
                <p className="text-amber-200 text-sm">Perajin Songket Palembang</p>
                <Badge variant="secondary" className="mt-1 bg-amber-100 text-amber-800">
                  Level Mahir
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Navigation Tabs */}
      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8 bg-white shadow-sm border">
            <TabsTrigger 
              value="dashboard" 
              className="flex items-center gap-2 data-[state=active]:bg-amber-100 data-[state=active]:text-amber-800"
            >
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger 
              value="materials"
              className="flex items-center gap-2 data-[state=active]:bg-amber-100 data-[state=active]:text-amber-800"
            >
              <Package className="h-4 w-4" />
              <span className="hidden sm:inline">Bahan & Alat</span>
            </TabsTrigger>
            <TabsTrigger 
              value="training"
              className="flex items-center gap-2 data-[state=active]:bg-amber-100 data-[state=active]:text-amber-800"
            >
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Pelatihan</span>
            </TabsTrigger>
            <TabsTrigger 
              value="products"
              className="flex items-center gap-2 data-[state=active]:bg-amber-100 data-[state=active]:text-amber-800"
            >
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">Setor Produk</span>
            </TabsTrigger>
            <TabsTrigger 
              value="profile"
              className="flex items-center gap-2 data-[state=active]:bg-amber-100 data-[state=active]:text-amber-800"
            >
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Profil</span>
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
