import { Chatbox } from "../components/pages/ai-agents-page-detail/Chatbox";
import { ScriptResultDetail } from "../components/pages/ai-agents-page-detail/ScriptResultDetail";
import { ScriptContextProvider } from "../context/scriptContext";

export default function AiAgentsPageChat() {
  return (
    <ScriptContextProvider>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 h-full">
        <Chatbox />
        <ScriptResultDetail />
      </div>
    </ScriptContextProvider>
  );
}
