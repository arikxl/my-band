(this["webpackJsonpmy-band"]=this["webpackJsonpmy-band"]||[]).push([[0],{11:function(t,e,a){"use strict";a.r(e);var i=a(1),o=a.n(i),c=a(3),n=a.n(c),r=(a(9),a(0)),d=function(t){var e=t.title,a=t.color;return Object(r.jsx)("h2",{style:{color:a},className:"flex",children:e})},s=a(4),u=function(t){var e=t.note,a=t.color,o=Object(i.useState)(!1),c=Object(s.a)(o,2),n=c[0],d=c[1],u=Object(i.useRef)(null),l=function(t){var a=new Audio(e.audio);("click"===t.type||t.key.toLowerCase()===e.letter.toLowerCase())&&(d(!0),a.play()),setTimeout((function(){d(!1)}),500)};return Object(i.useEffect)((function(){return document.addEventListener("keydown",l),function(){return document.removeEventListener("keydown",l)}})),Object(r.jsxs)("button",{className:n?"active flex":"flex",style:{backgroundColor:a},onClick:function(t){return l(t)},children:[e.letter,Object(r.jsx)("audio",{src:e.audio,ref:u})]})},l=function(t){var e=t.instrument,a=t.color;return Object(r.jsxs)("main",{children:[Object(r.jsx)(d,{color:a,title:e.instrument}),Object(r.jsx)("div",{className:"instrument flex",children:e.notes.map((function(t,e){return Object(r.jsx)(u,{note:t,color:a},e)}))})]})},m=[{instrument:"\ud83c\udfb9Piano\ud83c\udfb9",notes:[{audio:a.p+"static/media/notes_A.b26ef2a1.mp3",letter:"Q"},{audio:a.p+"static/media/notes_Ab.a5784841.mp3",letter:"W"},{audio:a.p+"static/media/notes_B.e70be642.mp3",letter:"E"},{audio:a.p+"static/media/notes_Bb.ee14cec1.mp3",letter:"R"},{audio:a.p+"static/media/notes_C.11c6e514.mp3",letter:"T"},{audio:a.p+"static/media/notes_D.2f57fa42.mp3",letter:"Y"},{audio:a.p+"static/media/notes_Db.2f6a2c5f.mp3",letter:"U"},{audio:a.p+"static/media/notes_E.598f1567.mp3",letter:"I"},{audio:a.p+"static/media/notes_Eb.aee137c2.mp3",letter:"O"},{audio:a.p+"static/media/notes_F.3cf62cd6.mp3",letter:"P"},{audio:a.p+"static/media/notes_G.44d14014.mp3",letter:"["},{audio:a.p+"static/media/notes_Gb.c5319dc5.mp3",letter:"]"}]},{instrument:"\ud83e\udd41Drums\ud83e\udd41",notes:[{audio:a.p+"static/media/boom.d89f41a5.wav",letter:"A"},{audio:a.p+"static/media/clap.eb738e52.wav",letter:"S"},{audio:a.p+"static/media/hihat.0273528c.wav",letter:"D"},{audio:a.p+"static/media/kick.1d842c55.wav",letter:"F"},{audio:a.p+"static/media/openhat.482e5231.wav",letter:"G"},{audio:a.p+"static/media/ride.44e63854.wav",letter:"H"},{audio:a.p+"static/media/snare.3aa3f943.wav",letter:"J"},{audio:a.p+"static/media/tink.5b878d5d.wav",letter:"K"},{audio:a.p+"static/media/tom.52db9c23.wav",letter:"L"}]},{instrument:"\ud83c\udfb8Guitar\ud83c\udfb8",notes:[{audio:a.p+"static/media/cool-riff.0c64de49.wav",letter:"Z"},{audio:a.p+"static/media/distorted-slide.5f68e84a.wav",letter:"X"},{audio:a.p+"static/media/guitar-riff.eedae018.wav",letter:"C"},{audio:a.p+"static/media/happy-chords.650939ee.wav",letter:"V"},{audio:a.p+"static/media/negative-tone.cab1c2b6.wav",letter:"B"},{audio:a.p+"static/media/notification-alert.81f8c8d5.wav",letter:"N"},{audio:a.p+"static/media/quick-tone.b837981d.wav",letter:"M"},{audio:a.p+"static/media/single-note.f213028b.wav",letter:","},{audio:a.p+"static/media/strum.05692099.wav",letter:"."}]}];var p=function(){var t=function(){for(var t="#",e=0;e<6;e++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t};return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{style:{color:"".concat(t())},children:"\ud83c\udfb6MY BAND\ud83c\udfbc"}),m.map((function(e,a){return Object(r.jsx)("div",{className:"instrument-container flex",children:Object(r.jsx)(l,{color:t(),instrument:e})},a)}))]})};n.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root"))},9:function(t,e,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.46933de1.chunk.js.map