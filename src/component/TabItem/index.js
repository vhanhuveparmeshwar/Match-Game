import './index.css'

const TabItem = props => {
  const {tabDetails, isActiveTab, updatedActiveTabId} = props

  const {tabId, displayText} = tabDetails

  const activeTabClassName = isActiveTab ? 'highlight-text' : ''
  console.log(isActiveTab)

  const onClickTabItem = () => {
    updatedActiveTabId(tabId)
  }

  return (
    <li>
      <button
        type="button"
        className={`tab-button ${activeTabClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
