"use client";

import { useMemo, useState } from "react";
import { BubbleButton } from "@/components/bubble-button";

// Extend the Window interface to include webkitSpeechRecognition
declare global {
  interface Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
  }
}

interface VoiceInputBubbleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  setPrompt: (transcript: string) => void;
}

export const VoiceInputBubble: React.FC<VoiceInputBubbleProps> = (props) => {
  const [isListening, setIsListening] = useState(false);

  const recognition = useMemo(() => {
    // Ensure SpeechRecognition is available in the browser
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    // Configure recognition settings
    recognition.continuous = false; // Stops after the first result
    recognition.interimResults = false; // Only capture final results
    recognition.lang = "es-CO"; // Language can be set to any other (e.g., 'es-ES' for Spanish)});

    return recognition;
  }, []);

  // Start speech recognition
  const startListening = () => {
    setIsListening(true);
    recognition.start();

    recognition.onresult = (event: any) => {
      // Grab the transcribed speech text
      const transcript = event.results[0][0].transcript;
      props.setPrompt(transcript);
      setIsListening(false);
    };

    recognition.onerror = (event: any) => {
      console.error(event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false); // Ensure listening stops when recognition ends
    };
  };

  return (
    <BubbleButton
      $icon={isListening ? "pending" : "mic"}
      style={{ opacity: isListening ? 0.5 : 1 }}
      size="40px"
      onClick={startListening}
      disabled={isListening}
    />
  );
};
