import { VideoGame } from '../models/video-game'

const GameItem = (game: Omit<VideoGame, 'id'>) => {
  return (
    <div className='card group'>
      <div className='card-image-container'>
        <img
          src={game.image}
          alt={game.title}
          className='h-full w-full object-cover object-center'
        />
        <div className='card-overlay'>
          <p className='card-icon'>🎮</p>
        </div>
      </div>
      <div className='card-content'>
        <h3 className='title'>{game.title}</h3>
        <h4 className='subtitle'>{game.subtitle}</h4>
        <p className='description'>{game.description}</p>
      </div>
    </div>
  )
}

export default GameItem
