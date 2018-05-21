var messages = [];
var id = 0;

module.exports = {

    create: (req, res) => {
        // const { text, time } = req.body;
        // messages.push({ id, text, time });
        // id++;
        // res.status(200).send(messages);
        const { text, time } = req.body;
        messages.push({ id, text, time });
        id++;
        res.status(200).send(messages);
    },

    read: (req, res) => {
        res.status(200).send(messages);
    },

    update: (req, res) => {
        // const id =req.params.id;
        // const {text}= req.body;

        // var messageIndex = messages.findIndex((message)=>{
        //     return message.id===id;
        // });


        // messages[messageIndex].text = text;
        // res.status(200).send(messages);
        const { text } = req.body;
        const updateID = req.params.id;
        const messageIndex = messages.findIndex(message => message.id == updateID);
        let message = messages[messageIndex];

        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        };

        res.status(200).send(messages);
    },

    delete: (req, res) => {
        const id = req.params.id;
        var messageIndex = messages.findIndex((message) => {
            return message.id === id;
        });
        messages.splice(messageIndex, 1);
        res.status(200).send(messages);

    }

}