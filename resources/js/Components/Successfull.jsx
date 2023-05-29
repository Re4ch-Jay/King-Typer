import React from 'react'
import ConfettiExplosion from 'react-confetti-explosion';

export default function Successfull({ isExploding }) {

    return <div>{isExploding && <ConfettiExplosion particleCount={200} duration={3000} width={3000} />}</div>;
}