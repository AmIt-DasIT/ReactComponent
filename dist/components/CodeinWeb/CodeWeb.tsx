import React from 'react'

export default function CodeWeb() {
     window.addEventListener('click', () => {
    let code1: any = document.getElementById('copy');
    code1.innerHTML = 'copied !'
    setTimeout(() => {
      code1.innerHTML = 'copy'
    }, 5000)
  })
    return (
        <div className='container'>
            <div className='box'>
                <div>
                    <pre id='code' contentEditable >
                        {`
                        <!DOCTYPE html>
                        <html>
                        <head>
                            <title>Title of the document</title>
                        </head>
                        <body>
                            <pre>
                            <code>
                                body {
                                color: yellow;
                                font-size: 16px;
                                line-height: 1.5;
                                }
                            </code>
                            </pre>
                        </body>
                        </html>
                        `}
                    </pre>
                    {/* @ts-ignore */}
                    <span onClick={() => navigator.clipboard.writeText(document.getElementById('code')?.textContent)} style={{ cursor: 'pointer' }} id='copy'>copy</span>
                </div>
            </div>
        </div>
    )
}
