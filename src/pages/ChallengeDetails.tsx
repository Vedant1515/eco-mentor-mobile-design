
import { useState } from "react";
import { Award, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BottomNavigation from "@/components/BottomNavigation";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";

const ChallengeDetails = () => {
  const navigate = useNavigate();
  const [completed, setCompleted] = useState(false);
  const [attemptsRemaining, setAttemptsRemaining] = useState(2);

  // Challenge data
  const challenge = {
    title: "Meatless Monday",
    description: "Avoiding meat for just one day can reduce your carbon footprint significantly. Plant-based meals typically have a much lower environmental impact than meat-based ones.",
    points: 50,
    impact: "Saves approximately 1.5 kg CO2 emissions",
    tips: [
      "Try bean-based dishes like chili or curry",
      "Experiment with tofu or tempeh as protein alternatives",
      "Focus on vegetables and whole grains for satisfying meals"
    ]
  };

  const handleComplete = () => {
    setCompleted(true);
    if (attemptsRemaining > 0) {
      setAttemptsRemaining(attemptsRemaining - 1);
    }
    toast({
      title: "Challenge completed!",
      description: `You've earned ${challenge.points} points`,
      duration: 3000,
    });
  };

  return (
    <div className="mobile-container bg-gray-50">
      <div className="p-6 pb-24">
        <motion.div 
          className="mb-6 flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Button 
            variant="ghost" 
            size="icon" 
            className="mr-2 h-8 w-8" 
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold">Challenge Details</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          <Card className="mb-6 overflow-hidden">
            <div className="bg-eco-primary text-white p-4 flex items-center">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold">{challenge.title}</h2>
                <p className="text-sm opacity-90">Worth {challenge.points} points</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-700 mb-4">{challenge.description}</p>
              
              <div className="mb-4 p-3 bg-eco-light rounded-md">
                <p className="text-sm font-medium text-gray-700">{challenge.impact}</p>
              </div>
              
              <h3 className="font-medium mb-2">Tips:</h3>
              <ul className="list-disc pl-5 mb-6 text-sm text-gray-600">
                {challenge.tips.map((tip, index) => (
                  <li key={index} className="mb-1">{tip}</li>
                ))}
              </ul>
              
              <div className="flex flex-col">
                <Button
                  className={`mb-3 ${completed ? 'bg-green-600 hover:bg-green-700' : 'bg-eco-primary hover:bg-eco-secondary'}`}
                  onClick={handleComplete}
                  disabled={completed}
                >
                  {completed ? (
                    <span className="flex items-center">
                      <Check className="mr-2 h-4 w-4" /> Marked as Done
                    </span>
                  ) : (
                    'Mark as Done'
                  )}
                </Button>
                
                <div className="text-sm text-center text-gray-500">
                  Attempts remaining: {attemptsRemaining}
                </div>
              </div>
            </div>
          </Card>
          
          <div className="flex justify-between">
            <Button variant="outline" className="w-[48%]" onClick={() => navigate(-1)}>
              Back
            </Button>
            <Link to="/tips" className="w-[48%]">
              <Button className="w-full bg-eco-secondary">View Tips</Button>
            </Link>
          </div>
        </motion.div>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default ChallengeDetails;
