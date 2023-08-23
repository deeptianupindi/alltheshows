import React, { useEffect } from 'react'
import * as actionMoviesSlice from '../store/slices/actionMovieSlice'
import * as movieDetailsSlice from '../store/slices/movieDetailsSlice'
import * as netflixOriginalsSlice from '../store/slices/netflixOriginalsSlice'
import * as trendingSlice from '../store/slices/trendingSlice'
import * as topRatedSlice from '../store/slices/topRatedSlice'
import * as comedySlice from '../store/slices/comedyMoviesSlice'
import * as documentarySlice from '../store/slices/documentarySlice'
import * as horrorMoviesSlice from '../store/slices/horrorMoviesSlice'
import * as romanceMoviesSlice from '../store/slices/romanceMoviesSlice'
import { useAppSelector, useAppDispatch } from '../store'

import Header from './Header'
import DisplayMovieRow from './DisplayMovieRow'

import MoreInfo from '../static/images/more-info.svg'
import { ButtonType } from './Button/Button'
import Button from './Button/Button'
import Carousel from 'better-react-carousel'

import improvData from '../improvData.json'
import standupData from '../standupData.json'
import storyData from '../storyData.json'

const MainContent = ({ selectMovieHandler }: { selectMovieHandler: any }) => {
  const { movieDetails } = useAppSelector((state) => state.movieDetails)
  const netflixOriginals = useAppSelector((state) => state.netflixOriginals)
  const trending = useAppSelector((state) => state.trending)
  const topRated = useAppSelector((state) => state.topRated)
  const actionMoviesState = useAppSelector((state) => state.action)
  const comedyMovies = useAppSelector((state) => state.comedy)
  const horrorMovies = useAppSelector((state) => state.horror)
  const romanceMovies = useAppSelector((state) => state.romance)
  const documentaries = useAppSelector((state) => state.documentary)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(
      movieDetailsSlice.getMovieDetailsAsync({
        mediaType: 'tv',
        mediaId: '63351',
      })
    )
    dispatch(netflixOriginalsSlice.getNetflixOriginalsAsync())
    dispatch(trendingSlice.getTrendingAsync())
    dispatch(topRatedSlice.getTopRatedAsync())
    dispatch(actionMoviesSlice.getActionMoviesAsync())
    dispatch(comedySlice.getComedyMoviesAsync())
    dispatch(horrorMoviesSlice.getHorrorMoviesAsync())
    dispatch(romanceMoviesSlice.getRomanceMoviesAsync())
    dispatch(documentarySlice.getDocumentariesAsync())
  }, [dispatch])

const DisplayImprovData = improvData.webPages.value.reverse().map(
        (data: any)=>{
            return(
              <Carousel.Item>
                <img width="100%" src={data.openGraphImage.contentUrl} />
                <h1>{data.name}</h1>
                <p>{data.snippet}</p>
                <Button
                  buttonType={ButtonType.Primary}
                  onClick={() => { window.location.href = data.url; } }
                  label={'Tickets'}
                />
                <Button
                  buttonType={ButtonType.Secondary}
                  label={data.datePublishedDisplayText}
                />
              </Carousel.Item>
)})

const DisplayStandupData = standupData.webPages.value.reverse().map(
      (data: any)=>{
          return(
              <Carousel.Item>
                <img width="100%" src={data.openGraphImage.contentUrl} />
                <h1>{data.name}</h1>
                <p>{data.snippet}</p>
                <Button
                  buttonType={ButtonType.Primary}
                  onClick={() => { window.location.href = data.url; } }
                  label={'Tickets'}
                />
                <Button
                  buttonType={ButtonType.Secondary}
                  label={data.datePublishedDisplayText}
                />
              </Carousel.Item>
)})

const DisplayStoryData = storyData.webPages.value.reverse().map(
      (data: any)=>{
          return(
            <Carousel.Item>
              <img width="100%" src={data.openGraphImage.contentUrl} />
              <h1>{data.name}</h1>
              <p>{data.snippet}</p>
              <Button
                buttonType={ButtonType.Primary}
                onClick={() => { window.location.href = data.url; } }
                label={'Tickets'}
              />
              <Button
                buttonType={ButtonType.Secondary}
                label={data.datePublishedDisplayText}
              />
            </Carousel.Item>
)})

  return (
    <div className='container'>
      <Header name={movieDetails.name} overview={movieDetails.overview} />
      <div className='movieShowcase'>
        <div className='modal__title'>Improv Shows</div>
          <Carousel cols={4} rows={1} gap={10}>
              {DisplayImprovData}
          </Carousel>
        <div className='modal__title'>Standup Comedy</div>
          <Carousel cols={4} rows={1} gap={10}>
            {DisplayStandupData}
          </Carousel>
        <div className='modal__title'>Storytelling</div>
          <Carousel cols={4} rows={1} gap={10}>
            {DisplayStoryData}
          </Carousel>
      </div>
    </div>
  )
}

export default MainContent
