import fetch from "node-fetch";

import Service from "./_interface";

import { info } from "~/helpers/log";

class StreamLabs extends Service {
  async speak(opts: { text: string; voice: string }) {
    const response = await fetch("https://streamlabs.com/polly/speak", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        voice: opts.voice ?? "Ricardo",
        text: opts.text,
      }),
    });

    info(`${JSON.stringify(response, null, 2)}`);

    if (!response.ok) {
      throw response;
    }

    const data = await response.json();
    if (!data.success) {
      throw new Error("Don't can get mp3 audio url of text sended");
    }

    const mp3 = await fetch(data.speak_url);
    const arrayBuffer = await mp3.arrayBuffer();
    const b64 = Buffer.from(arrayBuffer).toString("base64");

    return b64;
  }

  getVoices() {
    return [
      "(arb) - Female - Zeina",
      "(ca-ES) - Female - Arlet",
      "(cmn-CN) - Female - Zhiyu",
      "(da-DK) - Female - Naja",
      "(da-DK) - Male - Mads",
      "(nl-NL) - Female - Lotte",
      "(nl-NL) - Male - Ruben",
      "(en-AU) - Female - Nicole",
      "(en-AU) - Female - Olivia",
      "(en-AU) - Male - Russel",
      "(en-GB) - Female - Emma",
      "(en-GB) - Male - Brian",
      "(en-IN) - Female - Raveena",
      "(en-NZ) - Female - Aria",
      "(en-ZA) - Female - Ayanda",
      "(en-US) - Female–Child - Ivy",
      "(en-US) - Female - Kendra",
      "(en-US) - Female - Kimberly",
      "(en-US) - Female - Salli",
      "(en-US) - Male - Joey",
      "(en-US) - Male–Child - Justin",
      "(en-US) - Male–Child - Kevin",
      "(en-GB-WLS) - Male - Geraint",
      "(fr-FR) - Female - Céline",
      "(fr-FR) - Female - Léa",
      "(fr-FR) - Male - Mathieu",
      "(fr-CA) - Female - Chantal",
      "(fr-CA) - Female - Gabrielle",
      "(de-DE) - Female - Marlene",
      "(de-DE) - Female - Vicki",
      "(de-DE) - Male - Hans",
      "(de-AT) - Female - Hannah",
      "(is-IS) - Female - Dóra",
      "(is-IS) - Male - Karl",
      "(it-IT) - Female - Carla",
      "(it-IT) - Female - Bianca",
      "(it-IT) - Male - Giorgio",
      "(ja-JP) - Female - Mizuki",
      "(ja-JP) - Male - Takumi",
      "(ko-KR) - Female - Seoyeon",
      "(nb-NO) - Female - Liv",
      "(pl-PL) - Female - Ewa",
      "(pl-PL) - Female - Maja",
      "(pl-PL) - Male - Jacek",
      "(pl-PL) - Male - Jan",
      "(pt-BR) - Female - Camila",
      "(pt-BR) - Female - Vitória",
      "(pt-BR) - Male - Ricardo",
      "(pt-PT) - Female - Inês",
      "(pt-PT) - Male - Cristiano",
      "(ro-RO) - Female - Carmen",
      "(ru-RU) - Female - Tatyana",
      "(ru-RU) - Male - Maxim",
      "(es-ES) - Female - Conchita",
      "(es-ES) - Female - Lucia",
      "(es-ES) - Male - Enrique",
      "(es-MX) - Female - Mia",
      "(es-US) - Female - Penelope",
      "(es-US) - Male - Miguel",
      "(sv-SE) - Female - Astrid",
      "(tr-TR) - Female - Filiz",
      "(cy-GB) - Female - Gwyneth",
    ];
  }
}

export default new StreamLabs();
