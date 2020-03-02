import React from 'react'
import styles from './timeline.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css';


class Timeline extends React.Component {
  constructor(props) {
    super(props)
    const { events, descriptions } = props
    this.state = {
      events,
      descriptions,
      activeEvent: events[0]
    }
    this.updateActiveEvent = this.updateActiveEvent.bind(this)
    this.renderEvent = this.renderEvent.bind(this)
  }

  componentDidMount() {
    AOS.init({
      duration: 1000,
      offset: 500,
      once: true,
    })
  }

  updateActiveEvent(e, evt) {
    evt.preventDefault()
    this.setState({ activeEvent: e })
    // Set the timeline marker's y offset to the current clicked timeline item
    let targetNode = evt.target.parentNode
    // Depending on where we click, evt.target might be the inner div
    // But we always want to set the height to be the height of the wrapping <li></li>

    //console.log()
    if (targetNode.tagName.toUpperCase() === "UL") {
      targetNode = evt.target
    }
    this.refs.marker.style.top = targetNode.offsetTop + 'px'
  }

  renderEvent(e) {
    const eventData = this.state.descriptions[e]
    if (e === this.state.activeEvent) {
      return (
        <li
          key={e}
          className={`${styles.timelineItem} ${styles.timelineItemActive}`}
          onClick={evt => this.updateActiveEvent(e, evt)}>
          <div>{eventData.company}</div>
        </li>
      )
    } else {
      return (
        <li
          key={e}
          className={styles.timelineItem}
          onClick={evt => this.updateActiveEvent(e, evt)}>
          <div>{eventData.company}</div>
        </li>
      )
    }
  }

  render() {
    const { events, descriptions, activeEvent } = this.state
    const timelineItems = events.map(e => this.renderEvent(e))
    const { title, company, dates, description } = descriptions[activeEvent]

    return (
      <div>
        <div className={styles.headerContainer}>
          <h2 data-aos="fade" data-aos-anchor="#experience" className={styles.header}>Work Experience</h2>
          <div className={styles.headerDivider}></div>
        </div>
        <div className={styles.timelineContainer}>
          <ul ref="timeline" className={styles.timeline}>
            <div ref="marker" className={styles.marker}></div>
            { timelineItems }
          </ul>
          <div className={styles.timelineText}>
            <div data-aos="fade" data-aos-anchor="#experience" id="tl-desc-1" className={styles.timelineDesc}>
            <span className={styles.timelineHeader}>
              { title } <span className={styles.headerCompany}>@ { company }</span>
            </span>
            <span className={styles.timelineSubheader}>
              { dates }
            </span>
            { description }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Timeline
