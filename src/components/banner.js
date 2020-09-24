import React from "react"
import Img from "gatsby-image"
const LINKEDIN_LINK = 'https://www.linkedin.com/in/foqc1/'
const YOUTUBE_LINK = 'https://www.youtube.com/c/FabianQuijosaca'
const DEVTO_LINK = 'https://dev.to/foqc'
const Banner = ({ image }) => {

    return (
        <div className="banner-section">
            <Img fixed={image} className="profile-img" />
            <div className="profile-intro">
                <h3>Software Developer</h3>
                <h1>Fabian Quijosaca <span className="profile-alias">foqc</span></h1>
                <p className="profile-description">
                    I am a passionate, enthusiastic and curious about the development and
                    innovation of technology, I am constantly learning and sharing my knowledge with others.
                    In this personal site you will find very interesting things that you will learn.
                    So I hope you enjoy it.
                </p>
                <div className="profile-social">
                    <a href={LINKEDIN_LINK} target="_blank" rel="noreferrer">
                        <svg className="social-icon hover:text-blue-600" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M437 0H75C33.644531 0 0 33.644531 0 75v362c0 41.355469 33.644531 75 75 75h362c41.355469 0 75-33.644531 75-75V75c0-41.355469-33.644531-75-75-75zm45 437c0 24.8125-20.1875 45-45 45H75c-24.8125 0-45-20.1875-45-45V75c0-24.8125 20.1875-45 45-45h362c24.8125 0 45 20.1875 45 45zm0 0" /><path d="M91 422h90V210H91zm30-182h30v152h-30zm0 0M331.085938 210H331c-10.371094 0-20.472656 1.734375-30 5.101562V210h-90v212h90V315c0-8.269531 6.730469-15 15-15s15 6.730469 15 15v107h90V304.6875c0-48.546875-39.382812-94.640625-89.914062-94.6875zM391 392h-30v-77c0-24.8125-20.1875-45-45-45s-44.996094 20.1875-45 44.996094V392h-30V240h30v30.019531l24.007812-18.03125C305.449219 244.144531 317.894531 240 331 240h.058594C362.988281 240.03125 391 270.257812 391 304.6875zm0 0M91 180h90V90H91zm30-60h30v30h-30zm0 0" />
                        </svg>
                    </a>
                    <a href={YOUTUBE_LINK} target="_blank" rel="noreferrer">
                        <svg className="social-icon hover:text-red-500" viewBox="0 -61 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M75 390h362c41.355469 0 75-33.644531 75-75V75c0-41.355469-33.644531-75-75-75H75C33.644531 0 0 33.644531 0 75v240c0 41.355469 33.644531 75 75 75zM30 75c0-24.8125 20.1875-45 45-45h362c24.8125 0 45 20.1875 45 45v240c0 24.8125-20.1875 45-45 45H75c-24.8125 0-45-20.1875-45-45zm0 0" /><path d="M181 94.507812V298.40625l180.5-103.621094zm30 50.984376l89.5 49.722656L211 246.59375zm0 0" />
                        </svg>
                    </a>
                    <a href={DEVTO_LINK} target="_blank" rel="noreferrer">
                        <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" aria-label="dev.to" viewBox="0 0 512 512">
                            <rect width="512" height="512" rx="15%" /><path d="M140.47 203.94h-17.44v104.47h17.45c10.15529-.54503 17.35752-8.66899 17.47-17.41v-69.65c-.69578-10.36382-7.79596-17.27188-17.48-17.41zm45.73 87.25c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H233.6v38.42h32.57v29.57H233.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z" fill="#1a202c" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Banner