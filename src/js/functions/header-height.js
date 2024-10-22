const getHeaderHeight = () => {
    const headerElement = document?.querySelector('#header');
    
    if (headerElement) {
      const headerHeight = headerElement.offsetHeight;
      document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);
    }
  }
  
  export default getHeaderHeight;