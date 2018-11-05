import React, { Component } from 'react'
import './index.css'

class FilterBar extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {filterValue, onInput, toggleType, type} = this.props
    return (
      <div className="filter-bar">
        <div className="filter-bar__toggle-btn" onClick={toggleType}>
          <svg className={`icon ${type}-icon`} aria-hidden="true">
            <use href={`#icon-${type}`}></use>
          </svg>
        </div>
        <div className="filter-bar__input-warp">
          <input red="input" className="search-input" type="text" value={filterValue} onInput={onInput} />
          <svg className="icon search-icon" aria-hidden="true">
            <use href="#icon-search"></use>
          </svg>
          <svg className="icon clear-icon" aria-hidden="true">
            <use href="#icon-clear11"></use>
          </svg>
        </div>
      </div>
    )
  }
}

export default FilterBar