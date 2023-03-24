import React, { useEffect, useState } from 'react'
import './AudioPlayer.css';

export default function AudioPlayer() {

    const [songArray, setSongArray] = useState<any>([])
    const [apiCall, setApiCall] = useState<any>([])
    const [show, setShow] = useState(false)
    const [count, setCount] = useState(0);
    const [val, setVal] = useState('');
    let source = document.querySelector('source') as HTMLSourceElement;
    let audio = document.getElementById('music') as HTMLAudioElement;
    const [state, setState] = useState({
        currentTime: '',
        duration: '',
        range: '',
        song: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            await fetch("https://api.napster.com/v2.0/playlists/pp.225974698/tracks?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm&limit=200", {
                method: 'GET',
                headers: {
                }
            }).then(response => response.json())
                .then(res => {
                    setSongArray(res.tracks);
                    setApiCall(true)
                })
                .catch(err => console.log(err));
        }

        fetchData()
    }, [])



    const playSong = () => {
        audio.play();
        setShow(true);
    }
    const pauseSong = () => {
        audio.pause();
        setShow(false);
    }
    const nextHandler = () => {
        setState({ ...state, song: `${songArray[count].previewURL}` });
        source.src = state.song;
        audio.load();
        playSong();
    }

    const prevHandler = () => {
        setState({ ...state, song: `${songArray[count].previewURL}` });
        source.src = state.song;
        audio.load();
        playSong()
    }

    useEffect(() => {
        val === 'next' ? nextHandler() : val === 'prev' ? prevHandler() : console.log('Load')
    }, [count])

    const timeHandler = (e: { target: { value: any; }; }) => {
        playSong()
        audio.currentTime = Number(e.target.value)
    }

    // apiCall && setState({ currentTime: `0.00`, duration: `${songArray[0].playbackSeconds}`, range: `${songArray[0].playbackSeconds}`, song: `${songArray[0].previewURL}` })

    audio?.addEventListener('timeupdate', () => {
        setState({ ...state, currentTime: (audio?.currentTime).toFixed(2), duration: (audio?.duration).toFixed(2), range: (audio?.currentTime).toFixed(2) })
    }, false);

    const decTotime = (dec: number) => {
        const time = Number(`${(dec / 60).toFixed(2)}`.split('.')[0]) + Number(((Number(`${(dec / 60).toFixed(2)}`.split('.')[1]) / 10000 * 60)).toFixed(2));
        return time;
    }

    return (
        <div className="container">
            <div className="box">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span style={{ fontSize: '15px' }}>{songArray[count]?.albumName}</span>
                    <span style={{ fontSize: '12px' }}>{songArray[count]?.artistName}</span>
                </div>
                <audio id="music" autoPlay>
                    {apiCall && <source src={state.song} type="audio/mpeg" />}
                </audio>
                <div className="slider">
                    <input type='range' min={0} max={state.duration === '0.00' ? songArray[0]?.playbackSeconds : state.duration} id='progress' value={state.range} onChange={timeHandler} />
                    {apiCall && <div style={{ display: 'flex', justifyContent: 'space-between', color: '#fff' }}>
                        <div className='time'>
                            {!isNaN(Number(decTotime(Number(state.currentTime)).toFixed(2)))
                                ? decTotime(Number(state.currentTime)).toFixed(2)
                                : '0.00'}
                        </div>
                        <div className='time'>
                            {!isNaN(Number(decTotime(Number(state.currentTime)).toFixed(2)))
                                ? decTotime(Number(state.duration)).toFixed(2)
                                : songArray[0]?.playbackSeconds}
                        </div>
                    </div>}
                </div>
                <div className='control'>
                    <i className="fa fa-solid fa-backward-step fa-xl" onClick={() => (setCount(count => count > 0 ? count - 1 : songArray.length - 1), setVal('prev'))}></i>
                    {show ? <i className="fa fa-solid fa-circle-pause fa-2xl" onClick={pauseSong}></i> :
                        <i className="fa fa-solid fa-play  fa-2xl" onClick={playSong}></i>}
                    <i className={`fa fa-solid fa-forward-step fa-xl`} onClick={() => (setCount(count => count < songArray.length - 1 ? count + 1 : 0), setVal('next'))}></i>
                </div>
            </div>
        </div>
    )
}
