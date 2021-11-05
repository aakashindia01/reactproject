import React from 'react'
import {Button} from '../ButtonElement';
import svg1 from './svg-1.svg'
import { InfoContainer, InfoWrapper, InfoRow,
    Column1, Column2, TextWrapper, TopLine,
    Heading, SubTitle, BtnWrap,
    ImgWrap, Img } from './InfoElement'

export const InfoSection = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    lightTextDesc,
    description,
    buttonLabel,
    img,
    alt,
    primary,
    dark,
    darkText,
    dark2
}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <SubTitle darkText = {darkText}>{description}</SubTitle>
                                <BtnWrap>
                                    <Button to='home'
                                        smooth={true}
                                        duration={500}
                                        spy = {true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark2={dark ? 1 : 0}
                                    >{buttonLabel}</Button>                               
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={svg1} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection;