import React from 'react';
import './Tree.css';

export default function Tree() {
    return (
        <div className="mud">
            <div className='tree'>
                <div className="flower">
                    <div className='leaf'></div>
                    <div className='leaf'></div>
                    <div className='leaf'></div>
                    <div className='leaf'></div>
                    <span className='stick'>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 800">
                            <g stroke-width="10" stroke="#8c22b6" fill="none" stroke-linecap="round" stroke-linejoin="round" transform="matrix(0.8290375725550416,0.5591929034707469,-0.5591929034707469,0.8290375725550416,268.3851381706855,-110.55675813265566)">
                                <path d="M170.5 250.5Q288.5 296.5 320 400Q353.5 523.5 469.5 549.5 " marker-end="url(#SvgjsMarker1517)">
                                </path>
                            </g>
                            <defs>
                                <marker markerWidth="1" markerHeight="1" refX="0.5" refY="0.5" viewBox="0 0 1 1" orient="auto" id="SvgjsMarker1517">
                                    <polygon points="0,1 0.3333333333333333,0.5 0,0 1,0.5" fill="#8c22b6">
                                    </polygon>
                                </marker>
                            </defs>
                        </svg>
                    </span>
                </div>
                <div className="flower">
                    <div className='leaf'></div>
                    <div className='leaf'></div>
                    <div className='leaf'></div>
                    <span className='stick1'></span>
                </div>
                <div className="flower">
                    <div className='leaf'></div>
                    <div className='leaf'></div>
                    <div className='leaf'></div>
                    <span className='stick2'></span>
                </div>
            </div>
            <div className='water'>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 800">
                    <g stroke-width="11" stroke="hsl(231, 100%, 64%)" fill="none" stroke-linecap="round" stroke-linejoin="round" transform="matrix(1,0,0,1,6,0)">
                        <path d="M352.66026306152344 257.5Q-89.33973693847656 403.5 495.16026306152344 400Q106.66026306152344 516.5 637.6602630615234 542.5 " marker-end="url(#SvgjsMarker1857)">
                        </path></g><defs><marker markerWidth="1" markerHeight="1" refX="0.5" refY="0.5" viewBox="0 0 1 1" orient="auto" id="SvgjsMarker1857">
                            <polygon points="0,1 0.3333333333333333,0.5 0,0 1,0.5" fill="hsl(231, 100%, 64%)">
                            </polygon>
                        </marker>
                    </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 800" id='wave'>
                    <g stroke-width="11" stroke="hsl(231, 100%, 64%)" fill="none" stroke-linecap="round" stroke-linejoin="round" transform="matrix(1,0,0,1,6,0)">
                        <path d="M352.66026306152344 257.5Q-89.33973693847656 403.5 495.16026306152344 400Q106.66026306152344 516.5 637.6602630615234 542.5 " marker-end="url(#SvgjsMarker1857)">
                        </path></g><defs><marker markerWidth="1" markerHeight="1" refX="0.5" refY="0.5" viewBox="0 0 1 1" orient="auto" id="SvgjsMarker1857">
                            <polygon points="0,1 0.3333333333333333,0.5 0,0 1,0.5" fill="hsl(231, 100%, 64%)">
                            </polygon>
                        </marker>
                    </defs>
                </svg>
            </div>
        </div>
    )
}
