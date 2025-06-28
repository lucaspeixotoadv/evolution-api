import { Constructor } from '@api/integrations/integration.dto';

export class ChatwootDto {
  enabled?: boolean;
  accountId?: string;
  token?: string;
  url?: string;
  nameInbox?: string;
  signMsg?: boolean;
  signMsgUserOnly?: boolean; // 🆕 NOVA FUNCIONALIDADE
  signDelimiter?: string;
  number?: string;
  reopenConversation?: boolean;
  conversationPending?: boolean;
  mergeBrazilContacts?: boolean;
  importContacts?: boolean;
  importMessages?: boolean;
  daysLimitImportMessages?: number;
  autoCreate?: boolean;
  organization?: string;
  logo?: string;
  ignoreJids?: string[];
}

export function ChatwootInstanceMixin<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    chatwootAccountId?: string;
    chatwootToken?: string;
    chatwootUrl?: string;
    chatwootSignMsg?: boolean;
    chatwootSignMsgUserOnly?: boolean; // 🆕 NOVA FUNCIONALIDADE
    chatwootReopenConversation?: boolean;
    chatwootConversationPending?: boolean;
    chatwootMergeBrazilContacts?: boolean;
    chatwootImportContacts?: boolean;
    chatwootImportMessages?: boolean;
    chatwootDaysLimitImportMessages?: number;
    chatwootNameInbox?: string;
    chatwootOrganization?: string;
    chatwootLogo?: string;
    chatwootAutoCreate?: boolean;
  };
}
