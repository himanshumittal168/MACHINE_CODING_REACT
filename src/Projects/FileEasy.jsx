import './FileEasy.css'
import { useState } from 'react';
function FileEasy({folderData})
{
    const [showChildren, setShowChildren] = useState(false);
    const handleClick = () => {
        setShowChildren(!showChildren);
    };
    return(
        <>
        <div className="container">
            <h1>
                {folderData.type === "folder" ? (showChildren ? "📂" : "📁") : "📄"}
                <span onClick={handleClick}>{folderData.name}</span>
            </h1>
            {showChildren &&
            folderData?.children?.map((childData, index) => {
            return <FileEasy key={index} folderData={childData} />;
            })}
        </div>
        </>
    )
}

export default FileEasy;