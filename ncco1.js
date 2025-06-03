[
    {
        "action": "talk",
        "bargeIn": false,
        "loop": "1",
        "text": "this is a long piece of text"
    },
    {
        "action": "record",
        "channels": "2",
        "format": "wav",
        "split": "conversation"
    },
    {
        "action": "talk",
        "bargeIn": true,
        "premium": true,
        "style": "6",
        "text": "Are you looking near zip code 4 3 1 3 8 ? If this is correct, press 1, otherwise press 2."
    },
    {
        "action": "input",
        "dtmf":
        {
            "maxDigits": "1",
            "timeOut": 10
        },
        "eventMethod": "GET",
        "eventUrl":
        [
            "https://raw.githubusercontent.com/michael7441/aws-test/refs/heads/main/ncco2.js"
        ],
        "type":
        [
            "dtmf"
        ]
    }
]
