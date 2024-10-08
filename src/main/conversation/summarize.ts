import { Conversation } from "./Conversation";
import { buildSummarizeChatPrompt, convertChatToTextNoNames} from "./promptBuilder";


export async function summarize(conv: Conversation): Promise<string>{
    
    let summarization: string;
    if(conv.summarizationApiConnection.isChat()){
        summarization = await conv.summarizationApiConnection.complete(buildSummarizeChatPrompt(conv), false, {
        })
    }
    else{
        summarization = await conv.summarizationApiConnection.complete(convertChatToTextNoNames(buildSummarizeChatPrompt(conv), conv.config), false, {
        })
    }

    return summarization;
}