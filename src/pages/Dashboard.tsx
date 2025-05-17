
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, ChevronRight } from "lucide-react";
import CarbonGauge from "@/components/CarbonGauge";
import BottomNavigation from "@/components/BottomNavigation";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Dashboard = () => {
  // Mock data
  const [carbonValue] = useState(4.2);
  const [maxCarbonValue] = useState(10);
  const [carbonLabel] = useState("Moderate");
  
  const [todaysChallenge] = useState({
    title: "Meatless Monday",
    description: "Skip meat today to reduce your carbon footprint",
    icon: <Award className="h-6 w-6" />,
    attemptsLeft: 2,
  });

  return (
    <div className="mobile-container bg-gray-50">
      <div className="p-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-2xl font-bold mb-1">Good morning!</h1>
          <p className="text-gray-500 mb-6">
            Track your impact and complete today's challenge
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="mb-6"
        >
          <Card className="p-4 shadow-sm">
            <h2 className="text-lg font-medium mb-4 text-center">Daily Carbon Emission</h2>
            <CarbonGauge 
              value={carbonValue} 
              maxValue={maxCarbonValue}
              label={carbonLabel}
            />
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <h2 className="text-xl font-bold mb-3">Today's Challenge</h2>
          <Link to="/challenges">
            <Card className="p-4 shadow-sm flex justify-between items-center bg-white hover:bg-gray-50 transition-colors">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-eco-light flex items-center justify-center mr-4">
                  {todaysChallenge.icon}
                </div>
                <div>
                  <h3 className="font-medium">{todaysChallenge.title}</h3>
                  <p className="text-sm text-gray-500 truncate max-w-[200px]">
                    {todaysChallenge.description}
                  </p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </Card>
          </Link>
          
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-3">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-20 flex flex-col p-2 bg-eco-blue border-0">
                <span className="text-sm">Log Meal</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col p-2 bg-eco-light border-0">
                <span className="text-sm">Log Transport</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col p-2 bg-eco-beige border-0">
                <span className="text-sm">Energy Usage</span>
              </Button>
              <Link to="/tips" className="w-full">
                <Button variant="outline" className="h-20 flex flex-col p-2 bg-eco-brown/20 border-0 w-full">
                  <span className="text-sm">Eco Tips</span>
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Dashboard;
