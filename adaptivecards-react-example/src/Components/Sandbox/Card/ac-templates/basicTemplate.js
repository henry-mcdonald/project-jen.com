const basicTemplate = {
    "type":"AdaptiveCard",
    "msTeams": {"width": "full"},
    "body": [
        {
            "type": "TextBlock",
            "size": "Medium",
            "weight": "Bolder",
            "text": "${title}",
            "wrap": true
        },
    ],
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "version": "1.4"
}