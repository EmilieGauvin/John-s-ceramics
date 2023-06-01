import { Environment, ScrollControls, Scroll } from '@react-three/drei'
import { DepthOfField, EffectComposer } from '@react-three/postprocessing'

import Composition from './Composition'
import './style.css'

export default function Experience() {

    return <>

        <color args={['#f8eae3']} attach="background" />

        <Environment preset="studio" />
        <ambientLight />
        <EffectComposer multisampling={4}>
            <DepthOfField
                focusDistance={0.027}
                focalLength={0.01}
                bokehScale={6}
            />
        </EffectComposer>

        <ScrollControls damping={0.2} pages={5} maxSpeed={0.15}>

            <Composition />

            <Scroll html >
                <div className='text'>
                    <h1>Hello ! </h1>
                    <h2>I'm John, a ceramist who is passionate about pushing the boundaries of traditional techniques and bringing a fresh, contemporary aesthetic to the world of pottery.</h2>

                </div>
                <div className='text right'>
                    <h2>I believe that ceramics is an art form that can both evoke emotion and serve a functional purpose.</h2>
                </div>
                <div className='text left'>
                    <h2>My goal is to create pieces that are not only beautiful, but also serve a practical purpose in people's lives. </h2>
                </div>
                <div className='text right'>
                    <h2>From elegant vases to functional kitchenware, my work is designed to be used and enjoyed every day.</h2>
                </div>
                <div className='text'>

                </div>

                <div className='bottom-text scroll' >
                    <div className='bar' ></div>
                    <h4>scroll</h4>
                </div>
                <div className='bottom-text website' >
                    <div className='bar' ></div>
                    <h4>website by <a href="https://emiliegauvin.com/" target="_blank">emiliegauvin.com</a></h4>
                </div>
            </Scroll>
        </ScrollControls>


    </>
}
