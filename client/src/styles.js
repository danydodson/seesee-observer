import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, 
  *::before, 
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* -moz-osx-font-smoothing: grayscale; */
    /* -webkit-font-smoothing: antialiased; */
    text-rendering: optimizeLegibility;
  }

  html{}
  
  body {}

  body {
    font-size: 16;
    font-weight: 400;
    font-family: 'Montserrat';
  }

  #app {
    height:100%;
  }

  ul {
    list-style-type: none;
  }

  h1 {
    font-size: 2.2rem;
    font-weight: 600;
  }
  
  a,
  link,
  button {
    color: #8a8a8a;
    border: none;
    outline: none;
    text-decoration: none;
    background: transparent;
    cursor: pointer;

    &:hover { 
        color: #080808
    }
  }
  
  /* a {} */

  button:focus {
    outline:0;
  }
  
  .hide-scrollbars {
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    scrollbar-width: none;
    &::-webkit-scrollbar,
    ::-webkit-scrollbar {
      width: 0 !important;
      height: 0 !important;
    }
  }
  
  img.user-img {
      height: 30px;
      border-radius: 100px;
  }

  /** Header ------------------------------------------------*/
 
  header {
    width: 100%;
    height: 60px;
    display: flex;
    position: fixed;
    align-items: center;
    background-color: #ffffff;
    justify-content: space-between;
    z-index: 20;

    nav {
      height: 60px;
      width: 100%;
      display: flex;
      position: fixed;
      z-index: 100;
      align-items: center;
      background-color: #ffffff;
      justify-content: space-between;
    }

    .nav-list {
      display: flex;
      align-items: center;
      justify-content:space-between;

      @media (max-width: 768px) { 
        width: 100vw;
        justify-content: space-around;
      }
    }
    
    input.nav-search {
      flex: 1;
      margin: 0 1rem;
      padding: 20px;
      height: 25px;
      border: none;
      outline: none;
      border-radius: 100px;
      background-color: #f5f5f5;
    }

    .nav-item {
      margin: 0 1rem;

      @media (max-width: 768px) {
        display: none;
      }
    }
    
    .title-link {
      display: flex;
      margin: 0 1rem;
      align-items: center;

      @media (max-width: 768px) {
        display: none;
      }
    }

    .icon-link {
      transition: .1s; 
    }

    a.nav-link {
      display: flex;
      /* margin: 0 1rem; */
      align-items: center;
    }

    .icon-image {
      margin: 0 1rem;
    }

    .user-img {
      opacity: 1;
      height: 30px;
      transition: .1s;
      border-radius: 100px;

      &:hover { 
        opacity: 0.8;
      }
    }

    .ruller {
      background-color: #d1d1d1;
      margin: 1px 22px 0px 22px;
      width: 1px;
      height: 30px;

      @media (max-width: 768px) { 
        display: none; 
      }
    }

  }

  .banner {
    padding-top: 60px;
  }

  /** mediums nav ------------------------------------------------*/
  
  nav.mediums-list {
    width: 100%;
    padding: 0 16px;
    padding-top: 70px;
    position: fixed;
    display: flex;
    overflow: auto;
    background-color: #fff;
    z-index: 10;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    scrollbar-width: none;
    box-shadow: 0 4px 12px rgba(0,0,0,.08), 0 0 1px rgba(1,0,0,.1);
    &::-webkit-scrollbar,
    ::-webkit-scrollbar {
      width: 0 !important;
      height: 0 !important;
    }
  }

  button.medium-link {
    padding-bottom: 15px;
    font-size: 16px;
    font-family: 'Didact Gothic';
    margin: 0 1rem 0 0;
  }

  /** top margin ------------------------------------------------*/
  
  .profile-page{padding-top: 80px}
  .editor-page{padding-top: 80px}
  .post-page{padding-top: 80px}
  .login-page{padding-top: 80px}
  .register-page{padding-top: 80px}
  .settings-page{padding-top: 80px}

  /** Post Previews ------------------------------------------------*/

  /* article.preview {
    &:hover>.cart {}
    &:hover>.heart {}
    &:hover>.auth-name {}
    &:hover>a.preview>img.auth-image {}
    &:hover>a.preview>figure.post-preview {}
  }

  figure.post-preview {
    margin: .8rem 0 .8rem 0;

    @media (min-width: 768px) { 
      margin: .8rem; 
    }

    &:before {
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      margin: .8rem 0 .8rem 0;
      background: rgba(0,0,0,0);

      opacity: 0;
      transition: .3s;
      position: absolute;
      content: "";

      @media (min-width: 768px) {
        margin: .8rem; 
      }
    }
  }

  img.img-preview {
    display: block;
    width: 100%;
    height: auto;
    max-height: 100%;
  }

  img.auth-image {
    bottom: 32px;
    left: 32px;
    height: 32px;
    opacity: 0;
    position: absolute;
    border-radius: 100px;
    transition: .1s;
  }

  a.preview {
    transition: .1s;
  } */

  /** Posts ------------------------------------------------*/
  
  /* ul.posts-feed {} */
  
  /* li.post-preview {
    width: 30%;
    margin: 1rem;

    :hover>a.post-preview-link>figure.post-preview-tint:before { 
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      opacity: .6;
      content: "";
      position: absolute;
      background: rgba(0,0,0);
    }
    
    :hover>a.post-author-img-link>img.post-author-img { opacity: 1; }
    
    :hover>a.post-author-username {  opacity: 1; }
    
    :hover>button.post-btn-faved { opacity: 1; }
  } */
  
  /* a.post-preview-link {
    transition: .1s 
  } */

  /* figure.post-preview-tint {
    opacity: 1;
    position: relative;
    background: rgba(0,0,0,0);
    transition: .3s;
  } */


  /* img.post-preview-img {
    width: 100%;
    height: auto;
    display: block;
    max-height: 100%;
  } */
  
  /* img.post-author-img {
    opacity: 0;
    left: 20px;
    bottom: 25px;
    height: 30px;
    position: absolute;
    border-radius: 100px;
    transition: .1s;
  } */
  
  /* a.post-author-username {
    opacity: 0;
    left: 60%;
    bottom: 10%;
    color: #ffffff;
    position: absolute;
    transition: .1s;
  } */
  
  /* button.post-btn-faved {
    opacity: 0;
    left: 70%;
    bottom: 30px;
    color: #ffffff;
    position: absolute;
    transition: .1s;
    cursor: pointer;
  } */
  
  /* button.is-faved { 
    color: red; 
  } */
  
  /* ul.post-tag-list {
    position: absolute;
  } */

  /** Editor Form Page -------------------------------------------------*/

  .editor-form {
    padding-top: 60px;
  }

  /** Dropzone ------------------------*/

  .dropzone {
    width: 100%;
    height: 30rem;
    display: flex;
    color: #8a8a8a;
    font-size: 18px;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    background-color: #eee;
    will-change: transform;
    border: 1px solid #eee;
    font-family: "Didact Gothic";
    /* font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; */
    transition: transform 0.3s;
    &:hover {
      cursor: default;
    }
  }

  .dropzone.hover {
    transform: scale(0.95);
  }
  
  .dropzone input {
    display: none;
  }
  
  .dropzone svg {
    fill: #8a8a8a;
    animation: spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  }

  .preview {
    width: 10rem
  }

  .preview:hover{
    opacity: .5;
  }

  .progress-bar {
    height: 1rem;
    background-color: orangered;
  }
  
  .status {
    width: 100%;
  }

  .percent{
    font-family: 'Montserrat'; 
    opacity: .7;
  }

  .response_wrap {
    display: flex;
    flex-wrap: wrap;
  }
    
  .photos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  /** Dropdown Select Box ----------------------------------------------*/

  .dd-wrapper {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  position: relative;
  width: 222px;
}

.dd-header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  line-height: 38px;
  border: 1px solid #dfdfdf;
  border-radius: 3px;
  cursor: default;
  position: relative;
  background-color: #fff;
}

.dd-header span {
  margin-right: 20px;
}

.dd-header-title {
  font-weight: 300;
  margin: 2px 20px;
  margin-right: 30px;
}

.angle-down {
  color: #000;
  margin-right: 20px;
}

.dd-list {
  z-index: 10;
  position: absolute;
  width: 100%;
  border: 1px solid #dfdfdf;
  border-top: none;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  background-color: #fff;
  -webkit-box-shadow: 0 2px 5px -1px #e8e8e8;
          box-shadow: 0 2px 5px -1px #e8e8e8;
  font-weight: 700;
  padding: 15px 0;
  max-height: 215px;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}

.dd-list-item {
  width: 100%;
  font-size: 1.5rem;
  padding: 8px 10px;
  line-height: 1.6rem;
  cursor: default;
  display: inline-block;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.dd-list-item.selected {
  color: #fff;
  background-color: #ffcc01;
}

.dd-list-item:hover {
  color: #fff;
  background-color: #ffcc01;
}

.dd-wrapper-single {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  position: relative;
  width: 265px;
}

.dd-wrapper-single .dd-header {
  border: 1px solid #ccc;
}

.dd-wrapper-single .dd-header .dd-header-name {
  font-weight: 400;
}

.dd-wrapper-single .dd-list {
  border: 1px solid #ccc;
  border-top: none;
}

  /** Modal -----------------------------------------------------*/

  /* #app {
    min-height: 100%;
    min-width: 100%;
  }

  #modal {
    background-color: rgba(0, 0, 0, 0.9);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #modal:empty {
    display: none;
  }
  
  #modal > div {
    background-color: white;
    padding: 15px;
    border-radius: 5px;
    text-align: center;
  }
  
  #modal .buttons button {
    display: inline-block;
    margin-right: 15px;
  } */

  /** Animations ----------------------------------------------*/

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

`

export default GlobalStyle;

// import { createGlobalStyle } from 'styled-components'

// const GlobalStyle = createGlobalStyle`

//   /* @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500&display=swap'); */
//   /* font-family: 'Montserrat', sans-serif; */
//   /* @import url('https://fonts.googleapis.com/css?family=Didact+Gothic&display=swap'); */
//   /* font-family: 'Didact Gothic', sans-serif; */
//   /* @import url('https://fonts.googleapis.com/css?family=Varela+Round&display=swap'); */
//   /* font-family: 'Varela Round', sans-serif; */

//   *,
//   *::before,
//   *::after {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     /* text-rendering: optimizeLegibility; */
//   }

//   body {
//     font-size: 16;
//     font-weight: 400;
//     font-family: 'Montserrat';
//   }

//   #app {
//     height:100%;
//   }

//   a,
//   link,
//   button {
//     color: #8a8a8a;
//     background: transparent;

//     border: none;
//     outline: none;
//     text-decoration: none;

//     &:hover,
//     :hover {color: #080808;}

//     &:focus,
//     :focus {outline:0;}
//   }

//   ul { list-style-type: none;}

//   fieldset {
//     border: none;
//     outline: none;
//   }

//   /* @media (max-width: 416px) {} */
//   /* @media (max-width: 450px) {} */
//   /* @media (max-width: 600px) {} */
//   /* @media (max-width: 675px) {} */
//   /* @media (min-width: 768px) {} */
//   /* @media (max-width: 992px) {} */
//   /* @media (max-width: 1335px) {} */
//   /* @media (max-width: 1710px) {} */

//   /** Editor Form Page -------------------------------------------------*/

//   .editor-form {
//     padding-top: 60px;
//   }

//   .dropzone {
//     width: 100%;
//     height: 30rem;
//     display: flex;
//     color: #8a8a8a;
//     font-size: 18px;
//     justify-content: center;
//     align-items: center;
//     border-radius: 3px;
//     background-color: #eee;
//     will-change: transform;
//     border: 1px solid #eee;
//     font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
//     transition: transform 0.3s;
//     &:hover {
//       cursor: default;
//     }
//   }

//   .dropzone.hover {
//     transform: scale(0.95);
//   }

//   .dropzone input {
//     display: none;
//   }

//   .dropzone svg {
//     fill: #8a8a8a;
//     animation: spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
//   }

//   .preview {
//     width: 10rem;
//   }

//   .preview:hover{
//     opacity: .5;
//   }

//   .progress-bar {
//     height: 1rem;
//     background-color: orangered;
//   }

//   .response_wrap {
//     display: flex;
//     flex-wrap: wrap;
//   }

//   .photos {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     align-items: center;
//   }

//   @keyframes spin { 
//     100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } 
//   }
// `

// export default GlobalStyle;