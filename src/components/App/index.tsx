import React, { useState, Children } from 'react'
import libraryTree from '../../mock'
import FilterBar from '../FilterBar'
import ContainWrap from '../Contain'
import WithError from '../WithError'
import Footer from '../Footer'

const CATEGORY_TYPES: CategoryTypes = ['list', 'category']
const ContainWithNotFind = WithError(ContainWrap, 'Ooops! Can not find it here...')

const libraryMap: LibraryMap = {
  category: libraryTree,
  list: libraryTree.reduce((res: AppItem[], item: CateItem) => {
    item.childrens.forEach(app => {
      if (!app.keyWords || !app.keyWords.length) {
        app.keyWords = [app.label]
      } else {
        app.keyWords = app.keyWords.map(key => key.toLowerCase().replace(/[ -]/g, ''))
      }
    })
    res.push(...item.childrens)
    return res
  }, [])
}

const filterListByKey = (list: AppItem[], key: string) =>
  list.filter(app => (app.keyWords as string[]).some(k => k.includes(key)))

const genKeyFilterByList = (list: (AppItem | CateItem)[]) => (filterKey: string) => {
  if (window.localStorage.__CATEGORY_TYPE__ === 'list') {
    return filterListByKey((list as AppItem[]), filterKey)
  } else {
    return (list as CateItem[])
      .map(cate => ({
        title: cate.title,
        childrens: filterListByKey(cate.childrens, filterKey)
      }))
  }
}
let listFiltersMap: ListFiltersMap = CATEGORY_TYPES
  .reduce((res: any, key) => {
    res[key] = genKeyFilterByList(libraryMap[key])
    return res
  }, {})

let oldFilterKey = ''
let typeIndex: number = 0
let toggleType = (setType: any, setList: any, type?: CategoryType) => {
  typeIndex = (typeIndex + 1) % 2
  type = CATEGORY_TYPES[typeIndex]
  window.localStorage.__CATEGORY_TYPE__ = type
  setType(type)
  if (oldFilterKey) {
    setList(listFiltersMap[type](oldFilterKey))
  } else {
    setList(libraryMap[type])
  }
}

function App () {
  const [type, setType]: [CategoryType, React.Dispatch<any>] = useState(window.localStorage.__CATEGORY_TYPE__ || CATEGORY_TYPES[0])
  !window.localStorage.__CATEGORY_TYPE__ && (window.localStorage.__CATEGORY_TYPE__ = type)

  const [list, setList] = useState(libraryMap[type])
  const [filterKey, setFilterKey] = useState('')
  typeIndex = CATEGORY_TYPES.indexOf(type)

  const newFilterKey = filterKey.trim().replace(/[ -]/g, '')
  if (oldFilterKey !== newFilterKey) {
    setList(listFiltersMap[type](newFilterKey))
    oldFilterKey = newFilterKey
  }

  const hasData = type === 'category'
     ? (list as CateItem[]).filter(cate => cate.childrens.length).length
     : (list as AppItem[]).length

  return (
    <div>
      <FilterBar
        filterKey={filterKey}
        onInput={(e: any) => setFilterKey(e.target.value)}
        type={type}
        toggleType={() => toggleType(setType, setList)}
      />
      <ContainWithNotFind
        list={list}
        type={type}
        isError={!hasData}
      />
      <Footer/>
    </div>
  )
}

export default App
