
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import BottomNavigation from "@/components/BottomNavigation";
import { UserCircle, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Profile = () => {
  // User data and settings
  const [user] = useState({
    name: "Alex Johnson",
    email: "alex@example.com",
    joined: "March 2025",
    streak: 14,
    points: 340,
    level: "Eco Enthusiast",
  });

  // Settings states
  const [dailyReminders, setDailyReminders] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(true);
  const [focusCategories] = useState([
    { name: "Food", active: true },
    { name: "Transport", active: true },
    { name: "Energy", active: false },
    { name: "Shopping", active: true },
  ]);

  return (
    <div className="mobile-container bg-gray-50">
      <div className="p-6 pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-2xl font-bold mb-6">Profile</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="mb-6"
        >
          <Card className="p-5 flex items-center">
            <div className="w-16 h-16 rounded-full bg-eco-light flex items-center justify-center mr-4">
              <UserCircle className="h-10 w-10 text-eco-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-gray-500 text-sm">{user.level}</p>
              <div className="flex mt-1">
                <span className="text-xs bg-eco-light px-2 py-1 rounded-full mr-2">
                  {user.points} points
                </span>
                <span className="text-xs bg-eco-light px-2 py-1 rounded-full">
                  {user.streak} day streak
                </span>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="mb-6"
        >
          <h2 className="text-lg font-medium mb-3">Notifications</h2>
          <Card className="p-4 mb-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <Label htmlFor="daily-reminders" className="font-medium">
                  Daily Reminders
                </Label>
                <p className="text-sm text-gray-500">
                  Get notified about your daily challenges
                </p>
              </div>
              <Switch
                id="daily-reminders"
                checked={dailyReminders}
                onCheckedChange={setDailyReminders}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="weekly-reports" className="font-medium">
                  Weekly Reports
                </Label>
                <p className="text-sm text-gray-500">
                  Receive a summary of your progress every week
                </p>
              </div>
              <Switch
                id="weekly-reports"
                checked={weeklyReports}
                onCheckedChange={setWeeklyReports}
              />
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <h2 className="text-lg font-medium mb-3">Focus Categories</h2>
          <Card className="divide-y">
            {focusCategories.map((category) => (
              <div
                key={category.name}
                className="flex items-center justify-between p-4"
              >
                <Label className="font-medium">{category.name}</Label>
                <div className="flex items-center">
                  <div
                    className={`w-3 h-3 rounded-full mr-2 ${
                      category.active ? "bg-eco-primary" : "bg-gray-300"
                    }`}
                  ></div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            ))}
          </Card>
          
          <div className="mt-6 space-y-3">
            <Button variant="outline" className="w-full">
              View Progress History
            </Button>
            <Button variant="outline" className="w-full">
              Help & Support
            </Button>
            <Button variant="outline" className="w-full text-red-500 hover:text-red-600">
              Log Out
            </Button>
          </div>
        </motion.div>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Profile;
