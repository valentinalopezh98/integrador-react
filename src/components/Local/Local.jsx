import React from 'react'
import Title from '../UI/Title/Title'
import { BackgroundStyled, CardImageContainerStyled, GalleryContainerStyled, ImgContainer, LocalContainerStyled, MobileImagesContainer } from './LocalStyles'

export const Local = () => {
  return (
    <LocalContainerStyled>
            <Title>Local</Title>

            <BackgroundStyled>
                <GalleryContainerStyled>
                    <CardImageContainerStyled>
                        <figure>
                            <img src="https://cdn.thespaces.com/wp-content/uploads/2019/10/Supervinyl39.jpg" alt="local" />
                        </figure>
                    </CardImageContainerStyled>

                    <CardImageContainerStyled>
                        <figure>
                            <img src="https://cdn.thespaces.com/wp-content/uploads/2019/10/Supervinyl74.jpg" alt="local" />
                        </figure>
                    </CardImageContainerStyled>

                    <CardImageContainerStyled>
                        <figure>
                            <img src="https://cdn.thespaces.com/wp-content/uploads/2019/10/Supervinyl43.jpg" alt="local" />
                        </figure>
                    </CardImageContainerStyled>

                    <CardImageContainerStyled>
                        <figure>
                            <img src="https://cdn.thespaces.com/wp-content/uploads/2019/10/Supervinyl63.jpg" alt="local" />
                        </figure>
                    </CardImageContainerStyled>
                </GalleryContainerStyled>
            </BackgroundStyled>

            <MobileImagesContainer>
                <ImgContainer>
                    <img src="https://cdn.thespaces.com/wp-content/uploads/2019/10/Supervinyl39.jpg" alt="local" />
                </ImgContainer>

                <ImgContainer>
                    <img src="https://cdn.thespaces.com/wp-content/uploads/2019/10/Supervinyl74.jpg" alt="local" />
                </ImgContainer>

                <ImgContainer>
                    <img src="https://cdn.thespaces.com/wp-content/uploads/2019/10/Supervinyl43.jpg" alt="local" />
                </ImgContainer>

                <ImgContainer>
                    <img src="https://cdn.thespaces.com/wp-content/uploads/2019/10/Supervinyl63.jpg" alt="local" />
                </ImgContainer>
            </MobileImagesContainer>
    </LocalContainerStyled>
  )
}
