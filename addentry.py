import requests

def addentry(score: int, time : int, name: str, activityId : int, templateId: int) -> None:
    url = "https://wordwall.net/leaderboardajax/addentry"
    data = {
        "score": score,
        "time": time,
        "name": name,
        "mode": 1,
        "activityId": activityId,
        "templateId": templateId
    }
    response = requests.post(url, data=data)
    print(response.text)
    