# metronome-synth-user-lib
A versatile metronome-synth user library that combines metronome and synthesizer functionalities using the Web Audio API.

## Installation
`npm install metronome-synth-user-lib`

### Usage
```
// Import necessary modules or classes
import Metronome from 'metronome-synth-user-lib/metronome';
import Synthesizer from 'metronome-synth-user-lib/synthesizer';

// Initialize the Metronome and Synthesizer
const metronome = new Metronome();
const synthesizer = new Synthesizer();

// ... (rest of your code)
```
## Getting Started
Install the library using npm install metronome-synth-user-lib.
Import the necessary modules: Metronome and Synthesizer.
Initialize instances of Metronome and Synthesizer.
Set up event listeners to control the metronome and synthesizer.
Connect the synthesizer to an audio output using the Web Audio API.

## API Reference
*Metronome*

`start(bpm: number, callback: () => void): void:` Start the metronome with the specified BPM (beats per minute) and a callback function to execute on each tick.

`stop():` void: Stop the metronome.

*Synthesizer*

`playNote():` void: Play a note using the synthesizer.

`stop(): void:` Stop the synthesizer.

`connect(destination: AudioNode):` void: Connect the synthesizer to an audio output destination.
