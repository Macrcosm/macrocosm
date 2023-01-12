import { useContext } from "react";

import { AiModalsContext } from "../context/AiModalsContext";
import { AuthContext } from "../context/AuthContext";

export const useAiModalsContext = () => useContext(AiModalsContext);
export const useAuthContext = () => useContext(AuthContext);
