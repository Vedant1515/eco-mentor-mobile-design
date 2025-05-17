
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Info, ArrowRight } from "lucide-react";
import BottomNavigation from "@/components/BottomNavigation";
import { motion } from "framer-motion";

const Tips = () => {
  // Sample tips data
  const tips = [
    {
      id: 1,
      title: "Take shorter showers",
      description: "Reducing shower time by 2 minutes can save up to 10 gallons of water.",
      category: "Water",
    },
    {
      id: 2,
      title: "Unplug electronics",
      description: "Even when turned off, many electronics use standby power. Unplug them to save energy.",
      category: "Energy",
    },
    {
      id: 3,
      title: "Use reusable bags",
      description: "A single reusable bag can replace hundreds of single-use plastic bags over its lifetime.",
      category: "Waste",
    },
    {
      id: 4,
      title: "Eat locally grown food",
      description: "Food that travels shorter distances requires less transportation and produces fewer emissions.",
      category: "Food",
    },
  ];

  return (
    <div className="mobile-container bg-gray-50">
      <div className="p-6 pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-2xl font-bold mb-1">Tips for You</h1>
          <p className="text-gray-500 mb-6">
            Simple ways to reduce your environmental impact
          </p>
        </motion.div>

        <div className="mb-6">
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            <Button variant="outline" className="rounded-full bg-eco-primary text-white border-none">
              All
            </Button>
            <Button variant="outline" className="rounded-full">Water</Button>
            <Button variant="outline" className="rounded-full">Energy</Button>
            <Button variant="outline" className="rounded-full">Food</Button>
            <Button variant="outline" className="rounded-full">Waste</Button>
          </div>
        </div>

        {tips.map((tip, index) => (
          <motion.div
            key={tip.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.3 }}
            className="mb-4"
          >
            <Card className="p-4 shadow-sm border-l-4 hover:shadow-md transition-shadow" 
                  style={{ borderLeftColor: tip.category === "Water" ? "#E3F2FD" : 
                                         tip.category === "Energy" ? "#FFF9C4" :
                                         tip.category === "Food" ? "#E8F5E9" : "#F5F5DC" }}>
              <div className="flex items-start mb-2">
                <div className="w-8 h-8 rounded-full bg-eco-light flex items-center justify-center mr-3 mt-1">
                  <Info className="h-4 w-4 text-eco-primary" />
                </div>
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-lg">{tip.title}</h3>
                    <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">{tip.category}</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">{tip.description}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}

        <Button variant="outline" className="w-full mt-4 flex items-center justify-center">
          <span>See More</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Tips;
