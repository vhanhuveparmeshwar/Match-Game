import './index.css'

const ProjectItem = props => {
  const {imageDetails, imageClicking} = props

  const {thumbnailUrl} = imageDetails

  const onClickImage = () => {
    imageClicking(thumbnailUrl)
  }

  return (
    <li>
      <button className="image-button" type="button">
        <img
          className="thumbnail-image"
          src={thumbnailUrl}
          alt="thumbnail"
          onClick={onClickImage}
        />
      </button>
    </li>
  )
}

export default ProjectItem
