import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Toast from './Projects/Toast'
import Rating from './Projects/Rating'
import Otp from './Projects/Otp'
import Image from './Projects/Image'
// import Interview from './Projects/Interview'
import Stepper from './Projects/Stepper'


function App() {
  const [count, setCount] = useState(0)
  const steps = [
    {
      label: "Personal Info",
      content: <div>Personal Information Content</div>,
    },
    {
      label: "Account Info",
      content: <div>Account Info Content</div>,
    },
    {
      label: "Payment",
      content: <div>Payment Content</div>,
    },
    {
      label: "Confirmation",
      content: <div>Confirmation Content</div>,
    },
    {
      label: "Review",
      content: <div>Review Content</div>,
    },
  ];

  const data={
    "name": "File Explorer",
    "type": "folder",
    "children": [
      {
        "name": "node_modules",
        "type": "folder",
        "children": []
      },
      {
        "name": "public",
        "type": "folder",
        "children": [
          {
            "name": "index.html",
            "type": "file"
          },
          {
            "name": "favicon.ico",
            "type": "file"
          },
          {
            "name": "manifest.json",
            "type": "file"
          },
          {
            "name": "robots.txt",
            "type": "file"
          }
        ]
      },
      {
        "name": "src",
        "type": "folder",
        "children": [
          {
            "name": "Components",
            "type": "folder",
            "children": [
              {
                "name": "Header.js",
                "type": "file"
              },
              {
                "name": "Footer.js",
                "type": "file"
              },
              {
                "name": "App.js",
                "type": "file"
              }
            ]
          },
          {
            "name": "App.css",
            "type": "file"
          },
          {
            "name": "App.test.js",
            "type": "file"
          },
          {
            "name": "index.css",
            "type": "file"
          },
          {
            "name": "index.js",
            "type": "file"
          },
          {
            "name": "logo.svg",
            "type": "file"
          },
          {
            "name": "reportWebVitals.js",
            "type": "file"
          },
          {
            "name": "setupTests.js",
            "type": "file"
          }
        ]
      },
      {
        "name": ".gitignore",
        "type": "file"
      },
      {
        "name": "package.json",
        "type": "file"
      },
      {
        "name": "package-lock.json",
        "type": "file"
      },
      {
        "name": "README.md",
        "type": "file"
      }
    ]
  }

  const comment={
    "comments": {
      "1": {
        "id": 1,
        "parentId": null,
        "value": "Hello Folks, How you doing?",
        "children": [2, 3]
      },
      "2": {
        "id": 2,
        "parentId": 1,
        "value": "Doing Great",
        "children": []
      },
      "3": {
        "id": 3,
        "parentId": 1,
        "value": "Kaat rahe hai zindagani",
        "children": [4]
      },
      "4": {
        "id": 4,
        "parentId": 3,
        "value": "What's wrong?",
        "children": [5]
      },
      "5": {
        "id": 5,
        "parentId": 4,
        "value": "Nothing",
        "children": []
      }
    }
  }
  const {cmtdata,deleteComment,addComment}=useComment(comment);
  return (
    <>
      {/* <Toast></Toast> */}
      {/* <Rating sc={10}></Rating> */}
      {/* <Otp></Otp> */}
      {/* <Image></Image> */}
      {/* <Stepper steps={steps}></Stepper> */}
      {/* <FileEasy folderData={data}></FileEasy> */}
      {/* <Grid></Grid> */}
      {/* <MemoryGame></MemoryGame> */}
      {/* <NestedComment comment={cmtdata[1]} allcomment={cmtdata} addComment={addComment} deleteComment={deleteComment}></NestedComment>       */}
      {/* <FileExplorerContextWrapper>
        <FileHard></FileHard>
        {/* FILE_HARD->https://codesandbox.io/p/sandbox/file-explorer-2-74dlgy?file=%2Fsrc%2Fcomponents%2FInput.jsx%3A23%2C5  */}
      {/* </FileExplorerContextWrapper> */} 
      {/* <Snake></Snake> */}
      {/*  https://codesandbox.io/p/sandbox/snake-game-pgyddy?file=%2Fsrc%2FComponents%2FSnakeGame.jsx%3A1%2C1-103%2C1*/}
    </>
  )
}
import FileEasy from './Projects/FileEasy'
import Grid from './Projects/Grid'
import MemoryGame from './Projects/MemoryGame'
import NestedComment from './Projects/NestedComment'
import useComment from './useComment'
import FileHard from './Projects/FileHard'
import FileExplorerContextWrapper from './Projects/context/FileExplorerContext'
import Snake from './Projects/Snake'

export default App
