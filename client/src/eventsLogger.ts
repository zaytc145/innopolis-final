import api from "./api/api.ts";
import LogTypeEnum from "./enums/LogTypeEnum.ts";

interface Payload {
    type: LogTypeEnum,
    text: string
}


onmessage = function (e: MessageEvent<Payload>) {
    api.post("/logs", e.data)
}
