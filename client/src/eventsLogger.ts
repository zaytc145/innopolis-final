import api from "./api/api";
import LogTypeEnum from "./enums/LogTypeEnum";

interface Payload {
    type: LogTypeEnum,
    text: string
}


onmessage = function (e: MessageEvent<Payload>) {
    api.post("/logs", e.data)
}
