const article = document.querySelector('article')
const allArticle = document.querySelectorAll('article')
let activeIndex = 0

const handleRightClick = () => {
  // change active index 
  const currentActiveIndex = document.querySelector('article[data-status="active"]')
  let nextActiveIndex =  +currentActiveIndex.dataset.index + 1
  if(nextActiveIndex <= allArticle.length ){
  }else{
    nextActiveIndex = +currentActiveIndex.dataset.index  -  (+allArticle.length) + 1
  }
  const changeActiveState = document.querySelector(`article[data-index="${nextActiveIndex}"]`)
  changeActiveState.dataset.status = 'active'
  currentActiveIndex.dataset.status = 'inactive'
}

const handleLeftClick = () => {
  const currentActiveIndex = document.querySelector('article[data-status="active"]') 
  const articleLength = document.querySelectorAll('article')
  if(currentActiveIndex.dataset.index != 1){
    const goToPreviousIndex = currentActiveIndex.dataset.index - 1
    let changeActiveState = document.querySelector(`article[data-index="${goToPreviousIndex}"]`)
    changeActiveState.dataset.status = 'active'
    currentActiveIndex.dataset.status = 'inactive'
    // console.log(changeActiveState, 'vsh')
  }else{
    const goToPreviousIndex = +currentActiveIndex.dataset.index  + articleLength.length - 1
    let changeActiveState = document.querySelector(`article[data-index="${goToPreviousIndex}"]`)
    changeActiveState.dataset.status = 'active'
    currentActiveIndex.dataset.status = 'inactive'  
  }
}