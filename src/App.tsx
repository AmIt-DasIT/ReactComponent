import React, { useEffect, useRef, useState } from 'react';
import { Reorder, motion, progress } from "framer-motion";
import './Scss/App.scss';
import AudioPlayer from './components/Audio/AudioPlayer';
import PageFolding from './components/PageFolding/PageFolding';
import Menu from './components/Menu/Menu';
import CardFlip from './components/CardAnimation/CardFlip/CardFlip';
import ProfileCard from './components/CardAnimation/Card/ProfileCard';
import Waterdrop from './components/Waterdrop/Waterdrop';
import DragDrop from './components/DragDrop/DragDrop';
import Polygon from './components/Polygon/Polygon';
import Clock from './components/Clock/Clock';
import CodeWeb from './components/CodeinWeb/CodeWeb';
import Cube from './components/Cube/Cube';
import ImageSplit from './components/ImageSplit/ImageSplit';
import Ribbon from './components/Ribbon/Ribbon';
import AnimatedWeb from './components/AnimatedWeb/AnimatedWeb';
import Loader from './components/LoadingAnimation/Loader/Loader';
import Sun from './components/Sun/Sun';
import Pendulam from './components/Pendulam/Pendulam';
import Signup from './components/Signup/Signup';
import CardTilt from './components/CardAnimation/CardTilt/CardTilt';
import Online from './components/Online-offline/Online';
import LoadingDot from './components/LoadingAnimation/LoadingDot/LoadingDot';
import ScrollEffect from './components/ScrollEffect/ScrollEffect';
import Button from './components/Button/Button';



function App() {

  return (
    <div className='container'>
      {/* <AudioPlayer /> */}
      {/* <PageFolding /> */}
      {/* <Menu /> */}
      {/* <CardFlip /> */}
      {/* <ProfileCard /> */}
      {/* <Waterdrop /> */}
      {/* <DragDrop /> */}
      {/* <Polygon /> */}
      {/* <Clock /> */}
      {/* <CodeWeb /> */}
      {/* <Cube /> */}
      {/* <ImageSplit /> */}
      {/* <Ribbon /> */}
      {/* <AnimatedWeb /> */}
      {/* <Loader /> */}
      {/* <Sun /> */}
      {/* <Pendulam /> */}
      {/* <Signup /> */}
      {/* <CardTilt /> */}
      {/* <Online />  */}
      {/* <LoadingDot /> */}
      {/* <ScrollEffect /> */}
      <Button />
    </div>

  )
}

export default App;
