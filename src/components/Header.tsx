import React, { useState } from 'react'

import PlayLogo from '../static/images/play-button.svg'
import { ButtonType } from './Button/Button'
import Button from './Button/Button'
import MoreInfo from '../static/images/more-info.svg'
import MuteIcon from '../static/images/mute.svg'
import UnmuteIcon from '../static/images/unmute.svg'
import ReactPlayer from 'react-player'
import bannerData from '../bannerData.json'

interface IHeader {
  name: string
  overview: string
}

const Header = ({ name, overview }: IHeader) => {
  const [isMuted, setIsMuted] = useState(true)

  return (
    <header className='header'>
      <img
        width='100%'
        height='100%'
        className='header__video'
        src={bannerData.openGraphImage.contentUrl}
      />
      <h1 className='header__container-heading'>{bannerData.name}</h1>
      <Button
        buttonType={ButtonType.Primary}
        onClick={() => { window.location.href = bannerData.url; } }
        label={'Tickets'}
      />
      <Button
        Icon={<MoreInfo />}
        buttonType={ButtonType.Secondary}
        label={'More Info'}
      />
      <p className='header__container-overview'>{bannerData.snippet}</p>
      <div className='header__container--fadeBottom' />
    </header>
  )
}

export default Header
