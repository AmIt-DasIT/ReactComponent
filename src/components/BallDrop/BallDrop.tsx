import React from 'react';
import './BallDrop.css';
import 'css-doodle';

export default function BallDrop() {
    return (
        <div>
            <style>
                {`
          css-doodle#export-test {
            --color0: #97F4FF;
            --color1: #97F4FF;
            --color2: #00FFF3;
            --color3: #00A1FF;
            --color4: #FF8DFF;
            --color5: #FF007E;

            --rule: (
              :doodle {
                @grid: 1x13;
                @size: 8em 12em;
                overflow: hidden;
              }

              :container {
                
              }
              
              background: var(--color0);

              @nth(1, 2, 3, 4, 5, 6) {
                width: @calc(70 - @i() * 10)%;
                height: @calc(23.33 - @i() * 3.33)%;
                position: absolute;
                top: @calc(26.66 + @i() * 3.33)%;
                left: 20%;
                border-top-left-radius: 30rem;
                border-top-right-radius: 30rem;
                background-image: linear-gradient(45deg, var(--color2), var(--color3));
                overflow: hidden;
                /* 0.2 could be 0.2, 0.4, 0.6, 0.8, 1.0 */
                transform: scaleX(@pick(@rand(-0.6, -1), @rand(0.6, 1)));
                -webkit-transition: ease 400ms;
                transition: ease 400ms;
                z-index: @i();
              }
              @nth(7, 8, 9, 10, 11, 12) {
                width: @calc(70 - (@i() - 6) * 10)%;
                height: @calc(23.33 - (@i() - 6) * 3.33)%;
                position: absolute;
                top: 50%;
                left: @calc(10 + (@i() - 6) * 10)%;
                border-bottom-left-radius: 30rem;
                border-bottom-right-radius: 30rem;
                background-image: linear-gradient(45deg, var(--color4), var(--color5));
                overflow: hidden;
                /* 0.2 could be 0.2, 0.4, 0.6, 0.8, 1.0 */
                -webkit-transform: scaleX(@pick(@rand(-0.6, -1), @rand(0.6, 1)));
                transform: scaleX(@pick(@rand(-0.2, -1), @rand(0.6, 1)));
                -webkit-transition: ease 400ms;
                transition: ease 400ms;
                z-index: @i();
              }
              /* Background */
              @nth(13) {
                position: absolute;
                background: linear-gradient(0deg, var(--color1) 50%, var(--color0) 50%);
                width: 300%;
                left: -100%;
                top: -50%;
                height: 200%;
              }




            );
          }
        `}
            </style>
            {/* @ts-ignore */}
            <css-doodle
                id="export-test"
                seed="0000"
                use="var(--rule)"
            />
        </div>
    )
}
