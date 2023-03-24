import React from 'react'
import './ProfileCard.css'

export default function ProfileCard() {
    return (
        <div className='container'>
            <div className="box">
                <img src={require('../../../user.jpg')} alt='' />
                <div className="details">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Fugiat natus quis eius aliquid voluptatum temporibus in nesciunt corporis officia deserunt,
                    ut perferendis doloribus eaque minus? Atque, est rerum maxime porrovelit repudiandae.
                    <div style={{ display: 'flex', paddingTop: '24px', justifyContent: 'flex-start', gap: '30px' }}>
                        <div className='icon'>&#127759;</div>
                        <div className='icon'>&#127809;</div>
                        <div className='icon'>&#127775;</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
