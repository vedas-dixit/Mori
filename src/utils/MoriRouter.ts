"use client";
import { useRouter } from "next/navigation";

// Define route types
type Routes = {
  Home: string;
  Create: string;
  Profile: string;
  Discover: string;
};

// Route paths
const ROUTES: Routes = {
  Home: "/",
  Create: "/create",
  Profile: "/profile",
  Discover: "/discover",
};

// Custom hook for navigation
export const useMoriRouter = () => {
  const router = useRouter();

  return {
    Home: () => router.push(ROUTES.Home),
    Create: () => router.push(ROUTES.Create),
    Profile: () => router.push(ROUTES.Profile),
    Discover: () => router.push(ROUTES.Discover),
    back: () => router.back(),
    reload: () => router.refresh(),
  };
};

// Export route paths separately if needed
export default ROUTES;