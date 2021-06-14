import { Router } from "./router/Router";
import { UserProvider } from "./providers/UserProvider";

export function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
