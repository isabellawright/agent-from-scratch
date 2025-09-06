import { openai } from './ai'

// completeion = youre completing this request 
export const runLLM = async({
    userMessage
}: {userMessage: string}) => {
    const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        temperature: 0.1, // reduce the randomess (entropy) -max is around 2
        messages : [
            {role: 'user' , content: userMessage}
        ]
    })
    return response.choices[0].message.content
}