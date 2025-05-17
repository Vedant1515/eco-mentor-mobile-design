
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LeafIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="mobile-container bg-eco-light">
      <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-eco-primary mb-6">
            <LeafIcon className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">EcoMentor</h1>
          <p className="text-lg text-gray-600 mb-10">
            Personalized Sustainability Coaching
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-full max-w-xs"
        >
          <Link to="/dashboard">
            <Button className="w-full py-6 text-lg bg-eco-primary hover:bg-eco-secondary transition-all">
              Get Started
            </Button>
          </Link>
          
          <p className="mt-8 text-sm text-gray-500">
            Join thousands of users reducing their carbon footprint with small, 
            daily actions
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
