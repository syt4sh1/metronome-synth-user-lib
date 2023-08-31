// Import necessary modules or classes
import Metronome from './metronome';
import Synthesizer from './synthesizer';

// Initialize the Metronome and Synthesizer
const metronome = new Metronome();
const synthesizer = new Synthesizer();

// Get DOM elements
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const bpmInput = document.getElementById('bpm-input');

// Set up event listeners
startButton.addEventListener('click', () => {
  const bpm = parseInt(bpmInput.value, 10);
  metronome.start(bpm, () => {
    synthesizer.playNote(); // Play a note each metronome tick
  });
});

stopButton.addEventListener('click', () => {
  metronome.stop();
  synthesizer.stop();
});

// Example: Connect the synthesizer to audio output (Web Audio API)
const audioContext = new AudioContext();
synthesizer.connect(audioContext.destination);
