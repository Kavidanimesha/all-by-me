import { drugArray } from "@/utils/constants";
import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function AllComplete({ options }) {
  const [drugs, setDrugs] = useState(drugArray);

  const { transcript, resetTranscript } = useSpeechRecognition({
    continuous: true,
  });

  useEffect(() => {
    const filteredDrugs = drugArray.filter((drug) => {
      const input = transcript.split(" ");
      return input.every((element) => {
        return drug.includes(element);
      });
    });
    setDrugs(filteredDrugs);
  }, [transcript]);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  return (
    <div>
      <button type="button" onClick={() => SpeechRecognition.startListening}>
        Start
      </button>
      <button type="button" onClick={() => SpeechRecognition.stopListening}>
        Stop
      </button>
      <p>{transcript}</p>
      <ul>
        {drugs.map((drug) => (
          <li key={drug}>{drug}</li>
        ))}
      </ul>
    </div>
  );
}

export default AllComplete;
