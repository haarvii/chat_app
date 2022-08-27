import { Outlet, useParams } from "react-router-dom";
import { ConversationSidebar } from "../components/conversations/ConversationSidebar";
import { Page } from "../utils/styles";
import { ConversationPanel } from "./ConversationPanel";
import mockConversations from "../__mocks__/conversations";

export const ConversationPage = () => {
  const { id } = useParams();

  return (
    <Page>
      <ConversationSidebar conversations={mockConversations} />
      {!id && <ConversationPanel />}
      <Outlet />
    </Page>
  );
};
