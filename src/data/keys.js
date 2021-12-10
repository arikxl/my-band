import notes_A from '../sounds/piano/notes_A.mp3';
import notes_Ab from '../sounds/piano/notes_Ab.mp3';
import notes_B from '../sounds/piano/notes_B.mp3';
import notes_Bb from '../sounds/piano/notes_Bb.mp3';
import notes_C from '../sounds/piano/notes_C.mp3';
import notes_D from '../sounds/piano/notes_D.mp3';
import notes_Db from '../sounds/piano/notes_Db.mp3';
import notes_E from '../sounds/piano/notes_E.mp3';
import notes_Eb from '../sounds/piano/notes_Eb.mp3';
import notes_F from '../sounds/piano/notes_F.mp3';
import notes_G from '../sounds/piano/notes_G.mp3';
import notes_Gb from '../sounds/piano/notes_Gb.mp3';

import boom from '../sounds/drums/boom.wav';
import clap from '../sounds/drums/clap.wav';
import hihat from '../sounds/drums/hihat.wav';
import kick from '../sounds/drums/kick.wav';
import openhat from '../sounds/drums/openhat.wav';
import ride from '../sounds/drums/ride.wav';
import snare from '../sounds/drums/snare.wav';
import tink from '../sounds/drums/tink.wav';
import tom from '../sounds/drums/tom.wav';

import cool_riff from '../sounds/guitar/cool-riff.wav';
import distorted_slide from '../sounds/guitar/distorted-slide.wav';
import guitar_riff from '../sounds/guitar/guitar-riff.wav';
import happy_chords from '../sounds/guitar/happy-chords.wav';
import negative_tone from '../sounds/guitar/negative-tone.wav';
import notification_alert from '../sounds/guitar/notification-alert.wav';
import quick_tone from '../sounds/guitar/quick-tone.wav';
import single_note from '../sounds/guitar/single-note.wav';
import strum from '../sounds/guitar/strum.wav';

export const instruments = [
    { 
      instrument: "🎹Piano🎹",
      notes:[
  {
    audio: notes_A,
    letter: 'Q'
  },
  {
    audio: notes_Ab,
    letter: 'W'
  },
  {
    audio: notes_B,
    letter: 'E'
  },
  {
    audio: notes_Bb,
    letter: 'R'
  },
  {
    audio: notes_C,
    letter: 'T'
  },
  {
    audio: notes_D,
    letter: 'Y'
  },
  {
    audio: notes_Db,
    letter: 'U'
  },
  {
    audio: notes_E,
    letter: 'I'
  },
  {
    audio: notes_Eb,
    letter: 'O'
  },
  {
    audio: notes_F,
    letter: 'P'
  },
  {
    audio: notes_G,
    letter: '['
  },
  {
    audio: notes_Gb,
    letter: ']'
  },
]
},
  { 
    instrument: "🥁Drums🥁",
    notes:[
    {
      audio: boom,
      letter: 'A'
    },
    {
      audio: clap,
      letter: 'S'
    },
    {
      audio: hihat,
      letter: 'D'
    },
    {
      audio: kick,
      letter: 'F'
    },
    {
      audio: openhat,
      letter: 'G'
    },
    {
      audio: ride,
      letter: 'H'
    },
    {
      audio: snare,
      letter: 'J'
    },
    {
      audio: tink,
      letter: 'K'
    },
    {
      audio: tom,
      letter: 'L'
    }
  ]
  },
  { 
    instrument: "🎸Guitar🎸",
    notes:[
    {
      audio: cool_riff,
      letter: 'Z'
    },
    {
      audio: distorted_slide,
      letter: 'X'
    },
    {
      audio: guitar_riff,
      letter: 'C'
    },
    {
      audio: happy_chords,
      letter: 'V'
    },
    {
      audio: negative_tone,
      letter: 'B'
    },
    {
      audio: notification_alert,
      letter: 'N'
    },
    {
      audio: quick_tone,
      letter: 'M'
    },
    {
      audio: single_note,
      letter: ','
    },
    {
      audio: strum,
      letter: '.'
    }
  ]
  },
]