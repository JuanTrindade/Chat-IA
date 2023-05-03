const {Configuration, OpenAIApi} = require('openai');

const configuration = new Configuration({
    apiKey: process.env.OPENAI_KEY,
})

const openai = new OpenAIApi(configuration);
const content =  "Diga olá ao github :D";

const responseMessage = async () => {
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{
            role: "user",
            content,
        }]
    });

    console.log(response.data.choices[0].message.content)
} 

responseMessage();
