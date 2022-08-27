import { Outlet, useParams } from "react-router-dom";
import { ConversationSidebar } from "../components/conversations/ConversationSidebar";
import { Page } from "../utils/styles";
import { ConversationPanel } from "./ConversationPanel";

export const ConversationPage = () => {
  const { id } = useParams();

  return (
    <Page>
      <ConversationSidebar />
      {!id && <ConversationPanel />}
      <Outlet />
    </Page>
  );
};
