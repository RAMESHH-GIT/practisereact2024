// import React from 'react';

// const MainContent = () => {
//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-md-4">
//                     <h2>About</h2>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
//                 </div>
//                 <div className="col-md-4">
//                     <h2>Company</h2>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
//                 </div>
//                 <div className="col-md-4">
//                     <h2>Services</h2>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="col-md-8">
//                     <h2>Content</h2>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
//                     <h3>Sub Header</h3>
//                     <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
//                 </div>
//                 <div className="col-md-4">
//                     <h2>Navigation</h2>
//                     <ul>
//                         <li>Home</li>
//                         <li>Product</li>
//                         <li>Company</li>
//                         <li>Contact</li>
//                     </ul>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="col-md-3">
//                     <h2>Gallery</h2>
//                     <img src="https://via.placeholder.com/200x200?text=Gallery+Image" alt="Gallery" />
//                 </div>
//                 <div className="col-md-3">
//                     <h2>Gallery</h2>
//                     <img src="https://via.placeholder.com/200x200?text=Gallery+Image" alt="Gallery" />
//                 </div>
//                 <div className="col-md-3">
//                     <h2>Gallery</h2>
//                     <img src="https://via.placeholder.com/200x200?text=Gallery+Image" alt="Gallery" />
//                 </div>
//                 <div className="col-md-3">
//                     <h2>Gallery</h2>
//                     <img src="https://via.placeholder.com/200x200?text=Gallery+Image" alt="Gallery" />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default MainContent;

import React from 'react';
import textContent from './TextContent';

const MainContent = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h2>{textContent.about.title}</h2>
                    <p>{textContent.about.content}</p>
                </div>
                <div className="col-md-4">
                    <h2>{textContent.company.title}</h2>
                    <p>{textContent.company.content}</p>
                </div>
                <div className="col-md-4">
                    <h2>{textContent.services.title}</h2>
                    <p>{textContent.services.content}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <h2>{textContent.content.title}</h2>
                    <p>{textContent.content.mainContent}</p>
                    <h3>{textContent.content.subHeader}</h3>
                    <p>{textContent.content.subContent}</p>
                </div>
                <div className="col-md-4">
                    <h2>{textContent.gallery.title}</h2>
                    <ul>
                        {textContent.navigation.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <h2>{textContent.gallery.title}</h2>
                    <img src={textContent.gallery.imageUrl} alt="Gallery" />
                </div>
                <div className="col-md-3">
                    <h2>{textContent.gallery.title}</h2>
                    <img src={textContent.gallery.imageUrl} alt="Gallery" />
                </div>
                <div className="col-md-3">
                    <h2>{textContent.gallery.title}</h2>
                    <img src={textContent.gallery.imageUrl} alt="Gallery" />
                </div>
                <div className="col-md-3">
                    <h2>{textContent.gallery.title}</h2>
                    <img src={textContent.gallery.imageUrl} alt="Gallery" />
                </div>
            </div>
        </div>
    );
}

export default MainContent;

