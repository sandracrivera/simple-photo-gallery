import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useDispatch } from 'react-redux'
import { Breakpoint } from 'react-socks'
import Modal from 'react-modal'

import PhotoService from 'services/photo_service'
import Grid from 'components/grid'
// import photoData from 'mocks/data.json'
import PhotoDetail from 'components/photo_details'
import { setCurrentPhoto, setPhotos } from 'redux/photo_slice'
import { getFavoritedPhotos, getAllPhotos, getCurrentPhoto } from 'redux/selectores'
import { PhotoInfo } from 'redux/types'

const Home: React.FC = () => {
  const dispatch = useDispatch()
  const [modalIsOpen, setIsOpen] = useState(false)
  const currentPhoto = getCurrentPhoto()

  function closeModal() {
    setIsOpen(false)
  }

  const handlePhotoClick = (id: string) => {
    console.log('HEHE')
    setIsOpen(true)
    dispatch(setCurrentPhoto({ id }))
  }

  useEffect(() => {
    PhotoService.getAll()
      .then((response) => {
        dispatch(setPhotos(response.data as PhotoInfo[]))
      })
      .catch((e: Error) => {
        // handle api errors
        console.log(e)
      })
  }, [])

  useEffect(() => {
    if (!currentPhoto) setIsOpen(false)
  }, [currentPhoto])

  return (
    <Main>
      <Content>
        <header>
          <h1>Photos</h1>
        </header>
        <Tabs>
          <TabList>
            <Tab>Recently Added</Tab>
            <Tab>Favorited</Tab>
          </TabList>
          <TabPanel>
            <Grid photos={getAllPhotos()} onClick={handlePhotoClick} />
          </TabPanel>
          <TabPanel>
            <Grid photos={getFavoritedPhotos()} onClick={handlePhotoClick} />
          </TabPanel>
        </Tabs>
      </Content>

      <Breakpoint medium down>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false}>
          <CloseModal onClick={closeModal}>X</CloseModal>
          <Details>
            <PhotoDetail />
          </Details>
        </Modal>
      </Breakpoint>

      <Breakpoint large up>
        <Details>
          <PhotoDetail />
        </Details>
      </Breakpoint>
    </Main>
  )
}

const Main = styled.main`
  display: flex;
  width: 100vw;

  // react-tabs
  .react-tabs {
    margin: 0 3rem;

    .react-tabs__tab-list {
      border-bottom: 1px solid ${({ theme }) => theme.palette.gray35};
      padding: 0;
    }

    .react-tabs__tab {
      list-style: none;
      font-family: Arial, Helvetica, sans-serif;
      display: inline-block;
      font-weight: bold;
      font-size: 1.8rem;
      padding-bottom: 1.5rem;
      margin-right: 3rem;
      color: ${({ theme }) => theme.palette.gray};
      outline: none;
      cursor: pointer;
    }

    .react-tabs__tab--selected {
      color: ${({ theme }) => theme.palette.purple};
      border: none;
      border-bottom: 2px solid ${({ theme }) => theme.palette.purple};
    }

    .react-tabs__tab-panel {
      padding: 2rem 0.4rem 0;
      display: none;

      &.react-tabs__tab-panel--selected {
        display: block;
      }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.screenMD}) {
      margin: 0 1rem;

      .react-tabs__tab-panel {
        padding: 0 0.4rem;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.screenMD}) {
    position: relative;
  }
`

const Content = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.gray50};
  border-right: 1px solid ${({ theme }) => theme.palette.gray40};
  display: flex;
  flex-direction: column;
  padding: 5rem 0;

  header {
    margin: 0 3rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.screenMD}) {
    width: 100%;
    padding: 2rem 0;

    header {
      margin: 0 1rem;
    }
  }
`

const Details = styled.div`
  width: 42rem;
  padding: 4rem 3rem 0;
  background-color: ${({ theme }) => theme.palette.white};

  figure {
    height: 24rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.screenMD}) {
    width: 100%;
    padding: 2rem 0 0;
  }
`

const CloseModal = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  font-size: 2rem;
  font-weight: bold;
  padding: 1rem;
`

export default Home
