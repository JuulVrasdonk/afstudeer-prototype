import { useState, useEffect } from 'react';
const useNoteDetection = (countdownFinished) => {
  const [frequency, setFrequency] = useState(null);

  useEffect(() => {
    if (!countdownFinished) return;

    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 32768;

    // Add a biquad filter to the audio graph
    const filter = audioContext.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 1000;
    filter.Q.value = 20;

    const bufferLength = analyser.frequencyBinCount;
    const buffer = new Float32Array(bufferLength);

    const detectFrequency = () => {
      analyser.getFloatFrequencyData(buffer);
      const maxIndex = getMaxIndex(buffer);
      const frequency = indexToFrequency(maxIndex, audioContext.sampleRate, bufferLength);
      setFrequency(frequency);
      requestAnimationFrame(detectFrequency);
    };

    const getMaxIndex = (buffer) => {
      let maxIndex = 0;
      let maxValue = -Infinity;
    
      for (let i = 1; i < buffer.length - 1; i++) {
        const prevValue = buffer[i - 1];
        const currentValue = buffer[i];
        const nextValue = buffer[i + 1];
    
        if (currentValue > prevValue && currentValue > nextValue && currentValue > maxValue) {
          maxValue = currentValue;
          maxIndex = i;
        }
      }
      return maxIndex;
    };

    const indexToFrequency = (index, sampleRate, bufferLength) => {
      const frequencyResolution = sampleRate / bufferLength;
      return index * frequencyResolution;
    };

    const handleStream = (stream) => {
      const source = audioContext.createMediaStreamSource(stream);
      source.connect(filter); // Connect the filter to the audio graph
      filter.connect(analyser); // Connect the analyser to the audio graph
      requestAnimationFrame(detectFrequency);
    };

    const handleError = (error) => {
      console.error('Error accessing microphone:', error);
    };

    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(handleStream)
      .catch(handleError);
  }, [countdownFinished]);

  const noteNames = [
    'C', 'C#', 'D', 'D#', 'E', 'F',
    'F#', 'G', 'G#', 'A', 'A#', 'B'
  ];

  const frequencyToNotes = (frequency) => {
    const A4 = 440; // A4 frequency in Hz
    const C0 = A4 * Math.pow(2, -4.75); // frequency of lowest C note
    const noteIndex = 12 * Math.log2(frequency / C0);
    const noteIndexRounded = Math.round(noteIndex);
    const octave = noteIndexRounded == '-Infinity' ? '' : Math.floor(noteIndexRounded / 12) - 1 ;
    const noteName = noteNames[noteIndexRounded % 12] || '';
    return `${noteName}`;
  };

  return frequencyToNotes(frequency);
};

export default useNoteDetection;