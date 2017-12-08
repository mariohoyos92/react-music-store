import React from "react";

import ReactDOM from "react-dom";

import MusicStore from "./MusicStore";

ReactDOM.render(
  <MusicStore
    playlist={[
      {
        url:
          "https://s3.us-east-2.amazonaws.com/hassle-free-beats-untagged-audio/Tagged+Masters+Ready+For+Website/LANDR-Is+This+Enough+-+Trap+-+Untagged.mp3",
        artist: "Example Artist",

        title: "Is This Enough"
      },

      {
        url:
          "https://s3.us-east-2.amazonaws.com/hassle-free-beats-untagged-audio/Tagged+Masters+Ready+For+Website/LANDR-I+Like+That+-+Rap+-+Tagged.mp3",
        artist: "Another Artist",

        title: "I Like That"
      },
      {
        url:
          "https://s3.us-east-2.amazonaws.com/hassle-free-beats-untagged-audio/Tagged+Masters+Ready+For+Website/LANDR-Bad+Intentions+-+Rap+RnB.mp3",
        artist: "More Artists",

        title: "Bad Intentions"
      },
      {
        url:
          "https://s3.us-east-2.amazonaws.com/hassle-free-beats-untagged-audio/Tagged+Masters+Ready+For+Website/LANDR-FIRE+-Trap+tagged.mp3",
        artist: "Artist Name",

        title: "FIRE"
      },
      {
        url:
          "https://s3.us-east-2.amazonaws.com/hassle-free-beats-untagged-audio/Tagged+Masters+Ready+For+Website/LANDR-Backlash+-+HipHop+-+Tagged.mp3",
        artist: "Artist Name",

        title: "Backlash"
      },
      {
        url:
          "https://s3.us-east-2.amazonaws.com/hassle-free-beats-untagged-audio/Tagged+Masters+Ready+For+Website/LANDR-I'm+Back+-+Hip+Hop+-+Tagged.mp3",
        artist: "Artist Name",

        title: "I'm Back"
      },
      {
        url:
          "https://s3.us-east-2.amazonaws.com/hassle-free-beats-untagged-audio/Tagged+Masters+Ready+For+Website/LANDR-I'm+Ready+-+Rap+-+Tagged.mp3",
        artist: "Artist Name",

        title: "I'm Ready"
      },
      {
        url:
          "https://s3.us-east-2.amazonaws.com/hassle-free-beats-untagged-audio/Tagged+Masters+Ready+For+Website/LANDR-Inspire+-+Pop+Hip+Hop+-+Tagged.mp3",
        artist: "Artist Name",

        title: "Inspire"
      },
      {
        url:
          "https://s3.us-east-2.amazonaws.com/hassle-free-beats-untagged-audio/Tagged+Masters+Ready+For+Website/LANDR-Kings+Hip+Hop+-+Tagged.mp3",
        artist: "Artist Name",

        title: "Kings"
      },
      {
        url:
          "https://s3.us-east-2.amazonaws.com/hassle-free-beats-untagged-audio/Tagged+Masters+Ready+For+Website/LANDR-Leave+With+Me+-Hip+Hop+-tagged.mp3",
        artist: "Artist Name",

        title: "Leave With Me"
      },
      {
        url:
          "https://s3.us-east-2.amazonaws.com/hassle-free-beats-untagged-audio/Tagged+Masters+Ready+For+Website/LANDR-Like+Me+-RnB+-+Tagged.mp3",
        artist: "Artist Name",

        title: "Like Me"
      },
      {
        url:
          "https://s3.us-east-2.amazonaws.com/hassle-free-beats-untagged-audio/Tagged+Masters+Ready+For+Website/LANDR-Motherland+-+Alt-Rap+-+Tagged.mp3",
        artist: "Artist Name",

        title: "Motherland"
      },
      {
        url:
          "https://s3.us-east-2.amazonaws.com/hassle-free-beats-untagged-audio/Tagged+Masters+Ready+For+Website/LANDR-Need+-+Pop+Hip+Hop+-+Tagged.mp3",
        artist: "Artist Name",

        title: "Need"
      },
      {
        url:
          "https://s3.us-east-2.amazonaws.com/hassle-free-beats-untagged-audio/Tagged+Masters+Ready+For+Website/LANDR-Not+About+You+-+Rap+-+Tagged.mp3",
        artist: "Artist Name",

        title: "Not About You"
      },
      {
        url:
          "https://s3.us-east-2.amazonaws.com/hassle-free-beats-untagged-audio/Tagged+Masters+Ready+For+Website/LANDR-Revenge+-+Hip+Hop+-+Tagged.mp3",
        artist: "Artist Name",

        title: "Revenge"
      },
      {
        url:
          "https://s3.us-east-2.amazonaws.com/hassle-free-beats-untagged-audio/Tagged+Masters+Ready+For+Website/LANDR-Ride+-+Hip+Hop+-+Tagged.mp3",
        artist: "Artist Name",

        title: "Ride"
      },
      {
        url:
          "https://s3.us-east-2.amazonaws.com/hassle-free-beats-untagged-audio/Tagged+Masters+Ready+For+Website/LANDR-The+Real+-+Trap+-+Tagged.mp3",
        artist: "Artist Name",

        title: "The Real"
      },
      {
        url:
          "https://s3.us-east-2.amazonaws.com/hassle-free-beats-untagged-audio/Tagged+Masters+Ready+For+Website/LANDR-What+Ima+Tell+-+Hip+Hop+-+Tagged.mp3",
        artist: "Artist Name",

        title: "What Ima Tell"
      },
      {
        url:
          "https://s3.us-east-2.amazonaws.com/hassle-free-beats-untagged-audio/Tagged+Masters+Ready+For+Website/LANDR-What+You+Heard+-+Trap+-+Tagged.mp3",
        artist: "Artist Name",

        title: "What You Heard"
      },
      {
        url:
          "https://s3.us-east-2.amazonaws.com/hassle-free-beats-untagged-audio/Tagged+Masters+Ready+For+Website/LANDR-You+Askin+For+It+-+Dirty+South.mp3",
        artist: "Artist Name",

        title: "You Askin For It"
      },
      {
        url:
          "https://s3.us-east-2.amazonaws.com/hassle-free-beats-untagged-audio/Tagged+Masters+Ready+For+Website/LANDR-You+Want+Me+-+Alt-Rap+-+Tagged.mp3",
        artist: "Artist Name",

        title: "You Want Me"
      }
    ]}
    accent="rgb(128, 1, 1)"
    pictureSrc={
      "https://s3.us-east-2.amazonaws.com/hassle-free-beats-untagged-audio/header-logo.png"
    }
    headerAndIconClr="black"
  />,
  document.getElementById("root")
);
