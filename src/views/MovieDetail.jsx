import React, { Component } from 'react'
import MovieList from './MovieList'
import classnames from 'classnames'

import './MovieDetail.scss'

export default class MovieDetail extends Component {
  static propTypes = {
    genres: React.PropTypes.array,
    params: React.PropTypes.object
  }
  constructor(props) {
    super(props)

    this.state = {
      movie: null,
      images: null
    }
  }
  componentDidMount() {
    // fetch(`https://api.themoviedb.org/3${`/movie/${this.props.params.movieId}`}?api_key=${process.env.TMDB_API_KEY}`)
    // .then(r => r.json())
    // .then(blob => {
    //   console.log(blob)
    // })
    // fetch(`https://api.themoviedb.org/3${`/movie/${this.props.params.movieId}/images`}?api_key=${process.env.TMDB_API_KEY}`)
    // .then(r => r.json())
    // .then(blob => {
    //   console.log(blob)
    // })
    setTimeout(() => {
      this.setState({
        movie: {"adult":false,"backdrop_path":"/g54J9MnNLe7WJYVIvdWTeTIygAH.jpg","belongs_to_collection":null,"budget":108000000,"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":37,"name":"Western"}],"homepage":"","id":333484,"imdb_id":"tt2404435","original_language":"en","original_title":"The Magnificent Seven","overview":"A big screen remake of John Sturges' classic western The Magnificent Seven, itself a remake of Akira Kurosawa's Seven Samurai. Seven gun men in the old west gradually come together to help a poor village against savage thieves.","popularity":37.19583,"poster_path":"/z6BP8yLwck8mN9dtdYKkZ4XGa3D.jpg","production_companies":[{"name":"Columbia Pictures","id":5},{"name":"Village Roadshow Pictures","id":79},{"name":"Escape Artists","id":1423},{"name":"Metro-Goldwyn-Mayer (MGM)","id":8411},{"name":"LStar Capital","id":34034},{"name":"Pin High Productions","id":79566}],"production_countries":[{"iso_3166_1":"US","name":"United States of America"}],"release_date":"2016-09-14","revenue":0,"runtime":132,"spoken_languages":[{"iso_639_1":"en","name":"English"}],"status":"Released","tagline":"Justice has a number.","title":"The Magnificent Seven","video":false,"vote_average":4.7,"vote_count":319}// eslint-disable-line
      })
    }, 1000)

    setTimeout(() => {
      this.setState({
        images: {"id":333484,"backdrops":[{"aspect_ratio":1.77777777777778,"file_path":"/g54J9MnNLe7WJYVIvdWTeTIygAH.jpg","height":2160,"iso_639_1":null,"vote_average":5.3125,"vote_count":1,"width":3840},{"aspect_ratio":1.77777777777778,"file_path":"/T3LrH6bnV74llVbFpQsCBrGaU9.jpg","height":1080,"iso_639_1":null,"vote_average":5.3125,"vote_count":1,"width":1920},{"aspect_ratio":1.77777777777778,"file_path":"/X18fazK33pS29TKpcAHqDpCh2I.jpg","height":1080,"iso_639_1":null,"vote_average":5.24542124542125,"vote_count":2,"width":1920},{"aspect_ratio":1.77777777777778,"file_path":"/yggMyifLPijn9w1tDkOQOAh4qG9.jpg","height":1080,"iso_639_1":null,"vote_average":5.17113095238095,"vote_count":1,"width":1920},{"aspect_ratio":1.7797552836485,"file_path":"/efBlxYeoiFIcDW0SOtkOIS862NU.jpg","height":899,"iso_639_1":null,"vote_average":0,"vote_count":0,"width":1600},{"aspect_ratio":1.7797552836485,"file_path":"/4zG9gD1SjXNgpwmwPFLQpUzFJTk.jpg","height":899,"iso_639_1":null,"vote_average":0,"vote_count":0,"width":1600},{"aspect_ratio":1.77777777777778,"file_path":"/rkLNl4UKam9GVwT9pTxsjccDgil.jpg","height":900,"iso_639_1":null,"vote_average":0,"vote_count":0,"width":1600},{"aspect_ratio":1.77725118483412,"file_path":"/qkcHBX99LZI5WJIJba0cMtHQKR9.jpg","height":1688,"iso_639_1":null,"vote_average":0,"vote_count":0,"width":3000},{"aspect_ratio":1.7797552836485,"file_path":"/hzWwhU0sc1tPBYXOoDO9pMOSDAb.jpg","height":899,"iso_639_1":null,"vote_average":0,"vote_count":0,"width":1600},{"aspect_ratio":1.77777777777778,"file_path":"/uOZCTh3GkZKdmstM4uK1aWFuz5b.jpg","height":1080,"iso_639_1":null,"vote_average":0,"vote_count":0,"width":1920},{"aspect_ratio":1.77777777777778,"file_path":"/k5yvySn82VcVwrxWdSGsphqxLYk.jpg","height":1152,"iso_639_1":null,"vote_average":0,"vote_count":0,"width":2048},{"aspect_ratio":1.77777777777778,"file_path":"/tD27YzFnmqLh5yLhk7vbgD5LmJ4.jpg","height":2160,"iso_639_1":null,"vote_average":0,"vote_count":0,"width":3840}],"posters":[{"aspect_ratio":0.666666666666667,"file_path":"/z6BP8yLwck8mN9dtdYKkZ4XGa3D.jpg","height":1500,"iso_639_1":"en","vote_average":5.52238805970149,"vote_count":4,"width":1000},{"aspect_ratio":0.666666666666667,"file_path":"/wFK9Bpmpc6lDcHY8dlbMpMqtmpE.jpg","height":2100,"iso_639_1":"fr","vote_average":5.3125,"vote_count":1,"width":1400},{"aspect_ratio":0.7001953125,"file_path":"/gRmVMlTw8GXmQeQ106RaQuWYaIe.jpg","height":2048,"iso_639_1":"el","vote_average":5.3125,"vote_count":1,"width":1434},{"aspect_ratio":0.666666666666667,"file_path":"/Fyvx5EmHYiACHoY0TTynlhrh07.jpg","height":1500,"iso_639_1":"pt","vote_average":5.3125,"vote_count":1,"width":1000},{"aspect_ratio":0.666666666666667,"file_path":"/zn3mchTeqXrSCJBpHsbS68HozWZ.jpg","height":1500,"iso_639_1":"en","vote_average":5.25230987917555,"vote_count":4,"width":1000},{"aspect_ratio":0.681176470588235,"file_path":"/yN3BVHuveFrMtLzf8N22svIurC8.jpg","height":850,"iso_639_1":"pt","vote_average":5.17113095238095,"vote_count":1,"width":579},{"aspect_ratio":0.674666666666667,"file_path":"/cxyPPstlfrLug3fEXEDVp1EJrzY.jpg","height":750,"iso_639_1":"en","vote_average":5.17113095238095,"vote_count":1,"width":506},{"aspect_ratio":0.666666666666667,"file_path":"/83TRGfWZyYtcuAy7BU0wWnkJ6zJ.jpg","height":1500,"iso_639_1":"en","vote_average":5.11727078891258,"vote_count":4,"width":1000},{"aspect_ratio":0.666666666666667,"file_path":"/xiI3WhLnlHPYbTDCcIjsDTF3BdJ.jpg","height":1500,"iso_639_1":"en","vote_average":5.10622710622711,"vote_count":2,"width":1000},{"aspect_ratio":0.674,"file_path":"/p9n4FMjTlQJcgA4uLdpSZ7a8uUJ.jpg","height":1000,"iso_639_1":"en","vote_average":5.10622710622711,"vote_count":2,"width":674},{"aspect_ratio":0.666666666666667,"file_path":"/jKtQlPQImHO2gj2bK1kfocJbzH1.jpg","height":3000,"iso_639_1":"de","vote_average":0,"vote_count":0,"width":2000},{"aspect_ratio":0.666666666666667,"file_path":"/uZrD4BZ1oj2nIZ9Zc7i8Gm7Tkx7.jpg","height":1650,"iso_639_1":"ko","vote_average":0,"vote_count":0,"width":1100},{"aspect_ratio":0.697883597883598,"file_path":"/ebnDmIPYJDfBBXtS0mGpcmy866e.jpg","height":1890,"iso_639_1":"ko","vote_average":0,"vote_count":0,"width":1319},{"aspect_ratio":0.666666666666667,"file_path":"/oDQu7lUKucQqAevIf1u3SueJneF.jpg","height":1500,"iso_639_1":"en","vote_average":0,"vote_count":0,"width":1000},{"aspect_ratio":0.75,"file_path":"/kLNX9SVrPxXGTCgzNGP3jgWqwqF.jpg","height":1600,"iso_639_1":"fr","vote_average":0,"vote_count":0,"width":1200},{"aspect_ratio":0.693421052631579,"file_path":"/b8TAtjDThZ9wm8u4NIqtbZkqS3i.jpg","height":760,"iso_639_1":"es","vote_average":0,"vote_count":0,"width":527},{"aspect_ratio":0.666666666666667,"file_path":"/2hzKuvvdnafmZepRdBnStTcYKDw.jpg","height":1500,"iso_639_1":"hu","vote_average":0,"vote_count":0,"width":1000},{"aspect_ratio":0.666666666666667,"file_path":"/lijsAvJcDFSXeSLOiRCUb96rweq.jpg","height":3000,"iso_639_1":null,"vote_average":0,"vote_count":0,"width":2000},{"aspect_ratio":0.666666666666667,"file_path":"/jFCXr2pRSVW5NAgySa7syMSSqfP.jpg","height":3000,"iso_639_1":null,"vote_average":0,"vote_count":0,"width":2000},{"aspect_ratio":0.666666666666667,"file_path":"/uGBT2xPtDLwkus5wxwAcRm0l5gP.jpg","height":900,"iso_639_1":"uk","vote_average":0,"vote_count":0,"width":600},{"aspect_ratio":0.7001953125,"file_path":"/q3AFwcqhdFcpt55vPguujKDshBC.jpg","height":2048,"iso_639_1":"it","vote_average":0,"vote_count":0,"width":1434},{"aspect_ratio":0.666666666666667,"file_path":"/gnxqzxrm4KdSfnlxNa7VTUnrWEZ.jpg","height":1500,"iso_639_1":"he","vote_average":0,"vote_count":0,"width":1000}]} // eslint-disable-line
      })
    }, 1500)

  }
  render() {
    const isLoading = this.state.movie === null || this.state.images === null

    if (isLoading) {
      return <div className="me-loading">
        <i className="fa fa-refresh fa-spin" aria-hidden="true"></i>
      </div>
    }
    else {
      const m = this.state.movie
      const i = this.state.images

      const previewBackdrops = i.backdrops.splice(1)

      // Put in a columns/rows format
      const previewBackdropsFormatted = []
      for (let i = 0; i < previewBackdrops.length; i += 2) {
        previewBackdropsFormatted.push([previewBackdrops[i], previewBackdrops[i+1]])
      }

      return <div className="me-movie-detail">
        <div className="me-movie-detail__main-left">
          <div className="me-movie-detail__main-left__fixed-wrapper">
            <div className="me-movie-detail__main-left__main-poster" style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w600${i.backdrops[0].file_path})`
            }} />
            <div className="me-movie-detail__main-left__main-poster--border"/>
            <div className="me-movie-detail__main-left__details">
              <div className="me-movie-detail__main-left__buttons">
                <button className="me-button me-button-flex me-button-primary">
                  Add to Watchlist
                </button>
                <button className="me-button me-button-flex me-button-regular">
                  Watch trailer
                </button>
              </div>
            </div>
          </div>
          <div className="me-movie-detail__main-left__scrollable-wrapper">
            <div className="me-movie-detail__main-left__backdrops">
              {previewBackdropsFormatted.map((bD, i) => {
                return <div key={i} className="me-movie-detail__main-left__backdrop__row">
                  <div className={classnames('me-movie-detail__main-left__backdrop', {
                    'me-movie-detail__main-left__backdrop-wide': i % 2 === 0,
                    'me-movie-detail__main-left__backdrop-narrow': i % 2 === 1
                  })} style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w600${bD[0].file_path})`
                  }} />

                  {bD[1] && <div className={classnames('me-movie-detail__main-left__backdrop', {
                    'me-movie-detail__main-left__backdrop-wide': i % 2 === 1,
                    'me-movie-detail__main-left__backdrop-narrow': i % 2 === 0
                  })}  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w600${bD[1].file_path})`
                  }} />}
                </div>
              })}
            </div>
          </div>
        </div>
        <div className="me-movie-detail__main-right">
          right
        </div>
      </div>
    }
  }
}
